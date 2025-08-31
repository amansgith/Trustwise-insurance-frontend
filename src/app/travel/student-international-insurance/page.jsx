"use client";
import InsuranceIntro from "@/components/CommonComponents/InsuranceIntro";
import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import Features from "@/components/homepage/Features";

const factsAndBenefits = [
  "Mandatory for every Canadian university",
  "Low and affordable premiums",
  "Coverage up to $5 million for:",
  [
    "Emergency hospitalization & medical expenses",
    "Non-emergency medical treatments",
    "Routine physical examination",
    "General physician consultancy",
    "Psychiatric and psychological care",
    "Worldwide travel",
    "Accidental death & dismemberment",
    "Dental emergencies",
    "Eye exams, prescription glasses, hearing aids",
    "Tutorial services, trauma counselling",
    "Tuberculosis testing and vaccination",
    "Return of deceased, emergency air transportation",
    "Transportation of family or friend (conditions apply)",
    "Pre-existing conditions (if eligible)",
    "Maternity expenses, ambulance fees, prescribed drugs",
    "Diagnostics and laboratory services",
  ],
  "Private health insurance may cover you across all provinces and for services not included in provincial plans.",
];

const faqs = [
  {
    question: "When and how should I buy health insurance for International Students?",
    answer:
      "It is best to buy your insurance before arriving in Canada to avoid a waiting period. Calculate a personal quote and fill out an application form. Our advisors will contact you after receiving your application.",
  },
  {
    question: "Are there any International Students in Canada health insurance requirements?",
    answer:
      "There are no official requirements set by the Government of Canada, but best practices recommend coverage for hospitalization, repatriation, and emergency medical care.",
  },
  {
    question: "Are International Students required to have health insurance in Canada?",
    answer:
      "While not required by law, it is highly recommended to avoid costly emergency medical expenses.",
  },
  {
    question: "Is there any International Student dental insurance?",
    answer:
      "Many Canadian insurance companies offer emergency dental insurance supplements for international students, covering emergency dental repair, wisdom teeth removal, and dental pain relief.",
  },
  {
    question: "How to compare International Students health insurance plans?",
    answer:
      "Use our free online tool to compare available plans and review the policy wording to ensure it covers your needs.",
  },
  {
    question: "I am travelling to Canada to study. Am I eligible to buy international health insurance for students?",
    answer:
      "Yes, international students coming to Canada are eligible to purchase health insurance plans designed for students.",
  },
];


