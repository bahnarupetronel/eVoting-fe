"use client";

import "react-notifications/lib/notifications.css";
import { NotificationManager } from "react-notifications";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Button from "@mui/material/Button";
import { EventCandidate } from "@/_interfaces/eventCandidate.model";
import {
  useDeleteCandidateFromEvent,
  useRegisterCandidateToEvent,
} from "@/_hooks/electionCandidate";
import styles from "./registerCandidates.module.css";

const RegisterCandidateCard = ({
  candidate,
  index,
}: {
  candidate: EventCandidate;
  index: number;
}) => {
  const mutationAdd = useRegisterCandidateToEvent();
  const mutationRemove = useDeleteCandidateFromEvent();
  const pathname = usePathname();
  const [toggleButton, setToggleButton] = useState(candidate?.registered);
  const electionId: string = pathname.split("/")[3];
  const createSubmitData = () => {
    return {
      politicalPartyId: candidate.politicalPartyId,
      candidateId: candidate.id,
      competingInLocality: candidate.competingInLocality,
      electionId: parseInt(electionId),
    };
  };

  const handleAddCandidate = () => {
    const data = createSubmitData();
    mutationAdd.mutate(data, {
      onSuccess: () => {
        candidate.registered = !candidate.registered;
        setToggleButton((prev) => !prev);
        NotificationManager.success("Candidatul a fost adaugat.", "", 2000);
      },
      onError: () => {
        NotificationManager.error(
          "Candidatul nu a fost adaugat",
          "Eroare.",
          2000
        );
      },
    });
  };

  const handleRemoveCandidate = () => {
    const data = createSubmitData();
    mutationRemove.mutate(data, {
      onSuccess: () => {
        candidate.registered = !candidate.registered;
        setToggleButton((prev) => !prev);
        NotificationManager.success("Candidatul a fost sters.", "", 2000);
      },
      onError: () => {
        NotificationManager.error(
          "Candidatul nu a fost sters.",
          "Eroare.",
          2000
        );
      },
    });
  };

  return (
    <div className={styles["card"]}>
      <h2 className={styles["index"]}>{index + 1}</h2>
      <div>
        <Link
          href={`/candidate/${candidate?.id}`}
          target="_blank"
          className={styles["link"]}
        >
          <h4 className={styles["name"]}>{candidate?.name}</h4>
        </Link>
        <p className={styles["political-party"]}>{candidate?.politicalParty}</p>
      </div>

      {candidate?.registered ? (
        <Button
          variant="outlined"
          color="error"
          className={styles["btn"]}
          onClick={handleRemoveCandidate}
        >
          Sterge
        </Button>
      ) : (
        <Button
          variant="outlined"
          className={styles["btn"]}
          onClick={handleAddCandidate}
        >
          Adauga
        </Button>
      )}
    </div>
  );
};
export default RegisterCandidateCard;
