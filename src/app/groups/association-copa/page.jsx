import Associations from "@/components/CommonComponents/Associations";
import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";

const AssociationCOPA = () => {
  return (
    <>
      <Associations
        title="Canadian Office Products Association - COPA"
        description={
          <p>
            <b>Your coverage, your way...</b>
            <br />
            Aaxel Insurance Brokers Ltd. and COPA are pleased to offer the Group
            home and auto insurance programs for its members and their
            employees.
            <br />
            <br />
            The group program is underwritten by Intact Insurance.
            <br />
            <br />
            To receive an instant quote, please contact our sales staff at any
            of the following numbers:
            <br />
            <br />
            <b>Aaxel Insurance Brokers Ltd.</b>
            <br />
            <br />
            866-358-2860
            <br />
            <br />
            The program is available to all the employees of COPA member
            companies, their spouses, and dependent children residing at home or
            away from school.
            <br />
            <br />
            Be sure to mention when you call that you are a member of the COPA
          </p>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/copa_logo_vector.png"
        buttonText="Get a Quote"
        buttonLink="#"
        sectionTitle="Why Choose Our Insurance Program?"
        sectionDescription={
          <>
            <p className="text-lg font-semibold">
              We recommend member companies communicate the availability of this
              program to their employees.
            </p>
            <p className="text-balance">
              Please note this program is offered on behalf of the association
              to all employees and in no way it may hold member companies
              responsible for the administration of the program.
            </p>
            <p className="mt-4">The key advantages of the program include:</p>
            <ul className="list-disc list-inside mt-2">
              <li>Savings of up to 30% on home and auto insurance</li>
              <li>No service or interest charges for monthly payment plans</li>
              <li>Accident waiver</li>
              <li>Age discount</li>
              <li>No-conviction discount</li>
              <li>Multi-policy & Multi-vehicle discounts</li>
              <li>Retiree discount</li>
              <li>Discounts for security systems</li>
            </ul>
          </>
        }
        sectionImage="https://www.aaxel.ca/wp-content/uploads/2023/04/20210709304edc72-cb57-4c63-eb5b-9ad3a439fe84.jpg"
      />

      <TrustBanner />
      <QuoteForm />
      <Features />
      <ContactUs />
      <FAQSection />
    </>
  );
};

export default AssociationCOPA;
