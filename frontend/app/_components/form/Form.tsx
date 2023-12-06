import styles from "../authentication/register/register.module.css";

export const Form = ({ children, ...props }) => {
  return (
    <form
      {...props}
      noValidate
      className={styles["form"]}
    >
      {children}
    </form>
  );
};

export default Form;
