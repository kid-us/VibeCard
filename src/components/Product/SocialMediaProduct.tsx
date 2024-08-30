import { baseUrl } from "@/services/request";
import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface Props {
  name: string;
  bg: string;
  tablet?: boolean;
}

const SocialMediaProduct = ({ name, bg, tablet }: Props) => {
  const { t } = useTranslation();

  const [materials, setMaterials] = useState<string[]>([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/v1/products/available-materials`, {
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
      <Link to={`/products/card-social-media`}>
        <div className="flex justify-center items-center relative px-8 py-5 pb-0 bg-white rounded h-[450px]">
          <p className="absolute top-2 left-2 bg-indigo-900 text-white text-sm py-1 px-10 rounded shadow shadow-zinc-900">
            Best Seller
          </p>
          <div
            className={`rounded-md ${
              tablet ? "lg:w-72 md:w-[42%] w-[90%]" : "lg:w-72 w-[80%]"
            } h-[400px] ${bg} mb-5 shadow-lg shadow-zinc-900`}
          >
            <div className="flex justify-center items-center h-full px-10">
              <div>
                <p className={`text-white bi-${name} text-center text-9xl`}></p>
                <p
                  className={`text-white text-center text-3xl font-poppins mt-5 first-letter:uppercase`}
                >
                  {name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
      {/* Color */}
      <div className="mt-2 bg-gray-800 rounded px-3 py-5 shadow shadow-zinc-950 mb-8">
        <p className="text-lg text-white font-poppins">
          Vibecard {t("socialMedia")}
        </p>
        {materials.length > 0 && (
          <div className="flex text-white font-poppins gap-x-4">
            <p className="font-poppins text-sm">{t("availableIn")}</p>{" "}
            {materials.map((m) => (
              <p className="text-teal-500 font-poppins text-sm font-bold first-letter:uppercase">
                {m === "recycled_paper" ? "PVC" : t(m)},{" "}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SocialMediaProduct;
