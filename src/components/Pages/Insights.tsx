import Navbar from "../Navbar/Navbar";
import { baseUrl } from "../../services/request";
import axios from "axios";
import { useEffect, useState } from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import Chart from "../Insights/Chart";

const Insights = () => {
  const [title] = useState("Insight");
  useDocumentTitle(title);

  const [, setCards] = useState();
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

  return (
    <>
      <Navbar />
      <div className="my-16 px-10">
        <div className="grid grid-cols-5 gap-x-5 rounded">
          <div className="col-span-2"></div>
          <div className="col-span-3">
            <div className="grid grid-cols-3 py-5 gap-x-5">
              {/* Card Views */}
              <div className="w-full shadow shadow-gray-600 rounded px-5 py-4 bg-white">
                <p className="chakra">Card Views</p>
                <h1 className="font-poppins text-3xl mt-3 font-extrabold">0</h1>
              </div>
              {/* Link taps */}
              <div className="w-full shadow shadow-gray-600 rounded px-5 py-4 bg-white">
                <p className="chakra">Links taps</p>
                <h1 className="font-poppins text-3xl mt-3 font-extrabold">0</h1>
              </div>
              {/* Contact Downloaded */}
              <div className="w-full shadow shadow-gray-600 rounded px-5 py-4 bg-white">
                <p className="chakra">Contact Downloaded</p>
                <h1 className="font-poppins text-3xl mt-3 font-extrabold">0</h1>
              </div>
            </div>
            <div className="w-full bg-white my-5 rounded-lg">
              <Chart />
            </div>
            {/* Link Taps */}
            <div className="col-span-3 shadow shadow-gray-600 rounded mt-5 p-4 bg-white">
              <div className="grid grid-cols-4">
                <div>
                  <h1 className="text-sm">Link</h1>
                </div>
                <div>
                  <h1 className="text-sm">Name</h1>
                </div>
                <div>
                  <h1 className="text-sm">Job</h1>
                </div>
                <div>
                  <h1 className="text-sm">Taps</h1>
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
