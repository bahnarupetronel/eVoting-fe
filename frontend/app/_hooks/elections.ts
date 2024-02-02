import ElectionsService from "@/_services/election/ElectionsService";
import { useQuery } from "@tanstack/react-query";

const useGetElectionTypes = () => {
  return useQuery({
    queryKey: ["election-types"],
    queryFn: () => ElectionsService.getTypes(),
    retry: 0,
  });
};

export { useGetElectionTypes };
