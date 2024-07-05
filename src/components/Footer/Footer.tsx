import { Link } from "react-router-dom";
import { shop, explore } from "../../services/footer";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const handleSubscription = () => {
    if (email.length < 6) {
      setEmailError(true);
      return;
    }
  };

  return (
    <div className="bg-teal-950 mt-10">
      <div className="container mx-auto py-10">
        <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-3 lg:px-0 md:px-0 px-10">
          <div className="relative lg:col-span-2 md:col-span-2 col-span-3">
            <h1 className="text-white text-4xl logo-font">vibecard</h1>
            <p className="text-gray-400 text-sm pe-10 mt-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae,
              incidunt?
            </p>
            <p className="text-white my-4">Contact Us</p>
            <p className="text-white text-sm my-3 chakra">
              Email: vibecad@gmail.com
            </p>
            <div className="flex gap-x-10 my-7">
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
          {/* Explore */}
          <div className="lg:col-span-4 md:col-span-2 col-span-3 lg:my-0 md:my-0 my-6">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 lg:gap-x-0 md:gap-x-0 gap-x-24">
              {/* Explore */}
              <div>
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
              <div>
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
              {/* Subscribe */}
              <div className="lg:block hidden">
                <h1 className="text-white text-lg mb-5">Subscribe</h1>
                <p className="text-gray-400 mb-5 text-xs">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nemo, quibusdam.
                </p>
                <input
                  type="email"
                  className="rounded w-full px-3 bg-white h-12 focus:outline-none placeholder:text-black chakra"
                  placeholder="Email here"
                  onChange={(e) => setEmail(e.currentTarget.value)}
                />
                {emailError && (
                  <p className="text-red-500 text-xs mt-2">
                    Email address required!
                  </p>
                )}
                <button
                  onClick={() => handleSubscription()}
                  className="w-full text-white bg-teal-700 rounded h-12 mt-5"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          {/* Subscribe */}
          <div className="lg:hidden md:col-span-1 col-span-3">
            <h1 className="text-white text-xl mb-5">Subscribe</h1>
            <p className="text-gray-400 mb-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo,
              quibusdam.
            </p>
            <input
              type="email"
              className="rounded w-full px-3 bg-white h-12 focus:outline-none"
              placeholder="Email here"
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            {emailError && (
              <p className="text-red-500 text-xs mt-2">
                Email address required!
              </p>
            )}
            <button
              onClick={() => handleSubscription()}
              className="w-full text-white bg-teal-700 rounded h-12 mt-5"
            >
              Subscribe
            </button>

            <p className="text-gray-300 text-sm mt-8 hidden md:block">
              All right reserved. &copy; vibecard 2024
            </p>
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
