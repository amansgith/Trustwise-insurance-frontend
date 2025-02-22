"use client";
import Image from "next/image";
import ClockImage from "../../public/clock.webp"; // Adjust the path

const CTA = () => {
  return (
    <>
      {/* Content Wrapper */}
      <div
        className="bg-black flex flex-col md:flex-row items-center px-8 md:px-36 pt-10 bg-no-repeat bg-cover"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/deep-blue-texture-background_24837-398.jpg?ga=GA1.1.610996962.1739565719&semt=ais_hybrid')",
        }}
      >
        {/* Left Side (Text) */}
        <div className="md:w-1/2 text-white text-left pt-0">
          <h1 className="text-3xl md:text-6xl font-semibold">
            "Your Time & Money is Important."
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 font-thin my-9 max-w-lg">
            With our Bundle Insurance (Auto + Home), we will help you save your
            time and money by combining your insurance plan in one.
          </p>
          <button className="mt-6 bg-cyan-700 hover:bg-green-600 transition duration-300 text-xl text-white font-bold py-4 px-8 rounded-lg">
            Get A Quote
          </button>
        </div>

        {/* Right Side (Clock Image) */}
        <div className="md:w-1/2 flex justify-end mt-8 md:mt-0">
          <Image
            src={ClockImage}
            alt="Watch Image"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </>
  );
};

export default CTA;