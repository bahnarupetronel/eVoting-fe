import { ElectionModel } from "@/_interfaces/election.model";
import styles from "./election.module.css";
import dayjs from "dayjs";

const ElectionTitle = ({ election }: { election: ElectionModel }) => {
  const year = dayjs(election?.startDate).get("year");

  if (!election) return <h2></h2>;

  return (
    <h2 className={styles["title"]}>
      {election?.type.name === "Referendum" ? (
        election?.type.name
      ) : (
        <>Alegeri {election?.type.name}</>
      )}
      {" " + year}
    </h2>
  );
};
export default ElectionTitle;
