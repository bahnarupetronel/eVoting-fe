import ElectionCandidateService from "@/_services/electionCandidate/ElectionCandidateService";
import { useMutation, useQuery } from "@tanstack/react-query";
import { EventCandidate } from "@/_interfaces/eventCandidateRegister.model";

const useRegisterCandidateToEvent = () => {
  return useMutation({
    mutationFn: (data: EventCandidate) => {
      return ElectionCandidateService.registerCandidateToEvent(data);
    },
  });
};

const useDeleteCandidateFromEvent = () => {
  return useMutation({
    mutationFn: (data: EventCandidate) => {
      return ElectionCandidateService.deleteCandidateFromEvent(data);
    },
  });
};

const useGetRegisteredCandidates = (
  electionId: string,
  localityId: number,
  type: string,
  enabled: boolean
) => {
  return useQuery({
    queryKey: [
      `election-candidate?localityId=${localityId}&electionId=${electionId}&typeId=${type}`,
    ],
    queryFn: () =>
      ElectionCandidateService.getRegisteredCandidatesLocality(
        electionId,
        localityId,
        type
      ),
    retry: 0,
    staleTime: 0,
    enabled: enabled,
  });
};

const useGetRegisteredCandidatesForUser = (
  electionId: string,
  candidateTypeId: number
) => {
  return useQuery({
    queryKey: [
      `election-candidate/registered?electionId=${electionId}&candidateTypeId=${candidateTypeId}`,
    ],
    queryFn: () =>
      ElectionCandidateService.getRegisteredCandidates(
        electionId,
        candidateTypeId
      ),
    retry: 0,
    enabled: candidateTypeId > 0,
  });
};

export {
  useRegisterCandidateToEvent,
  useDeleteCandidateFromEvent,
  useGetRegisteredCandidates,
  useGetRegisteredCandidatesForUser,
};
