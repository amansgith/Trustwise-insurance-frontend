import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import MobileNavbar from "@/components/MobileNavbar"
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
        <div className="md:hidden">
          <MobileNavbar />
        </div>

        {/* Desktop Navbar (Hidden on mobile/tablet, shown on desktop) */}
        <div className="hidden md:block">
          <Navbar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
