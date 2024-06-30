import { Link } from "react-router-dom";
import { Nav } from "../../services/navs";
import Logout from "../Logout/Logout";

interface Props {
  nav: Nav[];
  menu: () => void;
  username: string | null;
  bg?: string;
}

const Menu = ({ nav, menu, username, bg }: Props) => {
  return (
    <>
      <div className="flex justify-between py-3 px-3">
        <div onClick={() => menu()}>
          <p
            className={`lg:hidden rounded-full border border-black font-poppins text-2xl text-teal-950 font-bold`}
          >
            <span className="px-3 flex">
              <span
                className={`bi-x text-2xl text-black
              `}
              ></span>
              <span
                className={`text-sm font-light pt-[6px] ps-3 text-black
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
            className={`logo-font lg:me-32 lg:text-2xl text-3xl text-black`}
          >
            vibecard
          </Link>
        </div>

        {username !== null && (
          <div className="lg:hidden md:hidden mt-1">
            <Link to={"/dashboard"}>
              <p className={`bi-person-fill text-red-700 text-xl`}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptate minima, quasi nulla nobis eveniet maxime! Suscipit,
                cum qui aspernatur deleniti officia totam pariatur esse
                veritatis soluta corrupti commodi, maxime aliquam!
              </p>
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
                className="block text-xl pb-2 font-poppins font-extrabold mb-3"
              >
                {n.title}
              </Link>
            )
        )}

        {username !== null && (
          <>
            <Link
              to={"/dashboard"}
              className="block text-xl pb-2 font-poppins font-extrabold mb-3"
            >
              Dashboard
            </Link>

            <Link
              to={"/setting"}
              className="block text-xl pb-2 font-poppins font-extrabold mb-3"
            >
              Setting
            </Link>
          </>
        )}

        <div className="absolute bottom-10">
          <div className="w-80 bg-stone-400 rounded px-4 py-4 mb-14">
            <p className="chakra font-extrabold text-white">
              <span className="bi-telephone-fill me-5"></span> Contact Us
            </p>
            <p className="text-sm mt-4 text-gray-200">
              Get in touch with our 24/7 customer service
            </p>
            <Link to={"/contact-us"}>
              <p className="bg-sky-700 text-center mt-5 rounded p-2 shadow shadow-gray-50 text-white">
                Contact Us
              </p>
            </Link>
          </div>
          {username === null ? (
            <p>
              <Link
                to={"/login"}
                className="bg-teal-700 py-2 px-5 rounded-full text-white"
              >
                Login
              </Link>{" "}
              /{" "}
              <Link
                to={"/register"}
                className="border-teal-700 py-2 px-5 rounded-full border-2"
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
