import axios from "../../../_api/axios";

export const submitEvent = async (data): Promise<any> => {
  try {
    console.log(data);
    const response = await axios.post("/api/election", data, {
      headers: {
        "content-type": "application/json",
      },
    });

    const result = await response;
    return result;
  } catch (error) {
    return error;
  }
};

export default submitEvent;
