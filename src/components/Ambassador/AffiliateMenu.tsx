import { Link } from "react-router-dom";
import { affiliateNav } from "./AffiliateNavbar";

interface Props {
  username: string | null;
  menu: () => void;
}

const AffiliateMenu = ({ username, menu }: Props) => {
  return (
    <div className="fixed w-full h-full main-bg top-0">
      <div className="flex justify-between text-white mt-5 pe-3">
        <div>
          <Link to="/" className="logo-font text-3xl">
            vibecard
          </Link>
        </div>
        <div className="lg:hidden">
          <button onClick={() => menu()} className="bi-x-lg text-2xl"></button>
        </div>
      </div>
      <p className="my-8 text-xl text-gray-300  bi-person-fill font-bold">
        {" "}
        {username}
      </p>
      {/* Menu Lists */}
      <div className="relative h-[620px] text-white">
        {affiliateNav.map((nav) => (
          <Link key={nav.id} to={nav.path} className="block mb-4 text-xl">
            {nav.name}
          </Link>
        ))}
        <button>Logout</button>
      </div>
    </div>
  );
};

export default AffiliateMenu;
