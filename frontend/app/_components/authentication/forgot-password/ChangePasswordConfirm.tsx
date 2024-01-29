import authStyles from "@/_shared/stylesheets/auth.module.css";
import styles from "./forgotPassword.module.css";
import Image from "next/image";
import Link from "next/link";

const ChangePasswordConfirm = () => {
  return (
    <main className={authStyles["container"]}>
      <div className={authStyles["img-container"]}>
        <Image
          src="/assets/vote.jpg"
          alt="vote-image"
          width={0}
          height={0}
          sizes="100%"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <section className={styles["section"]}>
        <h2>Email-ul a fost trimis.</h2>
        <p>Verifica mail-ul primit si urmeaza pasii.</p>
        <p>
          Daca nu ai primit in 5 minute, incearca din nou{" "}
          <Link
            href="/forgot-password"
            className={authStyles["a-auth"]}
          >
            aici
          </Link>
        </p>
      </section>
    </main>
  );
};
export default ChangePasswordConfirm;
