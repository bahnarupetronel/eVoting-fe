import { forwardRef } from "react";
import "./button.css";

export const Button = forwardRef(
  ({ children, variant = "primary", ...props }, ref) => {
    return (
      <button className={`btn btn-${variant}`} {...props}>
        {children}
      </button>
    );
  }
);

export default Button;
