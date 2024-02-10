import axios from "@/_api/axios";

class ReferendumService {
  getReferendumOptions = async () => {
    return await axios.get(`/api/referendum/types`);
  };
}

export default new ReferendumService();
