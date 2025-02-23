"use client";
import Image from "next/image";
import Link from 'next/link';

export default function InsuranceIntro({
  title,
  description,
  imageSrc,
  buttonText,
  extraContent,
  extraButtons,
}) {
  return (
    <section className="bg-gradient-to-r from-blue-100 to-green-100 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Side: Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 leading-snug pt-2">
            {title}
          </h1>
          <div className="text-gray-700 mt-4 text-lg md:text-xl leading-relaxed">
            {description}
          </div>

          {/* Conditionally Render Extra Content */}
          {extraContent && <div className="mt-4">{extraContent}</div>}

          <Link href="/call-back-request">
            <button className="mt-6 bg-cyan-500 hover:bg-cyan-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105">
              {buttonText}
            </button>
          </Link>

          {/* Extra Buttons - Auto Insurance Services */}
          {extraButtons && (
            <div className="mt-6">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                + Auto Insurance Services:
              </h3>
              <div className="flex flex-wrap gap-3">
                {extraButtons.map((btn, index) => (
                  btn.href ? (
                    <Link key={index} href={btn.href}>
                      <button
                        className="bg-green-400 hover:bg-green-500 text-black font-bold py-2 px-4 rounded-md"
                      >
                        {btn.text}
                      </button>
                    </Link>
                  ) : (
                    <span key={index} className=" text-green-600 font-bold py-2 px-2">
                      {btn.text}
                    </span>
                  )
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Side: Image */}
        <div className="md:w-1/2 w-full">
          <div className="relative w-full h-[350px] md:h-[500px] shadow-lg rounded-lg overflow-hidden">
            <Image
              src={imageSrc}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}