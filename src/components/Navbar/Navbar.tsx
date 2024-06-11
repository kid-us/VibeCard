import { Link } from "react-router-dom";
import { nav } from "../../services/navs";
import { useEffect, useState } from "react";

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
      className={`lg:p-0 py-2  ${
        isSticky &&
        "sticky top-0 bg-white shadow animate__animated animate__fadeInDown"
      }`}
    >
      <nav className="container mx-auto relative">
        <div className="lg:grid lg:grid-cols-10 lg:py-4 flex justify-between py-2 px-3">
          <div className="col-span-9">
            {nav.map((n) =>
              n.id === 1 ? (
                <Link
                  key={n.id}
                  to={n.path}
                  className="font-poppins me-28 text-2xl"
                >
                  {n.title}
                </Link>
              ) : (
                <Link
                  key={n.id}
                  to={n.path}
                  className="lg:inline-block hidden font-poppins me-16"
                >
                  {n.title}
                </Link>
              )
            )}
          </div>
          <div className="col-1">
            <Link to={"/login"} className="lg:block hidden">
              Sign In
            </Link>
            <p
              onClick={() => setIsMenu(!isMenu)}
              className={`lg:hidden ${
                isMenu ? " rounded-full border border-black" : "bi-list"
              } font-poppins text-2xl text-teal-950 font-bold`}
            >
              {isMenu && (
                <span className="px-3 flex">
                  <span className="text-sm font-light pt-[6px] pe-3">Menu</span>
                  <span className="bi-x text-2xl"></span>
                </span>
              )}
            </p>
          </div>
        </div>
        {isMenu && (
          <div className="animate__animated animate__fadeInDown pt-16 absolute z-10 h-[91.5dvh] bg-white w-full px-3">
            {nav.map(
              (n) =>
                n.id !== 1 && (
                  <Link
                    key={n.id}
                    to={n.path}
                    className="me-16 block text-xl pb-2 font-poppins"
                  >
                    {n.title}
                  </Link>
                )
            )}
            <div className="absolute bottom-10">
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
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
