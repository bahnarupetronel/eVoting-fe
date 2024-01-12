import { ElectionModel } from "@/_interfaces/election.model";

const EuropeanParliamentElectionCandidates = ({
  election,
}: {
  election: ElectionModel;
}) => {
  return <div>{election?.title}</div>;
};
export default EuropeanParliamentElectionCandidates;
