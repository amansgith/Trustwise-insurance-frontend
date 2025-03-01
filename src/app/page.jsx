"use client";
import PopupModal from "@/components/PopupModal";
import dynamic from "next/dynamic";
import Head from "next/head";

const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const Features = dynamic(() => import("@/components/Features"), { ssr: false });
const About = dynamic(() => import("@/components/About"), { ssr: false });
const CTA = dynamic(() => import("@/components/PopularServices"), {
  ssr: false,
});
const BlogSection = dynamic(() => import("@/components/BlogSection"), {
  ssr: false,
});
// const Partners = dynamic(() => import("@/components/Partners"), { ssr: false });
const GoogleReviews = dynamic(() => import("@/components/Reviews"), {
  ssr: false,
});
const ContactUs = dynamic(() => import("@/components/ContactCard"), {
  ssr: false,
});

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
