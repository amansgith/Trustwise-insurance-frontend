import { NotepadText } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const Conduct = () => {
  return (
    <div className="w-full mx-auto py-28 px-6 md:px-16">
      <h2 className="text-3xl md:text-5xl text-primary font-bold px-2 border-l-4 border-secondary my-6">
        How we Conduct Business?
      </h2>
      <div className="flex flex-col gap-8 md:text-lg">
        <p>
          As your independent insurance broker, we purchase insurance products
          and services on your behalf that are available, affordable and
          understandable.
        </p>
        <p>
          Our role is to provide you with the best insurance value that combines
          coverage, service, and price. We also provide personalized, quality
          service that includes professional insurance advice, ongoing policy
          maintenance and claims support. When any issue arises regarding your
          insurance coverage, we are your advocate, using professional
          experience to best represent your individual interest.
        </p>
        <p>
          Brokerage compensation is part of your insurance premium. Commissions
          are paid to us on an annual basis for both new business and renewals.
          Insurance companies also pay us Contingent Profit Commissions based on
          multiple factors including but not limited to minimum volume, loss
          ratios etc.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="w-fit group mx-auto">
          <h2 className="text-3xl md:text-5xl text-primary font-bold px-2 mt-6 mb-2">
            Document
          </h2>
          <p className="h-[2px] bg-secondary w-1/3 mx-auto transition-all duration-500 group-hover:w-1/2"></p>
        </div>
        <div className="border-2 rounded-lg border-gray-950 max-w-[300px] flex flex-col gap-4 items-center py-4 mx-auto">
          <NotepadText className="text-secondary" size={50} />
          <h2 className="font-semibold text-primary text-3xl text-center">
            Compensation Structure
          </h2>
          <Link
            href={
              "https://www.aaxel.ca/wp-content/uploads/2023/03/Commission-Disclosure-Statement.pdf"
            }
            passHref
          >
            <button className="p-2.5 md:p-3.5 uppercase rounded text-white bg-primary hover:bg-secondary hover:text-black transition duration-300">
                Download Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Conduct