import { Button } from "@mui/material";
import styles from "../user.module.css";
import WarningIcon from "@mui/icons-material/Warning";
import Link from "next/link";

const ValidateEmail = ({ email }: { email: string }) => {
  if (!email) return null;
  return (
    <div className={styles["validate"]}>
      <WarningIcon />
      <ul className={styles["ul"]}>
        <li className={styles["li"]}>Verifica adresa de email!</li>
        <li className={styles["li"]}>
          {" "}
          Acceseaza{" "}
          <Link
            className={styles["link-validation"]}
            href="https://www.gmail.com"
            target="blank"
          >
            gmail.com
          </Link>{" "}
          pentru a confirma adresa de email {email}.
        </li>
      </ul>
      <Button
        variant="outlined"
        color="warning"
        className={styles["btn-resend"]}
      >
        Retrimite email-ul
      </Button>
    </div>
  );
};
export default ValidateEmail;
