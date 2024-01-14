import axios from "@/_api/axios";
import { Event } from "@/_interfaces/event.model";

export const submitEvent = async (data: Event): Promise<any> => {
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
