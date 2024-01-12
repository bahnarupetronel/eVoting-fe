import { ElectionModel } from "@/_interfaces/election.model";

const PresidentialElectionCandidates = ({
  election,
}: {
  election: ElectionModel;
}) => {
  return <div>{election?.title}</div>;
};
export default PresidentialElectionCandidates;
