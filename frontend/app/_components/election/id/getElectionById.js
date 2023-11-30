import axios from "../../../_api/axios.js";

export const getElectionById = async (id) => {
  try {
    const response = await axios.get(`/api/election/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export default getElectionById;
