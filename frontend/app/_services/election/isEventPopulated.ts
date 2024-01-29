import axios from "@/_api/axios";

export const isEventPopulated = async (electionId: string) => {
  try {
    const response = await axios.get(
      `/api/election-candidate/populated?election=${electionId}`
    );
    return response;
  } catch (error) {
    return error;
  }
};

export default isEventPopulated;
