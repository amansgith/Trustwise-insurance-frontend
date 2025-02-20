import React from "react";
import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  {
    title: "Quick Links",
    sublinks: [
      {
        url: "/",
        text: "Join Our Team",
      },
      {
        url: "/",
        text: "Our Locations",
      },
      {
        url: "/",
        text: "About Us",
      },
      {
        url: "/",
        text: "Contact Us",
      },
    ],
  },
  {
    title: "Menu",
    sublinks: [
      {
        url: "/",
        text: "Auto Insurance",
      },
      {
        url: "/",
        text: "Home Insurance",
      },
      {
        url: "/",
        text: "Bundle Insurance",
      },
      {
        url: "/",
        text: "Business Insurance",
      },
      {
        url: "/",
        text: "Life & Financial",
      },
    ],
  },
  {
    title: "Resources",
    sublinks: [
      {
        url: "/",
        text: "Blog",
      },
      {
        url: "/",
        text: "Get A Quote",
      },
      {
        url: "/",
        text: "Claim",
      },
      {
        url: "/",
        text: "Policy Payments",
      },
      {
        url: "/",
        text: "Regulation",
      },
      {
        url: "/",
        text: "How we Conduct",
      },
      {
        url: "/",
        text: "Business?",
      },
      {
        url: "/",
        text: "Term of Use",
      },
      {
        url: "/",
        text: "Privacy Policy",
      },
    ],
  },
];

const Footer = () => {
  return (
    <>
      <div className="bg-[#f7f7f7] px-6 pt-[30px] pb-[60px] w-full grid grid-cols-4">
        <Image src="/logo-footer.png" alt="Footer Logo" width={200} height={50} className="-translate-y-6" />
        {footerLinks.map((flinks, ind) => (
          <div
            key={ind}
            className="w-full px-6 border-l border-gray-500 flex flex-col gap-2"
          >
            <h4 className="text-lg font-extrabold">{flinks.title}</h4>
            <div className="flex flex-col gap-2">
              {flinks.sublinks.map((links, index) => (
                <Link key={index} href={links.url}>
                  <p className="font-medium hover:text-[#4db2ec]">
                    {links.text}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        ))}

        {/* Sticky Call to Action */}
        <div className="fixed z-20 bottom-0 left-0 right-0 bg-green-700 text-white py-3 text-center font-bold text-2xl">
          Call for a quote:{" "}
          <span className="text-white pl-3">1-866-358-2860</span>
        </div>
      </div>
      <div className="py-6">
        <h3 className="font-extrabold text-lg text-center mb-12">
          © 2023 Aaxel Insurance Brokers Ltd. All Rights Reserved.
        </h3>
      </div>
    </>
  );
};

export default Footer;