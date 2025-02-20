"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { FaEarthAmericas, FaClockRotateLeft, FaUser } from "react-icons/fa6";
import { VscGraph } from "react-icons/vsc";
import { IoMdSettings } from "react-icons/io";
import { PiCubeTransparent } from "react-icons/pi";
import Logo from "../../public/Round-Logo.webp"; // Update path if needed

const Features = () => {
    return (
        <section className="relative flex flex-col items-center py-16 px-4 text-center">
            {/* Section Title */}
            <h2 className="text-lg md:text-4xl font-extrabold pb-3 text-cyan-700">
                Why Aaxel Insurance Brokers?
            </h2>
            <h3 className="text-2xl md:text-6xl pb-3 text-black font-extrabold mt-2">
                Because we offer a lot more than a policy.
            </h3>
            <p className="text-black mt-2 text-xl font-normal max-w-2xl">
                Purchase your personal & business insurance with ease at a very
                comparative rate plus ease of management.
            </p>

            {/* Atomic Structure */}
            <div className="relative w-[600px] md:w-[1000px] h-[1000px] md:h-[1000px] flex items-center justify-center mt-10">
                {/* Static Rings */}
                <StaticRing size="82%" fade={0.2} />
                <StaticRing size="66%" fade={0.2} />
                <StaticRing size="49.5%" fade={0.2} />
                
                {/* Center Logo (Nucleus) */}
                <div className="absolute w-60 h-60 z-10">
                    <Image src={Logo} alt="Aaxel Logo" layout="responsive" />
                </div>

                {/* Moving Electrons */}
                <ElectronOrbit size="101%" duration={20} startAngle={40} />
                <ElectronOrbit size="100%" duration={16} startAngle={180} />
                <ElectronOrbit size="82%" duration={15} startAngle={90} />
                <ElectronOrbit size="79%" duration={12} startAngle={230} />
                <ElectronOrbit size="61%" duration={12} startAngle={45} />
                <ElectronOrbit size="59%" duration={10} startAngle={225} />

                {/* Features (Placed Around the Circle) */}
                {features.map((feature, index) => (
                    <FeatureItem key={index} {...feature} index={index} total={features.length} />
                ))}
            </div>
        </section>
    );
};

// Static Orbit Rings
const StaticRing = ({ size, fade }) => (
    <div
        className="absolute border-grey-100 rounded-full"
        style={{
            width: size,
            height: size,
            border: `3px solid rgba(150, 150, 150, ${fade})`
        }}
    />
);

// Animated Electron Orbits
const ElectronOrbit = ({ size, duration, startAngle }) => (
    <div className="absolute" style={{ width: size, height: size }}>
        <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: duration, ease: "linear" }}
            className="absolute w-full h-full flex items-center justify-center"
        >
            <Electron startAngle={startAngle} />
        </motion.div>
    </div>
);

// Animated Electron (Moving on Ring)
const Electron = ({ startAngle }) => (
    <div
        className="absolute z-10 w-4 h-4 bg-gray-300 rounded-full"
        style={{
            top: "9%",
            left: "50%",
            transform: `translate(-50%, -50%) rotate(${startAngle}deg) translateX(50%)`
        }}
    />
);

// Features Data
const features = [
    { icon: <FaEarthAmericas />, title: "Best Digital Experience", description: "Although, we are just a call away! You can get your policies through our account portal." },
    { icon: <FaClockRotateLeft />, title: "Savings", description: "We compare your rates across the available markets and save you money." },
    { icon: <IoMdSettings />, title: "Your Coverage, Your Way", description: "We help you customize your coverage in ways that best suit your needs." },
    { icon: <FaUser />, title: "Independent Insurance Broker", description: "Being independent, we work for you, not an insurance company." },
    { icon: <VscGraph />, title: "24x7 Support", description: "We're here for you 24x7. Call us or chat online to get queries solved." },
    { icon: <PiCubeTransparent />, title: "Full Transparency", description: "Best Coverage. Best price. Clear language. We always work for our valuable customers." }
];

// Feature Item Component (Places Features in Circular Fashion)
const FeatureItem = ({ icon, title, description, index, total }) => {
    const angle = (index / total) * 2 * Math.PI; // Evenly spaced around the circle
    const radius = 380; // Distance from center
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);

    return (
        <div
            className="absolute w-60 text-center flex flex-col items-center"
            style={{
                transform: `translate(${x}px, ${y}px)`
            }}
        >
            <div className="text-6xl text-cyan-700 items-end">{icon}</div>
            <h4 className="text-3xl text-black font-bold mt-2">{title}</h4>
            <p className="text-lg text-gray-600">{description}</p>
        </div>
    );
};

export default Features;