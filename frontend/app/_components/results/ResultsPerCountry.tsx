"use client";

import { useGetNumberOfVotes } from "@/_hooks/vote";
import { VotesRequestModel } from "@/_interfaces/votesRequest.model";
import ResultsCard from "./ResultsCard";
import IsLoadingComponent from "@/_shared/components/isLoading/IsLoadingComponent";

const ResultsPerCountry = ({
  candidateTypeId,
  election,
}: {
  candidateTypeId: string;
  election;
}) => {
  const votesRequest: VotesRequestModel = {
    electionId: election.electionId,
    candidateTypeId: parseInt(candidateTypeId) || 0,
    localityId: 0,
  };
  const { isSuccess, isError, isLoading, data } = useGetNumberOfVotes(
    votesRequest,
    true
  );

  if (isLoading) return <IsLoadingComponent />;

  return (
    <div>
      {data?.data.length === 0 && (
        <p>Nu am gasit voturi inregistrate pentru acest eveniment.</p>
      )}
      {data?.data.map((vote, index) => (
        <ResultsCard
          key={index}
          vote={vote}
          index={index}
        />
      ))}
    </div>
  );
};
export default ResultsPerCountry;
