import { ElectionModel } from "@/_interfaces/election.model";
import styles from "./election.module.css";
import dayjs from "dayjs";
import { usePathname } from "next/navigation";
import Link from "next/link";

const ElectionTitle = ({ election }: { election: ElectionModel }) => {
  const year = dayjs(election?.startDate).get("year");
  const pathname = usePathname();
  const route = pathname.split("/")[1];
  if (!election) return <h2></h2>;

  return (
    <header className={styles["header-event"]}>
      <h2 className={styles["title"]}>
        {election?.type.name === "Referendum" ? (
          election?.type.name
        ) : (
          <>Alegeri {election?.type.name}</>
        )}
        {" " + year}
      </h2>
      {route === "vote" && (
        <Link
          href={`/election/${election.electionId}`}
          className={styles["link-results"]}
        >
          Rezultate{" "}
        </Link>
      )}
    </header>
  );
};
export default ElectionTitle;
