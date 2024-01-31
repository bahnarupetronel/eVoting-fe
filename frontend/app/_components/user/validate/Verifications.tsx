import Link from "next/link";
import styles from "../user.module.css";
import CustomSpan from "@/_components/form/customSpan/CustomSpan";
import ErrorIcon from "@mui/icons-material/Error";
import DoneIcon from "@mui/icons-material/Done";

const Verifications = ({
  isEmailConfirmed,
  isIdentityVerified,
}: {
  isEmailConfirmed: boolean;
  isIdentityVerified: boolean;
}) => {
  return (
    <main className={styles["section-validate-account"]}>
      <header className={styles["header"]}>
        <h3 className={styles["title"]}>Verificare identitate și email</h3>
      </header>
      <hr className={styles["hr"]} />
      <section>
        {!isEmailConfirmed ? (
          <div className={styles["div-verifications"]}>
            <p>
              Email: <CustomSpan text={"Valideaza email-ul!"} />
            </p>
            <ErrorIcon className={styles["icon-error"]} />
          </div>
        ) : (
          <div className={styles["div-verifications"]}>
            <CustomSpan text={"Adresa de email a fost confirmata."} />
            <DoneIcon className={styles["icon-success"]} />
          </div>
        )}
        {!isIdentityVerified ? (
          <div className={styles["div-verifications"]}>
            <p>
              Identitate:{" "}
              <span className={styles["span"]}>
                Apasa{" "}
                <Link
                  href="/user/validate/identity"
                  target="blank"
                >
                  aici
                </Link>{" "}
                si urmeaza pasii urmatori pentru validarea indentitatii.
              </span>
            </p>
            <ErrorIcon className={styles["icon-error"]} />
          </div>
        ) : (
          <div className={styles["div-verifications"]}>
            <CustomSpan text={"Identitatea a fost verificata."} />
            <DoneIcon className={styles["icon-success"]} />
          </div>
        )}
      </section>
    </main>
  );
};
export default Verifications;
