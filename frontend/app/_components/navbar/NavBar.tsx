"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Drawer,
  IconButton,
  AppBar,
  CssBaseline,
  Typography,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useAuth } from "@/_context/user/UserContext";
import styles from "./nav.module.css";

export default function NavBar(props) {
  const { isLoggedIn } = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Toolbar
      className={`${styles["nav-mobile"]}`}
      onClick={handleDrawerToggle}
      role="navigation"
    >
      <ul className={styles["nav-box"]}>
        <Link
          key="acasa"
          href="/"
          className={styles["nav-btn-mobile"]}
        >
          Acasa
        </Link>
        {isLoggedIn && (
          <Link
            key="voteaza"
            href="/vote"
            className={styles["nav-btn-mobile"]}
          >
            Voteaza
          </Link>
        )}
        {isLoggedIn ? (
          <Link
            key="contul-meu"
            href="/user/account"
            className={styles["nav-btn-mobile"]}
          >
            Contul meu
          </Link>
        ) : (
          <Link
            key="login"
            href="/login"
            className={styles["nav-btn-mobile"]}
          >
            Login
          </Link>
        )}
      </ul>
    </Toolbar>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <AppBar className={styles["nav-header"]}>
      <CssBaseline />
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        className={styles["nav-open-icon"]}
      >
        <MenuIcon />
      </IconButton>
      <nav className={styles["nav-box"]}>
        <Typography className={styles["nav-logo"]}>eVoting</Typography>
        <ul className={styles["nav-box"]}>
          <Link
            key="acasa"
            href="/"
            className={styles["nav-btn"]}
          >
            Acasa
          </Link>
          {isLoggedIn && (
            <Link
              key="voteaza"
              href="/vote"
              className={styles["nav-btn"]}
            >
              Voteaza
            </Link>
          )}
          {isLoggedIn ? (
            <Link
              key="contul-meu"
              href="/user/account"
              className={styles["nav-btn"]}
            >
              Contul meu
            </Link>
          ) : (
            <Link
              key="login"
              href={"/login"}
              className={styles["nav-btn"]}
            >
              Login
            </Link>
          )}
        </ul>
      </nav>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}
