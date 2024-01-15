import axios from "@/_api/axios";

export const getElections = async () => {
  try {
    const response = await axios.get("/api/election/published");
    return response;
  } catch (error) {
    return error;
  }
};

export default getElections;
