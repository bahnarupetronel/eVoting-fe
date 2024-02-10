import styles from "@/_shared/stylesheets/auth.module.css";

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
