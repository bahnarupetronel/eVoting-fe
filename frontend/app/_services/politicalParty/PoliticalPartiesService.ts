import axios from "@/_api/axios";

class PoliticalPartyService {
  getPoliticalParties = async (): Promise<any> => {
    return await axios.get("/api/political-party");
  };

  postPoliticalParty = async (name: string): Promise<any> => {
    return await axios.post(
      "/api/political-party",
      { name: name },
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );
  };
}

export default new PoliticalPartyService();
