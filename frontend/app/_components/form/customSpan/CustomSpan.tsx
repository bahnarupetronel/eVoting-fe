import styles from "./span.module.css";

const CustomSpan = ({ text }: { text: string }) => {
  return <span className={styles["state-info"]}> {text}</span>;
};
export default CustomSpan;
