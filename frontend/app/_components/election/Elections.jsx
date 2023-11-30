"use client";

import { useState, useEffect } from "react";
import { getElections } from "./getElections.js";
import { ElectionCard } from "./ElectionCard.jsx";
import styles from "./election.module.css";

const Elections = () => {
  const [elections, setElections] = useState(null);

  useEffect(() => {
    getElections().then((data) => setElections(data));
  }, []);
  return (
    <div className={styles["container"]}>
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
    </div>
  );
};
export default Elections;
