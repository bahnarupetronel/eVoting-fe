import axios from "@/_api/axios";

class CountyService {
  getCounties = async () => {
    return await axios.get("/counties/all");
  };

  getLocalities = async () => {
    return await axios.get("/localities/all");
  };

  getLocalitiesForMap = async () => {
    return await axios.get("/localities/map");
  };

  getCountiesForMap = async () => {
    return await axios.get("/counties/map");
  };

  getLocalityById = async (localityId: number) => {
    return await axios.get(`/localities/${localityId}`);
  };
}

export default new CountyService();
