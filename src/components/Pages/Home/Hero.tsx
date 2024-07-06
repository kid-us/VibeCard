import { Link } from "react-router-dom";
import HeroCard from "./HeroCard";

const Hero = () => {
  return (
    <div className="lg:grid grid-cols-2 lg:px-0 px-4 gap-10">
      <div className="">
        <h1 className="lg:text-5xl text-3xl font-extrabold text-white">
          From Meet-and-Greets to Meaningful Relationships: vibecard - Your
          Personalized Networking Companion.
        </h1>

        <div className="lg:mt-16 mt-14 lg:w-72 w-52 text-center">
          <Link to="/create">
            <div className="btn-bg py-4 lg:w-72 w-52 lg:text-center rounded-lg shadow-md shadow-zinc-950 hover:shadow-none hover:text-gray-400 transition ease-in-out delay-200 text-black">
              Get started
            </div>
          </Link>
        </div>
      </div>

      {/* Hero Card */}
      <div className="lg:flex hidden justify-center text-white relative">
        <HeroCard />
      </div>
    </div>
  );
};

export default Hero;
