import NewsCard from "./NewsCard";
import styles from "./news.module.css";

const News = () => {
  return (
    <div className={styles["container-news"]}>
      <NewsCard />
      <NewsCard />
    </div>
  );
};
export default News;
