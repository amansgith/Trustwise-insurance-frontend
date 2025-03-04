import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";
import InsuranceIntro from "@/components/CommonComponents/InsuranceIntro";

const HomeBusinessInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Home-Based Business Insurance with Trustwise Insurance"
        description={
          <>
            <b>Your Coverage, Your Way</b>
            <br /><br />
            With the rise of remote work and home-based businesses, especially since the onset of COVID-19, it’s more important than ever to protect your home office and business assets. Whether you're a startup, freelancer, or part-time entrepreneur, having the right insurance is crucial for safeguarding your dream.
            <br />
            <br />
            <b>Why Home-Based Business Insurance Matters:</b>
            <br />
            <ul className="list-inside mt-2 leading-8">
              <li>✅ Protect Your Business Assets: Whether you’re running a full-time or part-time business from home, your equipment, inventory, and intellectual property need protection from risks like theft, fire, or damage.</li>
              <li>✅ Personal & Professional Coverage: Home insurance might not cover business-related liabilities or property damage. Business insurance ensures that you are covered in both areas.</li>
              <li>✅ Peace of Mind: Focus on growing your business without worrying about what could go wrong. Comprehensive coverage allows you to protect both your passion and your livelihood.</li>
            </ul>
            <br />
            <b>How Trustwise Insurance Supports Your Home Business:</b>
            <br />
            <ul className="list-inside mt-2">
              <li>✅ Customizable Coverage: We offer tailored insurance solutions based on the unique needs of your business, whether it’s a home-based startup or a growing enterprise.</li>
              <li>✅ Expert Guidance: Our team of brokers will guide you in determining if your home insurance policy offers adequate coverage, or if you need more specialized business insurance.</li>
              <li>✅ Affordable Solutions: Protect your business with affordable insurance options designed to fit your budget, all while providing comprehensive protection for your home office.</li>
            </ul>
            <br />
            <b>Join Thousands of Canadian Home-Based Businesses Already Protected!</b>
            <br />
            📞 Call Trustwise Insurance at 780-255-5151 for more information or to get your free quote today.
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/Business-Insurance-1.jpg"
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

export default HomeBusinessInsurance;