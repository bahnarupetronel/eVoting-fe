"use client";

import { useEffect, useState } from "react";
import styles from "./election.module.css";
import isEventPopulated from "@/_services/election/isEventPopulated";
import { locality } from "@/_interfaces/locality.model";
import { useGetRegisteredCandidates } from "@/_hooks/electionCandidate";
import RegisteredCandidateCard from "./RegisteredCandidateCard";
import IsLoadingComponent from "@/_shared/components/isLoading/IsLoadingComponent";

export const RegisteredCandidates = ({
  setHasCandidates,
  electionId,
  locality,
  type,
}: {
  setHasCandidates: Function;
  electionId: string;
  locality: locality;
  type: string;
}) => {
  const [enabled, setEnabled] = useState(false);
  const {
    isSuccess,
    isLoading,
    isError,
    data: candidates,
  } = useGetRegisteredCandidates(electionId, locality?.id, type, enabled);

  useEffect(() => {
    isEventPopulated(electionId).then((response) => {
      if (200 <= response.status && response.status < 300)
        setHasCandidates(response.data);
    });
  }, []);

  useEffect(() => {
    if (locality?.id) {
      setEnabled(true);
    } else setEnabled(false);
  }, [locality?.id ?? null]);

  return (
    <section className={styles["container-candidates"]}>
      {isLoading && <IsLoadingComponent />}
      {candidates?.data.map((candidate, index) => (
        <RegisteredCandidateCard
          key={index}
          candidate={candidate}
          index={index}
        />
      ))}
      {candidates?.data.length === 0 && <p>Niciun candidat inregistrat.</p>}
    </section>
  );
};
export default RegisteredCandidates;
