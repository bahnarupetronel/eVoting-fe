import axios from "../../_api/axios";

export const getCandidateByName = async (name: string): Promise<any> => {
  try {
    const response = await axios.get(`/api/candidate/${name}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export default getCandidateByName;
