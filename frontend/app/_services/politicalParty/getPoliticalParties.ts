import axios from "@/_api/axios";

export const getPoliticalParties = async (): Promise<any> => {
  try {
    const response = await axios.get("/api/political-party");

    return response;
  } catch (error) {
    return error;
  }
};

export default getPoliticalParties;
