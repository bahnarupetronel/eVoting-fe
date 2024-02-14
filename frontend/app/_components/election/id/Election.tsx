"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Divider, Box } from "@mui/material";
import { getElectionById } from "@/_services/election/getElectionById";
import { formatDate } from "../utils/formatDate";
import { RegisteredCandidates } from "./RegisteredCandidates";
import FilterLocalities from "@/_shared/components/FilterLocalities";
import { getElectionStatus } from "../utils/getElectionStatus";
import { locality } from "@/_interfaces/locality.model";
import styles from "./election.module.css";
import globalStyles from "@/_shared/stylesheets/App.module.css";
import SelectType from "./SelectType";
import { useGetCandidateTypesByElection } from "@/_hooks/candidate";
import { createOptions } from "@/_shared/utils/createOptions";
import ElectionTitle from "../ElectionTitle";
import Referendum from "./Referendum";
import NotFoundPage from "@/_components/notFound/NotFoundPage";
import ResultsFactory from "@/_components/results/ResultsFactory";
import { ReferendumResponseModel } from "@/_interfaces/referendumResponse.model";

const Election = () => {
  const pathname = usePathname();
  const id: string = pathname.split("/").pop();
  const [election, setElection] = useState<ReferendumResponseModel>(null);
  const [isError, setIsError] = useState(false);
  const [hasCandidates, setHasCandidates] = useState(false);
  const [locality, setLocality] = useState<locality | null>(null);
  const status =
    getElectionStatus(election?.startDate, election?.endDate) || null;
  const { isSuccess, data } = useGetCandidateTypesByElection(
    election?.type.id,
    election
  );
  const options = createOptions(isSuccess, data?.data);
  const [type, setType] = useState("");

  const handleLocalityChange = (locality: locality) => {
    setLocality(locality);
  };

  useEffect(() => {
    if (options.length > 0) setType(options[0].value);
  }, [options.length]);

  useEffect(() => {
    getElectionById(id).then((response) => {
      if (200 <= response.status && response.status < 300)
        setElection(response.data);
      else setIsError(true);
    });
  }, []);

  if (isError) {
    return <NotFoundPage />;
  }

  if (!isError && election === null) {
    return <div>Se incarca....</div>;
  }

  if (election?.type.name === "Referendum")
    return <Referendum election={election} />;

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: "background.default", p: 2 }}
      className={globalStyles["container"]}
    >
      <ElectionTitle election={election} />
      <SelectType
        type={type}
        setType={setType}
        options={options}
      />
      <p className={styles["description"]}>{election.description}</p>
      <div className={styles["dates"]}>
        <p className={styles["date"]}>
          <span className={styles["span"]}>Incepe:</span>
          <span>{formatDate(election.startDate)}</span>
        </p>

        <p className={styles["date"]}>
          <span className={styles["span"]}>Se termina:</span>
          <span>{formatDate(election.endDate)}</span>
        </p>
      </div>
      <Divider />

      {hasCandidates && (
        <>
          <p>Vezi candidatii inregistrati din localitatea: </p>
          <FilterLocalities handleLocalityChange={handleLocalityChange} />
        </>
      )}

      {!hasCandidates && <p>Nu exista candidati inregistrati. </p>}
      <RegisteredCandidates
        setHasCandidates={setHasCandidates}
        locality={locality}
        electionId={id}
        type={type}
      />
      <ResultsFactory
        candidateTypeId={type}
        election={election}
        status={status}
      />
    </Box>
  );
};
export default Election;
