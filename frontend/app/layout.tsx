"use client";

import "./globals.css";
import { UserContextProvider } from "./_context/user/UserContext";
import { NotificationContainer } from "react-notifications";
import Navbar from "./_shared/components/navbar/NavBar";

const metadata = {
  title: "Evoting",
  description: "Evoting description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NotificationContainer />
        <UserContextProvider>
          <Navbar />
          {children}
        </UserContextProvider>
      </body>
    </html>
  );
}
