"use client";

import { useEffect, useRef, useState } from "react";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import AddBoxIcon from "@mui/icons-material/AddBox";
import TimelineIcon from "@mui/icons-material/Timeline";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";
import Link from "next/link";

import "./menu.css";
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
    <Stack
      direction="row"
      spacing={2}
      className="sidebar"
    >
      <Paper className="paper-container">
        <MenuList>
          <Link href="/user/:userId">
            <AccountBoxIcon className="icon-margin" />
            Profil
          </Link>
          <Link href="/user/:userId/vote/history">
            <TimelineIcon className="icon-margin" />
            Istoricul voturilor
          </Link>
          <Link href="/user/:userId/validate-account">
            <AddBoxIcon className="icon-margin" />
            Validare cont
          </Link>
          <Link href="/logout">
            <LogoutIcon className="icon-margin" />
            Delogare
          </Link>
        </MenuList>
      </Paper>
    </Stack>
  );
}
