import styles from "./dropdown.module.css";
import Link from "next/link";
import WarningIcon from "@mui/icons-material/Warning";
import useCookies from "@/_hooks/useCookies";

const HeaderUserNotAllowedToVote = () => {
  const { getCookie } = useCookies();
  const role = getCookie("role");

  return (
    <header className={styles["header-validate"]}>
      <section className={styles["section-header"]}>
        <WarningIcon />
        <div>
          <p className={styles["p-warning"]}>Nu poti vota!</p>
          {role === "admin" ? (
            <p className={styles["p-warning"]}>
              Conturile de admin nu au voie sa voteze.
            </p>
          ) : (
            <p className={styles["p-warning"]}>
              Verifica datele de pe{" "}
              <Link
                className={styles["link-validation"]}
                href="/user/account"
                target="blank"
              >
                pagina ta
              </Link>{" "}
              pentru a putea vota.
            </p>
          )}
        </div>
      </section>
    </header>
  );
};
export default HeaderUserNotAllowedToVote;
