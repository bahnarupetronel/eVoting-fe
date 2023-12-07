import { ElectionType } from "./electionType.model";

export interface Election {
  electionId: number;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  type: ElectionType;
}
