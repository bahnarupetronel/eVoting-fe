import { Button } from "@mui/material";
import styles from "./form.module.css";

export const Section = ({ title, children, handleClick }) => {
  return (
    <div className="section mb-4">
      <header className={styles["header"]}>
        <h3>{title}</h3>
        <Button
          type="button"
          variant="outlined"
          className={styles["btn-edit"]}
          onClick={handleClick}
        >
          Editeaza
        </Button>
      </header>
      <hr className={styles["hr"]} />
      <div className={styles["content"]}>{children}</div>
    </div>
  );
};

export const SectionRow = ({ children }) => {
  return <div className={styles["section-row"]}>{children}</div>;
};

export default Section;
