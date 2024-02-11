"use client";

import { useGetUserVotes } from "@/_hooks/hasUserVoted";
import styles from "./votesHistory.module.css";
import Menu from "../Menu";
import VoteHistoryCard from "./VoteHistoryCard";
import IsLoadingComponent from "@/_shared/components/isLoading/IsLoadingComponent";

const VotesHistory = () => {
  const { isLoading, data: votes } = useGetUserVotes();

  if (isLoading) {
    return (
      <div className={styles["container-user"]}>
        <Menu />
        <section className={styles["section"]}>
          <h3>Istoricul voturilor</h3>
          <IsLoadingComponent />
        </section>
      </div>
    );
  }

  return (
    <div className={styles["container-user"]}>
      <Menu />
      <section className={styles["section"]}>
        <h3>Istoricul voturilor</h3>
        <div>
          {votes?.data.map((vote, index) => (
            <VoteHistoryCard
              key={index}
              vote={vote}
              index={index}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
export default VotesHistory;
