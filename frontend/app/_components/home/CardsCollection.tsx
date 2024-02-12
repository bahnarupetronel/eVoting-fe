import styles from "./home.module.css";
import Link from "next/link";
import Image from "next/image";
import { CardContent, Typography } from "@mui/material";
import EventImage from "../../../public/assets/icons/event.jpg";
import TypesImage from "../../../public/assets/icons/types.png";
import VoteImage from "../../../public/assets/icons/vote.jpg";
import FAQImage from "../../../public/assets/icons/faq.jpg";
import AboutUsImage from "../../../public/assets/icons/about.png";
import RulesImage from "../../../public/assets/icons/rules.jpg";

const CardsCollection = () => {
  return (
    <div className={styles["cards-container"]}>
      <div className={styles["card"]}>
        <Link
          href={"/election"}
          className={styles["card-link"]}
        >
          <Image
            className={styles["image-card"]}
            width={200}
            height={200}
            priority
            sizes="(min-width: 200px)"
            src={EventImage}
            alt={"event-icon"}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
            >
              Evenimente
            </Typography>
          </CardContent>
        </Link>
      </div>
      <div className={styles["card"]}>
        <Link
          href={"/election-types"}
          className={styles["card-link"]}
        >
          <Image
            className={styles["image-card"]}
            width={200}
            height={200}
            priority
            sizes="(min-width: 200px)"
            src={TypesImage}
            alt={"types-icon"}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
            >
              Tipuri de evenimente
            </Typography>
          </CardContent>
        </Link>
      </div>
      <div className={styles["card"]}>
        <Link
          href={"/how-to-vote"}
          className={styles["card-link"]}
        >
          <Image
            className={styles["image-card"]}
            width={200}
            height={200}
            priority
            sizes="(min-width: 200px)"
            src={VoteImage}
            alt={"vote-icon"}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
            >
              Cum sa votezi
            </Typography>
          </CardContent>
        </Link>
      </div>
      <div className={styles["card"]}>
        <Link
          href={"/faq"}
          className={styles["card-link"]}
        >
          <Image
            className={styles["image-card"]}
            width={150}
            height={150}
            priority
            sizes="(min-width: 150px)"
            src={FAQImage}
            alt={"faq-icon"}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
            >
              Intrebari frecvente
            </Typography>
          </CardContent>
        </Link>
      </div>
      <div className={styles["card"]}>
        <Link
          href={"/about"}
          className={styles["card-link"]}
        >
          <Image
            className={styles["image-card"]}
            width={200}
            height={200}
            priority
            sizes="(min-width: 200px)"
            src={AboutUsImage}
            alt={"about-us-icon"}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
            >
              Despre noi
            </Typography>
          </CardContent>
        </Link>
      </div>
      <div className={styles["card"]}>
        <Link
          href={"/rules"}
          className={styles["card-link"]}
        >
          <Image
            className={styles["image-card"]}
            width={200}
            height={200}
            priority
            sizes="(min-width: 200px)"
            src={RulesImage}
            alt={"rules-icon"}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
            >
              Reguli
            </Typography>
          </CardContent>
        </Link>
      </div>
    </div>
  );
};

export default CardsCollection;
