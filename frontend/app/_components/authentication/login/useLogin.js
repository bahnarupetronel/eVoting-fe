import axios from "../../../_api/axios.js";

export const useLogin = async (data) => {
  try {
    const response = await axios.post("/user/login", data);
    return response;
  } catch (error) {
    return error;
  }
};

export default useLogin;
