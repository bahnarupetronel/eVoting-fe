"use client";

import { useEffect, useState } from "react";
import CandidateProfileCard from "./CandidateProfileCard";
import { CandidateModel } from "@/_interfaces/candidate.model";
import EducationProfileCard from "./EducationProfileCard";
import { usePathname } from "next/navigation";
import globalStyles from "@/_shared/stylesheets/global.module.css";
import CandidateService from "@/_services/candidate/CandidateService";

export const Candidate = () => {
  const pathname = usePathname();
  const id: string = pathname.split("/")[2];
  const [candidate, setCandidate] = useState<CandidateModel>(null);

  useEffect(() => {
    CandidateService.getCandidateById(id).then((response) => {
      if (200 <= response.status && response.status < 300)
        setCandidate(response.data);
    });
  }, []);
  if (candidate === null) return <div>Loading</div>;
  return (
    <div className={globalStyles["container"]}>
      <CandidateProfileCard candidate={candidate} />
      <EducationProfileCard candidate={candidate} />
    </div>
  );
};
export default Candidate;
