import Link from "next/link";
import { ElectionModel } from "@/_interfaces/election.model";
import styles from "./card.module.css";
import dayjs from "dayjs";
import { Button } from "@mui/material";
import { formatDate } from "../utils/formatDate";
import { useRouter } from "next/navigation";

export const ElectionCard = ({ election }: { election: ElectionModel }) => {
  const year = dayjs(election?.startDate).get("year");
  const router = useRouter();

  const handleClick = () => {
    router.push(`/vote/${election.electionId}`);
  };

  if (election == null) return <div>Loading</div>;

  return (
    <div className={styles["container"]}>
      <div className={styles["details"]}>
        <Link
          className={styles["title"]}
          href={`/vote/${election.electionId}`}
          target="_blank"
        >
          {election.type.name + " " + year}
        </Link>
        <span>Se termina: {formatDate(election.endDate)}</span>
      </div>
      <Button
        type="button"
        variant="outlined"
        className={styles["btn"]}
        onClick={handleClick}
      >
        {" "}
        Voteaza
      </Button>
    </div>
  );
};
export default ElectionCard;
