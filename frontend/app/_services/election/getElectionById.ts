import axios from "@/_api/axios";

export const getElectionById = async (id: string): Promise<any> => {
  try {
    const response = await axios.get(`/api/election/${id}`);
    return response.data;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};

export default getElectionById;
