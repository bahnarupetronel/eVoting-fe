"use client";

import "react-notifications/lib/notifications.css";
import { NotificationManager } from "react-notifications";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { Divider, Button, Box } from "@mui/material";
import { getElectionById } from "@/_services/election/getElectionById";
import { ElectionModel } from "@/_interfaces/election.model";
import { formatDate } from "../utils/formatDate";
import { RegisteredCandidates } from "./RegisteredCandidates";
import { Modal } from "@/_components/modal/Modal";
import FilterLocalities from "@/_shared/components/FilterLocalities";
import { getElectionStatus } from "../utils/getElectionStatus";
import deleteElection from "@/_services/election/deleteElection";
import { locality } from "@/_interfaces/locality.model";
import styles from "./election.module.css";
import globalStyles from "@/_shared/stylesheets/App.module.css";
import dayjs from "dayjs";

const Election = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [election, setElection] = useState<ElectionModel>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasCandidates, setHasCandidates] = useState(false);
  const [locality, setLocality] = useState<locality | null>(null);
  const id: string = pathname.split("/").pop();
  const status =
    getElectionStatus(election?.startDate, election?.endDate) || null;

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const year = dayjs(election?.startDate).get("year");

  const handleDeleteEvent = async () => {
    const response = await deleteElection(election?.electionId);
    if (200 <= response.status && response.status < 300) {
      NotificationManager.success(
        "Evenimentul a fost sters cu succes. Sunteti redirectat catre pagina de evenimenete.",
        "Eveniment sters.",
        5000
      );
      router.push("/admin/election/unpublished");
    } else {
      NotificationManager.error(
        "Evenimentul nu a putut fi sters. Incercati din nou mai tarziu!",
        "Eveniment nu a putut fi sters.",
        5000
      );
    }
    setIsModalOpen(false);
  };

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
