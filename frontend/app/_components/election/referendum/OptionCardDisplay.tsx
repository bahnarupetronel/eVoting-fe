import { Button } from "@mui/material";
import styles from "./referendum.module.css";

const OptionCardDisplay = ({ option, index }) => {
  return (
    <div className={styles["option"]}>
      <h3 className={styles["option-title"]}>Varianta {index + 1}</h3>
      <h3 className={styles["option-title"]}>{option.optionName}</h3>

      <Button
        type="button"
        variant="outlined"
        disabled
      >
        {" "}
        Voteaza
      </Button>
    </div>
  );
};
export default OptionCardDisplay;
