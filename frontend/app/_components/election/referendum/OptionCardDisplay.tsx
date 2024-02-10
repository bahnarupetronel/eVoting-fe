import { Button } from "@mui/material";
import styles from "./referendum.module.css";
import { usePathname } from "next/navigation";
import useCookies from "@/_hooks/useCookies";

const OptionCardDisplay = ({
  option,
  index,
  hasUserVotedResponse,
  isUserAllowedToVote,
}) => {
  const pathname = usePathname();
  const electionId: string = pathname.split("/")[2];
  const { getCookie } = useCookies();
  const role = getCookie("role");

  const getButtonClass = () => {
    if (hasUserVotedResponse || role === "admin" || !isUserAllowedToVote) {
      console.log("disbled");
      return "disabled";
    }
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
export default OptionCardDisplay;
