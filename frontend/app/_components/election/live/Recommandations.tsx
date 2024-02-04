import { useGetUpcomingElections } from "@/_hooks/elections";
import UpcomingEventCard from "./UpcomingEventCard";

const Recommandations = () => {
  const { isSuccess, isLoading, data: elections } = useGetUpcomingElections();

  if (isLoading) return <div>Se incarca...</div>;
  return (
    <div>
      <h4> Evenimente care urmeaza sa inceapa: </h4>
      {elections.data.map((election) => (
        <UpcomingEventCard
          election={election}
          key={election.electionId}
        />
      ))}
    </div>
  );
};
export default Recommandations;
