import axios from "@/_api/axios";
import { VoteModel } from "@/_interfaces/vote.model";
import { VotesRequestModel } from "@/_interfaces/votesRequest.model";

class VoteService {
  voteCandidate = async (vote: VoteModel) => {
    return await axios.post(`/api/vote`, vote);
  };

  getNumberOfVotes = async (vote: VotesRequestModel) => {
    return await axios.get(
      `/api/vote?electionId=${vote.electionId}&candidateTypeId=${vote.candidateTypeId}&localityId=${vote.localityId}`
    );
  };
}

export default new VoteService();
