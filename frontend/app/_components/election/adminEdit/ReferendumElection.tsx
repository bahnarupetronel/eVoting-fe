"use client";

import { useEffect, useState } from "react";
import styles from "./registerCandidates.module.css";
import globalStyles from "@/_shared/stylesheets/global.module.css";
import dayjs from "dayjs";
import SelectType from "../id/SelectType";
import Controls from "./Controls";
import { getElectionStatus } from "../utils/getElectionStatus";
import ReferendumOptions from "../referendum/ReferendumOptions";
import { useGetCandidateTypesByElection } from "@/_hooks/candidate";
import { createOptions } from "@/_shared/utils/createOptions";

const ReferendumElection = ({ election }: { election }) => {
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
    <main
      className={`${globalStyles["container"]} ${styles["container-margin"]}`}
    >
      <header className={styles["header"]}>
        <h2 className={styles["title"]}>{election.type.name + " " + year}</h2>
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
      <h3>
        Legea curenta:{" "}
        <span className={styles["law-text"]}>{election?.lawText}</span>{" "}
      </h3>
      <h3>
        Legea propusa:{" "}
        <span className={styles["law-text"]}>{election?.proposedLawText}</span>{" "}
      </h3>
      {!election?.published && status !== "Urmeaza" && (
        <p className={styles["info-error"]}>
          Evenimentul nu mai poate fi publicat.
        </p>
      )}
      <ReferendumOptions
        hasUserVotedResponse={false}
        isUserAllowedToVote={false}
      />
    </main>
  );
};
export default ReferendumElection;
