import { ElectionModel } from "@/_interfaces/election.model";

const ParlamentaryElection = ({ election }: { election: ElectionModel }) => {
  return <div>{election?.title}</div>;
};
export default ParlamentaryElection;
