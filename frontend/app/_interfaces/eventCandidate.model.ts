export interface EventCandidate {
  id: number;
  name: string;
  position: string;
  politicalPartyId: number;
  politicalParty: string;
  competingInLocality: number;
  county: string;
  candidateTypeId: number;
  locality: string;
  registered: boolean;
}
