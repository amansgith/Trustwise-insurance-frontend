"use client"
import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/homepage/Features";
import InsuranceCard from "@/components/ui/InsuranceCard";
import InsuranceIntro from "@/components/CommonComponents/InsuranceIntro";

const insuranceData = [
  {
    title: "Account Receivable",
    imageSrc: "https://www.aaxel.ca/wp-content/uploads/2023/03/scott-graham-5fNmWej4tAA-unsplash.jpg",
    slug: "business/account-receivable-insurance",
  },
  {
    title: "Commercial Automobile",
    imageSrc: "https://www.aaxel.ca/wp-content/uploads/2023/03/zetong-li-mVqTumQH-c0-unsplash.jpg",
    slug: "auto/commercial-automobile-insurance",
  },
  {
    title: "General Liability",
    imageSrc: "https://www.aaxel.ca/wp-content/uploads/2023/03/sean-pollock-PhYq704ffdA-unsplash.jpg",
    slug: "business/general-liability-insurance",
  },
  {
    title: "Commercial Property",
    imageSrc: "https://www.aaxel.ca/wp-content/uploads/2023/03/herry-sutanto-vTZPm6NSxQU-unsplash.jpg",
    slug: "business/commercial-property-insurance",
  },
  {
    title: "Cyber Liability",
    imageSrc: "https://www.aaxel.ca/wp-content/uploads/2023/03/markus-spiske-iar-afB0QQw-unsplash.jpg",
    slug: "business/cyber-liability-insurance",
  },
  {
    title: "Contractors Insurance",
    imageSrc: "https://www.aaxel.ca/wp-content/uploads/2023/03/james-kovin-YQGPSblLPz0-unsplash.jpg",
    slug: "business/contractors-insurance",
  },
  {
    title: "Corporate Insurance",
    imageSrc: "https://www.aaxel.ca/wp-content/uploads/2023/03/christina-wocintechchat-com-2JDDn7iSGH8-unsplash.jpg",
    slug: "business/corporate-insurance",
  },
  {
    title: "Employee Liability",
    imageSrc: "https://www.aaxel.ca/wp-content/uploads/2023/03/charlesdeluvio-Lks7vei-eAg-unsplash.jpg",
    slug: "business/employee-liability-insurance",
  },
  {
    title: "Environmental Impairment",
    imageSrc: "https://www.aaxel.ca/wp-content/uploads/2023/03/matthew-smith-Rfflri94rs8-unsplash.jpg",
    slug: "business/environmental-liability-insurance",
  },
  {
    title: "Home Based Business",
    imageSrc: "https://www.aaxel.ca/wp-content/uploads/2023/03/Business-Insurance-1.jpg",
    slug: "business/home-business-insurance",
  },
  {
    title: "Legal Expense Insurance",
    imageSrc: "https://www.aaxel.ca/wp-content/uploads/2023/03/alexander-grey-tn57JI3CewI-unsplash.jpg",
    slug: "business/legal-expense-insurance",
  },
  {
    title: "Malpractice Insurance",
    imageSrc: "https://www.aaxel.ca/wp-content/uploads/2023/03/mailchimp-Vc2dD4l57og-unsplash.jpg",
    slug: "business/malpractice-insurance",
  },
  {
    title: "Private Client Insurance",
    imageSrc: "https://www.aaxel.ca/wp-content/uploads/2023/03/kobu-agency-7okkFhxrxNw-unsplash.jpg",
    slug: "auto/private-client-insurance",
  },
  {
    title: "Product Liability",
    imageSrc: "https://www.aaxel.ca/wp-content/uploads/2023/03/austin-distel-wD1LRb9OeEo-unsplash.jpg",
    slug: "business/product-liability-insurance",
  },
  {
    title: "Professional Liability",
    imageSrc: "https://www.aaxel.ca/wp-content/uploads/2023/03/dylan-gillis-KdeqA3aTnBY-unsplash.jpg",
    slug: "business/professional-liability-insurance",
  },
  {
    title: "Samll Medium Business",
    imageSrc: "https://www.aaxel.ca/wp-content/uploads/2023/03/cowomen-7Zy2KV76Mts-unsplash.jpg",
    slug: "business/smb-insurance",
  },
  {
    title: "Speciality Insurance",
    imageSrc: "https://www.aaxel.ca/wp-content/uploads/2023/03/linkedin-sales-solutions-7wyEG321GS0-unsplash.jpg",
    slug: "business/speciality-insurance",
  },
  {
    title: "Builder's Risk Insurance",
    imageSrc: "https://www.aaxel.ca/wp-content/uploads/2023/03/2018042103c32dde-3aa6-2784-1197-a124394a9889.jpg",
    slug: "business/builders-risk-insurance",
  },
  {
    title: "Garage Insurance",
    imageSrc: "https://www.aaxel.ca/wp-content/uploads/2023/03/edgar-EW5tFsF6e4g-unsplash.jpg",
    slug: "business/garage-insurance",
  },
];

const BusinessInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Business Insurance with Trustwise Insurance"
        description={
          <>
            <b>Your Coverage, Your Way with Trustwise Insurance</b>
            <br /><br />
            Business insurance is essential for safeguarding your company from potential claims and legal issues. Every business faces unique risks, and while all Canadian businesses take some risks, failing to take protective measures could lead to significant financial losses.
            <br />
            <br />
            <b>Why Business Insurance Matters:</b>
            <br />
            <ul className="list-inside mt-2">
              <li>✅ Financial Protection: In the event of catastrophic events like fire, flood, or natural disasters, business insurance helps ensure your company remains financially stable.</li>
              <li>✅ Risk Management: Protects against unexpected risks that could impact your operations, such as legal liabilities or property damage.</li>
              <li>✅ Peace of Mind: Provides business owners the security they need to focus on growing their business, without the constant worry of potential risks.</li>
            </ul>
            <br />
            <b>How Trustwise Insurance Helps Your Business:</b>
            <br />
            <ul className="list-inside mt-2">
              <li>✅ Tailored Coverage: Customizable options to match your unique business needs, whether you're a small startup or an established enterprise.</li>
              <li>✅ Easy Process: Trustwise Insurance simplifies the quoting process, helping you understand your coverage needs and providing guidance every step of the way.</li>
              <li>✅ Expert Guidance: Our team is committed to helping you find the best solutions, so you don’t have to navigate business insurance alone.</li>
            </ul>
            <br />
            <b>Join Thousands of Canadian Businesses Already Protected!</b>
            <br />
            📞 Call Trustwise Insurance at 780-255-5151 for more information or to get your free quote today.
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/04/Business-Insuranc.jpg"
        buttonText="Get a Free Quote"
      />
      <TrustBanner />
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-10">
            Trustwise Insurance Serves All Your Insurance Needs Under One Roof!
          </h2>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
            {insuranceData.map((item, index) => (
              <InsuranceCard
                key={index}
                title={item.title}
                imageSrc={item.imageSrc}
                slug={item.slug}
              />
            ))}
          </div>

          {/* Call-to-action */}
          <div className="mt-12 bg-secondary text-white py-4 px-8 mx-2 rounded-lg text-lg font-semibold shadow-md">
            <a href="tel:1-866-358-2860" className="text-white">
              Call for a Quote: <span className="font-bold">1-780-255-5151</span>
            </a>
          </div>
        </div>
      </section>
      <Features />
      <ContactUs />
      <FAQSection />
    </>
  );
};

export default BusinessInsurance;