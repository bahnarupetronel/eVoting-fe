"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useAuth } from "../../../_context/user/UserContext";
import Link from "next/link";

const drawerWidth = 240;
const navItems = ["Home", "Vote", "Results", "About", "Account"];
const hrefItem = {
  Home: "/",
  Vote: "/vote",
  Results: "/results/live",
  About: "/about",
  Account: "/user/:userId",
};

export default function NavBar(props) {
  const { isLoggedIn } = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const navTo = (link) => {
    console.log("HELLLLLLLLLOOOOOOOO");
    console.log(link);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
    >
      <Typography
        variant="h6"
        sx={{ my: 2 }}
      >
        eVoting
      </Typography>
      <Divider />
      <List>
        <ListItem
          key="acasa"
          disablePadding
        >
          <div onClick={() => navTo("/home")}>Acasa</div>
        </ListItem>
        {isLoggedIn ? (
          <ListItem
            key="voteaza"
            disablePadding
          >
            <div onClick={() => navTo("/vote")}>Voteaza</div>
          </ListItem>
        ) : (
          <></>
        )}
        {isLoggedIn ? (
          <ListItem
            key="contul-meu"
            disablePadding
          >
            <div onClick={() => navTo("/user/account")}>Contul meu</div>
          </ListItem>
        ) : (
          <ListItem
            key="login"
            disablePadding
          >
            <div onClick={() => navTo("/login")}>Login</div>
          </ListItem>
        )}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{ bgcolor: "#03001C" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            eVoting
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Link
              key="acasa"
              sx={{ color: "#fff" }}
              href="/"
            >
              Acasa
            </Link>
            {isLoggedIn ? (
              <Link
                key="voteaza"
                sx={{ color: "#fff" }}
                href="/vote"
              >
                Voteaza
              </Link>
            ) : (
              <></>
            )}
            {isLoggedIn ? (
              <Link
                key="contul-meu"
                sx={{ color: "#fff" }}
                href="/user/account"
              >
                Contul meu
              </Link>
            ) : (
              <Link
                key="login"
                sx={{ color: "#fff" }}
                href={"/login"}
              >
                Login
              </Link>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
