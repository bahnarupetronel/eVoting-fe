"use client";

import { useState, useEffect } from "react";
import { ElectionModel } from "@/_interfaces/election.model";
import { ElectionCard } from "../ElectionCard";
import { getUpcomingElections } from "./getUpcomingElections";
import styles from "../election.module.css";

const UpcomingElections = () => {
  const [elections, setElections] = useState<Array<ElectionModel>>(null);
  useEffect(() => {
    getUpcomingElections().then((data) => {
      console.log(data.length);
      setElections(data);
    });
  }, []);
  return (
    <main className={styles["container"]}>
      <p>Upcoming voting sessions</p>
      {elections?.length > 0 ? (
        elections.map((election) => (
          <ElectionCard
            election={election}
            key={election.electionId}
          />
        ))
      ) : (
        <div>No upcoming voting sessions</div>
      )}
    </main>
  );
};
export default UpcomingElections;
