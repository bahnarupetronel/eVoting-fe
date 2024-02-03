import axios from "@/_api/axios";

class ElectionsService {
  getTypes = async () => {
    return await axios.get(`/api/election/types`);
  };

  publishEvent = async (electionId: number) => {
    return await axios.post(`/api/election/publish`, {
      electionId: electionId,
    });
  };
}

export default new ElectionsService();
