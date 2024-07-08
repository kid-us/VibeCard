import { useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const PrivacyPolicy = () => {
  const [title] = useState("Privacy Policy");
  useDocumentTitle(title);

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-10 text-white lg:px-0 px-3">
        <h1 className="text-4xl font-extrabold">Legal Notices</h1>
        <h2 className="my-5 text-xl font-extrabold">Privacy Policy</h2>
        <p className="text-lg">
          VibeCard is committed to protecting and respecting the privacy of its
          users. Our privacy practices comply with the European General Data
          Protection Regulation (GDPR). We only collect personal data necessary
          for the delivery of our services and retain this data only as long as
          is required by law or necessary for the purposes for which it is
          processed. Users have the right to access their stored data, request
          rectification, or demand deletion.
        </p>
        <h1 className="my-5 text-xl font-extrabold">Terms of Use</h1>
        <p className="text-lg">
          The use of the VibeCard website and products is subject to certain
          terms and conditions. By using our services, you agree to these terms.
          Unauthorized use of our products for illegal purposes is prohibited.
          In the case of misuse, we reserve the right to suspend service and
          take legal action.
        </p>
        <h1 className="my-5 text-xl font-extrabold">
          Copyright and Intellectual Property
        </h1>
        <p className="text-lg">
          All content on our website and all products provided by VibeCard are
          protected by copyright and may not be reproduced, distributed, or
          otherwise used for commercial purposes without our express written
          consent. This includes text, graphics, logos, images, software, and
          other digital media.
        </p>
        <h1 className="my-5 text-xl font-extrabold">Disclaimer</h1>
        <p className="text-lg">
          VibeCard assumes no liability for any damage or loss that may arise
          directly or indirectly from the use of our products or services. While
          we strive to ensure that all information provided on our website is
          accurate, we do not guarantee its completeness or accuracy.
        </p>
        <h1 className="my-5 text-xl font-extrabold">
          Changes to Legal Notices
        </h1>
        <p className="text-lg">
          We reserve the right to change our legal notices at any time. Changes
          will be posted on our website and become effective upon posting. Users
          are encouraged to regularly review the legal notices to stay informed
          about any changes.
        </p>
        <h1 className="my-5 text-xl font-extrabold">Contact Information</h1>
        <p className="text-lg">
          For questions or concerns regarding our legal notices, users can
          contact us at any time using the contact details provided on our
          contact page.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
