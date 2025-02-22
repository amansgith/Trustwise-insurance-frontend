import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import MobileNavbar from "@/components/MobileNavbar";
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
        <div className="sticky top-0 md:hidden z-50">
          <MobileNavbar />
        </div>

        {/* Desktop Navbar (Hidden on mobile/tablet, shown on desktop) */}
        <div className="hidden md:block sticky top-0 z-50">
          <Navbar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}