"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import TimelineIcon from "@mui/icons-material/Timeline";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";
import styles from "./menu.module.css";

export default function MenuListComposition() {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <nav className={styles["container"]}>
      <ul className={styles["nav-list"]}>
        <Link
          href="/user/account"
          className={styles["nav-link"]}
        >
          <AccountBoxIcon className={styles["icon"]} />
          Contul meu
        </Link>

        <Link
          href="/user/votes-history"
          className={styles["nav-link"]}
        >
          <TimelineIcon className={styles["icon"]} />
          Voturi
        </Link>
        <Link
          href="/logout"
          className={`${styles["nav-link"]} ${styles["logout"]}`}
        >
          <LogoutIcon className={styles["icon"]} />
          Delogare
        </Link>
      </ul>
    </nav>
  );
}
