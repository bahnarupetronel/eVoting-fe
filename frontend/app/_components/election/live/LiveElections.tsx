"use client";

import { useState, useEffect } from "react";
import { getLiveElections } from "@/_services/election/getLiveElections";
import { ElectionCard } from "../ElectionCard";
import styles from "../election.module.css";

const Vote = () => {
  const [elections, setElections] = useState(null);
  useEffect(() => {
    getLiveElections().then((data) => setElections(data));
  }, []);
  return (
    <main className={styles["container"]}>
      <p>Ongoing voting sessions</p>
      {elections?.length > 0 ? (
        elections.map((election) => (
          <ElectionCard
            election={election}
            key={election.electionId}
          />
        ))
      ) : (
        <div>No elections</div>
      )}
    </main>
  );
};

export default Vote;
