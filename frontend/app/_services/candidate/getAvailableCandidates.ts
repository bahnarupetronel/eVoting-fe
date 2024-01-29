import axios from "@/_api/axios";

export const getAvailableCandidates = async (
  typeId: number,
  localityId: number,
  eventId: number
): Promise<any> => {
  try {
    const response = await axios.get(
      `/api/candidate/filtered?typeId=${typeId}&localityId=${localityId}&eventId=${eventId}`
    );
    return response;
  } catch (error) {
    return error;
  }
};

export default getAvailableCandidates;
