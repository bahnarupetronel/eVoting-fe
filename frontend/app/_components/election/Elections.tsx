"use client";

import { useState, useEffect } from "react";
import { getElections } from "./getElections";
import { ElectionCard } from "./ElectionCard";
import styles from "./election.module.css";
import { ElectionModel } from "../../_interfaces/election.model";

const Elections = () => {
  const [elections, setElections] = useState<Array<ElectionModel>>(null);

  useEffect(() => {
    getElections().then((data) => setElections(data));
  }, []);
  return (
    <div className={styles["container"]}>
      {elections?.length > 0 ? (
        elections.map((election: ElectionModel) => (
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
