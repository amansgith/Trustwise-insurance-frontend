import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";

const {
  default: InsuranceIntro,
} = require("@/components/CommonComponents/InsuranceIntro");

const PetInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Pet Insurance"
        description={
          <>
            Our pets are an integral part of our family. However, when they get
            sick or injured, the treatment costs often tend to be alarmingly
            high. As a group member with Economical Group Insurance, you will
            receive a five percent discount when you purchase a Petsecure policy
            from a reputed insurance broker in Ontario, such as Aaxel Insurance
            Brokers Ltd.
            <br />
            With a Petsecure plan, you are entitled to the following benefits:
            <br />
            <ul>
              <li>
                - Up to eighty percent of your veterinary expenses for illnesses
                and accidents
              </li>
              <li>
                - Protection for dental, alternative therapies, surgeries,
                medications, preventative care, and much more
              </li>
              <li>
                - In addition to flea and heartworm control, wellness coverage
                for annual, routine services
              </li>
              <li>- Lifetime coverage with annual renewable limits</li>
            </ul>
            <br />
            Note that every time a prospective consumer calls for a quote the
            insurer will donate $1 (not exceeding $2,000) to a local animal
            shelter on his or her behalf.
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/06/Pet-Insurance.webp"
        buttonText="Get a Free Quote"
      />
      <TrustBanner />

      {/* get quote form  */}
      <QuoteForm />
      <Features />
      <ContactUs />
      <FAQSection />
    </>
  );
};

export default PetInsurance;
