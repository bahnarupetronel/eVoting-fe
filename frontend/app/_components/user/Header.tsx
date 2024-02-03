import { Button } from "@mui/material";
import styles from "./user.module.css";

const Header = ({ handleOpenModal }: { handleOpenModal: Function }) => {
  return (
    <header className={styles["header"]}>
      <h2 className={styles["title"]}>Profilul meu</h2>{" "}
      <Button
        type="button"
        variant="outlined"
        className={styles["btn-edit"]}
        onClick={() => handleOpenModal()}
      >
        Editeaza profilul
      </Button>
    </header>
  );
};
export default Header;
