"use client";

import "./globals.css";
import { UserContextProvider } from "@/_context/user/UserContext";
import { NotificationContainer } from "react-notifications";
import Navbar from "@/_components/navbar/NavBar";
import { ReactQueryClientProvider } from "./QueryClientProvider";

const metadata = {
  title: "Evoting",
  description: "Evoting description",
  icons: {
    icon: {
      url: "/favicon.ico",
    },
    shortcut: { url: "/favicon.ico" },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReactQueryClientProvider>
          <NotificationContainer />
          <UserContextProvider>
            <Navbar />
            {children}
          </UserContextProvider>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
