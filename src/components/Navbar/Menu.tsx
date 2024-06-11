import { Link } from "react-router-dom";
import { Nav } from "../../services/navs";

interface Props {
  nav: Nav[];
}

const Menu = ({ nav }: Props) => {
  return (
    <div className="animate__animated animate__bounceInLeft pt-16 absolute z-10 h-[91.5dvh] w-full px-3 menu-bg">
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
  );
};

export default Menu;
