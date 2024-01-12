export interface EventCandidate {
  id: number;
  name: string;
  position: string;
  politicalPartyId: number;
  politicalParty: string;
  competingInLocality: number;
  locality: string;
  registered: boolean;
}
