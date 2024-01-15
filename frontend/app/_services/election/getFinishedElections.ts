import axios from "@/_api/axios";

export const getFinishedElections = async (): Promise<any> => {
  try {
    const response = await axios.get("/api/election/finished");
    return response;
  } catch (error) {
    return error;
  }
};

export default getFinishedElections;
