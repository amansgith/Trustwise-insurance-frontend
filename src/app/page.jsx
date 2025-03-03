"use client";
import PopupModal from "@/components/PopupModal";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import CTA from "@/components/PopularServices";
import BlogSection from "@/components/BlogSection";
// import Partners from "@/components/Partners";
import GoogleReviews from "@/components/Reviews";
import ContactUs from "@/components/ContactCard";

export default function Home() {
  return (
    <>
      <PopupModal />
      <Hero />
      <About />
      <CTA />
      <Features />
      <BlogSection />
      {/* <Partners /> */}
      <GoogleReviews />
      <ContactUs />
    </>
  );
}