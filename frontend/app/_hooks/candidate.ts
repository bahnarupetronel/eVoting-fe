"use client";

import { EventCandidate } from "@/_interfaces/eventCandidate.model";
import CandidateService from "@/_services/candidate/CandidateService";

export const deleteCandidateFromEvent = async (
  data: EventCandidate
): Promise<any> => {
  try {
    return await CandidateService.deleteCandidateFromEvent(data);
  } catch (error) {
    return error;
  }
};
