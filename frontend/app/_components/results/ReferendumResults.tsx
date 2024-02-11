import { useGetNumberOfVotes } from "@/_hooks/voteReferendum";
import IsLoadingComponent from "@/_shared/components/isLoading/IsLoadingComponent";
import ResultsReferendumCard from "./ResultsReferendumCard";
import { ReferendumResponseModel } from "@/_interfaces/ReferendumResponse.model";

const ReferendumResults = ({
  election,
}: {
  election: ReferendumResponseModel;
}) => {
  const { isSuccess, isLoading, isError, data } = useGetNumberOfVotes(
    election?.electionId
  );

  if (isLoading) {
    return <IsLoadingComponent />;
  }

  return (
    <div>
      {data?.data.map((vote, index) => (
        <ResultsReferendumCard
          vote={vote}
          index={index}
          key={index}
        />
      ))}
    </div>
  );
};
export default ReferendumResults;
