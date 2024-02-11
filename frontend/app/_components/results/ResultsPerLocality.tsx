import { useGetLocalititesForMap } from "@/_hooks/counties";
import IsLoadingSection from "../user/validate/IsLoadingSection";
import getLocations from "@/_services/map/getLocations";
import RomaniaMap from "../map/RomaniaMap";
import transformLocations from "./transformLocations";

const ResultsPerLocality = ({
  candidateTypeId,
  election,
}: {
  candidateTypeId: string;
  election;
}) => {
  //get all localities
  const {
    isSuccess,
    isError,
    isLoading,
    data: localities,
  } = useGetLocalititesForMap();

  const locations = transformLocations(localities?.data);

  if (isLoading) return <IsLoadingSection />;
  return (
    <RomaniaMap
      election={election}
      candidateTypeId={candidateTypeId}
      locations={locations}
      type={"locality"}
    />
  );
};
export default ResultsPerLocality;
