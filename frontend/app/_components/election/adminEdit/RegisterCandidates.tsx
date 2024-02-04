import { useEffect, useState } from "react";
import Link from "next/link";

import RegisterCandidateCard from "./RegisterCandidateCard";
import { EventCandidate } from "@/_interfaces/eventCandidate.model";
import styles from "./registerCandidates.module.css";
import { useGetAvailableCandidates } from "@/_hooks/candidate";
import IsLoadingComponent from "@/_shared/components/isLoading/IsLoadingComponent";

const RegisterCandidates = ({
  typeId,
  localityId,
  eventId,
  candidateTypeId,
}: {
  typeId: number;
  localityId: number;
  eventId: number;
  candidateTypeId: number;
}) => {
  const [enabled, setEnabled] = useState(false);
  let candidates: Array<EventCandidate> = [];
  const { isSuccess, isError, isLoading, data } = useGetAvailableCandidates(
    typeId,
    localityId,
    eventId,
    candidateTypeId,
    enabled
  );

  if (isSuccess) {
    candidates = data.data;
  }

  useEffect(() => {
    if (typeId && localityId) setEnabled(true);
  }, [localityId, typeId]);

  if (isError) {
    return <div>Eroare</div>;
  }

  return (
    <div>
      {candidates?.length === 0 && localityId && (
        <p>
          Niciun candidat disponibil pentru eveniment.{" "}
          <Link
            href="/admin/create/candidate"
            target="_blank"
          >
            Adauga candidati noi aici!
          </Link>
        </p>
      )}
      {!localityId && (
        <p>Selecteaza o localitate pentru a vizualiza candidatii posibili.</p>
      )}
      {candidates.length > 0 && (
        <>
          <p className={styles["p-info"]}>
            Apasa pe Adauga pentru a adauga un candidat pe lista de participare
            la eveniment.
          </p>
          <p className={styles["p-info"]}>
            Apasa pe Sterge pentru a anula participare unui candidat la
            eveniment.
          </p>
        </>
      )}
      {isLoading && <IsLoadingComponent />}
      {candidates?.map((candidate, index) => (
        <RegisterCandidateCard
          candidate={candidate}
          index={index}
          key={candidate.id}
        />
      ))}
    </div>
  );
};
export default RegisterCandidates;
