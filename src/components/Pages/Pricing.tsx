import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { free, pricingInfo, pro, proPlus } from "@/services/pricing";
import axios from "axios";
import { baseUrl } from "@/services/request";
import Loading from "../Loading/Loading";
import useSubscription from "@/hooks/useSubscription";
import useAuthStore from "@/store/useUserData";

interface Plan {
  pro: { price: string; plan: "pro"; price_id: string };
  proPlus: { price: string; plan: "pro+"; price_id: string };
}

const Pricing = () => {
  const [title] = useState("Pricing");
  useDocumentTitle(title);

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { quota } = useSubscription();

  const { plan, isAuthenticated } = useAuthStore();

  const [subscription, setSubscription] = useState<Plan>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get<Plan>(`${baseUrl}/api/v1/dashboard/subscription-plan`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setSubscription(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubscribe = (id: string) => {
    if (!isAuthenticated) {
      window.location.href = "/login";
      return;
    }

    const subscriptionPlan = plan && plan !== "free" ? true : false;

    axios
      .post(
        `${baseUrl}/api/v1/payment/subscribe?price_id=${id}&change_plan=${subscriptionPlan}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )
      .then((response) => {
        window.location.href = response.data.url;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {loading && <Loading />}
      <Navbar />

      <div className="lg:container mx-auto lg:mt-24 mt-14">
        <h1 className="lg:text-4xl text-2xl lg:text-center font-extrabold text-white ps-2">
          Choose the best plan for you or your business.
        </h1>

        <p className="my-4 lg:text-center text-gray-500 text-lg ps-2">
          Use the toggle below to switch between individual or team pricing
          plans
        </p>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-5 lg:my-29 md:my-20 my-10 lg:px-20 px-2">
          {/* Basic */}
          <div className="border border-gray-600 rounded-xl lg:px-10 px-5 lg:mb-0 mb-4 py-6 text-white">
            <p className="text-2xl font-extrabold mb-5">Basic</p>
            <p className="text-gray-500">
              For those who mainly want to share their digital business card or
              social media
            </p>
            <div className="py-10 text-center">
              <h1 className="text-2xl font-extrabold my-4">Free</h1>
              <Link
                to={quota ? "/create" : "/pricing"}
                className="text-center py-3 btn-bg shadow shadow-zinc-900 text-white rounded chakra"
              >
                Create now
              </Link>
            </div>
            {free.map((f) => (
              <div key={f.id} className="flex gap-x-2">
                <p className="text-center text-lg bi-check-circle-fill text-white rounded-full"></p>{" "}
                <p className="mb-3 lg:text-md text-sm pt-1">{f.feature}</p>
              </div>
            ))}
          </div>
          {/* Pro */}
          <div className="relative">
            <div className="absolute lg:-top-10 h-40 bg-teal-500 rounded-t-xl text-white uppercase">
              <p className="pt-3 px-5 text-sm text-black">Most Popular</p>
            </div>
            <div className="relative z-50 border-2 border-teal-500 rounded-xl lg:px-10 px-5 lg:mb-0 lg:mt-0 mt-14 mb-4 py-6 text-white secondary-bg">
              <p className="text-2xl font-extrabold mb-5">Pro</p>
              <p className="text-gray-500">
                For those who mainly want to share their digital business card
                or social media
              </p>
              <div className="py-10 text-center my-4 w-full">
                <div className="flex justify-center gap-x-10 mb-4">
                  <h1 className="text-2xl font-extrabold ">
                    €{subscription?.pro.price}
                  </h1>
                  <p className="text-sm chakra py-2">per month</p>
                </div>
                <button
                  onClick={() =>
                    handleSubscribe(
                      subscription ? subscription.pro.price_id : ""
                    )
                  }
                  className="text-center w-full py-3 btn-bg shadow shadow-zinc-900 text-white rounded chakra"
                >
                  Subscribe
                </button>
              </div>
              <p className="mb-3 text-teal-500">
                Everything in Basic plan, plus
              </p>
              {pro.map((p) => (
                <div key={p.id} className="flex gap-x-2">
                  <p className="h-5 w-5 text-center text-lg bi-check-circle-fill text-teal-500 rounded-full"></p>{" "}
                  <p className="mb-3 lg:text-md text-sm pt-1">{p.feature}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Pro Plus*/}
          <div className="border border-gray-600 rounded-xl lg:px-10 px-5 lg:mb-0 mb-4 py-6 text-white">
            <p className="text-2xl font-extrabold mb-5">Pro+</p>
            <p className="chakra text-gray-600">
              For those who mainly want to share their digital business card or
              social media
            </p>
            <div className="py-10 text-center my-4">
              <div className="flex justify-center gap-x-10 mb-4">
                <h1 className="text-2xl font-extrabold ">
                  €{subscription?.proPlus.price}
                </h1>
                <p className="text-sm chakra py-2">per year</p>
              </div>
              <button
                onClick={() =>
                  handleSubscribe(
                    subscription ? subscription.proPlus.price_id : ""
                  )
                }
                className="text-center w-full btn-bg py-3 px-10 shadow shadow-zinc-900 text-white rounded chakra"
              >
                Subscribe
              </button>
            </div>
            <p className="mb-3 text-indigo-500">Everything in Pro plan, plus</p>

            {proPlus.map((pp) => (
              <div key={pp.id} className="flex gap-x-2">
                <p className="h-5 w-5 text-center text-lg bi-check-circle-fill text-indigo-500 rounded-full"></p>{" "}
                <p className="mb-3 lg:text-md text-sm pt-1">{pp.feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Table  */}
        <div className="grid grid-cols-4 border-b border-gray-600 text-white pb-5 mb-10 lg:mx-10 mx-2">
          <div></div>
          <div className="text-center">
            <p className="lg:text-2xl text-sm font-extrabold">Free</p>
          </div>
          <div className="text-center">
            <p className="lg:text-2xl text-sm font-extrabold text-teal-500">
              Pro
            </p>
            <p className="lg:text-md text-xs text-gray-400 font-poppins">
              €{subscription?.pro.price}
            </p>
          </div>
          <div className="text-center">
            <p className="lg:text-2xl text-sm font-extrabold text-violet-500">
              Pro +
            </p>
            <p className="lg:text-md text-xs text-gray-400 font-poppins">
              €{subscription?.proPlus.price}
            </p>
          </div>
        </div>

        {pricingInfo.map((pi) => (
          <div
            key={pi.id}
            className="grid grid-cols-4 text-white mb-10 lg:px-10 px-2"
          >
            <div>
              <p className="lg:text-lg text-xs">{pi.title}</p>
            </div>
            <div className="grid grid-cols-2 w-16 lg:ms-32 md:ms-20 ms-10 text-white">
              <p className={`${pi.value1.icon} lg:text-2xl text-sm`}> </p>
              <p className="lg:text-lg text-sm font-poppins">
                {pi.value1.value !== 0 && pi.value1.value}{" "}
              </p>
            </div>
            <div className="grid grid-cols-2 text-teal-500 w-16 lg:ms-32 md:ms-20 ms-10 ">
              <p className={`${pi.value2.icon} lg:text-2xl text-sm`}> </p>
              <p className="lg:text-lg text-sm font-poppins">
                {pi.value2.value !== 0 && pi.value2.value}{" "}
              </p>
            </div>
            <div className="grid grid-cols-2 text-violet-500 w-16 lg:ms-32 md:ms-20 ms-10">
              <p className={`${pi.value3.icon} lg:text-2xl text-sm`}> </p>
              <p className="lg:text-lg text-sm font-poppins">
                {pi.value3.value !== 0 && pi.value3.value}{" "}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Pricing;
