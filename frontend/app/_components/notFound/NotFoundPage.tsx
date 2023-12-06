import styles from "./notFound.module.css";

const NotFoundPage = () => {
  return (
    <div>
      <div className={styles["container"]}>Pagina nu a fost gasita</div>
      <span>O sa fii redirectat in 5 secunde</span>
    </div>
  );
};
export default NotFoundPage;
