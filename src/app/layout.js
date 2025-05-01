import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SideBanner from "@/components/CommonComponents/SideBanner";
import ChatbotComponent from "@/components/CommonComponents/Chatbot";
import ScrollToTop from "@/components/CommonComponents/ScrolltoTop";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  className: "--font-montserrat",
});

export const metadata = {
  title: 'TRUSTWISE - Insurance',
  description: 'Welcome to Trustwise Insurance. We offer comprehensive and customized insurance solutions for auto, home, business, and life. Experience exceptional customer service, transparent policies, and hassle-free claims with Trustwise Insurance.',
  keywords: 'Trustwise Insurance, home insurance, business insurance, life insurance, customized insurance solutions, exceptional customer service, transparent policies, hassle-free claims, insurance broker, insurance services, comprehensive insurance, insurance coverage.',
  openGraph: {
    title: 'TRUSTWISE - Insurance',
    description: 'Welcome to Trustwise Insurance. We offer comprehensive and customized insurance solutions for auto, home, business, and life. Experience exceptional customer service, transparent policies, and hassle-free claims with Trustwise Insurance.',
    url: 'https://www.trustwiseinsurance.com',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={`antialiased ${montserrat.className}`}>
        <SpeedInsights/>
        <Analytics/>
        <Navbar />
        {children}
        <SideBanner/>
        <Footer />
        <ChatbotComponent />
        <ScrollToTop />
      </body>
    </html>
  );
}