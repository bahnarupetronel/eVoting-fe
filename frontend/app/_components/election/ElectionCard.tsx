import Link from "next/link";
import { ElectionModel } from "@/_interfaces/election.model";
import { TypeTag } from "./utils/TypeTag";
import { StatusBanner } from "./utils/StatusBanner";
import { formatDate } from "./utils/formatDate";
import styles from "./card.module.css";
import dayjs from "dayjs";
import { usePathname } from "next/navigation";

export const ElectionCard = ({ election }: { election: ElectionModel }) => {
  const pathname = usePathname();
  const isAdminRoute: boolean = pathname.split("/")[1] === "admin";

  const startDate: string = formatDate(election?.startDate);
  const endDate: string = formatDate(election?.endDate);
  const year = dayjs(election?.startDate).get("year");

  if (election == null) return <div>Loading</div>;

  return (
    <div className={styles["container"]}>
      <StatusBanner
        startDate={election?.startDate}
        endDate={election?.endDate}
      />
      <Link
        className={styles["title"]}
        href={
          isAdminRoute
            ? `/admin/election/${election.electionId}`
            : `/election/${election.electionId}`
        }
        target="_blank"
      >
        {election.type.name + " " + year}
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
        <TypeTag type={election.type.name} />
      </div>
    </div>
  );
};
export default ElectionCard;
