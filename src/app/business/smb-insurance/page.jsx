"use client"
import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/homepage/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";
import InsuranceIntro from "@/components/CommonComponents/InsuranceIntro";

const SmallMediumBusinessInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Small Medium Business Insurance"
        description={
          <>
            <b>Protect Your Small or Medium Business with Trustwise Insurance</b>
            <br />
            <br />
            At Trustwise Insurance, we understand that running a small or
            medium-sized business comes with unique challenges. Whether you’re a
            retailer, consultant, or contractor, safeguarding your business from
            unexpected claims is essential. That’s where we come in.
            <br />
            <br />
            No two businesses are the same, which is why our expert brokers
            offer customized insurance solutions designed to fit your specific
            needs.
            <br />
            <br />
            <b>Why Home-Based Business Insurance Matters:</b>
            <br />
            <ul className="list-inside mt-2 leading-8">
              <li>
                ✅ Protect Your Business Assets: Whether you’re running a
                full-time or part-time business from home, your equipment,
                inventory, and intellectual property need protection from risks
                like theft, fire, or damage.
              </li>
              <li>
                ✅ Personal & Professional Coverage: Home insurance might not
                cover business-related liabilities or property damage. Business
                insurance ensures that you are covered in both areas.
              </li>
              <li>
                ✅ Peace of Mind: Focus on growing your business without
                worrying about what could go wrong. Comprehensive coverage
                allows you to protect both your passion and your livelihood.
              </li>
            </ul>
            <br />
            Recovering from an uninsured loss can be tough and may even impact
            your reputation. With Trustwise Insurance, you can focus on growing
            your business while we handle the risks.
            <br />
            <br />
            Join thousands of Canadian businesses already protected by Trustwise
            Insurance.
            <br />
            <br />
            Call us today at 780-255-5151 to get started!
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/cowomen-7Zy2KV76Mts-unsplash.jpg"
        buttonText="Get a Free Quote"
      />
      <TrustBanner />
      <QuoteForm />
      <Features />
      <ContactUs />
      <FAQSection />
    </>
  );
};

export default SmallMediumBusinessInsurance;
