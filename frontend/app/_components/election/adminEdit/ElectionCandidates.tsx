"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ElectionCandidatesFactory from "./ElectionCandidatesFactory";
import styles from "./registerCandidates.module.css";
import globalStyles from "@/_shared/stylesheets/global.module.css";
import dayjs from "dayjs";
import { createOptions } from "@/_shared/utils/createOptions";
import { useGetCandidateTypesByElection } from "@/_hooks/candidate";
import SelectType from "../id/SelectType";
import { useGetElectionById } from "@/_hooks/elections";
import IsLoadingComponent from "@/_shared/components/isLoading/IsLoadingComponent";
import Controls from "./Controls";
import { getElectionStatus } from "../utils/getElectionStatus";

const ElectionCandidates = () => {
  const pathname = usePathname();
  const id: string = pathname.split("/")[3];
  const {
    isSuccess: isElectionFetched,
    isError,
    isLoading,
    data: election,
  } = useGetElectionById(id);
  const year = dayjs(election?.startDate).get("year");
  const { isSuccess, data } = useGetCandidateTypesByElection(
    election?.data.type.id,
    election?.data
  );
  const options = createOptions(isSuccess, data?.data);
  const [type, setType] = useState("");

  const status =
    getElectionStatus(election?.data.startDate, election?.data.endDate) || null;

  useEffect(() => {
    if (options.length > 0) setType(options[0].value);
  }, [options.length]);

  if (isLoading) {
    return (
      <main className={globalStyles["container"]}>
        <IsLoadingComponent />
      </main>
    );
  }

  if (isError) {
    return <main className={globalStyles["container"]}>Eroare...</main>;
  }

  return (
    <main className={globalStyles["container"]}>
      <header className={styles["header"]}>
        <h2 className={styles["title"]}>
          {" "}
          {election.data.type.name === "Referendum" ? (
            election.data.type.name
          ) : (
            <>Alegeri {election.data.type.name}</>
          )}
          {" " + year}
        </h2>
        <Controls
          election={election.data}
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
      <ElectionCandidatesFactory
        election={election.data}
        type={type}
      />
      {!election.data?.published && status !== "Urmeaza" && (
        <p className={styles["info-error"]}>
          Inregistrarile pentru acest eveniment s-au terminat. Lista nu mai
          poate fi modificata.
          <br />
          Evenimentul nu mai poate fi publicat.
        </p>
      )}
    </main>
  );
};
export default ElectionCandidates;
