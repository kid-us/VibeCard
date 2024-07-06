import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "./Home/Hero";
// import Gradient from "../Gradient/Gradient";
import Footer from "../Footer/Footer";
import { browse } from "../../assets";
// import { video2 } from "../../assets";
import Loading from "../Loading/Loading";
// import BusinessCard from "./Home/BusinessCard";
import homeCard from "../../services/homeCard";
import Faq from "./Home/FAQ";

const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {loading && <Loading />}
      <div>
        <Navbar />
        {/* <Gradient /> */}
        <div className="container mx-auto lg:mt-56 mt-32 pb-20">
          <Hero />
        </div>
      </div>

      {/* Video */}
      <div className="relative bg-secondary pb-14">
        <div className="absolute bg-teal-500 border shadow shadow-zinc-900 rounded-full px-4 py-1 left-[45%] top-6">
          <p className="text-center text-sm font-extrabold text-white chakra">
            As simple as this
          </p>
        </div>
        <div className="container mx-auto pt-10 lg:px-0 px-3">
          <div className="border border-gray-600 rounded-xl overflow-hidden">
            <div className=" lg:rounded-lg rounded overflow-hidden">
              <img src={browse} alt="" />
              {/* <div className=" lg:rounded-lg rounded overflow-hidden">
                <video autoPlay muted loop playsInline className="">
                  <source src={video} type="video/webm" />
                  <source src={video2} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Business Card */}
      {/* <div className="container mx-auto">
        <BusinessCard />
      </div> */}

      {/* Why vibecard */}
      {/* <div className="container mx-auto lg:px-0 px-2 mt-10">
            <div className="flex justify-between">
              <div>
                <h1 className="text-3xl font-extrabold mb-4">
                  Why{" "}
                  <span className="bg-teal-700 rounded-3xl px-5 py-1 text-white">
                    {" "}
                    Choose VibeCard?
                  </span>
                </h1>
                <p className="lg:text-xl text-lg mb-3 text-gray-700">
                  Instant Impact: Make a memorable impact at every meeting with
                  a card that carries not just your contact details but your
                  professional brand.
                </p>
                <p className="lg:text-xl text-lg mb-3 text-gray-700">
                  Enhanced Security: Protect your information with
                  state-of-the-art encryption and security features that come
                  standard with our RFID wallets.
                </p>
                <p className="lg:text-xl text-lg mb-3 text-gray-700">
                  Versatile Solutions: From individual entrepreneurs to large
                  enterprises, our products meet the needs of every professional
                  environment.
                </p>
              </div>
              <div className="lg:block hidden ">
                <img src={why} alt="why" />
              </div>
            </div>
          </div> */}

      <div className="main-bg">
        <div className="container mx-auto">
          <div className="py-1 px-2 lg:px-0">
            <div className="flex justify-center w-full text-center">
              <h1 className="text-gray-100 font-extrabold lg:text-4xl text-2xl text-center my-16 w-96">
                Customize, Connect, and Conquer
              </h1>
            </div>
            <div className="lg:grid grid-cols-9 gap-x-5">
              {homeCard.map((card) => (
                <div
                  key={card.id}
                  className="bg-secondary col-span-3 border border-gray-500 rounded-2xl p-7 text-white lg:mb-5 mb-8"
                >
                  <img src={card.image} alt="Image" className="w-12 mb-5" />
                  <h1 className="text-xl font-extrabold">{card.title}</h1>
                  <p className="text-md mt-4 text-gray-300">{card.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Faq />

      <Footer />
    </>
  );
};

export default Home;
