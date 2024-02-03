"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { Divider, Button, Box } from "@mui/material";
import { getElectionById } from "@/_services/election/getElectionById";
import { ElectionModel } from "@/_interfaces/election.model";
import { formatDate } from "../utils/formatDate";
import { RegisteredCandidates } from "./RegisteredCandidates";
import { DeleteEventModal } from "@/_components/modal/DeleteEventModal";
import FilterLocalities from "@/_shared/components/FilterLocalities";
import { getElectionStatus } from "../utils/getElectionStatus";
import { locality } from "@/_interfaces/locality.model";
import styles from "./election.module.css";
import globalStyles from "@/_shared/stylesheets/App.module.css";
import dayjs from "dayjs";
import { PublishEventModal } from "@/_components/modal/PublishEventModal";

const Election = () => {
  const pathname = usePathname();
  const [election, setElection] = useState<ElectionModel>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPublishModalOpen, setIsPublishModalOpen] = useState(false);
  const [hasCandidates, setHasCandidates] = useState(false);
  const [locality, setLocality] = useState<locality | null>(null);
  const id: string = pathname.split("/").pop();
  const status =
    getElectionStatus(election?.startDate, election?.endDate) || null;

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handlePublishModalOpen = () => {
    setIsPublishModalOpen(true);
  };

  const year = dayjs(election?.startDate).get("year");

  const handleLocalityChange = (locality: locality) => {
    setLocality(locality);
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
      className={globalStyles["container"]}
    >
      <h2 className={styles["title"]}>
        {election.type.name === "Referendum" ? (
          election?.type.name
        ) : (
          <>Alegeri {election?.type.name}</>
        )}
        {" " + year}
      </h2>
      <p className={styles["description"]}>{election.description}</p>
      <p>
        <span>{formatDate(election.startDate)}</span>
        <span>{formatDate(election.endDate)}</span>
      </p>
      <Divider />

      {hasCandidates && (
        <>
          <p>Vezi candidatii din localitatea: </p>
          <FilterLocalities handleLocalityChange={handleLocalityChange} />
        </>
      )}

      {!hasCandidates && <p>Nu exista candidati inregistrati. </p>}
      <RegisteredCandidates
        setHasCandidates={setHasCandidates}
        locality={locality}
        electionId={id}
      />
      {!election.published && status !== "Urmeaza" && (
        <p className={styles["info-error"]}>
          Inregistrarile pentru acest eveniment s-au terminat. Lista nu mai
          poate fi modificata.
          <br />
          Evenimentul nu mai poate fi publicat.
        </p>
      )}
      {!election.published && (
        <div className={styles["container-btn"]}>
          <Button
            type="button"
            variant="outlined"
            disabled={status !== "Urmeaza"}
          >
            <Link
              href={`/admin/${pathname}`}
              target="_blank"
              className={styles["link"]}
            >
              Adauga candidati
            </Link>
          </Button>
          <Button
            onClick={handlePublishModalOpen}
            type="button"
            variant="outlined"
            disabled={status !== "Urmeaza"}
          >
            Publica
          </Button>
          <Button
            type="button"
            variant="outlined"
            color="error"
            onClick={handleOpen}
          >
            Sterge
          </Button>
        </div>
      )}
      <DeleteEventModal
        election={election}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <PublishEventModal
        election={election}
        isModalOpen={isPublishModalOpen}
        setIsModalOpen={setIsPublishModalOpen}
      />
    </Box>
  );
};
export default Election;
