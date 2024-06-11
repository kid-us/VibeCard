import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <>
      {/* <div className="box-container">
        <div className="box1"></div>
        <div className="box2 blur"></div>
      </div> */}

      <Navbar />
      <div className="container mx-auto">
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
      </div>
    </>
  );
};

export default Home;
