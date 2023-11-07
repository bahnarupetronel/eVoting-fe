import Link from "next/link";
import styles from "./card.module.css";

const formatDate = (date) => {
  const dateObject = new Date(date);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const formattedDate = dateObject.toLocaleDateString("en-US", options);
  return formattedDate;
};

const Card = ({ election }) => {
  const startDate = formatDate(election?.startDate);
  const endDate = formatDate(election?.endDate);

  // if (election == null) return <div>Loading</div>;
  return (
    <div className={styles["container"]}>
      <Link
        className={styles["title"]}
        href={`/election/${election.electionId}`}
      >
        {election.title}
      </Link>
      <p className={styles["p-info"]}>
        Description:{" "}
        <span className={styles["span-info"]}>{election.description}</span>
      </p>
      <div className={styles["container-dates"]}>
        <p className={`${styles["p-info"]} ${styles["p-inline"]}`}>
          Start date: <span className={styles["span-info"]}>{startDate}</span>
        </p>

        <p className={`${styles["p-info"]} ${styles["p-inline"]}`}>
          End date: <span className={styles["span-info"]}>{endDate}</span>
        </p>
      </div>
    </div>
  );
};
export default Card;
