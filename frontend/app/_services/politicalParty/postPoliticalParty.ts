import axios from "@/_api/axios";

export const postPoliticalParty = async (name: string): Promise<any> => {
  try {
    const response = await axios.post(
      "/api/political-party",
      { name: name },
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );

    return response;
  } catch (error) {
    return error;
  }
};

export default postPoliticalParty;
