import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import BlogSection from "@/components/BlogSection";
import Partners from "@/components/Partners";
import GoogleReviews from "@/components/Reviews";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <CTA/>
    <Features/>
    <BlogSection/>
    <Partners/>
    <GoogleReviews/>
    <ContactUs/>
    <Footer />
    </>
  );
}
