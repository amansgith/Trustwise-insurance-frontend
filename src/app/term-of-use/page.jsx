import ContactUs from '@/components/homepage/ContactCard';
import React from 'react'

const TermPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-0 pt-40">
      <h2 className="text-3xl md:text-5xl text-primary font-bold px-2 border-l-4 border-secondary my-6">
        Term of User
      </h2>
      <div className="flex flex-col gap-8 py-10 md:text-lg">
        <p>
          Thank you for your request. Below is a detailed terms of use for Aaxel
          Insurance Brokers Ltd. Please note that this is a sample and may not
          reflect the exact terms of use for the company.
        </p>
        <h2 className="text-primary font-semibold text-2xl">
          Acceptance of Terms
        </h2>
        <p>
          By using the Aaxel Insurance Brokers Ltd. website (the “Site”), you
          agree to be bound by these terms of use (the “Terms”). If you do not
          agree to these Terms, please do not use the Site.
        </p>
        <h2 className="text-primary font-semibold text-2xl">Use of Site</h2>
        <p>
          By using the Aaxel Insurance Brokers Ltd. website (the “Site”), you
          You may use the Site only for lawful purposes and in accordance with
          these Terms. You agree not to use the Site:
        </p>
        <ul className="list-disc space-y-4 pl-6">
          <li>
            In any way that violates any applicable federal, state, local or
            international law or regulation.
          </li>
          <li>
            To engage in any conduct that restricts or inhibits anyone’s use or
            enjoyment of the Site, or which, as determined by us, may harm Aaxel
            Insurance Brokers Ltd. or users of the Site or expose them to
            liability.
          </li>
          <li>
            To transmit, or procure the sending of, any advertising or
            promotional material without our prior written consent, including
            any “junk mail,” “chain letter,” “spam,” or any other similar
            solicitation.
          </li>
        </ul>
        <h2 className="text-primary font-semibold text-2xl">
          Intellectual Property Rights
        </h2>
        <p>
          The content on the Site, including but not limited to text, graphics,
          logos, images, and software, is owned by Aaxel Insurance Brokers Ltd.
          or its licensors and is protected by applicable copyright, trademark,
          and other intellectual property laws. You may not reproduce,
          distribute, modify, create derivative works of, publicly display,
          publicly perform, republish, download, store, or transmit any of the
          material on our Site, except as follows:
        </p>
        <ul className="list-disc space-y-4 pl-6">
          <li>
            Your computer may temporarily store copies of such materials in RAM
            incidental to your accessing and viewing those materials.
          </li>
          <li>
            You may store files that are automatically cached by your web
            browser for display enhancement purposes.
          </li>
        </ul>
        <h2 className="text-primary font-semibold text-2xl">
          Links to Third-Party Websites
        </h2>
        <p>
          The Site may contain links to third-party websites. These links are
          provided solely for your convenience and do not imply endorsement or
          approval of these websites by Aaxel Insurance Brokers Ltd. We are not
          responsible for the content of these websites or for any loss or
          damage that may arise from your use of them.
        </p>
        <h2 className="text-primary font-semibold text-2xl">
          Disclaimer of Warranties
        </h2>
        <p>
          The Site and its contents are provided “as is” without warranty of any
          kind, either expressed or implied, including but not limited to, the
          implied warranties of merchantability, fitness for a particular
          purpose, or non-infringement. Aaxel Insurance Brokers Ltd. does not
          warrant that the Site or its contents will be uninterrupted or
          error-free, that defects will be corrected, or that the Site or its
          servers are free of viruses or other harmful components.
        </p>
        <h2 className="text-primary font-semibold text-2xl">
          Changes to Term of Use
        </h2>
        <p>
          Aaxel Insurance Brokers Ltd. reserves the right to modify these Terms
          at any time without prior notice. Your continued use of the Site after
          such modifications constitutes your acceptance of the updated Terms.
        </p>
      </div>
      <ContactUs />
    </div>
  );
}

export default TermPage