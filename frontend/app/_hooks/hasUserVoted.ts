import { useQuery } from "@tanstack/react-query";
import { HasUserVotedModel } from "../_interfaces/hasUserVoted.model";
import HasUserVotedService from "@/_services/hasUserVoted/HasUserVotedService";

const useHasUserVoted = (hasUserVoted: HasUserVotedModel, type) => {
  return useQuery({
    queryKey: [
      `/api/has-user-voted?electionId=${hasUserVoted.electionId}&candidateTypeId=${hasUserVoted.candidateTypeId}`,
    ],
    queryFn: () => HasUserVotedService.hasUserVoted(hasUserVoted),
    retry: 0,
    staleTime: 0,
    enabled: type > 0,
  });
};

const useGetUserVotes = () => {
  return useQuery({
    queryKey: [`user-votes`],
    queryFn: () => HasUserVotedService.getUserVotes(),
    retry: 0,
  });
};

export { useHasUserVoted, useGetUserVotes };
