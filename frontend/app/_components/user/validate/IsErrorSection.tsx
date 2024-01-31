import globalStyles from "@/_shared/stylesheets/global.module.css";
import styles from "../user.module.css";
import ErrorIcon from "@mui/icons-material/Error";
import { Button } from "@mui/material";

const IsErrorSection = ({ handleClick }) => {
  return (
    <section className={globalStyles["section-modal"]}>
      <ErrorIcon className={globalStyles["icon-error"]} />
      <h3 className={styles["title"]}> Ceva nu a functionat corect</h3>
      <p>Verificarea identitatii poate fi realizata o singura data.</p>
      <p>
        Daca nu ati realizat verificarea, pentru reincercare, apasati butonul
        urmator:{" "}
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
export default IsErrorSection;
