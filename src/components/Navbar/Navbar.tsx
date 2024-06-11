import { Link } from "react-router-dom";
import { nav } from "../../services/navs";
import { useEffect, useState } from "react";

const Navbar = () => {
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

  return (
    <header
      className={`${
        isSticky &&
        "sticky top-0 bg-white shadow animate__animated animate__fadeInDown"
      }`}
    >
      <nav className="container mx-auto relative ">
        <div className="grid grid-cols-10 py-4">
          <div className="col-span-9">
            {nav.map((n) =>
              n.id === 1 ? (
                <Link to={n.path} className="font-poppins me-28">
                  {n.title}
                </Link>
              ) : (
                <Link to={n.path} className="font-poppins me-16">
                  {n.title}
                </Link>
              )
            )}
          </div>
          <div className="col-1">
            <Link to="/login" className="font-poppins me-16">
              Sign in
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
