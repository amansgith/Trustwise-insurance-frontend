"use client";
import { FaFileDownload } from "react-icons/fa";
import { MdOutlineDescription } from "react-icons/md";

const documents = [
  {
    title: "Principles of Conduct for Insurance Intermediaries",
    href: "#",
  },
  {
    title: "RIBO Conduct Sheet",
    href: "#",
  },
  {
    title: "RIBO Conduct Sheet Guidance",
    href: "#",
  },
];

const Regulation=()=> {
  return (
    <div className="bg-gray-50 min-h-screen py-32 md:py-16 px-4 sm:px-8">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 flex items-center gap-2 justify-center">
          <span className="border-l-4 border-secondary pl-2">Regulation</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-lg">
          Insurance brokers work for their customers. Conduct of insurance
          brokers needs to be such that they always remain on the customer’s
          side. Insurance brokers are regulated by RIBO.
        </p>
      </div>

      {/* Documents Section */}
      <div className="max-w-6xl mx-auto mt-12">
        <h3 className="text-2xl font-bold text-primary text-center relative pb-3">
          Documents
          <div className="absolute left-1/2 transform -translate-x-1/2 w-24 h-1 bg-secondary mt-2"></div>
        </h3>

        {/* Document Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transform hover:-translate-y-2 transition duration-300 border border-gray-200"
            >
              <MdOutlineDescription className="text-secondary text-5xl" />
              <h4 className="text-lg font-semibold text-gray-900 mt-4">
                {doc.title}
              </h4>
              <a
                href={doc.href}
                className="mt-4 inline-flex items-center bg-primary text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:bg-secondary transition"
              >
                Download Now <FaFileDownload className="ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Regulation;