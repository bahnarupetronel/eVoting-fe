import CountyService from "@/_services/counties/CountyService";
import { useQuery } from "@tanstack/react-query";

const useGetLocalityById = (localityId: number, enabled: boolean) => {
  return useQuery({
    queryKey: ["locality", localityId],
    queryFn: () => CountyService.getLocalityById(localityId),
    staleTime: 1000 * 60 * 60 * 24,
    retry: 0,
    enabled: enabled,
  });
};

export { useGetLocalityById };
