import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatbotComponent from "@/components/CommonComponents/Chatbot";
import ScrollToTop from "@/components/CommonComponents/ScrolltoTop";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  className: "--font-montserrat",
});

export const metadata = {
  title: 'TRUSTWISE - Insurance',
  description: 'Welcome to Trustwise Insurance. We offer comprehensive and customized insurance solutions for auto, home, business, and life. Experience exceptional customer service, transparent policies, and hassle-free claims with Trustwise Insurance.',
  keywords: 'Trustwise Insurance, auto insurance, home insurance, business insurance, life insurance, customized insurance solutions, exceptional customer service, transparent policies, hassle-free claims, insurance broker, insurance services, comprehensive insurance, insurance coverage.',
  openGraph: {
    title: 'TRUSTWISE - Insurance',
    description: 'Welcome to Trustwise Insurance. We offer comprehensive and customized insurance solutions for auto, home, business, and life. Experience exceptional customer service, transparent policies, and hassle-free claims with Trustwise Insurance.',
    url: 'https://www.trustwiseinsurance.com',
    type: 'website',
    images: [
      {
        url: 'https://www.trustwiseinsurance.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Trustwise Insurance',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`antialiased ${montserrat.className}`}>
        <Navbar />
        {children}
        <Footer />
        <ChatbotComponent />
        <ScrollToTop />
      </body>
    </html>
  );
}