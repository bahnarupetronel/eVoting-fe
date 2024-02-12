import { CandidateType } from "@/_interfaces/candidateType.model";
import VoteCard from "./VoteCard";
import styles from "./dropdown.module.css";

const DropdownItems = ({
  electionType,
  candidates,
  hasUserVotedResponse,
  isUserAllowedToVote,
}: {
  electionType: CandidateType;
  candidates;
  hasUserVotedResponse: boolean;
  isUserAllowedToVote: boolean;
}) => {
  if (!candidates?.length) {
    return <p>Nu exista nicio optiune inregistrata.</p>;
  }

  return (
    <section className={styles["container-cards"]}>
      {candidates?.map((item) => (
        <VoteCard
          key={item.candidate.id}
          isUserAllowedToVote={isUserAllowedToVote}
          hasUserVotedResponse={hasUserVotedResponse}
          candidate={item.candidate}
          electionType={electionType}
        />
      ))}
    </section>
  );
};
export default DropdownItems;
