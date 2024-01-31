import globalStyles from "@/_shared/stylesheets/global.module.css";
import styles from "../user.module.css";
import ErrorIcon from "@mui/icons-material/Error";
import { Button } from "@mui/material";

const IsNotVerified = ({ handleClick }) => {
  return (
    <section className={globalStyles["section-modal"]}>
      <ErrorIcon className={globalStyles["icon-error"]} />
      <h3 className={styles["title"]}> Verificarea nu a avut succes</h3>
      <p>
        O sa primiti in urmatoarele minute un email cu rezultatul verificarii.
      </p>
      <p>O zi buna!</p>
      <p>
        Pentru reincercare, apasati butonul urmator:{" "}
        <Button
          variant="outlined"
          onClick={handleClick}
        >
          Reincercati
        </Button>
      </p>{" "}
    </section>
  );
};
export default IsNotVerified;
