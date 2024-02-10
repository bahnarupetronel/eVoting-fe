"use client";

import { useEffect, useState } from "react";
import styles from "./registerCandidates.module.css";
import globalStyles from "@/_shared/stylesheets/global.module.css";
import dayjs from "dayjs";
import { createOptions } from "@/_shared/utils/createOptions";
import { useGetCandidateTypesByElection } from "@/_hooks/candidate";
import SelectType from "../id/SelectType";
import Controls from "./Controls";
import { getElectionStatus } from "../utils/getElectionStatus";
import ElectionCandidates from "./ElectionCandidates";

const Election = ({ election }: { election }) => {
  const year = dayjs(election?.startDate).get("year");
  const { isSuccess, data } = useGetCandidateTypesByElection(
    election?.type?.id,
    election
  );
  const options = createOptions(isSuccess, data?.data);
  const [type, setType] = useState("");

  const status =
    getElectionStatus(election?.startDate, election?.endDate) || null;

  useEffect(() => {
    if (options.length > 0) setType(options[0].value);
  }, [options.length]);

  return (
    <main className={globalStyles["container"]}>
      <header className={styles["header"]}>
        <h2 className={styles["title"]}>
          {"Alegeri " + election.type.name + " " + year}
        </h2>
        <Controls
          election={election}
          status={status}
        />
      </header>
      <section>
        <SelectType
          type={type}
          setType={setType}
          options={options}
        />
      </section>
      <p>{election?.description}</p>
      {!election?.published && status !== "Urmeaza" && (
        <p className={styles["info-error"]}>
          Inregistrarile pentru acest eveniment s-au terminat. Lista nu mai
          poate fi modificata.
          <br />
          Evenimentul nu mai poate fi publicat.
        </p>
      )}
      {!election?.published && status == "Urmeaza" && (
        <ElectionCandidates
          election={election}
          type={type}
        />
      )}
    </main>
  );
};
export default Election;
