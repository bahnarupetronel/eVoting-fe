"use client";

import { CandidateModel } from "@/_interfaces/candidate.model";
import { CandidateType } from "@/_interfaces/candidateType.model";
import styles from "./voteCard.module.css";
import { Button } from "@mui/material";
import { VoteModel } from "@/_interfaces/vote.model";
import { usePathname } from "next/navigation";
import { useState } from "react";
import useCookies from "@/_hooks/useCookies";
import IsLoadingComponent from "@/_shared/components/isLoading/IsLoadingComponent";
import ModalMultipleCandidates from "../modals/ModalMultipleCandidates";

const VoteCardMultipleCandidates = ({
  candidates,
  electionType,
  hasUserVotedResponse,
  isUserAllowedToVote,
  politicalPartyId,
}: {
  politicalPartyId: string;
  candidates: Array<CandidateModel>;
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
    politicalPartyId: parseInt(politicalPartyId),
    candidateTypeId: electionType.id,
  };

  const politicalPartyName = candidates[0].politicalParty.name;

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

  if (!candidates) {
    return <IsLoadingComponent />;
  }

  return (
    <div className={styles["card-vote"]}>
      <h2>{politicalPartyName}</h2>
      {candidates?.map((candidate) => (
        <h4 key={candidate.id} className={styles["h4-candidate"]}>{candidate.name}</h4>
      ))}
      <Button
        variant="outlined"
        type="button"
        className={`${styles["btn-card"]} ${styles[getButtonClass()]}`}
        onClick={handleOpenModal}
      >
        {getButtonText()}
      </Button>
      <ModalMultipleCandidates
        electionType={electionType}
        politicalPartyName={politicalPartyName}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        vote={vote}
      />
    </div>
  );
};
export default VoteCardMultipleCandidates;
