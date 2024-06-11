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
        <div className="mt-28">
          <Hero />
        </div>
        <div className="mt-16">
          <p>Home</p> <br />
          <h1 className="text-3xl">VibeCard</h1>
          <p>Welcome to VibeCard, development started</p>
          <br />
          <div className="text-blue-500">
            <Link to="/login">Login</Link> <br />
            <Link to="/register">Register</Link>
          </div>
        </div>
        <p>lorem1000x</p>
      </div>
    </>
  );
};

export default Home;
