import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rental Room",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <ToasterProvider />
        <RegisterModal />
        <Navbar />

        {children}
      </body>
    </html>
  );
}
