"use client";

import { useEffect, useState } from "react";
import styles from "./referendum.module.css";
import globalStyles from "@/_shared/stylesheets/global.module.css";
import electionStyles from "./election.module.css";
import dayjs from "dayjs";
import SelectType from "../id/SelectType";
import { getElectionStatus } from "../utils/getElectionStatus";
import { useGetCandidateTypesByElection } from "@/_hooks/candidate";
import { createOptions } from "@/_shared/utils/createOptions";
import { formatDate } from "../utils/formatDate";
import ResultsFactory from "@/_components/results/ResultsFactory";
import { ReferendumResponseModel } from "@/_interfaces/ReferendumResponse.model";

const Referendum = ({ election }: { election: ReferendumResponseModel }) => {
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
    <main className={`${globalStyles["container"]}`}>
      <header className={styles["header"]}>
        <h2 className={styles["title"]}>{election.type.name + " " + year}</h2>
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
        Legea dezbatuta:{" "}
        <span className={styles["law-text"]}>{election?.lawText}</span>{" "}
      </h3>
      <div className={electionStyles["dates"]}>
        <p className={electionStyles["date"]}>
          <span className={electionStyles["span"]}>Incepe:</span>
          <span>{formatDate(election.startDate)}</span>
        </p>

        <p className={electionStyles["date"]}>
          <span className={electionStyles["span"]}>Se termina:</span>
          <span>{formatDate(election.endDate)}</span>
        </p>
      </div>
      {status !== "Urmeaza" && (
        <ResultsFactory
          candidateTypeId={type}
          election={election}
          status={status}
        />
      )}
    </main>
  );
};
export default Referendum;
