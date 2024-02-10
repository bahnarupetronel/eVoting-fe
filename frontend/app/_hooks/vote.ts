import { VoteModel } from "@/_interfaces/vote.model";
import VoteService from "@/_services/vote/VoteService";
import { useMutation } from "@tanstack/react-query";

const useVoteCandidate = () => {
  return useMutation({
    mutationFn: (vote: VoteModel) => {
      return VoteService.voteCandidate(vote);
    },
  });
};

export { useVoteCandidate };
