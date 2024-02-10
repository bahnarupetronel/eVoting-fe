"use client";

import { useState } from "react";
import styles from "./dropdown.module.css";
import DropdownItems from "./DropdownItems";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useGetRegisteredCandidatesForUser } from "@/_hooks/electionCandidate";
import { useHasUserVoted } from "@/_hooks/hasUserVoted";
const DropdownTypes = ({
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

  const { isSuccess, data: candidates } = useGetRegisteredCandidatesForUser(
    electionId,
    type
  );

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
              <DropdownItems
                isUserAllowedToVote={isUserAllowedToVote}
                hasUserVotedResponse={hasUserVotedResponse?.data}
                electionType={electionType}
                candidates={candidates?.data}
              />
            )}
          </div>
        );
      })}
    </main>
  );
};
export default DropdownTypes;
