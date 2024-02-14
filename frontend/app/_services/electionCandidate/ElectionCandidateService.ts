import axios from "@/_api/axios";
import { EventCandidate } from "@/_interfaces/eventCandidateRegister.model";

class ElectionCandidateService {
  registerCandidateToEvent = async (data: EventCandidate): Promise<any> => {
    return await axios.post("/api/election-candidate", data);
  };

  deleteCandidateFromEvent = async (data: EventCandidate) => {
    return await axios.delete("/api/election-candidate", {
      data,
    });
  };

  getRegisteredCandidatesLocality = async (
    electionId: string,
    localityId: number,
    type: string
  ) => {
    return await axios.get(
      `/api/election-candidate?election=${electionId}&locality=${localityId}&typeId=${type}`
    );
  };

  getRegisteredSingleCandidatesPerParty = async (
    electionId: string,
    candidateTypeId: number
  ) => {
    return await axios.get(
      `/api/election-candidate/registered/single?electionId=${electionId}&candidateTypeId=${candidateTypeId}`
    );
  };

  getRegisteredMultipleCandidatesPerParty = async (
    electionId: string,
    candidateTypeId: number
  ) => {
    return await axios.get(
      `/api/election-candidate/registered/multiple?electionId=${electionId}&candidateTypeId=${candidateTypeId}`
    );
  };
}

export default new ElectionCandidateService();
