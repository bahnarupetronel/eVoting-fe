"use client";

import { useState, useEffect } from "react";
import { getElections } from "./getElections";
import { ElectionCard } from "./ElectionCard";
import styles from "./election.module.css";
import { Election } from "../../_interfaces/election.model";
import getElectionTypes from "./utils/getElectionTypes";

const Elections = () => {
  const [elections, setElections] = useState(null);

  useEffect(() => {
    getElections().then((data) => setElections(data));
  }, []);
  return (
    <div className={styles["container"]}>
      {elections?.length > 0 ? (
        elections.map((election: Election) => (
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
