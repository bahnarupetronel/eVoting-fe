import CircularProgress from "@mui/material/CircularProgress";
import styles from "./isLoading.module.css";

const IsLoadingComponent = () => {
  return (
    <div className={styles["loading"]}>
      <CircularProgress />
    </div>
  );
};
export default IsLoadingComponent;
