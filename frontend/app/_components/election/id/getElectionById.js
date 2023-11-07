import axios from "../../../_api/axios.js";

export const getElectionById = async (id) => {
  try {
    const response = await axios.get(`/election/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export default getElectionById;
