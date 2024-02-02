import axios from "@/_api/axios";

class ElectionsService {
  getTypes = async () => {
    return await axios.get(`/api/election/types`);
  };
}

export default new ElectionsService();
