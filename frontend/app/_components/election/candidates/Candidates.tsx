import { useEffect, useState } from "react";
import Link from "next/link";
import getCandidateByEventAndLocality from "@/_services/election/getCandidatesByEventAndLocality";
import CandidateCard from "./CandidateCard";
import { EventCandidate } from "@/_interfaces/eventCandidate.model";
import styles from "./electionCandidates.module.css";

const Candidates = ({
  typeId,
  localityId,
}: {
  typeId: string;
  localityId: number;
}) => {
  const [candidates, setCandidates] = useState<Array<EventCandidate>>([]);

  useEffect(() => {
    if (typeId && localityId)
      getCandidateByEventAndLocality(typeId, localityId).then((response) => {
        if (200 <= response.status && response.status < 300)
          setCandidates(response.data);
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
        <CandidateCard
          candidate={candidate}
          index={index}
          key={candidate.id}
        />
      ))}
    </div>
  );
};
export default Candidates;
