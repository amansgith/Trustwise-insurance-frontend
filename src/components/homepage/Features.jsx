"use client";
import Image from "next/image";
import { FaHeadset, FaEye, FaClipboardCheck, FaShieldAlt, FaLaptopCode, FaPiggyBank } from "react-icons/fa";
import featureimg from '../../../public/featureimg.webp';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const features = [
  { icon: <FaHeadset />, title: "24/7 Support" },
  { icon: <FaEye />, title: "Full Transparency" },
  { icon: <FaClipboardCheck />, title: "Hassle-Free Claims" },
  { icon: <FaShieldAlt />, title: "Your Coverage, Your Way" },
  { icon: <FaLaptopCode />, title: "Best Digital Experience" },
  { icon: <FaPiggyBank />, title: "Savings" },
];

const Features = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  if (inView) {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    });
  }

  return (
    <section className="relative bg-primary text-white py-12 lg:px-16 flex flex-col lg:flex-row items-center justify-between overflow-hidden">
      {/* Left Content */}
      <div className="lg:w-1/2 z-10 px-4">
        <h2 className="text-blue-400 font-bold text-xl md:text-6xl uppercase tracking-wide">
          Why Choose TrustWise?
        </h2>
        <h3 className="text-3xl sm:text-4xl font-bold mt-2">
          Few reasons for people choosing us
        </h3>
        <p className="text-gray-400 mt-4 max-w-lg">
          We provide top-tier insurance services with transparency, hassle-free
          claims, and the best digital experience.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg shadow-lg"
            >
              <span className="text-blue-400 text-2xl">{feature.icon}</span>
              <h4 className="text-lg font-semibold">{feature.title}</h4>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right Image (Diamond Shape) */}
      <motion.div
              ref={ref}
              initial={{ opacity: 0, x: 50 }}
              animate={controls} className="hidden lg:flex absolute right-0 top-0 w-full h-full lg:w-1/2 justify-center lg:mt-0 overflow-hidden">
        <div className="relative w-full h-full transform rotate-45 overflow-hidden">
          <Image
            src={featureimg} // Update the image path accordingly
            alt="Why Choose Us"
            layout="fill"
            objectFit="cover"
            className="-rotate-45"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Features;


// animation used in past 
// import { motion } from "framer-motion";
// import { FaEarthAmericas, FaClockRotateLeft, FaUser } from "react-icons/fa6";
// import { VscGraph } from "react-icons/vsc";
// import { IoMdSettings } from "react-icons/io";
// import { PiCubeTransparent } from "react-icons/pi";
// import Logo from "../../public/Round-Logo.webp"; // Update path if needed
// const Features = () => {
//     const [isMobile, setIsMobile] = useState(false);

//     useEffect(() => {
//         const handleResize = () => {
//             setIsMobile(window.innerWidth < 1024); // lg breakpoint
//         };
//         handleResize();
//         window.addEventListener("resize", handleResize);
//         return () => window.removeEventListener("resize", handleResize);
//     }, []);

//     return (
//         <>
//             {/* Show Mobile Component on Small Screens */}
//             {isMobile ? <MobileFeatures /> : <DesktopFeatures />}
//         </>
//     );
// };

// // Mobile/Tablet Features Component
// const MobileFeatures = () => (
//     <section className="flex flex-col items-center py-16 px-4 text-center">
//         <h2 className="text-lg md:text-4xl font-extrabold pb-3 text-cyan-700">
//             Why Aaxel Insurance Brokers?
//         </h2>
//         <h3 className="text-2xl md:text-6xl pb-3 text-black font-extrabold mt-2">
//             Because we offer a lot more than a policy.
//         </h3>
//         <p className="text-black mt-2 text-xl font-normal max-w-2xl">
//             Purchase your personal & business insurance with ease at a very
//             comparative rate plus ease of management.
//         </p>

//         {/* Features List for Mobile */}
//         <div className="flex flex-col w-full max-w-4xl gap-8 mt-10">
//             {features.map((feature, index) => (
//                 <FeatureItem key={index} {...feature} />
//             ))}
//         </div>
//     </section>
// );

// // Desktop Features Component
// const DesktopFeatures = () => (
//     <section className="relative flex flex-col items-center py-16 px-4 text-center">
//         <h2 className="text-lg md:text-4xl font-extrabold pb-3 text-cyan-700">
//             Why Aaxel Insurance Brokers?
//         </h2>
//         <h3 className="text-2xl md:text-6xl pb-3 text-black font-extrabold mt-2">
//             Because we offer a lot more than a policy.
//         </h3>
//         <p className="text-black mt-2 text-xl font-normal max-w-2xl">
//             Purchase your personal & business insurance with ease at a very
//             comparative rate plus ease of management.
//         </p>

