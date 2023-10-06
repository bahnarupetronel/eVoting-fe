import styles from "./span.module.css";

const CustomSpan = ({ text }) => {
  return <span className={styles["state-info"]}> {text}</span>;
};
export default CustomSpan;
