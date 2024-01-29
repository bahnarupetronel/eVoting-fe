import Header from "./Header";
import CardsCollection from "./CardsCollection";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles["container"]}>
      <Header />
      <CardsCollection />
    </div>
  );
};

export default Home;
