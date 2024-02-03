import axios from "@/_api/axios";
import { userDetailsEdit } from "@/_interfaces/userDetailsEdit.model";

class UserService {
  validateEmail = async (email: string) => {
    return await axios.post(`/api/user/validate-email`, { email: email });
  };

  sendEmailToken = async (token: string) => {
    return await axios.post(`/api/user/email-validation-token?token=${token}`);
  };

  isConfirmEmailSent = async () => {
    return await axios.get(`/api/user/confirm-email`);
  };

  getUserDetails = async () => {
    return await axios.get("/api/user");
  };

  postUserDetails = async (user: userDetailsEdit) => {
    return await axios.post("/api/user", user);
  };
}

export default new UserService();
