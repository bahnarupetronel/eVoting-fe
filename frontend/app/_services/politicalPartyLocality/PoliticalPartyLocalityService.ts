import axios from "@/_api/axios";

class PoliticalPartyLocalityService {
  getPoliticalPartiesByLocalityId = async (localityId: string) => {
    return await axios.get(
      `/api/political-parties-localities?localityId=${localityId}`
    );
  };
}

export default new PoliticalPartyLocalityService();
