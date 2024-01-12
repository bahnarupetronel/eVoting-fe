import axios from "../../_api/axios";
import { UserLogin } from "../../_interfaces/userLogin.model";

export const useLogin = async (user: UserLogin): Promise<any> => {
  try {
    const response = await axios.post("/api/user/login", user);
    return response;
  } catch (error) {
    return error;
  }
};

export default useLogin;
