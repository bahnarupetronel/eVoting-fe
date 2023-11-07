import axios from "../../../_api/axios.js";

export const getUpcomingElections = async () => {
  try {
    const response = await axios.get("/election/upcoming");
    return response.data;
  } catch (error) {
    return error;
  }
};

export default getUpcomingElections;
