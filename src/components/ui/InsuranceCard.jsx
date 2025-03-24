"use client"
import Image from "next/image";
import Link from "next/link";

const InsuranceCard = ({ title, imageSrc, slug }) => {
  return (
    <Link href={`/${slug}`} passHref>
      <div className="cursor-pointer bg-white shadow-md rounded-xl p-6 flex flex-col items-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
        {/* Card Image */}
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200">
          <Image src={imageSrc} alt={title} width={128} height={128} className="object-cover" />
        </div>

        {/* Card Title */}
        <h4 className="mt-4 text-sm font-semibold text-gray-800 text-center">{title}</h4>
      </div>
    </Link>
  );
};

export default InsuranceCard;
