import { ElectionModel } from "@/_interfaces/election.model";

const EuropeanParliamentElectionCandidates = ({
  election,
  type,
}: {
  election: ElectionModel;
  type: string;
}) => {
  return <div>{election?.type.name}</div>;
};
export default EuropeanParliamentElectionCandidates;
