"use client";

import "./globals.css";
import { UserContextProvider } from "./_context/user/UserContext.jsx";
import { NotificationContainer } from "react-notifications";
import dynamic from "next/dynamic";
import Navbar from "./_shared/components/navbar/NavBar.jsx";

const DynamicNavbar = dynamic(
  () => import("./_shared/components/navbar/NavBar.jsx"),
  {
    ssr: false,
  }
);

export const metadata = {
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
