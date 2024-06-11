import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Hero from "./Home/Hero";
import Gradient from "../Gradient/Gradient";

const Home = () => {
  return (
    <>
      <Navbar />
      <Gradient />
      <div className="container mx-auto">
        <div className="lg:mt-36 mt-28">
          <Hero />
        </div>
      </div>
    </>
  );
};

export default Home;
