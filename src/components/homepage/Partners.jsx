import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

// --- AutoScrollPartners component ---
function AutoScrollPartners() {
  const logoNames = [
    "one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","ninteen","twenty","twentyone","twentytwo"
  ];
  const scrollRef = useRef(null);
  // Duplicate the logos for seamless infinite scroll
  const logos = [...logoNames, ...logoNames];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    let frame;
    let pos = 0;
    const speed = 0.7; // px per frame
    function animate() {
      pos += speed;
      if (pos >= container.scrollWidth / 2) {
        pos = 0;
      }
      container.scrollLeft = pos;
      frame = requestAnimationFrame(animate);
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      ref={scrollRef}
      className="overflow-x-hidden w-full"
      style={{
        maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
      }}
    >
      <div className="flex flex-row gap-12 items-center py-6 min-w-[1600px]" style={{width: 'max-content'}}>
        {logos.map((name, idx) => (
          <div key={name + idx} className="flex-shrink-0 flex flex-col items-center justify-center">
            <Image
              src={`/partners/${name}.webp`}
              alt={`Partner ${name}`}
              width={140}
              height={80}
              className="object-contain w-[150px] h-[90px] md:w-[200px] md:h-[110px] rounded-md bg-white"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

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
      <div className="relative my-12">
        {/* Fog effect left */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-20" style={{background: "linear-gradient(to right,rgba(255,255,255,0.95) 70%,rgba(255,255,255,0))"}} />
        {/* Fog effect right */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-20" style={{background: "linear-gradient(to left,rgba(255,255,255,0.95) 70%,rgba(255,255,255,0))"}} />
        <AutoScrollPartners />
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