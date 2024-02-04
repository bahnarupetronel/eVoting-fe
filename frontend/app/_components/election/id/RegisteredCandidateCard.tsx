import Link from "next/link";
import styles from "../adminEdit/registerCandidates.module.css";
import { RegisteredCandidateType } from "@/_interfaces/registeredCandidate.model";

const RegisteredCandidateCard = ({
  candidate,
  index,
}: {
  candidate: RegisteredCandidateType;
  index: number;
}) => {
  return (
    <div className={styles["card"]}>
      <h2 className={styles["index"]}>{index + 1}</h2>
      <div>
        <Link
          href={`/candidate/${candidate?.candidateId}`}
          target="_blank"
          className={styles["link"]}
        >
          <h4 className={styles["name"]}>{candidate?.candidateName}</h4>
        </Link>
        <p className={styles["political-party"]}>{candidate?.politicalParty}</p>
      </div>
    </div>
  );
};
export default RegisteredCandidateCard;
