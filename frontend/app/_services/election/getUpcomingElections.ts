import axios from "@/_api/axios";

export const getUpcomingElections = async () => {
  try {
    const response = await axios.get("/api/election/upcoming");
    return response;
  } catch (error) {
    return error;
  }
};

export default getUpcomingElections;
