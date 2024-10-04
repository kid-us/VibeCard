import Navbar from "../Navbar/Navbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "@/services/request";
import Loading from "../Loading/Loading";
import Faq from "../Home/FAQ";
import Autoplay from "embla-carousel-autoplay";

import {
  card1,
  card2,
  card3,
  card6,
  fb,
  g1,
  g2,
  g3,
  g4,
  g5,
  ig,
  ln,
  tk,
} from "@/assets";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Cart from "../Cart/Cart";
import { useTranslation } from "react-i18next";

interface Plan {
  metal: {
    price: number;
    material: string;
  };
  bamboo: {
    price: number;
    material: string;
  };
  recycled_paper: {
    price: number;
    material: string;
  };
}

const ProductDetail = () => {
  const [title] = useState("Product");
  useDocumentTitle(title);

  const { t } = useTranslation();

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const { id } = useParams();
  const [orderError, setOrderError] = useState(false);
  const [type, setType] = useState("");
  const [quantity, setQuantity] = useState<number>(1);
  const [backLogo, setBackLogo] = useState(true);
  const [loading, setLoading] = useState<boolean>(true);

  const [cards, setCards] = useState<Plan>();
  const [availableCards, setAvailableCards] = useState<string[]>([]);

  useEffect(() => {
    axios
      .get<Plan>(`${baseUrl}/api/v1/dashboard/card-material-pricing`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setCards(response.data);
        axios
          .get(`${baseUrl}/api/v1/products/available-materials`, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            setLoading(false);
            setAvailableCards(response.data.materials);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleMinus = () => {
    if (quantity === 1) return;
    setQuantity(quantity - 1);
  };

  const handleOrder = () => {
    if (type === "") {
      setOrderError(true);
      return;
    } else {
      const productCardInfo = {
        quantity: quantity,
        cardType: type,
        vibecardLogo: backLogo,
      };

      localStorage.setItem("product", JSON.stringify(productCardInfo));
      navigate(`/card-design`);
    }
  };

  return (
    <>
      {loading && <Loading />}

      <Navbar />
      <Cart />

      <div className="lg:px-0 px-2">
        <div className="lg:container mx-auto lg:mt-8 mt-4 lg:secondary-bg rounded overflow-hidden">
          <div className="lg:grid grid-cols-2">
            <div className="lg:hidden block my-6">
              <p className="lg:text-4xl text-2xl text-white font-extrabold font-poppins">
                Vibecard {t("cardTitle")}
              </p>

              <p className="mt-3 text-sm text-gray-300 font-poppins">
                {t("cardDesc")}
              </p>
            </div>

            <div className="lg:mt-10 lg:mx-0 mx-1 lg:pb-10 lg:px-10 md:px-10 px-0">
              {/* Business Card */}
              {id === "business-card" && (
                <Carousel
                  plugins={[
                    Autoplay({
                      delay: 10000,
                    }),
                  ]}
                >
                  <CarouselContent className="flex gap-x-2 px-1">
                    <CarouselItem>
                      <img
                        src={card1}
                        alt="card"
                        className="rounded-lg mb-3 cursor-pointer w-full lg:h-[530px] md:h-[530px] object-cover"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img
                        src={card2}
                        alt="card"
                        className="rounded-lg mb-3 cursor-pointer w-full lg:h-[530px] md:h-[530px] object-cover"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img
                        src={card3}
                        alt="card"
                        className="rounded-lg mb-3 cursor-pointer w-full lg:h-[530px] md:h-[530px] object-cover"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img
                        src={card6}
                        alt="card"
                        className="rounded-lg mb-3 cursor-pointer w-full lg:h-[530px] md:h-[530px] object-cover"
                      />
                    </CarouselItem>
                  </CarouselContent>
                </Carousel>
              )}
              {/* Social Media */}
              {id === "card-social-media" && (
                <Carousel
                  plugins={[
                    Autoplay({
                      delay: 10000,
                    }),
                  ]}
                >
                  <CarouselContent className="flex gap-x-2 px-1">
                    <CarouselItem>
                      <img
                        src={ig}
                        alt="card"
                        className="rounded-lg mb-3 cursor-pointer w-full lg:h-[530px] md:h-[530px] object-cover"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img
                        src={fb}
                        alt="card"
                        className="rounded-lg mb-3 cursor-pointer w-full lg:h-[530px] md:h-[530px] object-cover"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img
                        src={ln}
                        alt="card"
                        className="rounded-lg mb-3 cursor-pointer w-full lg:h-[530px] md:h-[530px] object-cover"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img
                        src={tk}
                        alt="card"
                        className="rounded-lg mb-3 cursor-pointer w-full lg:h-[530px] md:h-[530px] object-cover"
                      />
                    </CarouselItem>
                  </CarouselContent>
                </Carousel>
              )}

              {/* Google Review */}
              {id === "card-google-review" && (
                <Carousel
                  plugins={[
                    Autoplay({
                      delay: 10000,
                    }),
                  ]}
                >
                  <CarouselContent className="flex gap-x-2 px-1">
                    <CarouselItem>
                      <img
                        src={g1}
                        alt="card"
                        className="rounded-lg mb-3 cursor-pointer w-full lg:h-[530px] md:h-[530px] object-cover"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img
                        src={g2}
                        alt="card"
                        className="rounded-lg mb-3 cursor-pointer w-full lg:h-[530px] md:h-[530px] object-cover"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img
                        src={g3}
                        alt="card"
                        className="rounded-lg mb-3 cursor-pointer w-full lg:h-[530px] md:h-[530px] object-cover"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img
                        src={g4}
                        alt="card"
                        className="rounded-lg mb-3 cursor-pointer w-full lg:h-[530px] md:h-[530px] object-cover"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img
                        src={g5}
                        alt="card"
                        className="rounded-lg mb-3 cursor-pointer w-full lg:h-[530px] md:h-[530px] object-cover"
                      />
                    </CarouselItem>
                  </CarouselContent>
                </Carousel>
              )}
            </div>

            <div className="px-2 main-bg lg:ps-10">
              <div className="lg:mt-4 rounded-xl lg:py-5">
                <div className="lg:block hidden">
                  <p className="lg:text-4xl text-2xl text-white font-extrabold font-poppins">
                    Vibecard {t("cardTitle")}
                  </p>

                  <p className="mt-3 text-md text-gray-300 font-poppins">
                    {t("cardDesc")}
                  </p>
                </div>

                <p className="text-white mt-5 lg:text-md text-sm font-poppins">
                  {t("chooseCard")}
                </p>

                {/* Card Types */}
                <div className="lg:flex justify-between gap-x-5 mt-5">
                  {availableCards.includes("recycled_paper") && (
                    <p
                      onClick={() => setType("recycled_paper")}
                      className={`shadow-xl shadow-zinc-900 ${
                        type === "recycled_paper"
                          ? "btn-bg shadow-none px-2 text-white text-sm"
                          : "bg-white"
                      } w-full text-center pt-3 rounded h-12 lg:mb-0 mb-2 font-poppins cursor-pointer text-sm font-bold`}
                    >
                      PVC €{cards?.recycled_paper.price}
                    </p>
                  )}
                  {availableCards.includes("bamboo") && (
                    <p
                      onClick={() => setType("bamboo")}
                      className={`shadow-xl shadow-zinc-900 ${
                        type === "bamboo"
                          ? "btn-bg shadow-none px-2 text-white"
                          : "bg-white"
                      } w-full text-center pt-3 rounded h-12 lg:mb-0 mb-2 font-poppins cursor-pointer text-sm font-bold`}
                    >
                      Bamboo €{cards?.bamboo.price}
                    </p>
                  )}
                  {availableCards.includes("metal") && (
                    <p
                      onClick={() => setType("metal")}
                      className={`shadow-xl shadow-zinc-900 ${
                        type === "metal"
                          ? "btn-bg shadow-none px-2 text-white"
                          : "bg-white"
                      } w-full text-center pt-3 rounded h-12 lg:mb-0 mb-2 font-poppins cursor-pointer text-sm font-bold`}
                    >
                      Metal €{cards?.metal.price}
                    </p>
                  )}
                </div>

                {/* Styles */}
                <p className="lg:mt-10 mt-7 lg:text-md text-sm text-gray-300 font-poppins">
                  {t("styles")} :
                  <span className="mx-1 text-white font-poppins">
                    {t("styleDesc")}
                  </span>
                </p>

                {/* Back style */}
                <div className="flex justify-start gap-x-6 mt-4">
                  <p
                    onClick={() => setBackLogo(true)}
                    className={`shadow-xl shadow-zinc-900 ${
                      backLogo ? "btn-bg shadow-none px-0" : "bg-white"
                    } text-center pt-3 text-sm rounded h-11 lg:mb-0 mb-2 w-20 font-poppins font-bold`}
                  >
                    {t("yes")}
                  </p>
                  <p
                    onClick={() => setBackLogo(false)}
                    className={`shadow-xl shadow-zinc-900 ${
                      !backLogo ? "btn-bg shadow-none px-0" : "bg-white"
                    } text-center pt-3 text-sm rounded h-11 lg:mb-0 mb-2 w-20 font-poppins font-bold`}
                  >
                    {t("no")}
                  </p>
                </div>

                {/* Back vibecard logo */}
                <p className="lg:mt-10 mt-7 lg:text-md text-sm text-gray-300 font-poppins">
                  {t("qrCode")} :
                  <span className="mx-1 text-white font-poppins">
                    {/* {t("qrNote")} */}
                    {t("qrNote2")}{" "}
                    <Link to="/dashboard" className="text-blue-500">
                      {t("qrNote3")}
                    </Link>
                  </span>
                </p>
                {/* <div className="flex justify-start gap-x-6 mt-4">
                  <Link to={"/dashboard"}>
                    <p
                      className={`shadow-xl shadow-zinc-900 bg-white text-center pt-3 text-sm rounded h-11 lg:mb-0 mb-2 w-20 font-poppins font-bold`}
                    >
                      {t("yes")}
                    </p>
                  </Link>
                  <p
                    onClick={() => setQRCode("no")}
                    className={`shadow-xl shadow-zinc-900 bg-white text-center pt-3 text-sm rounded h-11 lg:mb-0 mb-2 w-20 font-poppins font-bold`}
                  >
                    {t("no")}
                  </p>
                </div> */}
              </div>
              {/*Quantity */}
              <p className="mt-5 mb-4 text-white"> {t("quantity")}</p>
              <div className="grid grid-cols-5 border border-gray-400 rounded-xl me-44 overflow-hidden lg:w-auto w-full">
                <div>
                  <button
                    onClick={() => handleMinus()}
                    className="bi-dash bg-black w-full h-full text-white text-3xl"
                  ></button>
                </div>
                <div className="col-span-3">
                  <input
                    type="number"
                    className="h-14 border w-full text-center chakra text-3xl text-black"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.currentTarget.value))}
                  />
                </div>
                <div className="text-center w-full">
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="bi-plus-lg bg-black w-full h-full text-white text-2xl"
                  ></button>
                </div>
              </div>

              {orderError && (
                <p className="mb-3 text-red-500 text-sm text-start pt-5">
                  {t("designError")}
                </p>
              )}
              <div className="lg:flex justify-between gap-x-10 w-full mt-8">
                {/* Design */}
                <div className="w-full lg:mb-0 mb-5">
                  <button
                    onClick={() => handleOrder()}
                    className="btn-bg py-3 lg:text-center rounded shadow-md shadow-zinc-950 hover:shadow-none hover:text-gray-400 transition ease-in-out delay-200 text-center w-full font-poppins"
                  >
                    <span className="bi-palette-fill me-2"></span>
                    {t("designBtn")}
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Descriptions */}
          <div className="px-4">
            <h1 className="text-white text-2xl">{t("description")}</h1>
            <p className="first-letter:uppercase text-xl text-white mt-4 font-poppins">
              {" "}
              {t("PVC")} NFC {t("businessCard")}{" "}
            </p>
            <p className="font-poppins text-gray-200 mt-2">
              {t("pvcDescription")}
            </p>
            <p className="first-letter:uppercase text-xl text-white mt-4 font-poppins">
              {" "}
              {t("bamboo")} NFC {t("businessCard")}{" "}
            </p>
            <p className="font-poppins text-gray-200 mt-2">
              {t("bambooDescription")}
            </p>
            <p className="first-letter:uppercase text-xl text-white mt-4 font-poppins">
              {" "}
              {t("metal")} NFC {t("businessCard")}{" "}
            </p>
            <p className="font-poppins text-gray-200 mt-2">
              {t("metalDescription")}
            </p>
          </div>
          {/* Faq */}
          <div className="px-4">
            <div className="mt-10 flex justify-center">
              <div className="w-full">
                <Faq />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductDetail;
