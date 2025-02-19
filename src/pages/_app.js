import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  className: "--font-montserrat", // Add a CSS variable
});

export default function App({ Component, pageProps }) {
  return (
    <div className={montserrat.className}>
      <CustomCursor/>
      <Component {...pageProps} />
    </div>
  );
}
