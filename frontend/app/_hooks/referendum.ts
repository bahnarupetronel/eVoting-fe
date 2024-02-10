import ReferendumService from "@/_services/election/ReferendumService";
import { useQuery } from "@tanstack/react-query";

const useGetReferendumOptions = () => {
  return useQuery({
    queryKey: ["referendum-options"],
    queryFn: () => ReferendumService.getReferendumOptions(),
    retry: 0,
  });
};

export { useGetReferendumOptions };
