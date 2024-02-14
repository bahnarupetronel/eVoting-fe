"use client";

import { useState } from "react";
import { Button } from "@mui/material";
import { usePathname } from "next/navigation";
import useCookies from "@/_hooks/useCookies";
import ModalReferendumVote from "../modals/ModalReferendumVote";
import { ReferendumVoteModel } from "@/_interfaces/referendumVoteModel";
import { ReferendumOptionModel } from "@/_interfaces/referendumOption.model";
import styles from "./voteCardReferendum.module.css";

const VoteCardReferendum = ({
  option,
  index,
  hasUserVotedResponse,
  isUserAllowedToVote,
}: {
  option: ReferendumOptionModel;
  index: number;
  hasUserVotedResponse: boolean;
  isUserAllowedToVote: boolean;
}) => {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const electionId: string = pathname.split("/")[2];
  const { getCookie } = useCookies();
  const role = getCookie("role");

  const getButtonClass = () => {
    if (hasUserVotedResponse || role === "admin" || !isUserAllowedToVote) {
      return "disabled";
    }
    return "";
  };

  const getButtonText = () => {
    if (!hasUserVotedResponse && isUserAllowedToVote) return "Voteaza";
    if (role === "admin") return "Nu poti vota (cont admin)";
    else if (!isUserAllowedToVote) return "Nu poti vota";
    else return "Ai votat";
  };

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const vote: ReferendumVoteModel = {
    electionId: electionId,
    optionId: option.optionId,
    candidateTypeId: 9,
  };

  return (
    <div className={styles["option"]}>
      <h1 className={styles["option-title"]}>{option.optionName}</h1>

      <Button
        type="button"
        variant="outlined"
        className={`${styles["btn-card"]} ${styles[getButtonClass()]}`}
        onClick={handleClick}
      >
        {getButtonText()}
      </Button>
      <ModalReferendumVote
        option={option}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        vote={vote}
      />
    </div>
  );
};
export default VoteCardReferendum;
