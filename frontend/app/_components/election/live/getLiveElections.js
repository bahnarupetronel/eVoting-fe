import axios from "../../../_api/axios.js";

export const getLiveElections = async () => {
  try {
    const response = await axios.get("/api/election/live");
    return response.data;
  } catch (error) {
    return error;
  }
};

export default getLiveElections;
