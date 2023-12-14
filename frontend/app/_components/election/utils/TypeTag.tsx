import styles from "../card.module.css";
import { getTypeColor } from "./getTypeColor";

export const TypeTag = ({ type }: { type: string }) => {
  const typeColor = getTypeColor(type); //add type to election
  return (
    <div className={`${styles["tag"]} ${styles[status]} ${styles[typeColor]}`}>
      <span className={styles["tag-text"]}>{type}</span>
    </div>
  );
};
export default TypeTag;
