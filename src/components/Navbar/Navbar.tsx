import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { nav } from "../../services/navs";
import Menu from "./Menu";
import useAuthStore from "../../store/useUserData";
import axios from "axios";
import { baseUrl } from "../../services/request";
import Loading from "../Loading/Loading";

interface Props {
  bg?: string;
}

const Navbar = ({ bg }: Props) => {
  // States
  const [isMenu, setIsMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const { login, user } = useAuthStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/v1/auth/me`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        login(response.data.username, response.data.email);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const halfPageHeight = window.innerHeight / 2;
      if (window.pageYOffset > halfPageHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {loading && <Loading />}

      <header
        className={`lg:py-0 py-2 ${bg && bg}  ${
          isSticky
            ? "sticky top-0 shadow animate__animated animate__fadeInDown bg-white z-50"
            : "lg:py-3"
        }`}
      >
        <nav className="container mx-auto relative">
          <div className="lg:grid lg:grid-cols-12 lg:py-3 flex justify-between py-2 px-3">
            {/* Small Device Menu */}
            <div className="lg:hidden col-1">
              <p
                onClick={() => setIsMenu(true)}
                className={`lg:hidden rounded-full border ${
                  bg
                    ? "text-black border-black"
                    : isSticky
                    ? "border-black"
                    : "border-white"
                } font-poppins text-2xl text-teal-950 font-bold`}
              >
                <span className="px-3 flex">
                  <span
                    className={`bi-list text-2xl ${
                      bg ? "text-black" : isSticky ? "text-black" : "text-white"
                    }`}
                  ></span>
                  <span
                    className={`text-sm font-light pt-[6px] ps-3 ${
                      bg ? "text-black" : isSticky ? "text-black" : "text-white"
                    }`}
                  >
                    Menu
                  </span>
                </span>
              </p>
            </div>

            {/* Large Device */}
            <div className={`col-span-11 ${user === null ? "pe-5" : "pe-0"}`}>
              {nav.map((n) =>
                n.id === 1 ? (
                  <Link
                    key={n.id}
                    to={n.path}
                    className={`logo-font lg:me-32 lg:text-3xl text-3xl 
                    ${
                      bg
                        ? "text-black"
                        : isMenu
                        ? "text-black"
                        : isSticky
                        ? "text-black"
                        : "text-white"
                    } 
                    `}
                  >
                    {n.title}
                  </Link>
                ) : (
                  <Link
                    key={n.id}
                    to={n.path}
                    className={`lg:inline-block hidden font-poppins me-16 ${
                      bg
                        ? "text-black"
                        : isSticky
                        ? "text-black hover:text-gray-500"
                        : "text-white hover:text-gray-300"
                    }`}
                  >
                    {n.title}
                  </Link>
                )
              )}
            </div>

            <div className="lg:block hidden col-1 mt-2">
              {/* Large Device */}
              {user !== null ? (
                <Link to={"/dashboard"}>
                  <p className="lg:block hidden py-1 text-xl rounded text-black text-center transition ease-in-out delay-200 hover:scale-105 hover:bg-teal-900 hover:text-white duration-200 chakra px-2">
                    <span className="bi-person-fill me-2"></span>
                    {user}
                  </p>
                </Link>
              ) : (
                <Link
                  to={"/login"}
                  className="lg:block hidden bg-gray-100 py-1 px-5 text-sm rounded text-blck text-center transition ease-in-out delay-200 hover:scale-105 hover:bg-teal-900 duration-200 shadow shadow-zinc-400 chakra"
                >
                  Sign In
                </Link>
              )}
            </div>

            {/* Small device user Icon */}
            {user !== null && (
              <div className="lg:hidden md:hidden mt-1">
                <Link to={"/dashboard"}>
                  <span className="px-3 flex">
                    <p
                      className={`bi-person-fill ${
                        isSticky ? "text-black" : "text-white"
                      } text-xl`}
                    ></p>
                  </span>
                </Link>
              </div>
            )}
          </div>
        </nav>
      </header>

      {/* Menu */}
      {isMenu && (
        <div className="fixed h-[100dvh] z-50 top-0 w-full menu-bg animate__animated animate__fadeInLeft">
          <Menu nav={nav} username={user} menu={() => setIsMenu(false)} />
        </div>
      )}
    </>
  );
};

export default Navbar;
