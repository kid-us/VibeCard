import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AffiliateMenu from "./AffiliateMenu";
import useAmbassador from "@/store/useAmbassador";
import { useTranslation } from "react-i18next";

interface Navs {
  id: number;
  name: string;
  path: string;
}

export const affiliateNav: Navs[] = [
  // { id: 1, name: "Home", path: "/affiliate" },
  // { id: 2, name: "Transactions", path: "/affiliate/transactions" },
  // { id: 3, name: "Payments", path: "/affiliate/payments" },
  { id: 4, name: "setting", path: "/affiliate/setting" },
];

const AffiliateNavbar = () => {
  const { t } = useTranslation();

  const { logout } = useAmbassador();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/ambassador");
  };

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
              {t(nav.name)}
            </Link>
          ))}
          <p onClick={() => handleLogout()} className="cursor-pointer">
            {t("logout")}
          </p>
        </div>
      </nav>
      {menu && <AffiliateMenu username={"Lorem"} menu={() => setMenu(false)} />}
    </div>
  );
};

export default AffiliateNavbar;
