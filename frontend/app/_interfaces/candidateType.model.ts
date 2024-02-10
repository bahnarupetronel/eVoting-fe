import { ElectionType } from "./electionType.model";

export type CandidateType = {
  id: number;
  name: string;
  electionType: ElectionType;
};
