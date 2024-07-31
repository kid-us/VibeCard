import { Link } from "react-router-dom";
import DatePicker from "../Insights/DatePicker";
import React from "react";
import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";

const Affiliate = () => {
  // Custom Date
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 20),
  });
  const handleCustom = () => {
    console.log("Lorem");
  };
  return (
    <>
      <div className="lg:container mx-auto px-2">
        <nav className="flex justify-between text-white mt-5">
          <div>
            <Link to="/" className="logo-font text-3xl">
              vibecard
            </Link>
          </div>
          <div className="flex gap-x-10">
            <div className="flex gap-x-1 text-xl">
              <p className="bi-person-fill text-gray-200"></p>
              <p>Lorem</p>
            </div>
            <div className="flex lg:mt-1">
              <p className="bi-box-arrow-right lg:text-gray-400 lg:text-md text-xl">
                <span className="lg:inline hidden">Logout</span>
              </p>
            </div>
          </div>
        </nav>

        <div className="mt-10">
          <p className="text-xl text-white">
            Welcome to your affiliate market dashboard{" "}
            <span className="text-teal-500">{"Lorem"}</span>.
          </p>

          {/* Data */}
          <div className="lg:grid grid-cols-3 mt-10 gap-x-10">
            <div className="col-span-3 mb-10">
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
            <div className="border mb-5 border-gray-700 rounded px-4 py-5 text-white">
              <h1 className="text-2xl">0</h1>
              <p className="text-gray-500 text-sm">Referrals</p>
            </div>
            {/* Orders */}
            <div className="border mb-5 border-gray-700 rounded px-4 py-5 text-white">
              <h1 className="text-2xl">0</h1>
              <p className="text-gray-500 text-sm">Orders</p>
            </div>
            {/* Conversations */}
            <div className="border mb-5 border-gray-700 rounded px-4 py-5 text-white">
              <h1 className="text-2xl">0%</h1>
              <p className="text-gray-500 text-sm">Conversations</p>
            </div>
            {/* Sales */}
            <div className="border mb-5 border-gray-700 rounded px-4 py-5 text-white">
              <h1 className="text-2xl">€0</h1>
              <p className="text-gray-500 text-sm">Sales</p>
            </div>
            {/* Earnings */}
            <div className="border mb-5 border-gray-700 rounded px-4 py-5 text-white">
              <h1 className="text-2xl">€0</h1>
              <p className="text-gray-500 text-sm">Earnings</p>
            </div>
          </div>

          {/* Rank */}
          {/* Top Earners */}
        </div>
      </div>
    </>
  );
};

export default Affiliate;
