import axios from "@/_api/axios";

export const getUnpublishedElections = async () => {
  try {
    const response = await axios.get("/api/election/unpublished");
    return response;
  } catch (error) {
    return error;
  }
};

export default getUnpublishedElections;
