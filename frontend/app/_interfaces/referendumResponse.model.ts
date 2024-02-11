import { ElectionModel } from "./election.model";

export interface ReferendumResponseModel extends ElectionModel {
  lawText: string;
  proposedLawText: string;
}
