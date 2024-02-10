import axios from "@/_api/axios";
import { VoteModel } from "@/_interfaces/vote.model";

class VoteService {
  voteCandidate = async (vote: VoteModel) => {
    return await axios.post(`/api/vote`, vote);
  };
}

export default new VoteService();
