import styles from "../../_components/election/id/election.module.css";

export default function Layout({ children }) {
  return <div className={styles["container-layout"]}>{children}</div>;
}
