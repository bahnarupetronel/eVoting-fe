"use client";

import { useGetUserVotes } from "@/_hooks/hasUserVoted";
import styles from "./votesHistory.module.css";
import Menu from "../Menu";
import VoteHistoryCard from "./VoteHistoryCard";

const VotesHistory = () => {
  const { isSuccess, isError, isLoading, data: votes } = useGetUserVotes();

  console.log(votes);
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
