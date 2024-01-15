import axios from "@/_api/axios";

export const getCounties = async (): Promise<any> => {
  const counties = await axios.get("/counties/all");
  return counties.data;
};

export default getCounties;
