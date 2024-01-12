"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import getElectionById from "../../../_services/election/getElectionById";
import LocalElectionCandidates from "./LocalElectionCandidates";
import { ElectionModel } from "../../../_interfaces/election.model";
import ReferendumElectionCandidates from "./ReferendumElectionCandidates";
import styles from "./electionCandidates.module.css";
import PresidentialElectionCandidates from "./PresidentialElectionCandidates";
import ElectionCandidatesFactory from "./ElectionCandidatesFactory";

const ElectionCandidates = ({}: {}) => {
  const pathname = usePathname();
  const id: string = pathname.split("/")[2];
  const [election, setElection] = useState<ElectionModel>(null);
  useEffect(() => {
    getElectionById(id).then((data) => setElection(data));
  }, []);

  return (
    <main className={styles["container"]}>
      <section>
        <h3 className={styles["title"]}>{election?.title}</h3>
        <h4 className={styles["h4-title"]}>{election?.type.name}</h4>
      </section>
      <ElectionCandidatesFactory election={election} />
    </main>
  );
};
export default ElectionCandidates;
