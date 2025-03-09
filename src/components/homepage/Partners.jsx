"use client";
import Image from "next/image";
import partners from "../../public/partners.jpg"; // Replace with actual path

const Partners = () => {
  return (
    <section className="text-center py-10 px-5">
      <h2 className="text-2xl md:text-6xl font-bold">
        OUR TRUSTED INSURANCE PARTNERS
      </h2>
      <p className="text-cyan-700 text-lg md:text-xl mt-2">
        We represent almost all major insurers, Over 60+ insurers. Yes that’s
        right!
      </p>
      <div className="flex justify-center items-center mt-6">
        <Image
          src={partners}
          alt="Trusted Insurance Partners"
          className="w-full md:w-3/4 lg:w-full max-w-full h-auto py-4"
          priority
        />
      </div>
      <div className="mt-6">
        <button className="py-3.5 px-10 text-white text-xs md:text-2xl rounded-md bg-[#2a80b4] hover:bg-[#9ecb75] font-extrabold hover:text-black transition duration-300">
          Get A Quote - Save More with Bundle Package
        </button>
      </div>
    </section>
  );
};

export default Partners;