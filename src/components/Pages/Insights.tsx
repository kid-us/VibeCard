import Navbar from "../Navbar/Navbar";
import { baseUrl } from "../../services/request";
import axios from "axios";
import { useEffect, useState } from "react";

const Insights = () => {
  const [cards, setCards] = useState();
  useEffect(() => {
    axios
      .get(`${baseUrl}/api/v1/cards/my-cards`, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      })
      .then((response) => {
        setCards(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(cards);

  return (
    <>
      <Navbar />
      <div className="px-6 mt-5">
        <div className="grid grid-cols-5 gap-x-5">
          <div className="col-span-2"></div>
          <div className="col-span-3">
            <div className="grid grid-cols-3 p-5 gap-x-5">
              {/* Card Views */}
              <div className="w-full shadow shadow-gray-300 rounded-xl px-5 py-4 text-white">
                <p className="chakra">Card Views</p>
                <h1 className="font-poppins text-3xl mt-3 font-extrabold">0</h1>
              </div>
              {/* Link taps */}
              <div className="w-full shadow shadow-gray-300 rounded-xl px-5 py-4 text-white">
                <p className="chakra">Links taps</p>
                <h1 className="font-poppins text-3xl mt-3 font-extrabold">0</h1>
              </div>
              {/* Contact Downloaded */}
              <div className="w-full shadow shadow-gray-300 rounded-xl px-5 py-4 text-white">
                <p className="chakra">Contact Downloaded</p>
                <h1 className="font-poppins text-3xl mt-3 font-extrabold">0</h1>
              </div>

              {/* Link Taps */}
              <div className="col-span-3 shadow shadow-gray-300 rounded mt-5 p-4">
                <div className="grid grid-cols-4">
                  <div>
                    <h1 className="text-sm text-gray-300">Link</h1>
                  </div>
                  <div>
                    <h1 className="text-sm text-gray-300">Name</h1>
                  </div>
                  <div>
                    <h1 className="text-sm text-gray-300">Job</h1>
                  </div>
                  <div>
                    <h1 className="text-sm text-gray-300">Taps</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Insights;
