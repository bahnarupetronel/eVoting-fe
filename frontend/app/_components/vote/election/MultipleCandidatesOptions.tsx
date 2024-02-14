import { useGetRegisteredMultipleCandidatesPerParty } from "@/_hooks/electionCandidate";
import VoteCardMultipleCandidates from "../card/VoteCardMultipleCandidates";
import styles from '../card/voteCard.module.css'

const MultipleCandidatesOptions = ({
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
  } = useGetRegisteredMultipleCandidatesPerParty(electionId, type);

  if (isLoading) return <p>Se incarca...</p>;
  if(isSuccess && Object.keys(candidates?.data).length === 0 ) {
    return <p>Nu exista candidate inregistrati...</p>;
  }

  return (
    <div className = {styles["container-cards"]}>
      {isSuccess &&
        Object.keys(candidates?.data).map((key) => (
          <VoteCardMultipleCandidates
            key={key}
            politicalPartyId={key}
            candidates={candidates?.data[key]}
            electionType={electionType}
            hasUserVotedResponse={hasUserVotedResponse}
            isUserAllowedToVote={isUserAllowedToVote}
          />
        ))}
    </div>
  );
};
export default MultipleCandidatesOptions;
