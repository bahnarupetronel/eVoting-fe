import { ElectionModel } from "@/_interfaces/election.model";
import ElectionsService from "@/_services/election/ElectionsService";
import { useMutation, useQuery } from "@tanstack/react-query";

const useGetElectionTypes = () => {
  return useQuery({
    queryKey: ["election-types"],
    queryFn: () => ElectionsService.getTypes(),
    retry: 0,
  });
};

const usePublishEvent = () => {
  return useMutation({
    mutationFn: (electionId: number) => {
      return ElectionsService.publishEvent(electionId);
    },
  });
};

export { useGetElectionTypes, usePublishEvent };
