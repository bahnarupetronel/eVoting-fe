import globalStyles from "@/_shared/stylesheets/global.module.css";
import styles from "../user.module.css";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";

const IsProcessingSection = () => {
  return (
    <section className={globalStyles["section-modal"]}>
      <HourglassBottomIcon className={globalStyles["icon-loading"]} />
      <h3 className={styles["title"]}> Verificarea este procesata</h3>
      <p>
        O sa primiti in urmatoarele minute un email cu rezultatul verificarii.Va
        multumim pentru rabdare.
      </p>
      <p>O zi buna!</p>
    </section>
  );
};
export default IsProcessingSection;
