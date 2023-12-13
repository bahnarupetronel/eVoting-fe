"use client";

import { useEffect, useState } from "react";
import CandidateProfileCard from "./CandidateProfileCard";
import styles from "./candidate.module.css";
import getCandidateById from "./getCandidateById";
import { CandidateModel } from "../../_interfaces/candidate.model";
import EducationProfileCard from "./EducationProfileCard";
import { usePathname } from "next/navigation";

export const Candidate = () => {
  const pathname = usePathname();
  const id: string = pathname.split("/").pop();
  const [candidate, setCandidate] = useState<CandidateModel>(null);
  useEffect(() => {
    getCandidateById(id).then((candidate) => setCandidate(candidate));
  }, []);
  if (candidate === null) return <div>Loading</div>;
  return (
    <div className={styles["container"]}>
      <CandidateProfileCard candidate={candidate} />
      <EducationProfileCard candidate={candidate} />
    </div>
  );
};
export default Candidate;
