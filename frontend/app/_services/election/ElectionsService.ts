import axios from "@/_api/axios";

class ElectionsService {
  getTypes = async () => {
    return await axios.get(`/api/election/types`);
  };

  getLiveElections = async () => {
    return await axios.get(`/api/election/live`);
  };

  getUpcomingElections = async () => {
    return await axios.get(`/api/election/upcoming`);
  };

  publishEvent = async (electionId: number) => {
    return await axios.post(`/api/election/publish`, {
      electionId: electionId,
    });
  };

  getElectionById = async (id: string): Promise<any> => {
    return await axios.get(`/api/election/${id}`);
  };

  getElectionAndTypes = async (id: string): Promise<any> => {
    return await axios.get(`/api/election/election-and-types?election=${id}`);
  };
}

export default new ElectionsService();
