import axios from "@/_api/axios";
import { CandidateModel } from "@/_interfaces/candidate.model";
import { CandidateType } from "@/_interfaces/candidateType.model";
import { EventCandidate } from "@/_interfaces/eventCandidate.model";

class CandidateService {
  getCandidateById = async (id: string) => {
    return await axios.get(`/api/candidate/${id}`);
  };

  deleteCandidateFromEvent = async (data: EventCandidate) => {
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
  ) => {
    return await axios.get(
      `/api/candidate/type/${typeId}/locality/${localityId}`
    );
  };

  getRegisteredCandidatesLocality = async (
    electionId: string,
    localityId: number
  ) => {
    return await axios.get(
      `/api/election-candidate?election=${electionId}&locality=${localityId}`
    );
  };

  registerCandidateToEvent = async (data: EventCandidate) => {
    return await axios.post("/api/election-candidate", data, {
      headers: {
        "content-type": "application/json",
      },
    });
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

  getGenders = async () => {
    return await axios.get("/gender");
  };
}

export default new CandidateService();
