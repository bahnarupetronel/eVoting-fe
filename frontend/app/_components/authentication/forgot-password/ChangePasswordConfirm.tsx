import styles from "./forgotPassword.module.css";
import Link from "next/link";
import globalStyles from "@/_shared/stylesheets/global.module.css";
import authStyles from "@/_shared/stylesheets/auth.module.css";
import DoneIcon from "@mui/icons-material/Done";

const ChangePasswordConfirm = () => {
  return (
    <div className={globalStyles["container"]}>
      <h1 className={globalStyles["title-evoting"]}> eVoting</h1>
      <section className={globalStyles["section-modal"]}>
        <DoneIcon className={globalStyles["icon-success"]} />
        <h3 className={styles["title"]}> Email-ul a fost trimis</h3>
        <p>Verifica email-ul primit si urmeaza pasii.</p>
        <p>
          Daca nu l-ai primit in 5 minute, incearca din nou{" "}
          <Link
            href="/forgot-password"
            className={authStyles["a-auth"]}
          >
            aici
          </Link>
        </p>
      </section>
    </div>
  );
};
export default ChangePasswordConfirm;
