import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "./Home/Hero";
import Gradient from "../Gradient/Gradient";
import Footer from "../Footer/Footer";
import { video } from "../../assets";
import { video2 } from "../../assets";
import Loading from "../Loading/Loading";
import BusinessCard from "./Home/BusinessCard";

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
        {/* Business Card */}
        <BusinessCard />
        {/*  */}
        <div className="my-10 px-2 lg:px-0">
          {/* <h1 className="text-2xl">Customize, Connect, and Conquer</h1> */}
          <div className="lg:grid grid-cols-9 gap-x-5">
            {/* <div></div> */}
            <div className="col-span-3 border rounded-3xl p-7 shadow transition ease-in-out delay-200 hover:scale-105 hover:bg-teal-500 hover:text-white hover:shadow hover:shadow-zinc-400  duration-200 lg:mb-0 mb-8">
              <h1 className="text-xl font-extrabold">Design Your Own:</h1>
              <p className="text-md mt-4 text-gray-600">
                Unleash your creativity with our customizable NFC cards. Choose
                your style, add your info, and make your card as unique as you
                are.
              </p>
            </div>
            <div className="col-span-3 border rounded-3xl p-7 shadow transition ease-in-out delay-200 hover:scale-105 hover:bg-teal-500 hover:text-white hover:shadow hover:shadow-zinc-400  duration-200 lg:mb-0 mb-8">
              <h1 className="text-xl font-extrabold">Effortless Sharing:</h1>
              <p className="text-md mt-4 text-gray-600">
                Just tap your VibeCard against any smartphone – no app needed.
                It’s networking made simple and swift.
              </p>
            </div>
            <div className="col-span-3 border rounded-3xl p-7 shadow transition ease-in-out delay-200 hover:scale-105 hover:bg-teal-500 hover:text-white hover:shadow hover:shadow-zinc-400  duration-200 lg:mb-0 mb-8">
              <h1 className="text-xl font-extrabold">Sustainable Choices:</h1>
              <p className="text-md mt-4 text-gray-600">
                Go green with our eco-friendly card options made from recycled
                materials.
              </p>
            </div>
            {/* <div></div> */}
          </div>
        </div>
      </div>

      {/* Video */}
      <div className="menu-bg lg:mt-28 mt-16 py-10">
        <div className="container mx-auto">
          <p className="lg:mb-10 mb-5 text-center lg:text-3xl text-2xl lg:px-0 px-4 font-extrabold font-poppins">
            Designing a Smart Business Card Made Simple
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

      <Footer />
    </>
  );
};

export default Home;
