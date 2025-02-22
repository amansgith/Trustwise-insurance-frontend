import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";
import InsuranceCard from "@/components/ui/InsuranceCard"

const {
  default: InsuranceIntro,
} = require("@/components/CommonComponents/InsuranceIntro");

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
    slug: "business/environment-liability-insurance",
  },
  {
    title: "Home Based Business",
    imageSrc: "https://www.aaxel.ca/wp-content/uploads/2023/03/Business-Insurance-1.jpg",
    slug: "business/home-business-insurance",
  },
  {
    title: "Legal Expense Insurance",
    imageSrc: "https://www.aaxel.ca/wp-content/uploads/2023/03/alexander-grey-tn57JI3CewI-unsplash.jpg",
    slug: "business/legal-expense-isnurance",
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
        title="Business Insurance"
        description={
          <>
            <em>Your Coverage, Your Way...</em>
            <br />
            <br />
            Business insurance protects your business from potential claims and
            or legal issues. Every business faces unique risks. All Canadian
            businesses take some risks, but taking too many risks or failing to
            take protective measures can lead to business losses. Business
            insurance is important because it can help protect your business
            from financial loss in the event of a catastrophic event, such as a
            fire, flood, or natural disaster.
            <br />
            <br />
            Business owners often get frustrated with the process of getting
            quote, understanding coverage needs, and who to trust.
            <br />
            <br />
            Join thousands of Canadian businesses that are already protected!
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/04/Business-Insuranc.jpg"
        buttonText="Get a Free Quote"
      />
      <TrustBanner />
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-10">
            Aaxel Insurance Serves All Your Insurance Needs Under One Roof!
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
          <div className="mt-12 bg-green-600 text-white py-4 px-8 rounded-lg text-lg font-semibold shadow-md">
            Call for a Quote: <span className="font-bold">1-866-358-2860</span>
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
