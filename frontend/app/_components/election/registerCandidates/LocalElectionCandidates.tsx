"use client";

// import Filter from "@/_shared/components/Filter";
import styles from "./registerCandidates.module.css";
import { useState } from "react";
// import SearchBar from "../utils/SearchBar";
import FilterLocalities from "@/_shared/components/FilterLocalities";
import RegisterCandidates from "./RegisterCandidates";
import { ElectionModel } from "@/_interfaces/election.model";
import { locality } from "@/_interfaces/locality.model";

const LocalElectionCandidates = ({ election }: { election: ElectionModel }) => {
  const [locality, setLocality] = useState<locality>(null);

  const handleLocalityChange = (selectedLocality: locality) => {
    setLocality(selectedLocality);
  };
  const date = election?.startDate.toString().split("T");

  if (election?.published)
    return (
      <div>
        <p className={styles["info-error"]}>
          Lista nu mai poate fi modificata! Evenimentul a fost publicat!
        </p>
      </div>
    );

  return (
    <div>
      <p>Alege o localitate si inregistreaza candidatii la eveniment:</p>
      <FilterLocalities handleLocalityChange={handleLocalityChange} />
      <p className={styles["info-error"]}>
        Lista poate fi modificata pana la data de{" "}
        <span>
          {date[0]}, ora {date[1]} !
        </span>
      </p>
      <RegisterCandidates
        localityId={locality ? locality?.id : null}
        typeId={election ? election?.type.id : null}
        eventId={election?.electionId}
      />
    </div>
  );
};
export default LocalElectionCandidates;
