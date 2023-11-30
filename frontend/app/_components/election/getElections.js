import axios from "../../_api/axios.js";

export const getElections = async () => {
  try {
    const response = await axios.get("/api/election");
    return response.data;
  } catch (error) {
    return error;
  }
};

export default getElections;
