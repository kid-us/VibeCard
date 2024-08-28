import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Home/Hero";
import Footer from "../Footer/Footer";
import { intro, intro2 } from "../../assets";
import Loading from "../Loading/Loading";
import homeCard from "../../services/homeCard";
import Faq from "../Home/FAQ";
import HeroCard from "../Home/HeroCard";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import Chat from "../ChatBot/Chat";
import Testimonials from "../Home/Testimonials";
import Product from "../Home/Product";
import Cart from "../Cart/Cart";
import { useTranslation } from "react-i18next";
import Companies from "../Home/Companies";

const Home = () => {
  const [title] = useState("Vibecard - Digital Business Cards");
  useDocumentTitle(title);

  const { t } = useTranslation();

  // Scroll to top
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {loading && <Loading />}
      <Cart home />
      <Chat></Chat>
      <div>
        <Navbar />
        <div className="lg:container mx-auto lg:mt-40 mt-20 lg:pb-32">
          <Hero />
        </div>
      </div>

      {/* Video */}
      <div className="relative lg:pb-1 pb-1">
        <div className="relative right-20 -top-52">
          <div className="absolute w-[5%] lg:w-[10%] lg:right-20 -right-40 bulb"></div>
        </div>
        <div className="absolute lg:left-[45%] left-28 top-6 secondary-bg border-gradient shadow shadow-zinc-900 rounded-full px-4 py-1">
          <p className="text-center text-xs font-extrabold text-white ">
            {t("video")}
          </p>
        </div>
        <div className="container mx-auto pt-10 lg:px-0 px-3">
          <div className="border-gradient border-2 rounded-xl overflow-hidden">
            <div className="lg:rounded-lg rounded overflow-hidden">
              {/* <img src={browse} alt="" /> */}
              <div className="lg:rounded-lg rounded overflow-hidden">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="aspect-video lg:h-[100vh] w-full object-"
                >
                  <source src={intro} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Companies */}
      <div className="mt-10">
        <p className="text-white font-poppins text-2xl text-center mb-10">
          Agrowing number of teams and professionals rely on Vibecard
        </p>
        <Companies />
      </div>

      {/* hero */}
      <div className="relative container mx-auto">
        <HeroCard />
      </div>

      {/* Cards */}
      <div className="border-t border-gray-800 overflow-hidden">
        <div className="lg:container mx-auto">
          <div className="py-1 px-2 lg:px-0">
            <div className="relative right-20 lg:-top-28 -top-40">
              <div className="absolute lg:right-[35em]  right-36 top-40 bulb"></div>
            </div>
            <p className="text-center lg:mt-16 mt-6 mb-8 text-gray-500 font-poppins">
              {t("feature")}
            </p>
            <div className="flex justify-center w-full text-center">
              <p className="text-teal-500 font-poppins font-extrabold lg:text-4xl text-2xl text-center lg:mb-16 mb-10 lg:w-96 w-80">
                {t("featureTitle")}
              </p>
            </div>
            <div className="lg:grid grid-cols-9 gap-x-5">
              {homeCard.map((card) => (
                <div
                  key={card.id}
                  className="col-span-3 border-gradient-2 hover:border hover:border-gray-500 rounded-2xl p-7 text-white lg:mb-5 mb-8 secondary-bg"
                >
                  <img src={card.image} alt="Image" className="w-12 mb-5" />
                  <h1 className="text-xl font-extrabold">{t(card.title)}</h1>
                  <p className="text-md mt-4 text-gray-300 font-poppins">
                    {t(card.note)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="lg:container mx-auto lg:px-0 px-3 lg:my-20">
        <div className="lg:grid grid-cols-2 gap-x-10 overflow-hidden">
          <div className="lg:text-start lg:mt-16 lg:p-3">
            <h1 className="font-extrabold font-poppins text-teal-500 lg:text-3xl text-2xl mb-5">
              {t("hero1")}
            </h1>
            <p className="text-white lg:text-xl text-lg">{t("heroDesc")}</p>
          </div>
          {/*  */}
          <div className="rounded overflow-hidden lg:mt-0 mt-5">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="aspect-video w-full rounded-xl"
            >
              <source src={intro2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="border-t border-gray-800 lg:pb-14 pt-10 overflow-hidden">
        <div className="lg:container mx-auto">
          <div className="relative right-20 lg:-top-28 -top-40">
            <div className="absolute lg:right-[35em]  right-36 top-40 bulb"></div>
          </div>
          <div className="flex justify-center w-full text-center">
            <p className="text-teal-500 font-poppins font-extrabold lg:text-4xl text-2xl text-center lg:mb-16 mb-10 lg:w-96 w-80">
              {t("digital")}
            </p>
          </div>
          {/* <Products /> */}
          <Product />
        </div>
      </div>

      {/* Testimonials */}
      <div className="border-t border-gray-800 lg:pb-14 pt-10 overflow-hidden">
        <div className="lg:container mx-auto">
          <div className="relative right-20 lg:-top-28 -top-40">
            <div className="absolute lg:right-[35em]  right-36 top-40 bulb"></div>
          </div>
          <div className="flex justify-center w-full text-center">
            <p className="font-poppins text-teal-500 font-extrabold lg:text-4xl text-2xl text-center lg:mb-16 mb-10 lg:w-96 w-80">
              Testimonials
            </p>
          </div>
          {/* <Testimonies /> */}
          <div className=" gap-x-5 px-2">
            <Testimonials />
          </div>
        </div>
      </div>

      {/* Faq */}
      <div className="mt-16 lg:px-0 px-4">
        <h1 className="text-center text-2xl text-teal-500 font-poppins font-bold">
          FAQ
        </h1>
        <div className="mt-10 flex justify-center">
          <div className="lg:w-[60%] w-full">
            <Faq />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
