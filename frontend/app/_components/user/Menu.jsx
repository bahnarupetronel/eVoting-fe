"use client";

import { useEffect, useRef, useState } from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import TimelineIcon from "@mui/icons-material/Timeline";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";
import Link from "next/link";

import styles from "./menu.module.css";
export default function MenuListComposition() {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

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
          href="/user/validate-account"
          className={styles["nav-link"]}
        >
          <AddBoxIcon className={styles["icon"]} />
          Validare cont
        </Link>
        <Link
          href="/user/vote/history"
          className={styles["nav-link"]}
        >
          <TimelineIcon className={styles["icon"]} />
          Istoricul voturilor
        </Link>
        <Link
          href="/logout"
          className={styles["nav-link"]}
        >
          <LogoutIcon className={styles["icon"]} />
          Delogare
        </Link>
      </ul>
    </nav>
  );
}
