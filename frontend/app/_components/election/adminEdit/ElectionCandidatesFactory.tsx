"use client";

import LocalElectionCandidates from "./LocalElectionCandidates";
import { ElectionModel } from "@/_interfaces/election.model";
import ReferendumElectionCandidates from "./ReferendumElectionCandidates";
import PresidentialElectionCandidates from "./PresidentialElectionCandidates";
import EuropeanParliamentElectionCandidates from "./EuropeanParliamentElectionCandidates";
import ParlamentaryElection from "./ParlamentaryElection";

const ElectionCandidatesFactory = ({
  election,
  type,
}: {
  election: ElectionModel;
  type: string;
}) => {
  return (
    <>
      {election?.type.name === "Referendum" && <ReferendumElectionCandidates />}
      {election?.type.name === "Locale" && (
        <LocalElectionCandidates
          election={election}
          type={type}
        />
      )}
      {election?.type.name === "Prezidentiale" && (
        <PresidentialElectionCandidates
          election={election}
          type={type}
        />
      )}
      {election?.type.name === "Parlamentare" && (
        <ParlamentaryElection
          election={election}
          type={type}
        />
      )}
      {election?.type.name === "Parlamentul european" && (
        <EuropeanParliamentElectionCandidates
          election={election}
          type={type}
        />
      )}
    </>
  );
};
export default ElectionCandidatesFactory;
