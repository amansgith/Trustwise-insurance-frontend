"use client";
import Image from "next/image";
import partners from "../../../public/partners.jpg";
import Link from "next/link";

const Partners = () => {
  return (
    <section className="text-center py-10 px-5">
      <h2 className="text-2xl md:text-6xl font-bold">
        COMPANIES WE WORK WITH
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
        <Link href="/call-back-request">
        <button className="py-3.5 px-10 text-white text-xs md:text-2xl rounded-md bg-primary hover:bg-secondary font-extrabold hover:text-black transition duration-300">
          Get A Quote - Save More
        </button>
        </Link>
      </div>
    </section>
  );
};

export default Partners;