function StudentVisaInfoSection() {
  const [open, setOpen] = useState([false, false]);
  // Partial content for each box
  const box1Summary = "International Student Insurance is a health insurance plan for overseas students coming to Canada for educational reasons. It is a required medical coverage for students who study in Canada and covers you in case of any illness, existing health condition, or an unforeseen medical emergency.";
  const box1Rest = [
    "The health insurance coverage for international students in Canada varies in every different province. Where most of the provinces do have their individual insurance plans for foreign students, provinces like Ontario, Prince Edward Island, and Yukon do not provide coverage for international students. Foreign students residing in these provinces have to either enrol in their University Health Insurance Plan (UHIP) or obtain health insurance from a private insurance provider.",
    "In any case, it is mandatory for all international students to get health insurance, hence you must do the necessary research on the availability of insurance in your intended province of study."
  ];
  const box2Summary = "Nobody plans to get sick when traveling or studying abroad, but it is always wise to be well prepared ahead of time. Also, international students studying in the country are not eligible for healthcare benefits funded by the Government of Canada. So in case, you suffer a medical emergency the hospital bills can prove to be very heavy on your pockets.";
  const box2Rest = [
    "Also, there are many important factors associated with health insurance for foreign students, most of which have benefits for the students more than it being an obligatory norm."
  ];
  return (
    <section className="py-8 px-2 sm:px-4 md:px-8 bg-gradient-to-r from-blue-100 via-white to-yellow-100">
      <div className="max-w-3xl mx-auto flex flex-col gap-6">
        {/* Box 1 */}
        <div className="bg-white rounded-2xl shadow-lg flex flex-col sm:flex-row items-start border-l-8 border-primary hover:shadow-2xl transition-shadow duration-300 w-full">
          <div className="flex-shrink-0 flex flex-row sm:flex-col items-center justify-center px-4 py-4 sm:px-6 sm:py-8 w-full sm:w-auto">
            <span className="text-3xl sm:text-4xl text-primary mb-0 sm:mb-2 mr-2 sm:mr-0">🛂</span>
          </div>
          <div className="flex-1 px-2 py-4 sm:px-4 sm:py-6">
            <h3 className="text-lg sm:text-xl font-bold text-primary mb-1">What is International Student Insurance in Canada?</h3>
            <p className="text-gray-700 text-sm sm:text-base mb-2">
              {box1Summary}
              {!open[0] && <span className="font-semibold text-blue-700">... <button className="underline" onClick={() => setOpen([true, open[1]])}>Read more</button></span>}
            </p>
            {open[0] && (
              <div className="transition-all duration-300">
                {box1Rest.map((txt, i) => (
                  <p key={i} className="text-gray-700 text-sm sm:text-base mb-2">{txt}</p>
                ))}
                <button className="text-blue-700 font-semibold underline mt-1" onClick={() => setOpen([false, open[1]])}>Read less</button>
              </div>
            )}
          </div>
        </div>
        {/* Box 2 */}
        <div className="bg-white rounded-2xl shadow-lg flex flex-col sm:flex-row items-start border-l-8 border-green-500 hover:shadow-2xl transition-shadow duration-300 w-full">
          <div className="flex-shrink-0 flex flex-row sm:flex-col items-center justify-center px-4 py-4 sm:px-6 sm:py-8 w-full sm:w-auto">
            <span className="text-3xl sm:text-4xl text-green-500 mb-0 sm:mb-2 mr-2 sm:mr-0">🛡️</span>
          </div>
          <div className="flex-1 px-2 py-4 sm:px-4 sm:py-6">
            <h3 className="text-lg sm:text-xl font-bold text-green-600 mb-1">Why do you need International Student Insurance in Canada?</h3>
            <p className="text-gray-700 text-sm sm:text-base mb-2">
              {box2Summary}
              {!open[1] && <span className="font-semibold text-green-700">... <button className="underline" onClick={() => setOpen([open[0], true])}>Read more</button></span>}
            </p>
            {open[1] && (
              <div className="transition-all duration-300">
                {box2Rest.map((txt, i) => (
                  <p key={i} className="text-gray-700 text-sm sm:text-base mb-2">{txt}</p>
                ))}
                <button className="text-green-700 font-semibold underline mt-1" onClick={() => setOpen([open[0], false])}>Read less</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}


function FactsAndBenefitsSection() {
  const subIcons = [
    '🏥','💊','🩺','👨‍⚕️','🧠','✈️','⚠️','🦷','👓','📚','🧑‍⚕️','🧪','✈️','👨‍👩‍👧‍👦','❤️','🤰','🚑','🔬'
  ];
  return (
    <section className="py-16 px-4 md:px-12 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-10 text-center tracking-tight drop-shadow-sm">
          Facts & Benefits
        </h2>
        <div className="space-y-6">
          <div className="text-lg md:text-xl text-primary font-semibold bg-white rounded-lg shadow p-5 border-l-4 border-primary/60">
            Mandatory for every Canadian university
          </div>
          <div className="text-lg md:text-xl text-green-700 font-semibold bg-white rounded-lg shadow p-5 border-l-4 border-green-400">
            Low and affordable premiums
          </div>
          <div>
            <div className="text-xl font-bold text-blue-700 mb-3">Coverage up to $5 million for:</div>
            <div className="flex flex-wrap gap-4">
              {factsAndBenefits[3].map((sub, i) => (
                <div key={"sub-"+i} className="flex items-center gap-2 bg-white border border-blue-200 rounded-xl px-4 py-3 shadow-sm text-base font-medium text-blue-800 hover:bg-blue-50 transition-all duration-200 min-w-[220px]">
                  <span className="text-lg">{subIcons[i] || '✔️'}</span>
                  {sub}
                </div>
              ))}
            </div>
          </div>
          <div className="text-lg md:text-xl text-indigo-700 font-semibold bg-white rounded-lg shadow p-5 border-l-4 border-indigo-400">
            Private health insurance may cover you across all provinces and for services not included in provincial plans.
          </div>

          {/* Special Mention Section */}
          <div className="relative mt-8">
            <div className="bg-gradient-to-r from-yellow-100 via-white to-green-100 border-2 border-primary rounded-2xl shadow-xl p-8 text-center mt-6">
              <span className="block text-2xl md:text-3xl font-extrabold text-primary mb-2">Manpreet Singh</span>
              <p className="text-lg md:text-xl text-gray-800 font-semibold">
                gives you the best provincial as well as private plans to offer international students for their health insurance.<br/>
                <span className="text-green-700">We take into consideration your university province and suggest the right health insurance plan depending on your duration of stay, to get you covered for maximum medical services.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";

function FAQCustomSection() {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleIndex = (idx) => {
    setOpenIndexes((prev) =>
      prev.includes(idx)
        ? prev.filter((i) => i !== idx)
        : [...prev, idx]
    );
  };

  return (
    <section className="py-12 px-4 md:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b pb-6">
              <button
                className="w-full flex justify-between items-center text-left text-xl font-semibold text-gray-800 focus:outline-none transition-colors duration-200 py-3"
                type="button"
                onClick={() => toggleIndex(idx)}
                aria-expanded={openIndexes.includes(idx)}
              >
                <span className="flex items-center">
                  <span className={`inline-block w-6 h-6 mr-2 rounded-full border border-primary flex items-center justify-center text-primary font-bold text-lg transition-all duration-200 bg-white select-none`}>
                    {openIndexes.includes(idx) ? <span>-</span> : <span>+</span>}
                  </span>
                  {faq.question}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndexes.includes(idx) ? 'max-h-96 mt-2 opacity-100' : 'max-h-0 opacity-0'}`}
                style={{}}
              >
                <div className="text-gray-600 text-base px-1 py-1">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const InternationalStudentInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="International Student Insurance"
        description={
          <>
            <p>
              <b>Global Coverage, Local Support: Your Comprehensive International Student Insurance Solution.</b>
            </p>
            <br />
            <p>
              Canada welcomes over 500,000 student immigrants every year, drawn by its world-class education and living standards. While Canada has a robust healthcare system, most services are for permanent residents. The government ensures medical emergencies for visitors and student immigrants are addressed with the best possible facilities.
            </p>
            <br />
            <h2 className="text-xl font-bold mt-4 mb-2">Types of Student Insurance in Canada:</h2>
            <ul className="list-disc list-inside ml-4">
              <li>Insurance for Canadian students studying abroad</li>
              <li>Insurance for Canadian students studying in another province or territory</li>
              <li>Insurance for international students studying in Canada</li>
            </ul>
            <br />
          </>
        }
        imageSrc="/studentvisa.jpg"
        buttonText="Get a Quote"
      />
      <StudentVisaInfoSection />
      <FactsAndBenefitsSection />

      <TrustBanner />
      <Features />
      {/* <ContactUs /> */}

      <FAQCustomSection />
    </>
  );
};

export default InternationalStudentInsurance;