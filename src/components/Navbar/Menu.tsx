import { Link } from "react-router-dom";
import { Nav } from "../../services/navs";
import Logout from "../Logout/Logout";

interface Props {
  nav: Nav[];
  menu: () => void;
  username: string | null;
}

const Menu = ({ nav, menu, username }: Props) => {
  return (
    <>
      <div className="flex justify-between py-3 px-3 z-50">
        <div onClick={() => menu()}>
          <p
            className={`lg:hidden rounded-full border border-white font-poppins text-2xl text-teal-950 font-bold`}
          >
            <span className="px-3 flex">
              <span
                className={`bi-x text-2xl text-white
              `}
              ></span>
              <span
                className={`text-sm font-light pt-[6px] ps-3 text-white
               `}
              >
                Menu
              </span>
            </span>
          </p>
        </div>

        <div>
          <Link
            to={"/"}
            className={`logo-font lg:me-32 lg:text-2xl text-3xl text-white`}
          >
            vibecard
          </Link>
        </div>

        {username !== null && (
          <div className="lg:hidden md:hidden mt-1">
            <Link to={"/dashboard"}>
              <p className={`bi-person-fill text-white text-xl`}></p>
            </Link>
          </div>
        )}
      </div>

      {/* Menu Lists */}
      <div className="relative pt-7 px-3 h-[620px]">
        {nav.map(
          (n) =>
            n.id !== 1 && (
              <Link
                key={n.id}
                to={n.path}
                className="block text-xl text-white pb-2 font-poppins font-extrabold mb-3"
              >
                {n.title}
              </Link>
            )
        )}

        {username !== null && (
          <>
            <Link
              to={"/dashboard"}
              className="block text-white text-xl pb-2 font-poppins font-extrabold mb-3"
            >
              Dashboard
            </Link>

            <Link
              to={"/"}
              className="block text-white text-xl pb-2 font-poppins font-extrabold mb-3"
            >
              Setting
            </Link>
            <Link
              to={"/"}
              className="block text-white text-xl pb-2 font-poppins font-extrabold mb-3"
            >
              Insights
            </Link>
          </>
        )}

        <div className="absolute">
          <div className="w-80 main-bg rounded px-4 py-4 mb-14 border border-gray-700">
            <p className="font-extrabold text-white text-sm">
              <span className="bi-telephone-fill me-5"></span> Contact Us
            </p>
            <p className="text-xs mt-2 text-gray-200">
              Get in touch with our 24/7 customer service
            </p>
            <Link to={"/contact-us"}>
              <p className="bg-sky-900 text-center text-xs mt-5 rounded p-2 shadow shadow-gray-50 text-white">
                Contact Us
              </p>
            </Link>
          </div>
          {username === null ? (
            <p>
              <Link
                to={"/login"}
                className="btn-bg py-2 px-5 rounded-full text-white"
              >
                Login
              </Link>{" "}
              /{" "}
              <Link
                to={"/register"}
                className="py-2 px-5 rounded-full text-white"
              >
                Create Account
              </Link>
            </p>
          ) : (
            <Logout />
          )}
        </div>
      </div>
    </>
  );
};

export default Menu;
