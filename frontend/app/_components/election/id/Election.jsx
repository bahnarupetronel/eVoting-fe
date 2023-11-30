"use client";

import { useState, useEffect } from "react";
import { getElectionById } from "./getElectionById.js";
import { ElectionCard } from "../ElectionCard.jsx";
import { usePathname } from "next/navigation";
import styles from "./election.module.css";

const Election = () => {
  const pathname = usePathname();
  const [election, setElection] = useState(null);
  const id = pathname.split("/").pop();

  useEffect(() => {
    getElectionById(id).then((data) => setElection(data));
  }, []);
  return (
    <div className={styles["container"]}>
      <ElectionCard
        election={election}
        key={election?.electionId}
      ></ElectionCard>
    </div>
  );
};
export default Election;
