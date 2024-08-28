import { Link } from "react-router-dom";
import AmbassadorRegister from "../Ambassador/AmbassadorRegister";
import Faq from "../Home/FAQ";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import AmbassadorLogin from "../Ambassador/AmbassadorLogin";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import { useTranslation } from "react-i18next";
import { ambassador1, ambassador2, ambassador3 } from "@/assets";

const Ambassador = () => {
  const [title] = useState("Vibecard - Ambassador");
  useDocumentTitle(title);

  const { t } = useTranslation();

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [active, setActive] = useState(false);

  return (
    <>
      <div className="lg:container mx-auto px-2 text-white mt-5">
        <Link to={"/"} className="logo-font text-4xl">
          vibecard
        </Link>
        <div className="lg:grid grid-cols-2 gap-x-16 my-16">
          <div>
            <p className="text-xl ubuntu">{t("ambassador")} vibecard?</p>
            <p className="text-lg mt-2">{t("ambassadorNote")}</p>

            <p className="ubuntu mt-3 lg:hidden text-lg">
              {t("ambassadorNotAlready")}
            </p>

            {active ? (
              <p className="mt-10 ubuntu">
                {t("ambassadorGetPaid")}{" "}
                <button
                  onClick={() => setActive(false)}
                  className="text-teal-500"
                >
                  {t("ambassadorCreate")}
                </button>
              </p>
            ) : (
              <p className="mt-10 ubuntu">
                {t("ambassadorAlready")}{" "}
                <button
                  onClick={() => setActive(true)}
                  className="text-teal-500"
                >
                  {t("login")}
                </button>
              </p>
            )}

            <img
              src={ambassador1}
              alt="ambassador"
              className="mt-5 rounded-xl"
            />

            <img
              src={ambassador2}
              alt="Ambassador"
              className="mt-5 rounded-xl"
            />
            <img
              src={ambassador3}
              alt="Ambassador"
              className="mt-5 rounded-xl"
            />
          </div>
          <div className="sticky top-10 self-start">
            <div className="w-full">
              {active ? <AmbassadorLogin /> : <AmbassadorRegister />}
            </div>
          </div>
        </div>
        <div className="lg:hidden">
          <h1 className="mb-4">FAQ</h1>
          <Faq ambassador={true} />
        </div>
        <div className="mt-16 lg:block hidden">
          <h1 className="mb-5">FAQ</h1>
          <Faq ambassador={true} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Ambassador;
