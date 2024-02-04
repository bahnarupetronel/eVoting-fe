import { ElectionModel } from "@/_interfaces/election.model";

const ParlamentaryElection = ({
  election,
  type,
}: {
  election: ElectionModel;
  type: string;
}) => {
  return <div>{election?.type.name}</div>;
};
export default ParlamentaryElection;
