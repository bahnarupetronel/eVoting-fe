import axios from "../../../_api/axios";

export const getAllCandidates = async (): Promise<any> => {
  const candidates = await axios.get("/api/candidate");
  return candidates.data;
};

export default getAllCandidates;
