import ContactUs from '@/components/homepage/ContactCard';
import React from 'react'

const Privacy = () => {
  return (
    <div className="max-w-6xl mx-auto py-40 px-2">
      <div className="">
        <h2 className="text-3xl md:text-5xl text-primary font-bold px-2 border-l-4 border-secondary my-6">
          Privacy Policy
        </h2>
        <div className="flex flex-col gap-8 md:text-lg py-10">
        <p className="">
          <strong>Aaxel Insurance Brokers Ltd.</strong> values your business and
          we thank you for your confidence in choosing our firm as your source
          of advice and products. As our client, you trust us with your personal
          information. We respect that trust and want you to be aware of our
          commitment to protect the information you share in the course of doing
          business with us. This document outlines our practice with respect to
          the collection, use and disclosure of your personal information.
        </p>
        <p className="font-semibold ">
          What we will not do with your information
        </p>
        <p>
          We do not sell or share client information with organizations outside
          of our relationship with you that would use it to contact you about
          their own products or services.
        </p>
        <p className="font-semibold ">
          Aaxel Insurance Brokers Ltd. Privacy Statement
        </p>
        <p className="">
          The subsidiaries and operating divisions of Aaxel Insurance Brokers
          Ltd. take steps intended to meet privacy principles and requirements
          with respect to personal information under applicable Canadian privacy
          legislation. The purpose of this statement is to inform our customers
          and other individuals we deal with (“you” or “your”) how we collect,
          use, disclose and protect your personal information. Personal
          information is information about an identifiable individual, as more
          particularly described under applicable privacy legislation. This
          Privacy Statement applies to our collection, use and disclosure of
          personal information in Canada. This Privacy Statement does not apply
          to information about our employees or to information that is not
          personal information.
        </p>
        <p className="font-semibold">
          Aaxel Insurance Entities Providing this Privacy Statement
        </p>
        <p>
          We are providing this Privacy Statement on behalf of Aaxel insurance’s
          entities and operating divisions, listed below:
        </p>
        <p>Aaxel Insurance Brokers Ltd.</p>
        <p>Aaxel Financial Services Ltd.</p>
        <p className="font-semibold">Personal Information We Collect</p>
        <p>
          Aaxel insurance and its brokers/agents and representatives collect
          personal information in a number of circumstances in the course of
          conducting our business. Personal information we may collect includes:
        </p>
        <ul>
          <li>
            Name, address, email address, telephone number, and other contact
            information;
          </li>
          <li>
            Age, birth date, social insurance number, ID numbers, gender, credit
            card numbers or license plate numbers
          </li>
          <li>
            Information about your preferences, income, assets or personal
            finances;
          </li>
          <li>
            Medical records, credit records, loan records, driving record,
            employment records, insurance or transaction history
          </li>
          <li>Information about your insurance claims or claims history</li>
          <li>
            such other information we may collect with your consent or as
            permitted or required by law.
          </li>
        </ul>
        <p>
          We generally collect personal information directly from you, for
          example, from application forms that you fill out for our insurance
          products and services, or when you communicate with us by telephone,
          email or in person. We may also collect personal information about you
          from other sources, such as other insurance brokers, insurance
          companies, consumer reporting agencies, industry associations and data
          banks, investment product suppliers, marketing agencies, government
          agencies, claims adjusters, employers and inspectors.
        </p>
        <p className="font-semibold">Disclosure of Your Personal Information</p>
        <p>
          As necessary to carry out the purposes for which Aaxel insurance
          collects and uses your personal information. Aaxel insurance may
          disclose your personal information to third parties, such as other
          insurance brokers, insurers, consumer reporting agencies, claims
          adjusters, government, regulatory and self-regulatory agencies,
          lawyers, financial institutions, benefits providers and medical
          professionals, and others involved in the claims handling process in
          accordance with legal and insurance regulatory reporting requirements
          or standard accepted insurance brokerage and insurance practices.
          Aaxel insurance may also disclose your personal information with your
          consent or as permitted or required by law.
        </p>
        <p className="font-semibold">Disclosure to Affilates</p>
        <p>
          Personal information may be disclosed to our affiliates (including
          outside of Canada) for internal audit, management, billing or
          administrative purposes. We may also disclose personal information to
          our affiliates so that they may send you information about their
          products and services. However, if you do not want your personal
          information disclosed for these marketing purposes, you may contact us
          at any time as described further below.
        </p>
        <p className="font-semibold">Security</p>
        <p>
          We take reasonable physical, organizational and technological security
          measures to safeguard the personal information in our custody or
          control. These include safeguards to protect personal information
          against loss or theft, as well as unauthorized access, disclosure,
          copying, use, or modification. Authorized employees, agents and
          mandataries of Aaxel Insurance who require access to your personal
          information in order to fulfill their job requirements will have
          access to your personal information.
        </p>
        <p className="font-semibold">Cookies and similar technologies</p>
        <p>
          We use cookies and similar technologies on our website to improve your
          browsing experience and analyze website traffic. Cookies are small
          data files that are placed on your device when you visit our website.
          They allow us to remember your preferences, analyze how you interact
          with our website, and personalize your experience.
        </p>
        <p>
          We use both session cookies and persistent cookies. Session cookies
          are temporary and are deleted when you close your browser. Persistent
          cookies remain on your device until they expire or are deleted.
        </p>
        <p>
          You can choose to disable cookies through your browser settings, but
          this may limit your ability to use certain features of our website.
        </p>
        </div>
      </div>
      <ContactUs />
    </div>
  );
}

export default Privacy