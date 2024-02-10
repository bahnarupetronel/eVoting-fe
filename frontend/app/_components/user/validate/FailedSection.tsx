import globalStyles from "@/_shared/stylesheets/global.module.css";
import styles from "../user.module.css";
import ErrorIcon from "@mui/icons-material/Error";
import { Button } from "@mui/material";

const FailedSection = ({ handleClick }) => {
  return (
    <section className={globalStyles["section-modal"]}>
      <ErrorIcon className={globalStyles["icon-error"]} />
      <h3 className={styles["title"]}> Verificarea nu a avut succes.</h3>
      <p>Verificarea identitatii nu a fost realizata.</p>
      <p>
        Datele din cont nu sunt similare cu datele de pe cartea de identitate.
      </p>
      <p>
        Modificati-va datele din cont sau reincercati verificarea.
        <Button
          variant="outlined"
          onClick={handleClick}
        >
          Reincercati
        </Button>
      </p>
    </section>
  );
};
export default FailedSection;
