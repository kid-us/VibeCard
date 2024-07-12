import { Link } from "react-router-dom";
import { shop, explore } from "../../services/footer";

const Footer = () => {
  return (
    <div className="mt-10 border-t border-gray-800 overflow-hidden">
      <div className="relative right-20 lg:-top-40 -top-40">
        <div className="absolute lg:right-[43em]  right-36 top-40 bulb"></div>
      </div>
      <div className="lg:container mx-auto py-10">
        <div className="grid lg:grid-cols-8 md:grid-cols-8 grid-cols-6 lg:px-0 md:px-3 px-3">
          <div className="relative lg:col-span-3 md:col-span-2 col-span-6">
            <h1 className="text-white text-4xl logo-font">vibecard</h1>
            <p className="text-gray-400 text-sm pe-10 mt-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae,
              incidunt?
            </p>
            <div className="flex gap-x-10 my-14">
              <Link to="/" className="text-white text-3xl bi-facebook"></Link>
              <Link to="/" className="text-white text-3xl bi-linkedin"></Link>
              <Link to="/" className="text-white text-3xl bi-instagram"></Link>
            </div>
            <div className="lg:block hidden absolute bottom-0">
              <p className="text-gray-300 text-xs">
                All right reserved. &copy; vibecard 2024
              </p>
            </div>
          </div>
          <div className="lg:block md:block hidden col-span-2"></div>
          {/* Explore */}
          <div className="lg:col-span-2 md:col-span-2 col-span-2 lg:my-0 md:my-0 my-6">
            <h1 className="text-gray-400 text-lg mb-5">Explore</h1>
            {explore.map((e) => (
              <Link
                key={e.id}
                to={e.path}
                className="block text-gray-200 mb-4 hover:text-gray-500 text-sm"
              >
                {e.name}
              </Link>
            ))}
          </div>

          {/* Shop */}
          <div className="lg:col-span-1 md:col-span-2 col-span-2 lg:my-0 md:my-0 my-6">
            <h1 className="text-gray-400 text-lg mb-5">Shop</h1>
            {shop.map((c) => (
              <Link
                key={c.id}
                to={c.path}
                className="block text-gray-200 mb-4 hover:text-gray-500 text-sm"
              >
                {c.name}
              </Link>
            ))}
          </div>

          <p className="text-gray-300 text-sm mt-8 lg:hidden md:hidden col-span-3">
            All right reserved. &copy; vibecad 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
