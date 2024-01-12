"use client";

import { useEffect, useState } from "react";
import CandidateProfileCard from "./CandidateProfileCard";
import styles from "./candidate.module.css";
import getCandidateByName from "@/_services/candidate/getCandidateByName";
import { CandidateModel } from "@/_interfaces/candidate.model";
import EducationProfileCard from "./EducationProfileCard";
import { usePathname } from "next/navigation";

export const Candidate = () => {
  const pathname = usePathname();
  const name: string = pathname.split("/").pop();
  const [candidate, setCandidate] = useState<CandidateModel>(null);
  useEffect(() => {
    console.log(name);
    getCandidateByName(name).then((candidate) => setCandidate(candidate));
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
