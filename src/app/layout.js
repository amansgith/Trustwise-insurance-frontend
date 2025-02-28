import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  className: "--font-montserrat",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={`antialiased ${montserrat.className}`}>
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}