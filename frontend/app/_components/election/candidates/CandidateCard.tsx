"use client";

import Button from "@mui/material/Button";
import { EventCandidate } from "../../../_interfaces/eventCandidate.model";
import styles from "./electionCandidates.module.css";
import { useState } from "react";
import registerCandidateToEvent from "../../../_services/candidate/registerCandidateToEvent";
import { usePathname } from "next/navigation";
import deleteCandidateFromEvent from "../../../_services/candidate/deleteCandidateFromEvent";

const CandidateCard = ({
  candidate,
  index,
}: {
  candidate: EventCandidate;
  index: number;
}) => {
  const pathname = usePathname();
  const electionId: string = pathname.split("/")[2];
  const [toggleButton, setToggleButton] = useState(false);

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
        <h4 className={styles["name"]}>{candidate.name}</h4>
        <p className={styles["political-party"]}>{candidate.politicalParty}</p>
      </div>

      {candidate.registered ? (
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
export default CandidateCard;
