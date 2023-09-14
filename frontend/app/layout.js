"use client";

import "./globals.css";
import { Inter } from "next/font/google";

import { UserContextProvider } from "./_context/user/UserContext.jsx";
import { NotificationContainer } from "react-notifications";
import Navbar from "./_shared/components/navbar/NavBar.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Evoting",
  description: "Evoting description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NotificationContainer />
        <UserContextProvider>
          <Navbar />
          {children}
        </UserContextProvider>
      </body>
    </html>
  );
}
