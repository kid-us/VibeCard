import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { nav } from "../../services/navs";
import Menu from "./Menu";
import useAuthStore from "../../store/useUserData";
import axios from "axios";
import { baseUrl } from "../../services/request";
import Loading from "../Loading/Loading";
import Logout from "../Logout/Logout";

const Navbar = () => {
  // States

  const [isMenu, setIsMenu] = useState(false);
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

  return (
    <>
      {loading && <Loading />}

      <header className={`lg:py-3 py-2 top-0 z-50 w-full nav-bg`}>
        <div className="relative right-64 top-10">
          <div className="absolute w-[5%] lg:w-[25%] lg:right-20 -right-40 bulb"></div>
        </div>
        <div className="container mx-auto flex justify-between">
          {/* Large Device */}
          <div>
            <div
              className={`flex lg:pe-10 text-white ${user === null && "pe-28"}`}
            >
              {/* Small Device Menu */}
              <div className="lg:hidden">
                <p
                  onClick={() => setIsMenu(true)}
                  className={`lg:hidden font-poppins text-2xl text-teal-950 font-bold pt-2`}
                >
                  <span className="px-3 flex me-">
                    <span className={`bi-list text-2xl pt-1 text-white`}></span>
                    {/* <span className={`font-light pt-[6px] ps-3 text-white`}>
                      Menu
                    </span> */}
                  </span>
                </p>
              </div>
              <div className={`lg:pe-10 text-white p-2 `}>
                <Link to={"/"} className={`logo-font lg:text-3xl text-3xl`}>
                  vibecard
                </Link>
              </div>

              <div
                className={`ms-5 lg:inline-block hidden text-white pt-3 space-x-12 px-10`}
              >
                {nav.map((n) => (
                  <Link
                    key={n.id}
                    to={n.path}
                    className={`text-md text-gray-300 font-bold`}
                  >
                    {n.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Large Device */}
          <div className="lg:block hidden me-24 text-white pt-3">
            {user !== null ? (
              <div className="relative">
                <p
                  onClick={() => setIsMenu(!isMenu)}
                  className="text-center cursor-pointer uppercase"
                >
                  <span className="bi-person-fill text-xl me-2"></span>
                  {user}
                </p>

                {/* Menu  */}
                {isMenu && (
                  <div className="secondary-bg lg:block hidden absolute z-50 shadow-lg w-44 p-4 rounded mt-6 border-gradient-2">
                    <Link
                      to={"/dashboard"}
                      className="block font-poppins mb-2 hover:text-gray-400"
                    >
                      Dashboard
                    </Link>
                    <Link
                      to={"/create"}
                      className="block font-poppins mb-2 hover:text-gray-400"
                    >
                      Create Card
                    </Link>
                    <Link
                      to={"/setting"}
                      className="block font-poppins mb-2 hover:text-gray-400"
                    >
                      Setting
                    </Link>
                    <Link
                      to={"/insights"}
                      className="block font-poppins mb-2 hover:text-gray-400"
                    >
                      Insights
                    </Link>
                    <hr className="my-2" />
                    <Logout />
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center">
                <Link to={"/login"}>Sign In</Link>
              </div>
            )}
          </div>

          {/* Small device user Icon */}
          {user !== null && (
            <div className="lg:hidden mt-1 pt-2 me-2">
              <Link to={"/dashboard"}>
                <span className="px-3 flex">
                  <p className={`bi-person-fill text-2xl text-white`}></p>
                </span>
              </Link>
            </div>
          )}
        </div>
      </header>

      {/* Menu */}
      {isMenu && (
        <div className="lg:hidden fixed h-[100dvh] z-50 top-0 w-full secondary-bg animate__animated animate__fadeInLeft">
          <Menu nav={nav} username={user} menu={() => setIsMenu(false)} />
        </div>
      )}
    </>
  );
};

export default Navbar;
