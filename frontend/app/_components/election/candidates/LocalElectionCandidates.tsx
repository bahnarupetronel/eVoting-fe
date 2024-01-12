"use client";

import Filter from "../../../_shared/components/Filter";
import styles from "./electionCandidates.module.css";
import { useState } from "react";
import SearchBar from "../utils/SearchBar";
import FilterLocalities from "../../../_shared/components/FilterLocalities";
import Candidates from "./Candidates";
import { ElectionModel } from "../../../_interfaces/election.model";
import { locality } from "../../../_interfaces/locality.model";

const LocalElectionCandidates = ({ election }: { election: ElectionModel }) => {
  const [selectedLocality, setSelectedLocality] = useState<locality>(null);

  const handleLocalityChange = (locality: locality) => {
    setSelectedLocality(locality);
  };
  const date = election?.startDate.toString().split("T");

  return (
    <div>
      <p>Alege o localitate si inregistreaza candidatii la eveniment:</p>
      <FilterLocalities handleLocalityChange={handleLocalityChange} />
      {election && (
        <p className={styles["info-error"]}>
          Lista poate fi modificata pana la data de{" "}
          <span>
            {date[0]}, ora {date[1]} !
          </span>
        </p>
      )}
      <Candidates
        localityId={selectedLocality ? selectedLocality?.id : null}
        typeId={election ? election?.type.id : null}
      />
    </div>
  );
};
export default LocalElectionCandidates;
