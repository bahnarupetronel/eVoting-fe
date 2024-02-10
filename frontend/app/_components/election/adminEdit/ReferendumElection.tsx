"use client";

import { useState } from "react";
import styles from "./registerCandidates.module.css";
import globalStyles from "@/_shared/stylesheets/global.module.css";
import dayjs from "dayjs";
import SelectType from "../id/SelectType";
import Controls from "./Controls";
import { getElectionStatus } from "../utils/getElectionStatus";
import ReferendumOptions from "../referendum/ReferendumOptions";

const ReferendumElection = ({ election }: { election }) => {
  const year = dayjs(election?.startDate).get("year");

  const options = [{ value: 1, placeholder: "Referendum" }];
  const [type, setType] = useState("1");

  const status =
    getElectionStatus(election?.startDate, election?.endDate) || null;

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
        Legea dezbatuta:{" "}
        <span className={styles["law-text"]}>{election?.lawText}</span>{" "}
      </h3>
      {!election?.published && status !== "Urmeaza" && (
        <p className={styles["info-error"]}>
          Inregistrarile pentru acest eveniment s-au terminat. Lista nu mai
          poate fi modificata.
          <br />
          Evenimentul nu mai poate fi publicat.
        </p>
      )}
      <ReferendumOptions />
    </main>
  );
};
export default ReferendumElection;
