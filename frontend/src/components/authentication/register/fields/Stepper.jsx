import "./stepper.css";

export const Stepper = ({ location }) => {
  const getLinkClass = (path) => {
    return "nav-link " + (path === location ? "active" : "disabled");
  };

  return (
    <nav className={"stepper"}>
      <ul className={"navbar-nav"}>
        <li className={"step nav-item"}>
          <span className={getLinkClass("form1")}>Detalii personale</span>
        </li>
        <li className={"step nav-item"}>
          <span className={getLinkClass("form2")}>Adresa</span>
        </li>
        <li className={"step nav-item"}>
          <span className={getLinkClass("form3")}>Adauga poza cu CI</span>
        </li>
        <li className={"step nav-item"}>
          <span className={getLinkClass("confirm")}>Cofirmare</span>
        </li>
      </ul>
    </nav>
  );
};

export default Stepper;
