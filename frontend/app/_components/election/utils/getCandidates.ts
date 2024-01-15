import axios from "@/_api/axios";

export const getCandidates = async (): Promise<any> => {
  const candidates = await axios.get("/api/candidate");
  return candidates.data;
};

export default getCandidates;
