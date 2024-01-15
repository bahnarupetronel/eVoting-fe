"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Divider, Button, Box } from "@mui/material";
import { getElectionById } from "@/_services/election/getElectionById";
import { ElectionModel } from "@/_interfaces/election.model";
import { formatDate } from "../utils/formatDate";
import { CandidatesList } from "./CandidatesList";
import { Modal } from "@/_components/modal/Modal";
import { getElectionStatus } from "../utils/getElectionStatus";
import styles from "./election.module.css";
import deleteElection from "@/_services/election/deleteElection";

const Election = () => {
  const pathname = usePathname();
  const [election, setElection] = useState<ElectionModel>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const id: string = pathname.split("/").pop();
  const status =
    getElectionStatus(election?.startDate, election?.endDate) || null;

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handleDeleteEvent = async () => {
    const response = await deleteElection(election?.electionId);
    if (200 <= response.status && response.status < 300) {
      console.log("deleted");
    }
    setIsModalOpen(false);
  };

  useEffect(() => {
    getElectionById(id).then((response) => {
      if (200 <= response.status && response.status < 300)
        setElection(response.data);
    });
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
          election?.type.name
        ) : (
          <>Alegeri {election?.type.name}</>
        )}
      </h4>
      <p className={styles["description"]}>{election.description}</p>
      <p>
        <span>{formatDate(election.startDate)}</span>
        <span>{formatDate(election.endDate)}</span>
      </p>
      <Divider />
      <CandidatesList />
      {!election.published && status !== "Urmeaza" && (
        <p className={styles["info-error"]}>
          Evenimentul s-a terminat sau a inceput inainte de a fi publicat.
          Acesta nu mai poate fi modificat.
        </p>
      )}
      {!election.published && (
        <div className={styles["container-btn"]}>
          <Button
            variant="outlined"
            disabled={status !== "Urmeaza"}
          >
            Editeaza
          </Button>
          <Button
            variant="outlined"
            disabled={status !== "Urmeaza"}
          >
            Publica
          </Button>
          <Button
            variant="outlined"
            color="error"
            onClick={handleOpen}
          >
            Sterge
          </Button>
        </div>
      )}
      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        handleDeleteEvent={handleDeleteEvent}
      />
    </Box>
  );
};
export default Election;
