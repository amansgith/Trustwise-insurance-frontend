import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import CTA from "@/components/CTA";
import BlogSection from "@/components/BlogSection";
import Partners from "@/components/Partners";
import GoogleReviews from "@/components/Reviews";
import ContactUs from "@/components/Contact";

export default function Home() {
  return (
    <>
    <Hero/>
    <About/>
    <CTA/>
    <Features/>
    <BlogSection/>
    <Partners/>
    <GoogleReviews/>
    <ContactUs/>
    </>
  );
}
