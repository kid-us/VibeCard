import Navbar from "../Navbar/Navbar";
import { useParams } from "react-router-dom";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "@/services/request";
import Loading from "../Loading/Loading";
import { Wallets } from "../Product/Wallets";
import WalletOrder from "../Order/WalletOrder";
import Faq from "../Home/FAQ";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import {
  red1,
  red2,
  red3,
  slide1,
  slide2,
  slide3,
  wall1,
  wall2,
  wall3,
} from "@/assets";
import Autoplay from "embla-carousel-autoplay";
import Cart from "../Cart/Cart";
import { useCartStore } from "@/store/useCartStore";
import { useTranslation } from "react-i18next";

interface Wal {
  wallet: Wallets;
}

const WalletsDetail = () => {
  const [title] = useState("Product");
  useDocumentTitle(title);

  const { t } = useTranslation();

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  // const navigate = useNavigate();

  const [order, setOrder] = useState<boolean>(false);
  const [wallets, setWallets] = useState<Wallets>();
  const [quantity, setQuantity] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    axios
      .get<Wal>(`${baseUrl}/api/v1/products/wallet/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setWallets(response.data.wallet);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleMinus = () => {
    if (quantity === 1) return;

    setQuantity(quantity - 1);
  };

  return (
    <>
      <Cart />

      {order && (
        <WalletOrder
          id={id ? id : ""}
          img={wallets ? wallets.image : ""}
          quantity={quantity}
          hideModal={() => setOrder(false)}
        />
      )}
      {loading && <Loading />}

      <Navbar />

      <div className="lg:px-0 px-2">
        <div className="lg:container mx-auto lg:mt-10 mt-4 lg:secondary-bg rounded overflow-hidden">
          <div className="lg:grid grid-cols-2 justify-between gap-x-10">
            <div className="lg:hidden block rounded-xl lg:py-6 mt-5">
              <p className="lg:text-4xl text-2xl text-white font-extrabold">
                {wallets?.name}
              </p>
            </div>
            <div className="pt-8">
              {id === "3d90e076f13441b3af07b32e4d1e1e26" && (
                <Carousel
                  plugins={[
                    Autoplay({
                      delay: 5000,
                    }),
                  ]}
                >
                  <CarouselContent className="flex gap-x-2 px-1">
                    <CarouselItem>
                      <img
                        src={wallets?.image}
                        alt="card"
                        className="mb-3 w-full rounded lg:h-[550px] object-contain"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img
                        src={wall1}
                        alt="card"
                        className="mb-3 w-full rounded lg:h-[550px] object-contain"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img
                        src={wall2}
                        alt="card"
                        className="mb-3 w-full rounded lg:h-[550px] object-contain"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img
                        src={wall3}
                        alt="card"
                        className="mb-3 w-full rounded lg:h-[550px] object-contain"
                      />
                    </CarouselItem>
                  </CarouselContent>
                </Carousel>
              )}

              {id === "95aaf8c38c8c41d988989b899536ab99" && (
                <Carousel
                  plugins={[
                    Autoplay({
                      delay: 5000,
                    }),
                  ]}
                >
                  <CarouselContent className="flex gap-x-2 px-1">
                    <CarouselItem>
                      <img
                        src={wallets?.image}
                        alt="card"
                        className="mb-3 w-full rounded lg:h-[550px] object-contain"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img
                        src={wall1}
                        alt="card"
                        className="mb-3 w-full rounded lg:h-[550px] object-contain"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img
                        src={wall2}
                        alt="card"
                        className="mb-3 w-full rounded lg:h-[550px] object-contain"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img
                        src={wall3}
                        alt="card"
                        className="mb-3 w-full rounded lg:h-[550px] object-contain"
                      />
                    </CarouselItem>
                  </CarouselContent>
                </Carousel>
              )}

              {id === "00b446a1d7864ce1a480569577a1770e" && (
                <Carousel
                  plugins={[
                    Autoplay({
                      delay: 5000,
                    }),
                  ]}
                >
                  <CarouselContent className="flex gap-x-2 px-1">
                    <CarouselItem>
                      <img
                        src={wallets?.image}
                        alt="card"
                        className="mb-3 w-full rounded lg:h-[550px] object-contain"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img
                        src={slide1}
                        alt="card"
                        className="mb-3 w-full rounded lg:h-[550px] object-contain"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img
                        src={slide2}
                        alt="card"
                        className="mb-3 w-full rounded lg:h-[550px] object-contain"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img
                        src={slide3}
                        alt="card"
                        className="mb-3 w-full rounded lg:h-[550px] object-contain"
                      />
                    </CarouselItem>
                  </CarouselContent>
                </Carousel>
              )}

              {id === "ffa02f0cbf90456f8707978c7d54fc9b" && (
                <Carousel
                  plugins={[
                    Autoplay({
                      delay: 5000,
                    }),
                  ]}
                >
                  <CarouselContent className="flex gap-x-2 px-1">
                    <CarouselItem>
                      <img
                        src={wallets?.image}
                        alt="card"
                        className="mb-3 w-full rounded lg:h-[550px] object-contain"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img
                        src={red1}
                        alt="card"
                        className="mb-3 w-full rounded lg:h-[550px] object-contain"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img
                        src={red2}
                        alt="card"
                        className="mb-3 w-full rounded lg:h-[550px] object-contain"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img
                        src={red3}
                        alt="card"
                        className="mb-3 w-full rounded lg:h-[550px] object-contain"
                      />
                    </CarouselItem>
                  </CarouselContent>
                </Carousel>
              )}

              {id === "3f638a3343514bca88a9e26cddce3a76" && (
                <Carousel
                  plugins={[
                    Autoplay({
                      delay: 5000,
                    }),
                  ]}
                >
                  <CarouselContent className="flex gap-x-2 px-1">
                    <CarouselItem>
                      <img
                        src={wallets?.image}
                        alt="card"
                        className="mb-3 w-full rounded lg:h-[550px] object-contain"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img
                        src={red1}
                        alt="card"
                        className="mb-3 w-full rounded lg:h-[550px] object-contain"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img
                        src={red2}
                        alt="card"
                        className="mb-3 w-full rounded lg:h-[550px] object-contain"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img
                        src={red3}
                        alt="card"
                        className="mb-3 w-full rounded lg:h-[550px] object-contain"
                      />
                    </CarouselItem>
                  </CarouselContent>
                </Carousel>
              )}
            </div>
            <div className="px-2 main-bg lg:ps-10">
              <div className="lg:block hidden rounded-xl lg:py-6">
                <p className="lg:text-4xl text-2xl text-white font-extrabold">
                  {wallets?.name}
                </p>
              </div>
              <p className="text-white font-poppins font-bold text-2xl mt-5">
                {t("price")} €{wallets?.price}
              </p>

              <p className="text-xl mt-5 mb-4 text-white font-poppins font-bold">
                {t("size")}{" "}
                <span className="text-sm font-light font-poppins">
                  {t("sizeDesc")}
                </span>
              </p>

              {/*Quantity */}
              <p className="mt-5 mb-4 text-white"> {t("quantity")}</p>
              <div className="grid grid-cols-5 border border-gray-400 rounded-xl me-44 overflow-hidden lg:w-auto w-full">
                <div>
                  <button
                    onClick={() => handleMinus()}
                    className="bi-dash bg-black w-full h-full text-white text-2xl"
                  ></button>
                </div>
                <div className="col-span-3">
                  <input
                    type="number"
                    className="h-14 border w-full text-center chakra text-3xl text-black"
                    value={quantity}
                    readOnly
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

              <div className="mb-10">
                <button
                  onClick={() =>
                    addToCart({
                      id: wallets ? wallets.wallet_id : "",
                      quantity,
                    })
                  }
                  className="bg-white bi-cart-fill w-full mt-8 shadow shadow-zinc-900 text-black font-poppins rounded py-3"
                >
                  {t("addToCart")}
                </button>
              </div>
              <div className="mb-10">
                <button
                  onClick={() => setOrder(true)}
                  className="btn-bg w-full mt-8 shadow text-white rounded"
                >
                  {t("order")}
                </button>
              </div>

              <p className="mt-5 mb-4 text-white text-xl font-poppins font-bold">
                {t("description")}
              </p>
              <p className="mt-5 mb-4 text-white font-poppins leading-relaxed text-sm">
                {t("descriptionNote")}
              </p>
            </div>
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

export default WalletsDetail;
