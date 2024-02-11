import styles from "./resultsCard.module.css";

export const ResultsCard = ({ vote, index }: { vote; index }) => {
  return (
    <div className={styles["container-card-referendum"]}>
      <span className={styles["index"]}>{index + 1}.</span>
      <p className={styles["option"]}>{vote?.option_name}</p>
      <p className={styles["info"]}>
        <span className={styles["vote-count"]}>{vote?.votecount}</span>voturi
      </p>
    </div>
  );
};
export default ResultsCard;
