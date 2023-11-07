"use client";

import styles from "../election.module.css";
import Card from "../Card";
import { useState, useEffect } from "react";
import { getFinishedElections } from "./getFinishedElections.js";

const UpcomingElections = () => {
  const [elections, setElections] = useState(null);
  useEffect(() => {
    getFinishedElections().then((data) => setElections(data));
  }, []);
  return (
    <main className={styles["container"]}>
      <p>Finished voting sessions</p>
      {elections?.map((election) => (
        <Card
          election={election}
          key={election.electionId}
        />
      ))}
    </main>
  );
};
export default UpcomingElections;
