import globalStyles from "@/_shared/stylesheets/global.module.css";
import styles from "../user.module.css";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";

const IsLoadingSection = () => {
  return (
    <section className={globalStyles["section-modal"]}>
      <HourglassBottomIcon className={globalStyles["icon-loading"]} />
      <h3 className={styles["title"]}> Se incarca....</h3>
    </section>
  );
};
export default IsLoadingSection;
