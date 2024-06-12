import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { nav } from "../../services/navs";
import Menu from "./Menu";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenu, setIsMenu] = useState(false);

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
    <header
      className={`lg:p-0 py-1  ${
        isSticky &&
        "sticky top-0 shadow animate__animated animate__fadeInDown bg-white z-50"
      } ${isMenu && "menu-bg animate__animated animate__fadeInLeft"} `}
    >
      <nav className="container mx-auto relative">
        <div className="lg:grid lg:grid-cols-10 lg:py-3 flex justify-between py-2 px-3">
          <div className="col-span-9">
            {nav.map((n) =>
              n.id === 1 ? (
                <Link
                  key={n.id}
                  to={n.path}
                  className={`logo-font me-32 text-2xl ${
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
          <div className="col-1">
            <Link
              to={"/login"}
              className="lg:block hidden bg-teal-700 py-1 px-5 text-sm rounded-full text-white text-center transition ease-in-out delay-200 hover:scale-105 hover:bg-teal-900 duration-200 shadow shadow-zinc-950"
            >
              Sign In
            </Link>
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
                    className={`text-sm font-light pt-[6px] pe-3 ${
                      isMenu ? "text-black" : "text-white"
                    } `}
                  >
                    Menu
                  </span>
                  <span
                    className={`bi-x text-2xl ${
                      isMenu ? "text-black" : "text-white"
                    }`}
                  ></span>
                </span>
              ) : (
                <span className="px-3 flex">
                  <span
                    className={`text-sm font-light pt-[6px] pe-3 ${
                      isSticky ? "text-black" : "text-white"
                    }`}
                  >
                    Menu
                  </span>
                  <span
                    className={`bi-list text-2xl ${
                      isSticky ? "text-black" : "text-white"
                    }`}
                  ></span>
                </span>
              )}
            </p>
          </div>
        </div>
        {isMenu && <Menu nav={nav} />}
      </nav>
    </header>
  );
};

export default Navbar;
