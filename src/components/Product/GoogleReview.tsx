import { google } from "@/assets";
import { baseUrl } from "@/services/request";
import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface Props {
  bg: string;
  note: string;
  tablet?: boolean;
}

const GoogleReview = ({ bg, note, tablet }: Props) => {
  const [materials, setMaterials] = useState<string[]>([]);

  const { t } = useTranslation();

  useEffect(() => {
    axios
      .get(`${baseUrl}//api/v1/products/available-materials`, {
        headers: {
          "Content-Type": "application",
        },
      })
      .then((response) => {
        setMaterials(response.data.materials);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div className="lg:mb-0 mb-10">
      <Link to={`/products/card-google-review`}>
        <div className="flex justify-center items-center relative px-8 py-5 bg-white pb-0 rounded h-[450px]">
          <p className="absolute top-2 left-2 bg-indigo-900 text-white text-sm py-1 px-10 rounded shadow shadow-zinc-900">
            Best Seller
          </p>
          <div
            className={`rounded-md ${
              tablet ? "lg:w-72 md:w-[42%] w-[90%]" : "lg:w-72 w-[80%]"
            }  h-[400px] ${bg} mb-5 shadow-lg shadow-zinc-900`}
          >
            <div className="relative flex justify-center items-center h-full">
              <div className="">
                {bg === "bg-black" && (
                  <p
                    className={`text-white text-center text-xl font-poppins absolute top-5 w-full left-0`}
                  >
                    {note}
                  </p>
                )}
                <div className="flex justify-center">
                  <img src={google} alt="google" className="w-28" />
                </div>
                {bg === "bg-white" && (
                  <p
                    className={`${
                      bg === "bg-white" ? "text-black" : "text-white"
                    } text-center text-xl font-poppins mt-5`}
                  >
                    {note}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
      {/* Color */}
      <div className="mt-2 bg-gray-800 rounded px-3 py-5 shadow shadow-zinc-950 mb-8">
        <p className="text-lg text-white font-poppins">
          Vibecard {t("googleReview")}
        </p>
        {materials.length > 0 && (
          <div className="flex text-white font-poppins gap-x-4">
            <p className="font-poppins text-sm">{t("availableIn")}</p>{" "}
            {materials.map((m) => (
              <p className="text-teal-500 font-poppins text-sm font-bold first-letter:uppercase">
                {m === "recycled_paper" ? "PVC" : m},{" "}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GoogleReview;
