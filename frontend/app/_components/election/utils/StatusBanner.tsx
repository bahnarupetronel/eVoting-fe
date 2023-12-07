import { getElectionStatus } from "./getElectionStatus";
import styles from "../card.module.css";
import { getStatusColor } from "./getStatusColor";

export const StatusBanner = ({
  startDate,
  endDate,
}: {
  startDate: Date;
  endDate: Date;
}) => {
  const status: string = getElectionStatus(startDate, endDate);
  const statusTagColor = getStatusColor(status);
  return (
    <div
      className={`${styles["banner"]} ${styles[status]} ${styles[statusTagColor]}`}
    >
      {status}
    </div>
  );
};
export default StatusBanner;
