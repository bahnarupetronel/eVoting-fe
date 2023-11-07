"use client";

import styles from "../election.module.css";
import Card from "../Card";
import { useState, useEffect } from "react";
import { getUpcomingElections } from "./getUpcomingElections.js";

const UpcomingElections = () => {
  const [elections, setElections] = useState(null);
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
          <Card
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
