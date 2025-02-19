import "@/styles/globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-montserrat", // Add a CSS variable
});

export default function App({ Component, pageProps }) {
  return (
    <div className={montserrat.variable}>
      <Component {...pageProps} />
    </div>
  );
}
