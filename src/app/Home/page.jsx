"use client"
import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/homepage/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";
import InsuranceIntro from "@/components/CommonComponents/InsuranceIntro";

const HomeInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Home Insurance"
        description={
          <>
            <p>
              Protect Your Home with Trustwise Insurance
            </p><br />
            <p>
              At Trustwise Insurance, we understand that your home is more than just a place—it’s an investment and a sanctuary. Our Home Insurance solutions are designed to safeguard homeowners against unexpected risks, including property damage, theft, and liability claims. With our comprehensive coverage, you can protect what matters most and enjoy peace of mind, knowing that you’re prepared for the unexpected.
            </p><br />
            <p>
              We offer customizable Home Insurance policies tailored to your unique needs. Our experienced team works closely with you to craft solutions that provide extensive protection for:
            </p><br />
            <ul>
              <li>Property damage due to unforeseen events</li>
              <li>Personal belongings inside your home</li>
              <li>Liability claims in case of accidents on your property</li>
            </ul>
            <p>
              With Trustwise Insurance, you can rest easy knowing that your home and everything in it is well-protected. Our commitment goes beyond just offering coverage—we provide the trust, reliability, and expertise you need to make informed decisions about your home’s security.
            </p><br />
            <p>
              Protect your home with confidence. Contact Trustwise Insurance today to explore our Home Insurance options and see how we can help you secure your home and your future.
            </p>
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/04/Home-Insurance.jpg"
        buttonText="Get a Free Quote"
      />
      <TrustBanner />

      {/* get quote form */}
      <QuoteForm />
      <Features />
      <ContactUs />
      <FAQSection />
    </>
  );
};

export default HomeInsurance;