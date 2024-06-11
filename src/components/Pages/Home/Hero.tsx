import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="lg:grid grid-cols-2 lg:px-0 px-4">
      <div className="">
        <h1 className="lg:text-5xl text-2xl font-extrabold leading-tight">
          From Meet-and-Greets to Meaningful Relationships:{" "}
          <span className="text-white">VibeCard</span>-Your Personalized
          Networking Companion.
        </h1>

        <div className="lg:mt-16 mt-14">
          <Link to="/login">
            <div className="bg-sky-800 py-4 lg:w-72 w-52 lg:text-center ps-4 rounded-lg shadow-md shadow-zinc-950 hover:shadow-none hover:text-gray-400 transition ease-in-out delay-200 text-white">
              Get started for free
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
