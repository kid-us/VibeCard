import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Pricing = () => {
  return (
    <>
      <Navbar bg={"bg-white shadow"} />

      <div className="container mx-auto lg:mt-16 mt-14">
        <h1 className="text-2xl text-center">
          Choose the best plan for you or your business.
        </h1>

        <p className="my-4 text-center text-gray-500">
          Use the toggle below to switch between individual or team pricing
          plans
        </p>

        <div className="lg:grid grid-cols-3 lg:my-16 my-10 px-2">
          {/* Basic */}
          <div className="border border-gray-300 rounded-xl lg:px-10 px-2 lg:mb-0 mb-2 py-6">
            <p className="text-2xl font-extrabold mb-5">Basic</p>
            <p className="chakra text-gray-600">
              For those who mainly want to share their digital business card or
              social media
            </p>
            <div className="py-10 text-center border rounded-xl bg-teal-100 my-5">
              <h1 className="text-2xl font-extrabold mb-10">Free</h1>
              <Link
                to="/create"
                className="text-center bg-sky-800 py-3 px-10 shadow shadow-zinc-900 text-white rounded"
              >
                Create my Card Now <span className="bi-caret-right-fill"></span>
              </Link>
            </div>
            <p className="mb-3 lg:text-md text-sm">
              <span className="bi-check-lg me-1"></span> 1 digital business card
              and QR code
            </p>
            <p className="mb-3 lg:text-md text-sm">
              <span className="bi-check-lg me-1"></span> 1 digital business card
              and QR code
            </p>
            <p className="mb-3 lg:text-md text-sm">
              <span className="bi-check-lg me-1"></span> 1 digital business card
              and QR code
            </p>
            <p className="mb-3 lg:text-md text-sm">
              <span className="bi-check-lg me-1"></span> 1 digital business card
              and QR code
            </p>
            <p className="mb-3 lg:text-md text-sm">
              <span className="bi-check-lg me-1"></span> 1 digital business card
              and QR code
            </p>
            <p className="mb-3 lg:text-md text-sm">
              <span className="bi-check-lg me-1"></span> 1 digital business card
              and QR code
            </p>
            <p className="mb-3 lg:text-md text-sm">
              <span className="bi-check-lg me-1"></span> 1 digital business card
              and QR code
            </p>
            <p className="mb-3 lg:text-md text-sm">
              <span className="bi-check-lg me-1"></span> 1 digital business card
              and QR code
            </p>
            <p className="mb-3 line-through text-gray-500 lg:text-md text-sm">
              <span className="bi-check-lg me-1"></span> 1 digital business card
              and QR code
            </p>
            <p className="mb-3 line-through text-gray-500 lg:text-md text-sm">
              <span className="bi-check-lg me-1"></span> 1 digital business card
              and QR code
            </p>
            <p className="mb-3 line-through text-gray-500 lg:text-md text-sm">
              <span className="bi-check-lg me-1"></span> 1 digital business card
              and QR code
            </p>
          </div>
          {/* Pro */}
          <div className="border border-gray-300 rounded-xl lg:px-10 px-2 lg:mb-0 mb-2 py-6 bg-blue-300">
            <div className="flex justify-between">
              <p className="text-2xl font-extrabold mb-5">Pro</p>
              <p className="text-xs text-blue-600 uppercase">
                <span className="bg-white py-1 px-5">Most Popular</span>
              </p>
            </div>
            <p className="chakra text-gray-600">
              For those who mainly want to share their digital business card or
              social media
            </p>
            <div className="py-10 text-center border rounded-xl bg-teal-100 my-5">
              <div className="flex justify-center gap-x-10 mb-4">
                <div>
                  <h1 className="text-2xl font-extrabold ">$9.99</h1>
                  <p className="text-sm chakra py-2">per month</p>
                </div>
                <div className="border-r border-gray-300"></div>
                <div>
                  <h1 className="text-2xl font-extrabold ">$7.99</h1>
                  <p className="text-sm chakra py-2">per year</p>
                </div>
              </div>
              <Link
                to="/"
                className="text-center bg-sky-800 py-3 px-10 shadow shadow-zinc-900 text-white rounded chakra"
              >
                Start 14 day free trial{" "}
                <span className="bi-caret-right-fill"></span>
              </Link>
            </div>
            <p className="mb-3 lg:text-md text-sm">
              <span className="bi-check-lg me-1"></span> 1 digital business card
              and QR code
            </p>
            <p className="mb-3 lg:text-md text-sm">
              <span className="bi-check-lg me-1"></span> 1 digital business card
              and QR code
            </p>
            <p className="mb-3 lg:text-md text-sm">
              <span className="bi-check-lg me-1"></span> 1 digital business card
              and QR code
            </p>
            <p className="mb-3 lg:text-md text-sm">
              <span className="bi-check-lg me-1"></span> 1 digital business card
              and QR code
            </p>
            <p className="mb-3 lg:text-md text-sm">
              <span className="bi-check-lg me-1"></span> 1 digital business card
              and QR code
            </p>
            <p className="mb-3 lg:text-md text-sm">
              <span className="bi-check-lg me-1"></span> 1 digital business card
              and QR code
            </p>
            <p className="mb-3 lg:text-md text-sm">
              <span className="bi-check-lg me-1"></span> 1 digital business card
              and QR code
            </p>
            <p className="mb-3 lg:text-md text-sm">
              <span className="bi-check-lg me-1"></span> 1 digital business card
              and QR code
            </p>
            <p className="mb-3 line-through text-gray-500 lg:text-md text-sm">
              <span className="bi-check-lg me-1"></span> 1 digital business card
              and QR code
            </p>
            <p className="mb-3 line-through text-gray-500 lg:text-md text-sm">
              <span className="bi-check-lg me-1"></span> 1 digital business card
              and QR code
            </p>
            <p className="mb-3 line-through text-gray-500 lg:text-md text-sm">
              <span className="bi-check-lg me-1"></span> 1 digital business card
              and QR code
            </p>
          </div>
          {/* Pro Plus*/}
          <div className="border border-gray-300 rounded-xl lg:px-10 px-2 lg:mb-0 mb-2 py-6">
            <p className="text-2xl font-extrabold mb-5">Pro+</p>
            <p className="chakra text-gray-600">
              For those who mainly want to share their digital business card or
              social media
            </p>
            <div className="py-10 text-center border rounded-xl bg-teal-100 my-5">
              <div className="flex justify-center gap-x-10 mb-4">
                <div>
                  <h1 className="text-2xl font-extrabold ">$19.99</h1>
                  <p className="text-sm chakra py-2">per month</p>
                </div>
                <div className="border-r border-gray-300"></div>
                <div>
                  <h1 className="text-2xl font-extrabold ">$12.99</h1>
                  <p className="text-sm chakra py-2">per year</p>
                </div>
              </div>
              <Link
                to="/"
                className="text-center bg-sky-800 py-3 px-10 shadow shadow-zinc-900 text-white rounded chakra"
              >
                Start 14 day free trial{" "}
                <span className="bi-caret-right-fill"></span>
              </Link>
            </div>
            <p className="mb-3 lg:text-md text-sm">
              <span className="bi-check-lg me-1"></span> 1 digital business card
              and QR code
            </p>
            <p className="mb-3 lg:text-md text-sm">
              <span className="bi-check-lg me-1"></span> 1 digital business card
              and QR code
            </p>
            <p className="mb-3 lg:text-md text-sm">
              <span className="bi-check-lg me-1"></span> 1 digital business card
              and QR code
            </p>
            <p className="mb-3 lg:text-md text-sm">
              <span className="bi-check-lg me-1"></span> 1 digital business card
              and QR code
            </p>
            <p className="mb-3 lg:text-md text-sm">
              <span className="bi-check-lg me-1"></span> 1 digital business card
              and QR code
            </p>
            <p className="mb-3 lg:text-md text-sm">
              <span className="bi-check-lg me-1"></span> 1 digital business card
              and QR code
            </p>
            <p className="mb-3 lg:text-md text-sm">
              <span className="bi-check-lg me-1"></span> 1 digital business card
              and QR code
            </p>
            <p className="mb-3 lg:text-md text-sm">
              <span className="bi-check-lg me-1"></span> 1 digital business card
              and QR code
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Pricing;
