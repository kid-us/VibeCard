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

interface Wal {
  wallet: Wallets;
}

const WalletsDetail = () => {
  const [title] = useState("Product");
  useDocumentTitle(title);

  const { id } = useParams();
  // const navigate = useNavigate();

  const [order, setOrder] = useState<boolean>(false);
  const [wallets, setWallets] = useState<Wallets>();
  const [quantity, setQuantity] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

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
              <img
                src={wallets?.image}
                alt="Wallet"
                className="h-[550px] w-full object-cover rounded"
              />
            </div>
            <div className="px-2 main-bg lg:ps-10">
              <div className="lg:block hidden rounded-xl lg:py-6">
                <p className="lg:text-4xl text-2xl text-white font-extrabold">
                  {wallets?.name}
                </p>
              </div>
              <p className="text-white font-poppins font-bold text-2xl mt-5">
                Price {wallets?.price}
              </p>

              <p className="text-xl mt-5 mb-4 text-white font-poppins font-bold">
                Size{" "}
                <span className="text-sm font-light font-poppins">
                  {wallets?.size}
                </span>
              </p>

              {/*Quantity */}
              <p className="mt-5 mb-4 text-white">Quantity</p>
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
                  onClick={() => setOrder(true)}
                  className="btn-bg w-full mt-8 shadow text-white rounded"
                >
                  Order
                </button>
              </div>

              <p className="mt-5 mb-4 text-white text-xl font-poppins font-bold">
                Description
              </p>
              <p className="mt-5 mb-4 text-white font-poppins leading-relaxed text-sm">
                {wallets?.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default WalletsDetail;
