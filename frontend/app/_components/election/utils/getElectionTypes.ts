import axios from "@/_api/axios";

type type = {
  id: string;
  name: string;
};

export const getElectionTypes = async (): Promise<Array<type>> => {
  const types = await axios.get("/api/election/types");
  return types.data;
};

export default getElectionTypes;
