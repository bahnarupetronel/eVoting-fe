import styles from "./votesHistory.module.css";
import dayjs from "dayjs";
import DoneIcon from "@mui/icons-material/Done";

import { useRouter } from "next/navigation";

export const VoteHistoryCard = ({ vote, index }: { vote; index }) => {
  console.log(index);
  const year = dayjs(vote?.startDate).get("year");
  const router = useRouter();

  if (vote == null) return <div>Loading</div>;

  return (
    <div className={styles["container-card"]}>
      <h2 className={styles["index"]}>{index + 1}.</h2>
      {"Alegeri " + vote?.election.type.name + " " + year + "/"}{" "}
      {vote?.candidateType.name}
      <p className={styles["info"]}>Votat</p>
      <DoneIcon className={styles["icon"]} />
    </div>
  );
};
export default VoteHistoryCard;
