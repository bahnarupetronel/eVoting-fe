import axios from "@/_api/axios";

export const postPoliticalParty = async (name: string): Promise<any> => {
  try {
    console.log(name);
    const response = await axios.post(
      "/api/political-party",
      { name: name },
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );

    const result = await response;
    return result;
  } catch (error) {
    return error;
  }
};

export default postPoliticalParty;
