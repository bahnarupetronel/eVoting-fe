import { CandidateType } from "./candidateType.model";
import { EducationModel } from "./education.model";
import { PoliticalPartyType } from "./politicalParty.model";

export interface CandidateModel {
  id: string;
  name: string;
  gender: string;
  position: string;
  imageUrl: string;
  birthDate: string;
  description: string;
  politicalParty: PoliticalPartyType;
  politicalPartyId: number;
  competingInLocality: string;
  address: string;
  phoneNumber: string;
  candidateType: CandidateType;
  eventTypeId: string;
  candidateTypeId: string;
  email: string;
  education: Array<EducationModel>;
}
