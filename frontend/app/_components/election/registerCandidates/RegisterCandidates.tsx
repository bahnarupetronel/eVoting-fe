import { useEffect, useState } from "react";
import Link from "next/link";
import { getAvailableCandidates } from "@/_services/candidate/getAvailableCandidates";
import RegisterCandidateCard from "./RegisterCandidateCard";
import { EventCandidate } from "@/_interfaces/eventCandidate.model";
import styles from "./registerCandidates.module.css";

const RegisterCandidates = ({
  typeId,
  localityId,
  eventId,
}: {
  typeId: number;
  localityId: number;
  eventId: number;
}) => {
  const [candidates, setCandidates] = useState<Array<EventCandidate>>([]);

  useEffect(() => {
    if (typeId && localityId)
      getAvailableCandidates(typeId, localityId, eventId).then((response) => {
        if (200 <= response.status && response.status < 300) {
          setCandidates(response.data);
        }
      });
  }, [localityId, typeId]);

  return (
    <div>
      {candidates?.length === 0 && localityId && (
        <p>
          Niciun candidat disponibil pentru eveniment.{" "}
          <Link href="/candidate/create">Adauga candidati noi aici!</Link>
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
