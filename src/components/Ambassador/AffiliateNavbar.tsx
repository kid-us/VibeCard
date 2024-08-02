import { useState } from "react";
import { Link } from "react-router-dom";
import AffiliateMenu from "./AffiliateMenu";

interface Navs {
  id: number;
  name: string;
  path: string;
}

export const affiliateNav: Navs[] = [
  // { id: 1, name: "Home", path: "/affiliate" },
  // { id: 2, name: "Transactions", path: "/affiliate/transactions" },
  // { id: 3, name: "Payments", path: "/affiliate/payments" },
  { id: 4, name: "Setting", path: "/affiliate/setting" },
];

const AffiliateNavbar = () => {
  const [menu, setMenu] = useState<boolean>(false);

  return (
    <div>
      <nav className="flex justify-between text-white mt-5">
        <div>
          <Link to="/affiliate" className="logo-font text-4xl">
            vibecard
          </Link>
        </div>
        <div className="lg:hidden">
          <button
            onClick={() => setMenu(!menu)}
            className="bi-list text-2xl"
          ></button>
        </div>
        <div className="lg:flex hidden gap-x-10">
          {affiliateNav.map((nav) => (
            <Link key={nav.id} to={nav.path} className="mx-5">
              {nav.name}
            </Link>
          ))}
          <p className="cursor-pointer text-xl">Logout</p>
        </div>
      </nav>
      {menu && <AffiliateMenu username={"Lorem"} menu={() => setMenu(false)} />}
    </div>
  );
};

export default AffiliateNavbar;
