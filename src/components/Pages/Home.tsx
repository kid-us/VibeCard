import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "./Home/Hero";
import Gradient from "../Gradient/Gradient";
import Footer from "../Footer/Footer";
import { video, why } from "../../assets";
import { video2 } from "../../assets";
import Loading from "../Loading/Loading";
import BusinessCard from "./Home/BusinessCard";
import homeCard from "../../services/homeCard";

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
      <Navbar />
      <Gradient />
      <div className="container mx-auto">
        <div className="lg:mt-48 mt-24">
          <Hero />
        </div>
      </div>
      {/* Business Card */}
      <div className="menu-bg">
        <div className="container mx-auto">
          <BusinessCard />
        </div>
      </div>
      <div className="container mx-auto">
        <div className="my-10 px-2 lg:px-0">
          <div className="lg:grid grid-cols-9 gap-x-5">
            {homeCard.map((card) => (
              <div
                key={card.id}
                className="bg-white col-span-3 border rounded-3xl p-7 shadow transition ease-in-out delay-200 hover:scale-[1.01] hover:bg-teal-500 hover:text-white hover:shadow hover:shadow-zinc-400  duration-200 lg:mb-5 mb-8"
              >
                <h1 className="text-xl font-extrabold">{card.title}</h1>
                <p className="text-md mt-4 text-gray-600">{card.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video */}
      <div className="menu-bg mt-16 py-10">
        <div className="container mx-auto">
          <p className="lg:mb-10 mb-5 text-center lg:text-3xl text-2xl lg:px-0 px-4 font-extrabold font-poppins">
            Designing a{" "}
            <span className="bg-teal-700 rounded-3xl px-5 py-1 text-white">
              {" "}
              Smart Business Card Made Simple
            </span>
          </p>
          <div className="lg:p-0 p-3">
            <div className="shadow-md shadow-zinc-900 lg:rounded-lg rounded overflow-hidden">
              <div className="lg:p-0 p-3">
                <div className="shadow-md shadow-zinc-900 lg:rounded-lg rounded overflow-hidden">
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
      </div>

      {/* Why vibecard */}
      <div className="container mx-auto lg:px-0 px-2 mt-10">
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
              Instant Impact: Make a memorable impact at every meeting with a
              card that carries not just your contact details but your
              professional brand.
            </p>
            <p className="lg:text-xl text-lg mb-3 text-gray-700">
              Enhanced Security: Protect your information with state-of-the-art
              encryption and security features that come standard with our RFID
              wallets.
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
      </div>

      <Footer />
    </>
  );
};

export default Home;
