import { ElectionType } from "./electionType.model";

export interface ElectionModel {
  electionId?: number;
  description: string;
  startDate: Date;
  endDate: Date;
  type: ElectionType;
  published?: boolean;
}
