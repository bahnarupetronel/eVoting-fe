"use client";

import { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useHasUserVoted } from "@/_hooks/hasUserVoted";
import { CandidateType } from "@/_interfaces/candidateType.model";
import ReferendumOptions from "../referendum/ReferendumOptions";
import styles from "./dropdown.module.css";
import OptionsFactory from "./OptionsFactory";

const DropdownElectionTypes = ({
  types,
  electionId,
  isUserAllowedToVote,
}: {
  types;
  electionId: string;
  isUserAllowedToVote: boolean;
}) => {
  const [indexOpenedDropdown, setIndexOpenedDropdown] = useState(-1);
  const [type, setType] = useState(0);

  const hasUserVoted = {
    electionId: electionId,
    candidateTypeId: type.toString(),
  };

  const { isSuccess: isSuccesUserVoted, data: hasUserVotedResponse } =
    useHasUserVoted(hasUserVoted, type);

  const toggleOpenDropdown = (index) => {
    if (indexOpenedDropdown === index) {
      setIndexOpenedDropdown(-1);
      setType(0);
    } else {
      setIndexOpenedDropdown(index);
      setType(types[index].id);
    }
  };

  useEffect(() => {
    const electionType: CandidateType = types[0];
    if (electionType.name === "Referendum") {
      setType(electionType.id);
    }
  }, []);

  if (types[0].name === "Referendum") {
    return (
      <ReferendumOptions
        hasUserVotedResponse={hasUserVotedResponse?.data}
        isUserAllowedToVote={isUserAllowedToVote}
      />
    );
  }

  return (
    <main className={styles["main"]}>
      {types?.map((electionType, index) => {
        return (
          <div
            key={index}
            className={`${styles["container-dropdown"]} ${
              styles[indexOpenedDropdown === index ? "open" : ""]
            }`}
          >
            <button
              onClick={() => toggleOpenDropdown(index)}
              className={styles["btn-dropdown"]}
            >
              <h3 className={styles["title-dropdown"]}>{electionType.name}</h3>
              {indexOpenedDropdown === index ? (
                <KeyboardArrowUpIcon className={styles["icon"]} />
              ) : (
                <KeyboardArrowDownIcon className={styles["icon"]} />
              )}
            </button>
            {indexOpenedDropdown === index && (
              <OptionsFactory
                isUserAllowedToVote={isUserAllowedToVote}
                hasUserVotedResponse={hasUserVotedResponse?.data}
                electionType={electionType}
                electionId={electionId}
                type={type}
              />
            )}
          </div>
        );
      })}
    </main>
  );
};
export default DropdownElectionTypes;
