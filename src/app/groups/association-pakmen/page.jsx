import Associations from "@/components/CommonComponents/Associations";
import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";

const AssociationPakmen = () => {
  return (
    <>
      <Associations
        title="Pakmen Volleyball Club"
        description={
          <>
            <b>Your coverage, your way...</b>
            <br />
            <br />
            Pakmen members can now receive discounts on their home and auto
            insurance premiums through:
            <br />
            <br />
            The Pakmen Home and Auto Insurance Program
            <br />
            <br />
            <b>Call 647-925-5050 today for a free quote.</b>
            <br />
            <br />
            Please identify yourself as a Pakmen member to the representative to
            receive the group discounted rates. A portion of the premiums go
            toward The Community Fund.
            <br />
            <br />
            Please note that 1 million third-party liability coverage has been
            the standard on many car insurance policies for some time, with the
            number of payouts exceeding this amount continuing to increase year
            over year. We understand many of your Pakmen families carpool to and
            from events. Please ensure you have the right coverage for your
            risk.
            <br />
            <br />
            Call today, get the right coverage, and continue supporting your
            club!
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2024/01/pakmen-vollyball.jpg"
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

export default AssociationPakmen;
