"use client";

import { useState, useEffect } from "react";
import { getElectionById } from "../../../_services/election/getElectionById";
import { usePathname } from "next/navigation";
import styles from "./election.module.css";
import { ElectionModel } from "../../../_interfaces/election.model";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { formatDate } from "../utils/formatDate";
import { Button } from "@mui/material";
import CandidatesList from "./CandidatesList";

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
    <Box
      sx={{ flexGrow: 1, bgcolor: "background.default", p: 2 }}
      className={styles["container"]}
    >
      <h3 className={styles["title"]}>{election.title}</h3>
      <h4 className={styles["title-secondary"]}>
        {election.type.name === "Referendum" ? (
          election.type.name
        ) : (
          <>Alegeri {election.type.name}</>
        )}
      </h4>
      <p className={styles["description"]}>{election.description}</p>
      <p>
        <span>{formatDate(election.startDate)}</span>
        <span>{formatDate(election.endDate)}</span>
      </p>
      <Divider />
      {!election.published && (
        <div className={styles["container-btn"]}>
          <Button variant="outlined">Editeaza</Button>
          <Button variant="outlined">Publica</Button>
        </div>
      )}
      <CandidatesList />
    </Box>
  );
};
export default Election;
