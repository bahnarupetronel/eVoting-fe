import { cards } from "@/_services/home/getCards";
import Card from "./Card";
import styles from "./home.module.css";

const CardsCollection = () => {
  return (
    <div className={styles["cards-container"]}>
      {cards.map((card, index) => (
        <Card
          props={card}
          key={index}
        />
      ))}
    </div>
  );
};

export default CardsCollection;
