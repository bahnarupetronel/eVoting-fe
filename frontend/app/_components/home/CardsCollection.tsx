import { cards, loggedInCards } from "@/_services/home/getCards";
import Card from "./Card";
import styles from "./home.module.css";
import useCookies from "@/_hooks/useCookies";

const CardsCollection = () => {
  const { getCookie } = useCookies();
  const user = getCookie("user");
  const cardsList = user ? loggedInCards : cards;
  return (
    <div className={styles["cards-container"]}>
      {cardsList.map((card, index) => (
        <Card
          props={card}
          key={index}
        />
      ))}
    </div>
  );
};

export default CardsCollection;
