import ElectionsService from "@/_services/election/ElectionsService";
import { useMutation, useQuery } from "@tanstack/react-query";

const useGetElectionTypes = () => {
  return useQuery({
    queryKey: ["election-types"],
    queryFn: () => ElectionsService.getTypes(),
    retry: 0,
  });
};

const useGetLiveElections = () => {
  return useQuery({
    queryKey: ["election-live"],
    queryFn: () => ElectionsService.getLiveElections(),
    retry: 0,
  });
};

const useGetUpcomingElections = () => {
  return useQuery({
    queryKey: ["election-upcoming"],
    queryFn: () => ElectionsService.getUpcomingElections(),
    retry: 0,
  });
};

const useGetElectionById = (id: string) => {
  return useQuery({
    queryKey: ["election", id],
    queryFn: () => ElectionsService.getElectionById(id),
    retry: 0,
  });
};

const useGetElectionAndTypes = (id: string) => {
  return useQuery({
    queryKey: ["election-and-types", id],
    queryFn: () => ElectionsService.getElectionAndTypes(id),
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

export {
  useGetElectionTypes,
  usePublishEvent,
  useGetElectionById,
  useGetLiveElections,
  useGetUpcomingElections,
  useGetElectionAndTypes,
};
