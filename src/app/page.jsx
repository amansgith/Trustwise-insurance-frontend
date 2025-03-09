"use client";
import PopupModal from "@/components/homepage/PopupModal";
import Hero from "@/components/homepage/Hero";
import Features from "@/components/homepage/Features";
import About from "@/components/homepage/About";
import CTA from "@/components/homepage/PopularServices";
import BlogSection from "@/components/homepage/BlogSection";
import GoogleReviews from "@/components/homepage/Testimonials";
import ContactUs from "@/components/homepage/ContactCard";

export default function Home() {
  return (
    <>
      <PopupModal />
      <Hero />
      <About />
      <CTA />
      <Features />
      <BlogSection />
      <GoogleReviews />
      <ContactUs />
    </>
  );
}