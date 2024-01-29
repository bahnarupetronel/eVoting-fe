import Link from "next/link";
import styles from "../user.module.css";

const ValidateIdentity = ({
  isEmailConfirmed,
}: {
  isEmailConfirmed: boolean;
}) => {
  return (
    <section className={styles["section-validate-account"]}>
      <header className={styles["header"]}>
        <h2 className={styles["title"]}>Validare identitate</h2>
      </header>
      <hr className={styles["hr"]} />
      <main>
        {/* {!isEmailConfirmed ? (
          <p>
            Valideaza email-ul{" "}
            <Link
              href="/user/validate/email"
              target="blank"
            >
              aici
            </Link>
            .
          </p>
        ) : (
          <p>Adresa de email a fost validata!</p>
        )} */}
        {
          <p>
            Pentru a vota, trebuie sa ai identitatea validata. Apasa{" "}
            <Link
              href="/user/validate/account"
              target="blank"
            >
              aici
            </Link>{" "}
            si urmeaza pasii urmatori.
          </p>
        }
      </main>
    </section>
  );
};
export default ValidateIdentity;
