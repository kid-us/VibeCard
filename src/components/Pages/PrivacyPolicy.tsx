import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
  const [title] = useState("Privacy Policy");
  useDocumentTitle(title);

  const { t } = useTranslation();

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-10">
        <div className="text-white lg:px-0 px-3">
          <h1 className="text-4xl font-extrabold">{t("legal")}</h1>
          <h2 className="my-5 text-xl font-extrabold">{t("policy")}</h2>
          <p className="text-lg">{t("policyNote")}</p>
          <h1 className="my-5 text-xl font-extrabold">{t("terms")}</h1>
          <p className="text-lg">{t("termsNote")}</p>
          <h1 className="my-5 text-xl font-extrabold">{t("copyright")}</h1>
          <p className="text-lg">{t("copyrightNote")}</p>
          <h1 className="my-5 text-xl font-extrabold">{t("disclaimer")}</h1>
          <p className="text-lg">{t("disclaimerNote")}</p>
          <h1 className="my-5 text-xl font-extrabold">{t("changes")}</h1>
          <p className="text-lg">{t("changesNote")}</p>
          <h1 className="my-5 text-xl font-extrabold">{t("contactInfo")}</h1>
          <p className="text-lg">{t("contactInfoNote")}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
