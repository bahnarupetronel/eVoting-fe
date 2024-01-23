import axios from "@/_api/axios";
import { EventCandidate } from "@/_interfaces/eventCandidate.model";

class CandidateService {
  getCandidateByName = async (name: string): Promise<any> => {
    return await axios.get(`/api/candidate/${name}`);
  };

  deleteCandidateFromEvent = async (data: EventCandidate): Promise<any> => {
    return await axios.delete("/api/election-candidate", {
      headers: {
        "content-type": "application/json",
      },
      data,
    });
  };

  getCandidatesByEventTypeAndLocality = async (
    typeId: string,
    localityId: number
  ): Promise<any> => {
    return await axios.get(
      `/api/candidate/type/${typeId}/locality/${localityId}`
    );
  };

  getRegisteredCandidatesLocality = async (
    electionId: string,
    localityId: number
  ): Promise<any> => {
    return await axios.get(
      `/api/election-candidate?election=${electionId}&locality=${localityId}`
    );
  };

  registerCandidateToEvent = async (data: EventCandidate): Promise<any> => {
    return await axios.post("/api/election-candidate", data, {
      headers: {
        "content-type": "application/json",
      },
    });
  };
}

export default new CandidateService();
