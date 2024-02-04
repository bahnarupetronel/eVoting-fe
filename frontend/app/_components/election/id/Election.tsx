"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Divider, Box } from "@mui/material";
import { getElectionById } from "@/_services/election/getElectionById";
import { ElectionModel } from "@/_interfaces/election.model";
import { formatDate } from "../utils/formatDate";
import { RegisteredCandidates } from "./RegisteredCandidates";
import FilterLocalities from "@/_shared/components/FilterLocalities";
import { getElectionStatus } from "../utils/getElectionStatus";
import { locality } from "@/_interfaces/locality.model";
import styles from "./election.module.css";
import globalStyles from "@/_shared/stylesheets/App.module.css";
import dayjs from "dayjs";
import SelectType from "./SelectType";
import { useGetCandidateTypesByElection } from "@/_hooks/candidate";
import { createOptions } from "@/_shared/utils/createOptions";

const Election = () => {
  const pathname = usePathname();
  const id: string = pathname.split("/").pop();
  const [election, setElection] = useState<ElectionModel>(null);

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

  const year = dayjs(election?.startDate).get("year");

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
    });
  }, []);

  if (election === null) {
    return <div>Loading</div>;
  }
  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: "background.default", p: 2 }}
      className={globalStyles["container"]}
    >
      <h2 className={styles["title"]}>
        {election.type.name === "Referendum" ? (
          election?.type.name
        ) : (
          <>Alegeri {election?.type.name}</>
        )}
        {" " + year}
      </h2>
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
          <p>Vezi candidatii din localitatea: </p>
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
    </Box>
  );
};
export default Election;
