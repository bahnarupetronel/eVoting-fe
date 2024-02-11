import { ReferendumVoteModel } from "@/_interfaces/referendumVoteModel";
import ReferendumVoteService from "@/_services/vote/ReferendumVoteService";
import { useMutation, useQuery } from "@tanstack/react-query";

const useVoteReferendum = () => {
  return useMutation({
    mutationFn: (vote: ReferendumVoteModel) => {
      return ReferendumVoteService.registerReferendumVote(vote);
    },
  });
};

const useGetNumberOfVotes = (electionId: number) => {
  return useQuery({
    queryKey: [`/api/referendum-vote/results`, electionId],
    queryFn: () => ReferendumVoteService.getNumberOfVotes(electionId),
    staleTime: 1000 * 5,
    retry: 0,
  });
};

export { useVoteReferendum, useGetNumberOfVotes };
