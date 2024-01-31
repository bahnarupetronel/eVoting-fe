import axios from "@/_api/axios";

class StripeService {
  createVerificationSession = async (email: string) => {
    return await axios.post(`/api/stripe/verification-session`, {
      email: email,
    });
  };
  getVerificationSession = async () => {
    return await axios.get(`/api/stripe/verification-session`);
  };
}

export default new StripeService();
