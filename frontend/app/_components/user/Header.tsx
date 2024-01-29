import { Button } from "@mui/material";
import styles from "./user.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles["header"]}>
      <h2 className={styles["title"]}>Profilul meu</h2>{" "}
      <Button
        variant="outlined"
        className={styles["btn-edit"]}
      >
        <Link
          href="/user/edit-profile"
          key="edit-profile"
          target="blank"
          className={styles["link"]}
        >
          Editeaza profilul
        </Link>
      </Button>
    </header>
  );
};
export default Header;
