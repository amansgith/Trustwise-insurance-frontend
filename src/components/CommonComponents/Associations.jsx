"use client";
import Image from "next/image";

export default function Associations({
  title,
  description,
  imageSrc,
  buttonText,
  buttonLink,
  extraContent,
  extraButtons,
  sectionTitle,
  sectionDescription,
  sectionImage,
}) {
  return (
    <div className="bg-gray-50">
      {/* 🔹 Hero Section */}
      <section className="bg-gradient-to-r from-blue-100 to-green-100 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left Side: Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl font-extrabold text-blue-900 leading-snug">{title}</h1>
            <span className="h-1 w-1/3 border-blue-700 bg-blue-300"></span>
            <div className="text-gray-700 mt-4 text-lg leading-relaxed">{description}</div>

            {/* Conditionally Render Extra Content */}
            {extraContent && <div className="mt-4">{extraContent}</div>}

            {/* Primary Button */}
            <a href={buttonLink}>
              <button className="mt-6 bg-cyan-500 hover:bg-cyan-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105">
                {buttonText}
              </button>
            </a>

            
          </div>

          {/* Right Side: Image */}
          <div className="md:w-1/2">
            <div className="relative w-full h-[350px] shadow-lg rounded-lg overflow-hidden">
              <Image src={imageSrc} alt={title} fill objectFit="cover" className="rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Section Below (Benefits) */}
      <section className="bg-green-200 py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left Side: Content */}
          <div className="md:w-1/2 bg-blue-800 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold">{sectionTitle}</h2>
            <div className="mt-4">{sectionDescription}</div>
          </div>

          {/* Right Side: Section Image */}
          <div className="md:w-1/2">
            <div className="relative w-full h-[350px] shadow-lg rounded-lg overflow-hidden">
              <Image src={sectionImage} alt={sectionTitle} layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
