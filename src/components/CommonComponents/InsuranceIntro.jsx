"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import oneshape from "../../../public/oneshape.webp";

export default function InsuranceIntro({
  title,
  description,
  imageSrc,
  buttonText,
  extraContent,
  extraButtons,
}) {
  return (
    <section className="pt-36 md:py-10 px-6 md:px-12">
      <div className="max-w-7xl py-6 mx-auto flex flex-col md:flex-row items-center gap-12 overflow-hidden">
        {/* Right Side: Image */}
        <div className="relative md:w-1/2 w-full mx-6 order-1 md:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="absolute w-[110%] left-[-30px] bottom-[-190px] h-full opacity-100 m-4"
          >
            <Image
              src={oneshape}
              alt="Background"
              width={400}
              height={200}
              className="hidden md:block object-cover w-2/3 h-2/3 rounded-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            animate={{
              y: [0, -5, 0],
              transition: {
                repeat: Infinity,
                repeatType: "mirror",
                duration: 1.5,
              },
            }}
            style={{ display: "inline-block" }}
            className="relative w-full h-[350px] md:h-[500px] shadow-lg rounded-lg overflow-hidden"
          >
            <Image
              src={imageSrc}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </motion.div>
        </div>

        {/* Left Side: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:w-1/2 text-center md:text-left overflow-hidden order-2 md:order-1"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold text-primary leading-snug pt-2">
            {title}
          </h1>
          <div className="text-gray-700 mt-4 text-lg md:text-xl leading-relaxed">
            {description}
          </div>

          {/* Conditionally Render Extra Content */}
          {extraContent && <div className="mt-4">{extraContent}</div>}

          <Link href="/call-back-request">
            <button className="mt-6 bg-secondary hover:bg-primary hover:text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-transform duration-500 transform hover:scale-105">
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
                {extraButtons.map((btn, index) =>
                  btn.href ? (
                    <Link key={index} href={btn.href}>
                      <button className="bg-primary hover:bg-green-500 text-white font-bold py-2 px-4 rounded-md">
                        {btn.text}
                      </button>
                    </Link>
                  ) : (
                    <span
                      key={index}
                      className=" text-primary font-bold py-2 px-2"
                    >
                      {btn.text}
                    </span>
                  )
                )}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}