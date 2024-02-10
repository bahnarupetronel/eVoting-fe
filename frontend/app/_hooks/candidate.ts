"use client";

import { CandidateModel } from "@/_interfaces/candidate.model";
import CandidateService from "@/_services/candidate/CandidateService";
import { useMutation, useQuery } from "@tanstack/react-query";

const useGetCandidateByName = (id: string) => {
  return useQuery({
    queryKey: [id],
    queryFn: () => CandidateService.getCandidateById(id),
    retry: 0,
  });
};

const useGetCandidateType = () => {
  return useQuery({
    queryKey: ["candidate-type"],
    queryFn: () => CandidateService.getCandidateType(),
    staleTime: 1000 * 60 * 60 * 24,
    retry: 1,
  });
};

const useGetCandidateTypesByElection = (electionType: number, data) => {
  return useQuery({
    queryKey: ["candidate-type", electionType],
    queryFn: () => CandidateService.getTypeByElection(electionType),
    staleTime: 1000 * 60 * 60 * 24,
    retry: 0,
    enabled: !!data,
  });
};

const useGetGenders = () => {
  return useQuery({
    queryKey: ["candidate-genders"],
    queryFn: () => CandidateService.getGenders(),
    staleTime: 1000 * 60 * 60 * 24,
    retry: 1,
  });
};

const useGetCandidatesByEventTypeAndLocality = (
  typeId: string,
  localityId: number
) => {
  return useQuery({
    queryKey: [`candidates?localityId=${localityId}&typeId=${typeId}`],
    queryFn: () =>
      CandidateService.getCandidatesByEventTypeAndLocality(typeId, localityId),
    retry: 0,
  });
};

const useGetAvailableCandidates = (
  typeId: number,
  localityId: number,
  eventId: number,
  candidateTypeId: number
) => {
  return useQuery({
    queryKey: [
      `candidates?localityId=${localityId}&typeId=${typeId}&eventId=${eventId}&candidateTypeId=${candidateTypeId}`,
    ],
    queryFn: () =>
      CandidateService.getAvailableCandidates(
        typeId,
        localityId,
        eventId,
        candidateTypeId
      ),
    retry: 0,
    enabled: localityId !== null && typeId !== null,
  });
};

const usePostCandidate = () => {
  return useMutation({
    mutationFn: (candidate: CandidateModel) => {
      return CandidateService.postCandidate(candidate);
    },
  });
};

export {
  useGetAvailableCandidates,
  useGetCandidateByName,
  useGetCandidatesByEventTypeAndLocality,
  useGetCandidateType,
  useGetGenders,
  usePostCandidate,
  useGetCandidateTypesByElection,
};
