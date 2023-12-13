import axios from "../../_api/axios";

export const getCandidateById = async (id: string): Promise<any> => {
  try {
    const response = await axios.get(`/api/candidate/${id}`);
    console.log(response);
    return response.data;
  } catch (error) {
    return error;
  }
};

export default getCandidateById;
