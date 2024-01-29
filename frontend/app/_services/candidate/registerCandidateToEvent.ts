import axios from "_api/axios";
import { EventCandidate } from "@/_interfaces/eventCandidateRegister.model";

export const registerCandidateToEvent = async (
  data: EventCandidate
): Promise<any> => {
  try {
    const response = await axios.post("/api/election-candidate", data, {
      headers: {
        "content-type": "application/json",
      },
    });

    return response;
  } catch (error) {
    return error;
  }
};

export default registerCandidateToEvent;
