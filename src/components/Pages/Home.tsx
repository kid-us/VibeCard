import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "./Home/Hero";
// import Gradient from "../Gradient/Gradient";
import Footer from "../Footer/Footer";
import { video, video2 } from "../../assets";
// import { video2 } from "../../assets";
import Loading from "../Loading/Loading";
// import BusinessCard from "./Home/BusinessCard";
import homeCard from "../../services/homeCard";
import Faq from "./Home/FAQ";
import Products from "./Home/Products";

const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);
  return (
    <>
      {loading && <Loading />}
      <div className="relative right-64 top-10">
        <div className="absolute w-[5%] lg:w-[25%] lg:right-20 -right-40 bulb"></div>
      </div>
      <div>
        <Navbar />
        <div className="container mx-auto mt-40 lg:pb-32 pb-14">
          <Hero />
        </div>
      </div>

      {/* Video */}
      <div className="relative lg:pb-14 pb-8">
        <div className="relative right-20 -top-52">
          <div className="absolute w-[5%] lg:w-[10%] lg:right-20 -right-40 bulb"></div>
        </div>
        <div className="absolute lg:left-[45%] left-36 top-6 secondary-bg border-gradient shadow shadow-zinc-900 rounded-full px-4 py-1">
          <p className="text-center text-xs font-extrabold text-white ">
            As simple as this
          </p>
        </div>
        <div className="container mx-auto pt-10 lg:px-0 px-3">
          <div className="border-gradient border-2 rounded-xl overflow-hidden">
            <div className=" lg:rounded-lg rounded overflow-hidden">
              {/* <img src={browse} alt="" /> */}
              <div className="lg:rounded-lg rounded overflow-hidden">
                <video autoPlay muted loop playsInline className="">
                  <source src={video} type="video/webm" />
                  <source src={video2} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Business Card */}
      {/* <div className="container mx-auto">
        <BusinessCard />
      </div> */}

      {/* Cards */}
      <div className="border-t border-gray-800 mt-10 overflow-hidden">
        <div className="container mx-auto">
          <div className="py-1 px-2 lg:px-0">
            <div className="relative right-20 lg:-top-28 -top-40">
              <div className="absolute lg:right-[35em]  right-36 top-40 bulb"></div>
            </div>
            <p className="text-center mt-16 mb-8 text-gray-500">Features</p>
            <div className="flex justify-center w-full text-center">
              <p className="text-gray-100 font-extrabold lg:text-4xl text-3xl text-center mb-16 lg:w-96 w-80">
                Customize, Connect, and Conquer
              </p>
            </div>
            <div className="lg:grid grid-cols-9 gap-x-5">
              {homeCard.map((card) => (
                <div
                  key={card.id}
                  className="col-span-3 border-gradient-2 hover:border hover:border-gray-500 rounded-2xl p-7 text-white lg:mb-5 mb-8 secondary-bg"
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

      {/* Products */}
      <Products />

      <Faq />

      <Footer />
    </>
  );
};

export default Home;
