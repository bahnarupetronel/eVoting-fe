import styles from "./stepper.module.css";

export const Stepper = ({ location }) => {
  const getLinkClass = (path) => {
    return "nav-link-" + (path === location ? "active" : "disabled");
  };

  return (
    <nav className={styles["stepper"]}>
      <ul className={styles["nav-ul"]}>
        <li className={`${styles["nav-item"]}`}>
          <span className={styles[getLinkClass("form1")]}>
            Detalii personale
          </span>
        </li>
        <li className={`${styles["nav-item"]}`}>
          <span className={styles[getLinkClass("form2")]}>Adresa</span>
        </li>
        <li className={`${styles["nav-item"]}`}>
          <span className={styles[getLinkClass("confirm")]}>Confirmare</span>
        </li>
      </ul>
    </nav>
  );
};

export default Stepper;
