import axios from "../../../../_api/axios.js";

export const getCounties = async () => {
  const counties = await axios.get("/counties/all");
  return counties.data;
};

export default getCounties;
