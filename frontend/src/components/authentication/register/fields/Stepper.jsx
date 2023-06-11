import "./stepper.css";

export const Stepper = ({ location }) => {
  const getLinkClass = (path) => {
    return "nav-link " + (path === location ? "active" : "disabled");
  };

  return (
    <nav className={"stepper"}>
      <ul className={"navbar-nav"}>
        <li className={"step nav-item"}>
          <span className={getLinkClass("form1")}>Registration</span>
        </li>
        <li className={"step nav-item"}>
          <span className={getLinkClass("form2")}>Address</span>
        </li>
        <li className={"step nav-item"}>
          <span className={getLinkClass("form3")}>Add CI photo</span>
        </li>
        <li className={"step nav-item"}>
          <span className={getLinkClass("confirm")}>Confirm</span>
        </li>
      </ul>
    </nav>
  );
};

export default Stepper;
