import React from "react";
import cards from "../../_services/home/getCards";
import styles from "./home.module.css";
import Card from "./Card";

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
