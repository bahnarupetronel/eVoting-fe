"use client";

import { CandidateModel } from "@/_interfaces/candidate.model";
import { EventCandidate } from "@/_interfaces/eventCandidate.model";
import CandidateService from "@/_services/candidate/CandidateService";
import { useMutation, useQuery } from "@tanstack/react-query";

const useDeleteCandidateFromEvent = () => {
  return useMutation({
    mutationFn: (data: EventCandidate) => {
      return CandidateService.deleteCandidateFromEvent(data);
    },
  });
};

const useRegisterCandidateToEvent = () => {
  return useMutation({
    mutationFn: (data: EventCandidate) => {
      return CandidateService.registerCandidateToEvent(data);
    },
  });
};

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

const useGetGenders = () => {
  return useQuery({
    queryKey: ["candidate-genders"],
    queryFn: () => CandidateService.getGenders(),
    staleTime: 1000 * 60 * 60 * 24,
    retry: 1,
  });
};

const useGetRegisteredCandidatesLocality = (
  electionId: string,
  localityId: number
) => {
  return useQuery({
    queryKey: [`candidates?localityId=${localityId}&electionId=${electionId}`],
    queryFn: () =>
      CandidateService.getRegisteredCandidatesLocality(electionId, localityId),
    retry: 0,
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

const usePostCandidate = () => {
  return useMutation({
    mutationFn: (candidate: CandidateModel) => {
      return CandidateService.postCandidate(candidate);
    },
  });
};

export {
  useDeleteCandidateFromEvent,
  useRegisterCandidateToEvent,
  useGetCandidateByName,
  useGetCandidatesByEventTypeAndLocality,
  useGetCandidateType,
  useGetRegisteredCandidatesLocality,
  useGetGenders,
  usePostCandidate,
};
