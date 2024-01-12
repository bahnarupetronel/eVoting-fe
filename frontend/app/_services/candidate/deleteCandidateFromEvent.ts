import axios from "../../_api/axios";
import { EventCandidate } from "../../_interfaces/eventCandidateRegister.model";

export const deleteCandidateFromEvent = async (
  data: EventCandidate
): Promise<any> => {
  try {
    const response = await axios.delete("/api/election-competitor", {
      headers: {
        "content-type": "application/json",
      },
      data,
    });

    return response;
  } catch (error) {
    return error;
  }
};

export default deleteCandidateFromEvent;
