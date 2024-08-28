import { useEffect, useState } from "react";
import AffiliateNavbar from "../Ambassador/AffiliateNavbar";
import { Link } from "react-router-dom";
import AffiliateFooter from "../Ambassador/AffiliateFooter";
import useAmbassador from "@/store/useAmbassador";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { baseUrl } from "@/services/request";

interface MyRank {
  rank: number;
  name: string;
  earning: number;
}

interface Rank {
  me: MyRank;
  usersAbove: MyRank[];
  top_earners: MyRank[];
}

const Affiliate = () => {
  const { t } = useTranslation();

  const [me, setMe] = useState<MyRank | null>(null);
  const [aboveMe, setAboveMe] = useState<MyRank[]>([]);
  const [topEarners, setTopEarners] = useState<MyRank[]>([]);

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

  useEffect(() => {
    axios
      .get<Rank>(`${baseUrl}/api/v1/ambassador/stats`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
        setMe(response.data.me);
        setAboveMe(response.data.usersAbove);
        setTopEarners(response.data.top_earners);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="lg:container mx-auto px-2">
        <AffiliateNavbar />
        <div className="mt-10">
          <p className="text-xl text-white">
            {t("welcomeAffiliate")}{" "}
            <span className="text-teal-500">{firstName + " " + lastName}</span>.
          </p>
          <div className="text-white mt-5">
            <h1 className="text-xl mb-2">{t("referralLink")}</h1>
            <p className="mb-1">{t("referFriends")}</p>
            <Link to="/" className="text-blue-500">
              vivecard.com/?ref={referral_code}
            </Link>
          </div>
          <div className="mt-5 text-white">
            <h1 className="text-2xl text-white">{t("commission")}</h1>
            <p>{t("commissionNote")}</p>
          </div>
          {/* Data */}
          <div className="grid lg:grid-cols-3 grid-cols-2 mt-6 lg:gap-x-10 gap-x-3">
            {/* Referrals */}
            <div className="border mb-5 border-gray-700 rounded px-4 py-5 text-white secondary-bg">
              <h1 className="text-2xl">{referrals}</h1>
              <p className="text-gray-500 text-sm">{t("referrals")}</p>
            </div>
            {/* Orders */}
            <div className="border mb-5 border-gray-700 rounded px-4 py-5 text-white secondary-bg">
              <h1 className="text-2xl">{orders}</h1>
              <p className="text-gray-500 text-sm">{t("orders")}</p>
            </div>
            {/* Conversations */}
            <div className="border mb-5 border-gray-700 rounded px-4 py-5 text-white secondary-bg">
              <h1 className="text-2xl">{conversions}%</h1>
              <p className="text-gray-500 text-sm">{t("conversations")}</p>
            </div>
            {/* Sales */}
            <div className="border mb-5 border-gray-700 rounded px-4 py-5 text-white secondary-bg">
              <h1 className="text-2xl">€{sales}</h1>
              <p className="text-gray-500 text-sm">{t("sales")}</p>
            </div>
            {/* Earnings */}
            <div className="border mb-5 border-gray-700 rounded px-4 py-5 text-white secondary-bg">
              <h1 className="text-2xl">€{earning}</h1>
              <p className="text-gray-500 text-sm">{t("earn")}</p>
            </div>
          </div>
          {/* Rank / Top Earners / Sold Products*/}
          <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-x-10">
            {/* Rank */}
            <div className="lg:mt-0 mt-5 border border-gray-700 rounded text-white secondary-bg">
              <div className="p-5 pb-7 border-b border-gray-700">
                <h1 className="text-sm">
                  {t("rank")} {me?.name}
                </h1>
                <h1 className="text-3xl">{me?.rank}</h1>
              </div>
              {aboveMe.length > 0 &&
                aboveMe.map((above) => (
                  <div className="flex border-b border-gray-700 pb-1 justify-between px-4 mt-2 text-gray-400">
                    <p className="font-poppins">
                      # {above.rank} {above.name}
                    </p>
                    <p className="font-poppins">€{above.earning}</p>
                  </div>
                ))}
            </div>
            {/* Earner */}
            <div className="lg:mt-0 mt-5 border border-gray-700 rounded text-white secondary-bg py-3 px-5">
              {topEarners.length > 0 &&
                topEarners.map((top) => (
                  <div className="flex pt-3 border-b border-gray-700 pb-2">
                    <p className="text-poppins">{top.rank}</p>
                    <p className="ms-5 bi-person-fill"> {top.name}</p>
                  </div>
                ))}
            </div>
            {/* Product Sold */}
            <div className="lg:mt-0 mt-5 border border-gray-700 rounded text-white secondary-bg py-3 px-5">
              <div className="flex justify-center items-center h-full">
                <div>
                  <p>{t("productSold")}</p>

                  <h1 className="text-8xl mt-5">{orders}</h1>
                </div>
              </div>
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
