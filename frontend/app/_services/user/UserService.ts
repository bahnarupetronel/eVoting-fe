import axios from "@/_api/axios";

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
    return await axios.get("/api/user/details");
  };
}

export default new UserService();
