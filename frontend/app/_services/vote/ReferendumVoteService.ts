import axios from "@/_api/axios";
import { ReferendumVoteModel } from "@/_interfaces/referendumVoteModel";

class ReferendumVoteService {
  registerReferendumVote = async (vote: ReferendumVoteModel) => {
    return await axios.post(`/api/referendum-vote`, vote);
  };

  getNumberOfVotes = async (electionId: number) => {
    return await axios.get(
      `/api/referendum-vote/results?electionId=${electionId}`
    );
  };
}

export default new ReferendumVoteService();
