import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";

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
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
