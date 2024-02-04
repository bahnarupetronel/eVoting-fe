import Link from "next/link";
import { ElectionModel } from "@/_interfaces/election.model";
import styles from "./card.module.css";
import dayjs from "dayjs";
import { Button } from "@mui/material";
import globalStyles from "@/_shared/stylesheets/global.module.css";
import { formatDate } from "../utils/formatDate";

export const UpcomingEventCard = ({
  election,
}: {
  election: ElectionModel;
}) => {
  const year = dayjs(election?.startDate).get("year");

  if (election == null) return <div>Loading</div>;

  return (
    <div className={styles["container"]}>
      <div className={styles["details"]}>
        <Link
          className={styles["title"]}
          href={`/election/${election.electionId}`}
          target="_blank"
        >
          {election.type.name + " " + year}
        </Link>
        <span>Incepe: {formatDate(election.startDate)}</span>
      </div>

      <Button
        type="button"
        variant="outlined"
        className={"btn"}
      >
        <Link
          href={`/election/${election.electionId}`}
          className={globalStyles["link"]}
        >
          Vezi eveniment
        </Link>
      </Button>
    </div>
  );
};
export default UpcomingEventCard;
