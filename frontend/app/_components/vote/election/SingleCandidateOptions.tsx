import { useGetRegisteredSingleCandidatesPerParty } from "@/_hooks/electionCandidate";
import VoteCardSingleCandidate from "../card/VoteCardSingleCandidate";
import styles from '../card/voteCard.module.css'

const SingleCandidateOptions = ({
  isUserAllowedToVote,
  hasUserVotedResponse,
  electionType,
  electionId,
  type,
}: {
  isUserAllowedToVote;
  hasUserVotedResponse;
  electionType;
  electionId;
  type;
}) => {
  const {
    isSuccess,
    isLoading,
    data: candidates,
  } = useGetRegisteredSingleCandidatesPerParty(electionId, type);
  if (isLoading) return <p>Se incarca...</p>;

  if(isSuccess && candidates?.data.length === 0 ) {
    return <p>Nu exista candidate inregistrati...</p>;
  }
  return (
    <div className = {styles["container-cards"]}>
      {isSuccess &&
        candidates?.data?.map((candidate, index) => (
          <VoteCardSingleCandidate
            key={index}
            candidate={candidate}
            electionType={electionType}
            hasUserVotedResponse={hasUserVotedResponse}
            isUserAllowedToVote={isUserAllowedToVote}
          />
        ))}
    </div>
  );
};
export default SingleCandidateOptions;
