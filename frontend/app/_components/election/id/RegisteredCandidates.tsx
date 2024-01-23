"use client";

import { useEffect, useState } from "react";
import styles from "./election.module.css";
import isEventPopulated from "@/_services/election/isEventPopulated";
import { locality } from "@/_interfaces/locality.model";
import getRegisteredCandidatesByLocality from "@/_services/candidate/getRegisteredCandidatesByLocality";
import RegisterCandidateCard from "../registerCandidates/RegisterCandidateCard";

export const RegisteredCandidates = ({
  setHasCandidates,
  electionId,
  locality,
}: {
  setHasCandidates: Function;
  electionId: string;
  locality: locality;
}) => {
  const [candidates, setCandidates] = useState(null);

  useEffect(() => {
    isEventPopulated(electionId).then((response) => {
      if (200 <= response.status && response.status < 300)
        setHasCandidates(response.data);
    });
  }, []);

  useEffect(() => {
    locality?.id &&
      getRegisteredCandidatesByLocality(electionId, locality?.id).then(
        (response) => {
          if (200 <= response.status && response.status < 300) {
            const candidates = response.data.map((item) => {
              return {
                ...item.candidate,
                politicalParty: item.politicalParty.name,
              };
            });
            setCandidates(candidates);
          }
        }
      );
  }, [locality?.id ?? null]);

  return (
    <section className={styles["container-candidates"]}>
      {candidates?.map((candidate, index) => (
        <RegisterCandidateCard
          key={candidate.id}
          candidate={candidate}
          index={index}
          registered={true}
        />
      ))}
      {candidates?.length === 0 && <p>Niciun candidat inregistrat.</p>}
    </section>
  );
};
export default RegisteredCandidates;
