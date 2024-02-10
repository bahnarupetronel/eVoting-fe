import axios from "@/_api/axios";
import { HasUserVotedModel } from "@/_interfaces/hasUserVoted.model";

class HasUserVotedService {
  hasUserVoted = async (hasUserVoted: HasUserVotedModel) => {
    return await axios.get(
      `/api/user-voted?electionId=${hasUserVoted.electionId}&candidateTypeId=${hasUserVoted.candidateTypeId}`
    );
  };
}

export default new HasUserVotedService();
