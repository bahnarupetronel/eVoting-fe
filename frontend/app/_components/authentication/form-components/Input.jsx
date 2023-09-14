import { forwardRef } from "react";
import "./form.css";

export const Input = forwardRef((props, ref) => {
  return (
    <input
      ref={ref}
      className="form-input"
      {...props}
    />
  );
});

export default Input;
