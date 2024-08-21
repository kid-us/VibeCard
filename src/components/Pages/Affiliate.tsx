import DatePicker from "../Insights/DatePicker";
import React, { useEffect, useState } from "react";
import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";
import AffiliateNavbar from "../Ambassador/AffiliateNavbar";
import { Link } from "react-router-dom";
import AffiliateFooter from "../Ambassador/AffiliateFooter";
import useAmbassador from "@/store/useAmbassador";

const productSolds = [
  { name: "This month", id: 1 },
  { name: "Last month", id: 2 },
  { name: "Last 30 days", id: 3 },
  { name: "All time", id: 4 },
];

const Affiliate = () => {
  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    firstName,
    lastName,
    earning,
    referral_code,
    conversions,
    orders,
    referrals,
    sales,
  } = useAmbassador();

  // Custom Date
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 20),
  });

  const handleCustom = () => {
    console.log("Lorem");
  };

  const [dropdown, setDropdown] = useState<boolean>(false);
  const [productSold, setProductSold] = useState<string>("This month");

  return (
    <>
      <div className="lg:container mx-auto px-2">
        <AffiliateNavbar />
        <div className="mt-10">
          <p className="text-xl text-white">
            Welcome to your affiliate market dashboard{" "}
            <span className="text-teal-500">{firstName + " " + lastName}</span>.
          </p>
          <div className="text-white mt-5">
            <h1 className="text-xl mb-2">Referral Link</h1>
            <p className="mb-1">
              Refer your friends using the link below and earn commissions on
              purchases made by them
            </p>
            <Link to="/" className="text-blue-500">
              vivecard.com/?ref={referral_code}
            </Link>
          </div>
          <div className="mt-5 text-white">
            <h1 className="text-2xl text-white">Commission Structure</h1>
            <p>A 30% commission is given on sale of every product</p>
          </div>
          {/* Data */}
          <div className="grid lg:grid-cols-3 grid-cols-2 mt-6 lg:gap-x-10 gap-x-3">
            <div className="lg:col-span-3 col-span-2 mb-10">
              <div>
                <p className="text-white text-sm mb-2">
                  Filter by Calendar Date
                </p>
                <div className="lg:flex">
                  <DatePicker date={date} setDate={setDate} />
                  <button
                    onClick={() => handleCustom()}
                    className="lg:ms-2 lg:mt-0 mt-2 btn-bg shadow-none py-2 rounded text-white text-sm"
                  >
                    Fetch
                  </button>
                </div>
              </div>
            </div>
            {/* Referrals */}
            <div className="border mb-5 border-gray-700 rounded px-4 py-5 text-white secondary-bg">
              <h1 className="text-2xl">{referrals}</h1>
              <p className="text-gray-500 text-sm">Referrals</p>
            </div>
            {/* Orders */}
            <div className="border mb-5 border-gray-700 rounded px-4 py-5 text-white secondary-bg">
              <h1 className="text-2xl">{orders}</h1>
              <p className="text-gray-500 text-sm">Orders</p>
            </div>
            {/* Conversations */}
            <div className="border mb-5 border-gray-700 rounded px-4 py-5 text-white secondary-bg">
              <h1 className="text-2xl">{conversions}%</h1>
              <p className="text-gray-500 text-sm">Conversations</p>
            </div>
            {/* Sales */}
            <div className="border mb-5 border-gray-700 rounded px-4 py-5 text-white secondary-bg">
              <h1 className="text-2xl">€{sales}</h1>
              <p className="text-gray-500 text-sm">Sales</p>
            </div>
            {/* Earnings */}
            <div className="border mb-5 border-gray-700 rounded px-4 py-5 text-white secondary-bg">
              <h1 className="text-2xl">€{earning}</h1>
              <p className="text-gray-500 text-sm">Earnings</p>
            </div>
          </div>
          {/* Rank / Top Earners / Sold Products*/}
          <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-x-10">
            {/* Rank */}
            <div className="lg:mt-0 mt-5 border border-gray-700 rounded text-white secondary-bg">
              <div className="p-5 pb-7 border-b border-gray-700">
                <h1 className="text-sm">Your Rank</h1>
                <h1 className="text-3xl">100</h1>
              </div>
              <div className="flex border-b border-gray-700 pb-1 justify-between px-4 mt-2 text-gray-400">
                <p className="font-poppins"># 95 Lorem Ipsum</p>
                <p className="font-poppins">$5</p>
              </div>
              <div className="flex border-b border-gray-700 pb-1 justify-between px-4 mt-2 text-gray-400">
                <p className="font-poppins"># 96 Lorem Ipsum</p>
                <p className="font-poppins">$5</p>
              </div>
              <div className="flex border-b border-gray-700 pb-1 justify-between px-4 mt-2 text-gray-400">
                <p className="font-poppins"># 97 Lorem Ipsum</p>
                <p className="font-poppins">$5</p>
              </div>
              <div className="flex border-b border-gray-700 pb-1 justify-between px-4 mt-2 text-gray-400">
                <p className="font-poppins"># 98 Lorem Ipsum</p>
                <p className="font-poppins">$5</p>
              </div>
              <div className="flex border-b border-gray-700 pb-1 justify-between px-4 mt-2 text-gray-400">
                <p className="font-poppins"># 99 Lorem Ipsum</p>
                <p className="font-poppins">$5</p>
              </div>
              <div className="flex border-b border-gray-700 pb-1 justify-between px-4 mt-2 text-gray-400">
                <p className="font-poppins"># 100 Lorem Ipsum</p>
                <p className="font-poppins">$5</p>
              </div>
            </div>
            {/* Earner */}
            <div className="lg:mt-0 mt-5 border border-gray-700 rounded text-white secondary-bg py-3 px-5">
              <div className="border-b border-gray-700 pb-5">
                <h1 className="text-center">Top Earners</h1>
                <div className="flex justify-between my-6">
                  <button className="text-xl bi-arrow-left-square-fill text-purple-200"></button>
                  <p className="chakra">2024</p>
                  <button className="text-xl bi-arrow-right-square-fill text-purple-200"></button>
                </div>
                <p className="text-xs mt-5">Your Rank</p>
                <h1 className="mt-2">200</h1>
              </div>
              <div className="flex pt-3 border-b border-gray-700 pb-2">
                <p className="text-poppins">1</p>
                <p className="ms-5 bi-person-fill"> Lorem Ipsum</p>
              </div>
              <div className="flex pt-3 border-b border-gray-700 pb-2">
                <p className="text-poppins">2</p>
                <p className="ms-5 bi-person-fill"> Lorem Ipsum</p>
              </div>
              <div className="flex pt-3 border-b border-gray-700 pb-2">
                <p className="text-poppins">3</p>
                <p className="ms-5 bi-person-fill"> Lorem Ipsum</p>
              </div>
              <div className="flex pt-3 border-b border-gray-700 pb-2">
                <p className="text-poppins">4</p>
                <p className="ms-5 bi-person-fill"> Lorem Ipsum</p>
              </div>
              <div className="flex pt-3 border-b border-gray-700 pb-2">
                <p className="text-poppins">5</p>
                <p className="ms-5 bi-person-fill"> Lorem Ipsum</p>
              </div>
            </div>
            {/* Product Sold */}
            <div className="lg:mt-0 mt-5 border border-gray-700 rounded text-white secondary-bg py-3 px-5">
              <div className="flex justify-between">
                <p>Product Sold</p>
                <div>
                  <p
                    onClick={() => setDropdown(!dropdown)}
                    className="text-sm text-blue-500 cursor-pointer"
                  >
                    {productSold}{" "}
                    <span className="bi-caret-down-fill text-xs"></span>
                  </p>

                  {dropdown && (
                    <div className="absolute mt-2 text-sm">
                      {productSolds.map((sold) => (
                        <p
                          key={sold.id}
                          onClick={() => {
                            setDropdown(false);
                            setProductSold(sold.name);
                          }}
                          className="cursor-pointer"
                        >
                          {sold.name}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <h1 className="text-8xl mt-5">{orders}</h1>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <AffiliateFooter />
    </>
  );
};

export default Affiliate;
