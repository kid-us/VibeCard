import { useEffect, useState } from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useTranslation } from "react-i18next";

const ChatbotPrivacyPolicy = () => {
  const [title] = useState("Chatbot Privacy Policy");
  useDocumentTitle(title);

  const { t } = useTranslation();

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="mt-8 text-white lg:px-0 px-3">
          <h1 className="text-4xl font-extrabold mb-5">
            {t("chatbot-privacy-title")}
          </h1>
          <p className="text-lg mb-4">{t("chatbot-privacy-note")}</p>
          <p className="text-lg mb-4">{t("chatbot-privacy-note2")}</p>

          <h1 className="my-5 text-xl font-extrabold">
            {t("chatbot-privacy-title2")}
          </h1>
          <p className="text-lg mb-4">{t("chatbot-privacy-note3")}</p>
          <p className="text-lg mb-4">{t("chatbot-privacy-note4")}</p>
          <p className="text-lg mb-4">{t("chatbot-privacy-note5")}</p>
          <p className="text-lg mb-4">{t("chatbot-privacy-note6")}</p>

          {/* <p className="text-lg">{t("firstStepNote")}</p>
          <h1 className="my-5 text-xl font-extrabold">{t("ambitious")}</h1>
          <p className="text-lg">{t("ambitiousNote")}</p>
          <h1 className="my-5 text-xl font-extrabold">{t("sustainability")}</h1>
          <p className="text-lg">{t("sustainabilityNote")}</p>
          <h1 className="my-5 text-xl font-extrabold">{t("shape")}</h1>
          <p className="text-lg">{t("shapeNote")}</p> */}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ChatbotPrivacyPolicy;
