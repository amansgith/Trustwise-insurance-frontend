import Associations from "@/components/CommonComponents/Associations";
import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";

const AssociationCASAL = () => {
  return (
    <>
      <Associations
        title="Canadian Association of South Asian Lawyers - CASAL"
        description={
          <>
            <b>Your coverage, your way...</b>
            <p>
              Aaxel Insurance Brokers Ltd. and CASAL are pleased to offer the
              following insurance programs for its members and their employees:
            </p>
            <ol className="list-decimal list-inside">
              <li>Group home & auto insurance and</li>
              <li>Commercial insurance</li>
            </ol>
            <br />
            <p>
              The group program is underwritten by Economical Insurance & Intact
              Insurance.
            </p>
            <br />
            <p>
              To receive an instant quote, please contact our sales staff at any
              of the following numbers:
            </p>
            <br />
            <b>Aaxel Insurance Brokers Ltd.</b>
            <p>Ontario: 866-358-2860</p>
            <p>Quebec: 888-542-4811</p>
            <p>Rest of Canada: 866-247-7700</p>
            <br />
            <p>
              The program is available to all the employees of CASAL member
              companies, their spouses, and dependent children residing at home
              or away from school.
            </p>
            <br />
            <p>
              Be sure to mention when you call that you are a member of the CASAL.
            </p>
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/07/CASAL.jpeg"
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

export default AssociationCASAL;
