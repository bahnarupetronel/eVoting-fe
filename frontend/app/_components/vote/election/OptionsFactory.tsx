import SingleCandidateOptions from "./SingleCandidateOptions";
import MultipleCandidatesOptions from "./MultipleCandidatesOptions";

const OptionsFactory = ({
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
  if (electionType.id == 1 || electionType.id == 2 || electionType.id == 6) {
    return (
      <SingleCandidateOptions
        isUserAllowedToVote={isUserAllowedToVote}
        hasUserVotedResponse={hasUserVotedResponse}
        electionType={electionType}
        electionId={electionId}
        type={type}
      />
    );
  }

  return (
    <MultipleCandidatesOptions
      isUserAllowedToVote={isUserAllowedToVote}
      hasUserVotedResponse={hasUserVotedResponse}
      electionType={electionType}
      electionId={electionId}
      type={type}
    />
  );
};
export default OptionsFactory;
