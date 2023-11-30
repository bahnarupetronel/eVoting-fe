import axios from "../../../_api/axios.js";

export const getFinishedElections = async () => {
  try {
    const response = await axios.get("/api/election/finished");
    return response.data;
  } catch (error) {
    return error;
  }
};

export default getFinishedElections;
