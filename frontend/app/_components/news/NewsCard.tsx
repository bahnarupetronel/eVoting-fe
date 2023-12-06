import styles from "./news.module.css";
import { getImage } from "./getImage.js";

const NewsCard = () => {
  const fileName = "./example.png";
  const { loading, error, image } = getImage(fileName);
  return (
    <button className={styles["card-news"]}>
      {loading ? (
        <p>Loading</p>
      ) : (
        <div className={styles["container-news-image"]}>
          <img className={styles["card-image"]} src={image} alt={"image"} />
        </div>
      )}
      <div className={styles["content"]}>
        <div className={styles["tag"]}>News</div>
        <h3>
          Title Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
          veniam sint voluptas autem quas? Aliquam.
        </h3>
        <h4>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
          mollitia autem sit error minima.
        </h4>
        <p className={styles["news-date"]}>22.05.2002</p>
      </div>
    </button>
  );
};
export default NewsCard;
