import { ReferendumVoteModel } from "@/_interfaces/referendumVoteModel";
import { VoteModel } from "@/_interfaces/vote.model";
import { VotesRequestModel } from "@/_interfaces/votesRequest.model";
import ReferendumVoteService from "@/_services/vote/ReferendumVoteService";
import VoteService from "@/_services/vote/VoteService";
import { useMutation, useQuery } from "@tanstack/react-query";

const useVoteCandidate = () => {
  return useMutation({
    mutationFn: (vote: VoteModel) => {
      return VoteService.voteCandidate(vote);
    },
  });
};

const useGetNumberOfVotes = (vote: VotesRequestModel, enabled: boolean) => {
  return useQuery({
    queryKey: [
      `/api/vote`,
      vote?.electionId,
      vote?.candidateTypeId,
      vote?.localityId,
    ],
    queryFn: () => VoteService.getNumberOfVotes(vote),
    staleTime: 1000 * 5,
    retry: 0,
    enabled: enabled === true,
  });
};

export { useVoteCandidate, useGetNumberOfVotes };
