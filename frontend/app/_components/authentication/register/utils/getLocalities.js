import axios from "../../../../_api/axios.js";

export const getLocalities = async () => {
  const localities = await axios.get("/localities/all");
  return localities.data;
};

export default getLocalities;
