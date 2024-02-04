import axios from "@/_api/axios";
import { CandidateModel } from "@/_interfaces/candidate.model";

class CandidateService {
  getCandidateById = async (id: string) => {
    return await axios.get(`/api/candidate/${id}`);
  };

  getCandidatesByEventTypeAndLocality = async (
    typeId: string,
    localityId: number
  ) => {
    return await axios.get(
      `/api/candidate/type/${typeId}/locality/${localityId}`
    );
  };

  postCandidate = async (candidate: CandidateModel) => {
    return await axios.post("/api/candidate", candidate, {
      headers: {
        "content-type": "application/json",
      },
    });
  };

  getCandidateType = async () => {
    return await axios.get("/candidate-type");
  };

  getTypeByElection = async (electionTypeId: number) => {
    return await axios.get(
      `/candidate-type/election?election-type=${electionTypeId}`
    );
  };

  getGenders = async () => {
    return await axios.get("/gender");
  };

  getAvailableCandidates = async (
    typeId: number,
    localityId: number,
    eventId: number,
    candidateTypeId: number
  ) => {
    return await axios.get(
      `/api/candidate/filtered?typeId=${typeId}&localityId=${localityId}&eventId=${eventId}&candidateTypeId=${candidateTypeId}`
    );
  };
}

export default new CandidateService();
