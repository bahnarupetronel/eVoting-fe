import Link from "next/link";
import { ElectionModel } from "@/_interfaces/election.model";
import styles from "./card.module.css";
import dayjs from "dayjs";
import { Button } from "@mui/material";

export const ElectionCard = ({ election }: { election: ElectionModel }) => {
  const year = dayjs(election?.startDate).get("year");

  if (election == null) return <div>Loading</div>;

  return (
    <div className={styles["container"]}>
      <Link
        className={styles["title"]}
        href={`/election/${election.electionId}`}
        target="_blank"
      >
        {election.type.name + " " + year}
      </Link>
      <Button
        type="button"
        variant="outlined"
        className={styles["btn"]}
      >
        {" "}
        Voteaza
      </Button>
    </div>
  );
};
export default ElectionCard;
