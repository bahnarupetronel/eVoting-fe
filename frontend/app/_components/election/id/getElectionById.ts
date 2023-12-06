import axios from "../../../_api/axios";

export const getElectionById = async (id: string): Promise<any> => {
  try {
    const response = await axios.get(`/api/election/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export default getElectionById;
