"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Button from "@mui/material/Button";
import { EventCandidate } from "@/_interfaces/eventCandidate.model";
import { registerCandidateToEvent } from "@/_services/candidate/registerCandidateToEvent";
import styles from "./registerCandidates.module.css";
import { deleteCandidateFromEvent } from "@/_services/candidate/deleteCandidateFromEvent";

const getElectionId = (pathname: string, registered: boolean): string => {
  if (registered) return pathname.split("/")[2];
  return pathname.split("/")[3];
};

const RegisterCandidateCard = ({
  candidate,
  index,
  registered = false,
}: {
  candidate: EventCandidate;
  index: number;
  registered?: boolean;
}) => {
  const pathname = usePathname();
  const [toggleButton, setToggleButton] = useState(false);
  const electionId: string = getElectionId(pathname, registered);

  const handleAddCandidate = () => {
    candidate.registered = !candidate.registered;
    setToggleButton((prev) => !prev);
    registerCandidateToEvent({
      politicalPartyId: candidate.politicalPartyId,
      candidateId: candidate.id,
      competingInLocality: candidate.competingInLocality,
      electionId: parseInt(electionId),
    });
  };

  const handleRemoveCandidate = () => {
    candidate.registered = !candidate.registered;
    setToggleButton((prev) => !prev);
    deleteCandidateFromEvent({
      politicalPartyId: candidate.politicalPartyId,
      candidateId: candidate.id,
      competingInLocality: candidate.competingInLocality,
      electionId: parseInt(electionId),
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

      {!registered &&
        (candidate.registered ? (
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
        ))}
    </div>
  );
};
export default RegisterCandidateCard;
