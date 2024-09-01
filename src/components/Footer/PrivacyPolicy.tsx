import { useTranslation } from "react-i18next";
import Navbar from "../Navbar/Navbar";
import Footer from "./Footer";
import { useEffect } from "react";

const PrivacyPolicy = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto text-white mt-5">
        {/* GErman */}
        {i18n.language === "de" ? (
          <div>
            <h1 className="font-bold text-2xl">Privacy Policy</h1>
            <h2 className="font-bold text-xl my-3">1. Introduction</h2>
            <p className="font-poppins leading-relaxed">
              Welcome to VibeCard. The protection of your personal data is
              important to us. This privacy policy explains how we collect, use
              and protect your personal data when you visit our website and use
              our services.
            </p>
            <h2 className="font-bold text-xl my-3">2. Responsible body</h2>
            <p className="font-poppins leading-relaxed">
              {" "}
              Responsible for data processing is:{" "}
            </p>
            <p className="font-poppins leading-relaxed">
              VibeCard
              <br /> Neustr. 21
              <br /> 79312 Emmendingen
              <br /> Represented by: Omar Awel and Sitra Amdehun
              <br /> Contact: <br /> Telephone:
              <a href="tel:015906467215">0159 06467215</a>
              <br /> Email:
              <a href="mailto:kontakt@vibecard.de">kontakt@vibecard.de</a>
            </p>
            <h2 className="font-bold text-xl my-3">
              3. Collection and processing of data
            </h2>
            <p className="font-poppins leading-relaxed">
              We collect and process your personal data to provide and improve
              our services. The data collected includes:
            </p>
            <ul>
              <li>Contact information: name, email address, phone number</li>
              <li>
                Usage data: IP address, browser type, pages visited, access
                times
              </li>
              <li>Order data: order history, payment information</li>
              <li>
                Subscription information: details of your subscriptions and
                affiliate marketing activities
              </li>
              <li>Chatbot data: conversations you have with our chatbot</li>
            </ul>
            <h2 className="font-bold text-xl my-3">
              4. Purposes of data processing
            </h2>
            <p className="font-poppins leading-relaxed">
              We use your data for the following purposes:{" "}
            </p>
            <ul>
              <li>
                Processing and managing your NFC and digital business card
                orders
              </li>
              <li>
                Managing and processing subscriptions and affiliate marketing
              </li>
              <li>Improving our website and services</li>
              <li>
                Communicating with you, including customer service and marketing
                (if you have consented)
              </li>
              <li>Providing and improving our chatbot </li>
            </ul>
            <h2 className="font-bold text-xl my-3">5. Sharing of data</h2>
            <p className="font-poppins leading-relaxed">
              Your personal data will only be shared if this is necessary to
              provide our services or to comply with legal requirements. This
              includes:
            </p>
            <ul>
              <li>
                Service providers: payment gateways, shipping service providers,
                marketing partners
              </li>
              <li>Legal requirements: authorities when required by law</li>
            </ul>
            <h2 className="font-bold text-xl my-3">6. Your rights</h2>
            <p className="font-poppins leading-relaxed">
              You have the right to access, correct or delete your data. In
              addition, you can object to the processing of your data or
              withdraw your consent. Please contact us using the contact details
              provided to exercise your rights.
            </p>
            <h2 className="font-bold text-xl my-3">7. Security</h2>
            <p className="font-poppins leading-relaxed">
              We take technical and organizational measures to protect your data
              from unauthorized access and misuse. However, absolute security
              cannot be guaranteed.
            </p>
            <h2 className="font-bold text-xl my-3">
              8. Changes to the privacy policy
            </h2>
            <p className="font-poppins leading-relaxed">
              We reserve the right to change this privacy policy. The current
              version will be published on our website.
            </p>
            <h2 className="font-bold text-xl my-3">9. Contact</h2>
            <p className="font-poppins leading-relaxed">
              If you have any questions or concerns about data protection, you
              can contact us at any time using the contact details provided.
            </p>
          </div>
        ) : (
          <div>
            <h1 className="font-bold text-2xl">Privacy Policy</h1>{" "}
            <h2 className="font-bold text-xl my-3">1. Introduction</h2>
            <p className="font-poppins leading-relaxed">
              Welcome to VibeCard. The protection of your personal data is
              important to us. This privacy policy explains how we collect, use
              and protect your personal data when you visit our website and use
              our services.
            </p>
            <h2 className="font-bold text-xl my-3">2. Responsible body</h2>
            <p className="font-poppins leading-relaxed">
              {" "}
              Responsible for data processing is:{" "}
            </p>
            <p className="font-poppins leading-relaxed">
              VibeCard
              <br /> Neustr. 21
              <br /> 79312 Emmendingen
              <br /> Represented by: Omar Awel and Sitra Amdehun
              <br /> Contact: <br /> Telephone:
              <a href="tel:015906467215">0159 06467215</a>
              <br /> Email:
              <a href="mailto:kontakt@vibecard.de">kontakt@vibecard.de</a>
            </p>
            <h2 className="font-bold text-xl my-3">
              3. Collection and processing of data
            </h2>
            <p className="font-poppins leading-relaxed">
              We collect and process your personal data to provide and improve
              our services. The data collected includes:
            </p>
            <ul>
              <li>Contact information: name, email address, phone number</li>
              <li>
                Usage data: IP address, browser type, pages visited, access
                times
              </li>
              <li>Order data: order history, payment information</li>
              <li>
                Subscription information: details of your subscriptions and
                affiliate marketing activities
              </li>
              <li>Chatbot data: conversations you have with our chatbot</li>
            </ul>
            <h2 className="font-bold text-xl my-3">
              4. Purposes of data processing
            </h2>
            <p className="font-poppins leading-relaxed">
              We use your data for the following purposes:{" "}
            </p>
            <ul>
              <li>
                Processing and managing your NFC and digital business card
                orders
              </li>
              <li>
                Managing and processing subscriptions and affiliate marketing
              </li>
              <li>Improving our website and services</li>
              <li>
                Communicating with you, including customer service and marketing
                (if you have consented)
              </li>
              <li>Providing and improving our chatbot </li>
            </ul>
            <h2 className="font-bold text-xl my-3">5. Sharing of data</h2>
            <p className="font-poppins leading-relaxed">
              Your personal data will only be shared if this is necessary to
              provide our services or to comply with legal requirements. This
              includes:
            </p>
            <ul>
              <li>
                Service providers: payment gateways, shipping service providers,
                marketing partners
              </li>
              <li>Legal requirements: authorities when required by law</li>
            </ul>
            <h2 className="font-bold text-xl my-3">6. Your rights</h2>
            <p className="font-poppins leading-relaxed">
              You have the right to access, correct or delete your data. In
              addition, you can object to the processing of your data or
              withdraw your consent. Please contact us using the contact details
              provided to exercise your rights.
            </p>
            <h2 className="font-bold text-xl my-3">7. Security</h2>
            <p className="font-poppins leading-relaxed">
              We take technical and organizational measures to protect your data
              from unauthorized access and misuse. However, absolute security
              cannot be guaranteed.
            </p>
            <h2 className="font-bold text-xl my-3">
              8. Changes to the privacy policy
            </h2>
            <p className="font-poppins leading-relaxed">
              We reserve the right to change this privacy policy. The current
              version will be published on our website.
            </p>
            <h2 className="font-bold text-xl my-3">9. Contact</h2>
            <p className="font-poppins leading-relaxed">
              If you have any questions or concerns about data protection, you
              can contact us at any time using the contact details provided.
            </p>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
