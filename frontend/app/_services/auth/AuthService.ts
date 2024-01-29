import axios from "@/_api/axios";
import { UserLogin } from "@/_interfaces/userLogin.model";

class AuthService {
  loginUser = async (user: UserLogin) => {
    return await axios.post("/api/user/login", user);
  };

  registerUser = async (data) => {
    return await axios.post("/api/user/register", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  forgotPassword = async (emailAddress: string) => {
    return await axios.post("/api/user/forgot-password", {
      email: emailAddress,
    });
  };

  changePassword = async (password: string, token: string) => {
    return await axios.post(`/api/user/change-password?token=${token}`, {
      password: password,
    });
  };

  validateEmail = async () => {
    return await axios.get(`/api/user/validate-email`);
  };

  confirmEmail = async (token: string) => {
    return await axios.post(`/api/user/validate-email?token=${token}`);
  };

  logoutUser = async (): Promise<any> => {
    return await axios.post("/api/user/signout");
  };
}

export default new AuthService();
