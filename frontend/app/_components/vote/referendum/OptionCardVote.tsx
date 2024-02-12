import { Button } from "@mui/material";
import styles from "./referendum.module.css";
import useCookies from "@/_hooks/useCookies";

const OptionCardVote = ({ option, index }) => {
  const { getCookie } = useCookies();
  const role = getCookie("role");

  const getButtonClass = () => {
    // if (hasUserVotedResponse || role === "admin" || !isUserAllowedToVote)
    //   return "disabled";
    return "";
  };

  return (
    <div className={styles["option"]}>
      <h3 className={styles["option-title"]}>Varianta {index + 1}</h3>
      <h3 className={styles["option-title"]}>{option.optionName}</h3>

      <Button
        type="button"
        variant="outlined"
        className={`${styles["btn-card"]} ${styles[getButtonClass()]}`}
      >
        {" "}
        Voteaza
      </Button>
    </div>
  );
};
export default OptionCardVote;
