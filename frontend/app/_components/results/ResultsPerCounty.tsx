import RomaniaMap from "../map/RomaniaMap";
import { useGetCountiesForMap } from "@/_hooks/counties";
import IsLoadingSection from "../user/validate/IsLoadingSection";
import transformLocations from "./transformLocations";

const ResultsPerCounty = ({
  candidateTypeId,
  election,
}: {
  candidateTypeId: string;
  election;
}) => {
  const {
    isSuccess,
    isError,
    isLoading,
    data: counties,
  } = useGetCountiesForMap();

  const locations = transformLocations(counties?.data);
  if (isLoading) return <IsLoadingSection />;

  return (
    <RomaniaMap
      election={election}
      candidateTypeId={candidateTypeId}
      locations={locations}
      type={"county"}
    />
  );
};
export default ResultsPerCounty;
