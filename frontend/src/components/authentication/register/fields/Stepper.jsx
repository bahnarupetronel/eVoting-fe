import { useLocation } from "react-router-dom";
import "./stepper.css";

export const Stepper = () => {
  const location = useLocation();

  const getLinkClass = (path) => {
    return "nav-link " + (path === location.pathname ? "active" : "disabled");
  };

  return (
    <nav className={"stepper"}>
      <ul className={"navbar-nav"}>
        <li className={"step nav-item"}>
          <span className={getLinkClass("/register")}>Registration</span>
        </li>
        <li className={"step nav-item"}>
          <span className={getLinkClass("/register/form2")}>Address</span>
        </li>
        <li className={"step nav-item"}>
          <span className={getLinkClass("/register/form3")}>Add CI photo</span>
        </li>
        <li className={"step nav-item"}>
          <span className={getLinkClass("/register/confirm")}>Confirm</span>
        </li>
      </ul>
    </nav>
  );
};

export default Stepper;
