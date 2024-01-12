import axios from "../../_api/axios";
import { EventCandidate } from "../../_interfaces/eventCandidate.model";

export const getCandidateByEventAndLocality = async (
  typeId: string,
  localityId: number
): Promise<any> => {
  try {
    const response = await axios.get(
      `/api/candidate/type/${typeId}/locality/${localityId}`
    );
    return response;
  } catch (error) {
    return error;
  }
};

export default getCandidateByEventAndLocality;
