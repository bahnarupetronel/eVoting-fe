"use client";

import { Button } from "@mui/material";
import styles from "./notFound.module.css";
import globalStyles from "@/_shared/stylesheets/global.module.css";
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <div className={globalStyles["container"]}>
      <h1 className={globalStyles["title-evoting"]}> eVoting</h1>

      <section className={globalStyles["section-modal"]}>
        <h3 className={styles["title"]}>Pagina nu a fost gasita.</h3>
        <div>
          <p>
            URL-ul accesat nu mai exista sau s-a pierdut in timpul
            modificarilor.
          </p>
          <p>Va rugam sa reverificati URL-ul si sa incercati din nou.</p>
          <Button
            variant="outlined"
            onClick={handleClick}
          >
            Acasa
          </Button>
        </div>
      </section>
    </div>
  );
};
export default NotFoundPage;
