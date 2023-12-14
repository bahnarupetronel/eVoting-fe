import axios from "../../../_api/axios";

export const getElectionTypes = async (): Promise<any> => {
  const types = await axios.get("/api/election/types");
  return types.data;
};

export default getElectionTypes;
