"use client";

import styles from "../election.module.css";
import { ElectionCard } from "../ElectionCard";
import { useState, useEffect } from "react";
import { getFinishedElections } from "@/_services/election/getFinishedElections";

const FinishedElections = () => {
  const [elections, setElections] = useState(null);
  useEffect(() => {
    getFinishedElections().then((response) => {
      if (200 <= response.status && response.status < 300) {
        setElections(response.data);
      }
    });
  }, []);
  return (
    <main className={styles["container"]}>
      <p>Finished voting sessions</p>
      {elections?.map((election) => (
        <ElectionCard
          election={election}
          key={election.electionId}
        />
      ))}
    </main>
  );
};
export default FinishedElections;
