import axios from "@/_api/axios";

export const getRegisteredCandidatesLocality = async (
  electionId: string,
  localityId: number
): Promise<any> => {
  try {
    const response = await axios.get(
      `/api/election-candidate?election=${electionId}&locality=${localityId}`
    );
    return response;
  } catch (error) {
    return error;
  }
};

export default getRegisteredCandidatesLocality;
