import styles from "./resultsCard.module.css";

export const ResultsCard = ({ vote, index }: { vote; index }) => {
  return (
    <div className={styles["container-card"]}>
      <span className={styles["index"]}>{index + 1}.</span>
      <p className={styles["political_party"]}>
        {vote?.political_party_name}
        <span className={styles["candidate"]}> ( {vote?.candidatename} )</span>
      </p>
      <p className={styles["info"]}>
        <span className={styles["vote-count"]}>{vote?.votecount}</span>voturi
      </p>
    </div>
  );
};
export default ResultsCard;
