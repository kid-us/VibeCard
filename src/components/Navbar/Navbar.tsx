import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { nav } from "../../services/navs";
import Menu from "./Menu";
import { useUserData } from "../../store/useUserData";

const Navbar = () => {
  // States
  const [isMenu, setIsMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

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

  // Zustand
  const { username } = useUserData();

  return (
    <header
      className={`lg:p-0 py-1  ${
        isSticky &&
        "sticky top-0 shadow animate__animated animate__fadeInDown bg-white z-50"
      } ${isMenu && "menu-bg animate__animated animate__fadeInLeft"}`}
    >
      <nav className="container mx-auto relative">
        <div className="lg:grid lg:grid-cols-12 lg:py-3 flex justify-between py-2 px-3">
          {/* Small Device Menu */}
          <div className="col-1">
            <p
              onClick={() => setIsMenu(!isMenu)}
              className={`lg:hidden rounded-full border ${
                isMenu
                  ? "border-black"
                  : isSticky
                  ? "border-black"
                  : "border-white"
              } 
              } font-poppins text-2xl text-teal-950 font-bold`}
            >
              {isMenu ? (
                <span className="px-3 flex">
                  <span
                    className={`bi-x text-2xl ${
                      isMenu ? "text-black" : "text-white"
                    }`}
                  ></span>
                  <span
                    className={`text-sm font-light pt-[6px] ps-3 ${
                      isMenu ? "text-black" : "text-white"
                    } `}
                  >
                    Menu
                  </span>
                </span>
              ) : (
                <span className="px-3 flex">
                  <span
                    className={`bi-list text-2xl ${
                      isSticky ? "text-black" : "text-white"
                    }`}
                  ></span>
                  <span
                    className={`text-sm font-light pt-[6px] ps-3 ${
                      isSticky ? "text-black" : "text-white"
                    }`}
                  >
                    Menu
                  </span>
                </span>
              )}
            </p>
          </div>

          {/* Large Device */}
          <div className={`col-span-11 ${username === null ? "pe-5" : "pe-0"}`}>
            {nav.map((n) =>
              n.id === 1 ? (
                <Link
                  key={n.id}
                  to={n.path}
                  className={`logo-font lg:me-32 lg:text-2xl text-3xl ${
                    isMenu
                      ? "text-black"
                      : isSticky
                      ? "text-black"
                      : "text-white"
                  } `}
                >
                  {n.title}
                </Link>
              ) : (
                <Link
                  key={n.id}
                  to={n.path}
                  className={`lg:inline-block hidden font-poppins me-16 ${
                    isSticky
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
            {username !== null ? (
              <Link to={"/dashboard"}>
                <p className="lg:block hidden bg-gray-100 py-1 text-sm rounded text-blck text-center transition ease-in-out delay-200 hover:scale-105 hover:bg-teal-900 hover:text-white duration-200 shadow shadow-zinc-400 chakra px-2">
                  <span className="bi-person-fill me-2"></span>
                  {username}
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
          {username !== null && (
            <div className="lg:hidden md:hidden mt-1">
              <Link to={"/dashboard"}>
                {isMenu ? (
                  <p
                    className={`bi-person-fill ${
                      isMenu ? "text-black" : "text-white"
                    } text-xl`}
                  ></p>
                ) : (
                  <span className="px-3 flex">
                    <p
                      className={`bi-person-fill ${
                        isSticky ? "text-black" : "text-white"
                      } text-xl`}
                    ></p>
                  </span>
                )}
              </Link>
            </div>
          )}
        </div>

        {isMenu && <Menu nav={nav} />}
      </nav>
    </header>
  );
};

export default Navbar;
