import PoliticalPartiesService from "@/_services/politicalParty/PoliticalPartiesService";
import { useMutation, useQuery } from "@tanstack/react-query";

const useGetPoliticalParties = () => {
  return useQuery({
    queryKey: ["political-parties"],
    queryFn: () => PoliticalPartiesService.getPoliticalParties(),
    staleTime: 1000 * 60 * 60 * 24,
    retry: 1,
  });
};

const usePostPoliticalParties = () => {
  return useMutation({
    mutationFn: (name: string) => {
      return PoliticalPartiesService.postPoliticalParty(name);
    },
  });
};

export { useGetPoliticalParties, usePostPoliticalParties };
