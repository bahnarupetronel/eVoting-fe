"use client";

import { useState, useEffect } from "react";
import { getElectionById } from "./getElectionById.js";
import Card from "../Card.jsx";
import { usePathname, useRouter } from "next/navigation";
import styles from "./election.module.css";

const Election = () => {
  const router = useRouter();
  const pathname = usePathname();
  const id = pathname.split("/").pop();
  const regex = new RegExp("/^d+$/");
  if (!regex.test(id)) {
    console.log("mismatch");
    // router.push("/not-found");
  }

  const [election, setElection] = useState(null);

  useEffect(() => {
    getElectionById(id).then((data) => setElection(data));
  }, []);
  return (
    <div className={styles["container"]}>
      {election && (
        <Card
          election={election}
          key={election?.electionId}
        ></Card>
      )}
    </div>
  );
};
export default Election;
