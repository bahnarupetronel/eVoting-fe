import axios from "@/_api/axios";
import { HasUserVotedModel } from "@/_interfaces/hasUserVoted.model";

class HasUserVotedService {
  hasUserVoted = async (hasUserVoted: HasUserVotedModel) => {
    return await axios.get(
      `/api/user-voted?electionId=${hasUserVoted.electionId}&candidateTypeId=${hasUserVoted.candidateTypeId}`
    );
  };

  getUserVotes = async () => {
    return await axios.get(`/api/user-voted/votes`);
  };
}

export default new HasUserVotedService();
