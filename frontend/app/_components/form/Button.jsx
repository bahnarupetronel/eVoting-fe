import { forwardRef } from "react";
import styles from "./button.module.css";

export const Button = forwardRef(
  ({ children, variant = "primary", ...props }, ref) => {
    return (
      <button
        type="button"
        className={`btn btn-${variant}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

export default Button;
