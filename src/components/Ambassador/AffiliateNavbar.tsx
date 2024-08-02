import { Link } from "react-router-dom";

const AffiliateNavbar = () => {
  return (
    <div>
      <nav className="flex justify-between text-white mt-5">
        <div>
          <Link to="/" className="logo-font text-3xl">
            vibecard
          </Link>
        </div>
        <div className="flex gap-x-10">
          <div className="flex gap-x-1 text-xl">
            <p className="bi-person-fill text-gray-200"></p>
            <p>Lorem</p>
          </div>
          <div className="flex lg:mt-1">
            <p className="bi-box-arrow-right lg:text-gray-400 lg:text-md text-xl">
              <span className="lg:inline hidden">Logout</span>
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AffiliateNavbar;
