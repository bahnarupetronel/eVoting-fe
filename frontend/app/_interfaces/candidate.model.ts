import { EducationModel } from "./education.model";

export interface CandidateModel {
  id: string;
  name: string;
  gender: string;
  position: string;
  imageUrl: string;
  birthDate: string; //make it a date
  description: string;
  politicalPartyId: number;
  localityId: number;
  residence: string;
  phoneNumber: string;
  email: string;
  education: Array<EducationModel>;
}
