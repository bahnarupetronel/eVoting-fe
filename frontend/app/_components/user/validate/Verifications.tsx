import Link from "next/link";
import styles from "../user.module.css";
import CustomSpan from "@/_components/form/customSpan/CustomSpan";

const Verifications = ({
  isEmailConfirmed,
  isIdentityVerified,
}: {
  isEmailConfirmed: boolean;
  isIdentityVerified: boolean;
}) => {
  return (
    <section className={styles["section-validate-account"]}>
      <header className={styles["header"]}>
        <h3 className={styles["title"]}>Verificare identitate și email</h3>
      </header>
      <hr className={styles["hr"]} />
      <main>
        {!isEmailConfirmed ? (
          <p>
            Email: <CustomSpan text={"Valideaza email-ul!"} />
          </p>
        ) : (
          <p>
            Email: <CustomSpan text={"Adresa de email a fost validata."} />
          </p>
        )}
        {!isIdentityVerified ? (
          <p>
            Identitate:{" "}
            <CustomSpan
              text={"Pentru a vota, trebuie sa ai identitatea validata."}
            />{" "}
            Apasa{" "}
            <Link
              href="/user/validate/account"
              target="blank"
            >
              aici
            </Link>{" "}
            si urmeaza pasii urmatori.
          </p>
        ) : (
          <p></p>
        )}
      </main>
    </section>
  );
};
export default Verifications;
