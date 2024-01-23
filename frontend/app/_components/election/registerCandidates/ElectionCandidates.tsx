"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import getElectionById from "@/_services/election/getElectionById";
import { ElectionModel } from "@/_interfaces/election.model";
import LocalElectionCandidates from "./LocalElectionCandidates";
import ReferendumElectionCandidates from "./ReferendumElectionCandidates";
import PresidentialElectionCandidates from "./PresidentialElectionCandidates";
import ElectionCandidatesFactory from "./ElectionCandidatesFactory";
import styles from "./registerCandidates.module.css";
import globalStyles from "@/_shared/stylesheets/App.module.css";

const ElectionCandidates = ({}: {}) => {
  const pathname = usePathname();
  const id: string = pathname.split("/")[3];
  const [election, setElection] = useState<ElectionModel>(null);
  useEffect(() => {
    getElectionById(id).then((response) => {
      if (200 <= response.status && response.status < 300)
        setElection(response.data);
    });
  }, []);

  return (
    <main className={globalStyles["container"]}>
      <section>
        <h3 className={styles["title"]}>{election?.title}</h3>
        <h4 className={styles["h4-title"]}>{election?.type.name}</h4>
      </section>
      <ElectionCandidatesFactory election={election} />
    </main>
  );
};
export default ElectionCandidates;
