import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "./Home/Hero";
import Gradient from "../Gradient/Gradient";
import Loading from "../Loading/Loading";
import Footer from "../Footer/Footer";
import { video } from "../../assets";

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
        <div className="lg:mt-44 mt-28">
          <Hero />
        </div>
      </div>

      {/* Video */}
      <div className="container mx-auto mt-32">
        <div className="grid grid-cols-4">
          <div></div>
          <div className="col-span-4 shadow-md shadow-zinc-900 rounded-lg overflow-hidden">
            <video autoPlay muted loop className="">
              <source src={video} type="video/webm" />
            </video>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
