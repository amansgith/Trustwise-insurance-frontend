"use client"
import Associations from "@/components/CommonComponents/Associations";
import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/homepage/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";

const AssociationChargerLogistic = () => {
  return (
    <>
      <Associations
        title="Charger Logistics Inc."
        description={
          <>
            <b>Your Coverage, Your Way with Trustwise Insurance</b>
            <br /><br />
            Trustwise Insurance is pleased to partner with Charger Logistics
            Inc. to offer exclusive insurance programs for Charger Logistics
            Inc. members and their employees.
            <br />
            <br />
            <b>Program Highlights:</b>
            <br />
            <ul className="list-inside mt-2 leading-8">
              <li>
                🚗🏡 Group Home & Auto Insurance: Comprehensive and affordable
                home and auto insurance coverage tailored to the needs of
                Charger Logistics Inc. members and their families.
              </li>
              <li>
                🏢 Commercial Insurance: Protect your business with specialized
                commercial insurance designed to meet the unique needs of
                Charger Logistics Inc. members.
              </li>
              <li>
                💼 Customizable Coverage Options: Choose from a variety of
                insurance solutions that suit both personal and business needs.
              </li>
              <li>
                🔒 Reliable Underwriting: The group program is underwritten by
                Economical Insurance & Intact Insurance, providing strong,
                dependable protection.
              </li>
            </ul>
            <br />
            <b>Get Your Instant Quote Today</b>
            <br />
            📞 Call Trustwise Insurance at 780-255-5151
            <br />
            • Ontario: 866-358-2860
            <br />
            • Quebec: 888-542-4811
            <br />
            • Rest of Canada: 866-247-7700
            <br />
            👉 Be sure to mention that you are a member of Charger Logistics
            Inc. when you call to receive your exclusive group rates!
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/07/Charger-Logistics-Inc.jpg"
        buttonText="Get a Quote"
        buttonLink="/call-back-request"
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
              <li>
                ✅ Expertly tailored insurance programs for Charger Logistics
                Inc. members
              </li>
              <li>✅ Personalized support from our team of professionals</li>
              <li>✅ Fast and simple quote process</li>
            </ul>
          </>
        }
      />

      <TrustBanner />
      <QuoteForm />
      <Features />
      <ContactUs />
      <FAQSection />
    </>
  );
};

export default AssociationChargerLogistic;
