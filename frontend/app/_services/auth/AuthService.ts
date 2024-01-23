import axios from "@/_api/axios";
import { UserLogin } from "@/_interfaces/userLogin.model";

class AuthService {
  loginUser = async (user: UserLogin) => {
    return await axios.post("/api/user/login", user);
  };

  registerUser = async (data) => {
    return await axios.post("http://localhost:5173/api/user/register", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };
}

export default new AuthService();
