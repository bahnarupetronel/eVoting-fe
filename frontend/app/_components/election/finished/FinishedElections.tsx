"use client";

import styles from "../election.module.css";
import { ElectionCard } from "../ElectionCard";
import { useState, useEffect } from "react";
import { getFinishedElections } from "../../../_services/election/getFinishedElections";

const UpcomingElections = () => {
  const [elections, setElections] = useState(null);
  useEffect(() => {
    getFinishedElections().then((data) => setElections(data));
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
export default UpcomingElections;