//         {/* Atomic Structure for Desktop */}
//         <div className="relative w-[600px] md:w-[1000px] h-[1000px] md:h-[1000px] flex items-center justify-center mt-10">
//             <StaticRing size="82%" fade={0.2} />
//             <StaticRing size="66%" fade={0.2} />
//             <StaticRing size="49.5%" fade={0.2} />

//             {/* Center Logo */}
//             <div className="absolute w-60 h-60 z-10">
//                 <Image src={Logo} alt="Aaxel Logo" layout="responsive" />
//             </div>

//             {/* Moving Electrons */}
//             <ElectronOrbit size="101%" duration={20} startAngle={40} />
//             <ElectronOrbit size="100%" duration={16} startAngle={180} />
//             <ElectronOrbit size="82%" duration={15} startAngle={90} />
//             <ElectronOrbit size="79%" duration={12} startAngle={230} />
//             <ElectronOrbit size="61%" duration={12} startAngle={45} />
//             <ElectronOrbit size="59%" duration={10} startAngle={225} />

//             {/* Features (Placed Around the Circle) */}
//             {features.map((feature, index) => (
//                 <FeatureItem key={index} {...feature} index={index} total={features.length} />
//             ))}
//         </div>
//     </section>
// );

// // Static Orbit Rings
// const StaticRing = ({ size, fade }) => (
//     <div
//         className="absolute border-grey-100 rounded-full"
//         style={{
//             width: size,
//             height: size,
//             border: `3px solid rgba(150, 150, 150, ${fade})`
//         }}
//     />
// );

// // Animated Electron Orbits
// const ElectronOrbit = ({ size, duration, startAngle }) => (
//     <div className="absolute" style={{ width: size, height: size }}>
//         <motion.div
//             animate={{ rotate: 360 }}
//             transition={{ repeat: Infinity, duration: duration, ease: "linear" }}
//             className="absolute w-full h-full flex items-center justify-center"
//         >
//             <Electron startAngle={startAngle} />
//         </motion.div>
//     </div>
// );

// // Animated Electron (Moving on Ring)
// const Electron = ({ startAngle }) => (
//     <div
//         className="absolute z-10 w-4 h-4 bg-gray-300 rounded-full"
//         style={{
//             top: "9%",
//             left: "50%",
//             transform: `translate(-50%, -50%) rotate(${startAngle}deg) translateX(50%)`
//         }}
//     />
// );

// // Features Data
// const features = [
//     { icon: <FaEarthAmericas className="text-green-500" />, title: "Best Digital Experience", description: "Although, we are just a call away! You can get your policies through our account portal." },
//     { icon: <FaClockRotateLeft />, title: "Savings", description: "We compare your rates across the available markets and save you money." },
//     { icon: <IoMdSettings className="text-green-500" />, title: "Your Coverage, Your Way", description: "We help you customize your coverage in ways that best suit your needs." },
//     { icon: <FaUser />, title: "Independent Insurance Broker", description: "Being independent, we work for you, not an insurance company." },
//     { icon: <VscGraph className="text-green-500" />, title: "24x7 Support", description: "We're here for you 24x7. Call us or chat online to get queries solved." },
//     { icon: <PiCubeTransparent />, title: "Full Transparency", description: "Best Coverage. Best price. Clear language. We always work for our valuable customers." }
// ];

// // Feature Item Component (For Both Mobile & Desktop)
// const FeatureItem = ({ icon, title, description, index, total }) => {
//     if (total !== undefined) {
//         // This is for Desktop (Circular Layout)
//         const angle = (index / total) * 2 * Math.PI;
//         const radius = 380;
//         const x = radius * Math.cos(angle);
//         const y = radius * Math.sin(angle);

//         return (
//             <div
//                 className="absolute w-60 text-center flex flex-col items-center"
//                 style={{
//                     transform: `translate(${x}px, ${y}px)`
//                 }}
//             >
//                 <div className="text-6xl text-cyan-700">{icon}</div>
//                 <h4 className="text-3xl text-black font-bold mt-2">{title}</h4>
//                 <p className="text-lg text-gray-600">{description}</p>
//             </div>
//         );
//     }

//     // This is for Mobile (List Layout)
//     return (
//         <div className="flex flex-col items-center text-center">
//             <div className="text-5xl text-cyan-700 mb-2">{icon}</div>
//             <h4 className="text-2xl text-black font-bold mb-1">{title}</h4>
//             <p className="text-lg text-gray-600">{description}</p>
//         </div>
//     );
// };
