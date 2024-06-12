import Navbar from "../Navbar/Navbar";
import Hero from "./Home/Hero";
import Gradient from "../Gradient/Gradient";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";

const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
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
    </>
  );
};

export default Home;
