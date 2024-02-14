"use client";

import { Button } from "@mui/material";
import styles from "./voteCard.module.css";
import { useState } from "react";
import { CandidateModel } from "@/_interfaces/candidate.model";
import { CandidateType } from "@/_interfaces/candidateType.model";
import { useCookies } from "@/_hooks/useCookies";
import { VoteModel } from "@/_interfaces/vote.model";
import { usePathname } from "next/navigation";
import ModalVote from "../modals/ModalVote";
import IsLoadingComponent from "@/_shared/components/isLoading/IsLoadingComponent";

const VoteCardSingleCandidate = ({
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
  const pathname = usePathname();
  const electionId: string = pathname.split("/")[2];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { getCookie } = useCookies();
  const role = getCookie("role");
  const vote: VoteModel = {
    electionId: electionId,
    politicalPartyId: candidate?.politicalParty.id,
    candidateTypeId: candidate?.candidateType.id,
  };

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
    else return "Ai votat";
  };

  if (!candidate) {
    return <IsLoadingComponent />;
  }

  return (
    <div className={styles["card-vote"]}>
      <h2>{candidate?.politicalParty?.name}</h2>
      <h4 className={styles["title-candidate"]}>{candidate?.name}</h4>
      <Button
        variant="outlined"
        type="button"
        className={`${styles["btn-card"]} ${styles[getButtonClass()]}`}
        onClick={handleOpenModal}
      >
        {getButtonText()}
      </Button>
      <ModalVote
        electionType={electionType}
        candidate={candidate}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        vote={vote}
      />
    </div>
  );
};
export default VoteCardSingleCandidate;
