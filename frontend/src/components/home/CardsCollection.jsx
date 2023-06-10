import React from "react";
import cards from "./getCards";
import styles from "./home.module.css";
import InfoCard from "./InfoCard";

const CardsCollection = () => {
  return (
    <div className={styles["cards-container"]}>
      {cards.map((card) => (
        <InfoCard props={card} key={`${card.title}`} />
      ))}
    </div>
  );
};

export default CardsCollection;
