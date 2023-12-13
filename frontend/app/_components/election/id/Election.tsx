"use client";

import { useState, useEffect } from "react";
import { getElectionById } from "./getElectionById";
import { usePathname } from "next/navigation";
import styles from "./election.module.css";
import { ElectionModel } from "../../../_interfaces/election.model";
import { Menu } from "./Menu";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { formatDate } from "../utils/formatDate";

const Election = () => {
  const pathname = usePathname();
  const [election, setElection] = useState<ElectionModel>(null);
  const id: string = pathname.split("/").pop();

  useEffect(() => {
    getElectionById(id).then((data) => setElection(data));
  }, []);
  if (election === null) {
    return <div>Loading</div>;
  }
  return (
    <div className={styles["container"]}>
      <Menu />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 2 }}
      >
        <h3 className={styles["title"]}>{election.title}</h3>
        <p>{election.description}</p>
        <p>
          <span>{formatDate(election.startDate)}</span>
          <span>{formatDate(election.endDate)}</span>
        </p>
        <Divider />
      </Box>
    </div>
  );
};
export default Election;
