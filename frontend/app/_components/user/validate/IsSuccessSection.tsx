import globalStyles from "@/_shared/stylesheets/global.module.css";
import styles from "../user.module.css";
import DoneIcon from "@mui/icons-material/Done";

const IsSuccessSection = () => {
  return (
    <section className={globalStyles["section-modal"]}>
      <DoneIcon className={globalStyles["icon-success"]} />
      <h3 className={styles["title"]}> Multumim pentru verificare.</h3>
      <p>
        Verficarea a fost realizata cu succes. O sa primiti in urmatoarele
        minute un email cu rezultatul verificarii.
      </p>
      <p>O zi buna!</p>
    </section>
  );
};
export default IsSuccessSection;
