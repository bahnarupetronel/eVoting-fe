"use client";

import styles from "../election.module.css";
import Card from "../Card";
import { useState, useEffect } from "react";
import { getLiveElections } from "./getLiveElections.js";

const Vote = () => {
  const [elections, setElections] = useState(null);
  useEffect(() => {
    getLiveElections().then((data) => setElections(data));
  }, []);
  return (
    <main className={styles["container"]}>
      <p>Ongoing voting sessions</p>
      {elections?.map((election) => (
        <Card
          election={election}
          key={election.electionId}
        />
      ))}
    </main>
  );
};

export default Vote;
