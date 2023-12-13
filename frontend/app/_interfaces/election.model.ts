import { ElectionType } from "./electionType.model";

export interface ElectionModel {
  electionId: number;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  type: ElectionType;
}
