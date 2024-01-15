import axios from "@/_api/axios";

export const getLocalities = async (): Promise<any> => {
  const localities = await axios.get("/localities/all");
  return localities.data;
};

export default getLocalities;
