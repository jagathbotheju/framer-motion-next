import Navbar from "./components/Navbar";
import "./globals.css";
import { Viaoda_Libre } from "next/font/google";

const inter = Viaoda_Libre({ weight: ["400"], subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#1e1e1e] text-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
