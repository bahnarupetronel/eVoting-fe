import styles from "./stepper.module.css";

export const Stepper = ({ location }) => {
  const getLinkClass = (path) => {
    return "nav-link-" + (path === location ? "active" : "disabled");
  };

  return (
    <nav className={styles["stepper"]}>
      <ul className={styles["navbar-nav"]}>
        <li className={styles["step nav-item"]}>
          <span className={styles[getLinkClass("form1")]}>
            Detalii personale
          </span>
        </li>
        <li className={styles["step nav-item"]}>
          <span className={styles[getLinkClass("form2")]}>Adresa</span>
        </li>
        <li className={styles["step nav-item"]}>
          <span className={styles[getLinkClass("form3")]}>
            Adauga poza cu CI
          </span>
        </li>
        <li className={styles["step nav-item"]}>
          <span className={styles[getLinkClass("confirm")]}>Cofirmare</span>
        </li>
      </ul>
    </nav>
  );
};

export default Stepper;
