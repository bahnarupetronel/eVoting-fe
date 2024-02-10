"use client";

import { Button } from "@mui/material";
import styles from "./voteCard.module.css";
import { useState } from "react";
import ConfirmSelectionModal from "./ConfirmSelectionModal";
import { CandidateModel } from "@/_interfaces/candidate.model";
import { CandidateType } from "@/_interfaces/candidateType.model";
import { useCookies } from "@/_hooks/useCookies";

const VoteCard = ({
  candidate,
  electionType,
  hasUserVotedResponse,
  isUserAllowedToVote,
}: {
  candidate: CandidateModel;
  electionType: CandidateType;
  hasUserVotedResponse: boolean;
  isUserAllowedToVote: boolean;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { getCookie } = useCookies();
  const role = getCookie("role");

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const getButtonClass = () => {
    if (hasUserVotedResponse || role === "admin" || !isUserAllowedToVote)
      return "disabled";
    return "";
  };

  const getButtonText = () => {
    if (!hasUserVotedResponse && isUserAllowedToVote) return "Voteaza";
    if (role === "admin") return "Nu poti vota (cont admin)";
    else if (!isUserAllowedToVote) return "Nu poti vota";
  };

  return (
    <div className={styles["card-vote"]}>
      <h2 className={styles["title-candidate"]}>{candidate?.name}</h2>
      <h4>{candidate?.politicalParty?.name}</h4>
      <Button
        variant="outlined"
        type="button"
        className={`${styles["btn-card"]} ${styles[getButtonClass()]}`}
        onClick={handleOpenModal}
      >
        {getButtonText()}
      </Button>
      <ConfirmSelectionModal
        electionType={electionType}
        candidate={candidate}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
};
export default VoteCard;
