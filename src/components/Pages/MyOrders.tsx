import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { baseUrl } from "@/services/request";
import Loading from "../Loading/Loading";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

interface Delivery {
  address: string;
  email: string;
  fname: string;
  lname: string;
  location: string;
  phone: string;
  plz: string;
  street: string;
  street_no: string;
}

interface Position {
  x: string | number;
  y: string | number;
}

interface Card {
  text: string;
  bgColor: string;
  image: File | null;
  textSize: string;
  fontStyle: string;
  imageSize: string;
  imagePosition: Position;
  textPosition: Position;
  extraTextPosition: Position;
  pickedBg: string;
  color: string;
  extraText: string;
  extraTextColor: string;
  extraTextFontSize: string;
  extraTextFontStyle: string;
}

interface allOrders {
  back_image: string;
  front_image: string;
  front_style: Card; // This will be an object after parsing
  back_style: Card; // This will be an object after parsing
  order_id: string;
  order_metadata: Delivery; // This will be an object after parsing
  quantity: number;
  vibecardLogo: boolean;
  orientation: string;
  card_img: string;
  created_at: string;
  card_type: string;
  status: string;
}

interface Wallet {
  wallet_id: string;
  quantity: number | string;
  image: string;
}

interface GetWallets {
  created_at: string;
  order_id: string;
  order_metadata: Delivery;
  payment_status: string;
  wallets: Wallet[];
  status: string;
}

interface TotalOrders {
  product_orders: {
    back_image: string;
    front_image: string;
    front_style: string; // String to parse
    back_style: string; // String to parse
    order_id: string;
    order_metadata: Delivery; // String to parse
    quantity: number;
    vibecardLogo: boolean;
    orientation: string;
    card_img: string;
    created_at: string;
    card_type: string;
    status: string;
  }[];
  wallet_orders: GetWallets[];
}

const MyOrders = () => {
  const [orders, setOrders] = useState<allOrders[]>([]);
  const [wallets, setWallets] = useState<GetWallets[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get<TotalOrders>(`${baseUrl}/api/v1/products/my-orders`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        setWallets(response.data.wallet_orders);
        const parsedOrders = response.data.product_orders.map((order) => {
          try {
            return {
              ...order,
              front_style: JSON.parse(order.front_style) as Card,
              back_style: JSON.parse(order.back_style) as Card,
              order_metadata: order.order_metadata,
            };
          } catch (e) {
            console.error("Error parsing order data", e);
            return {
              ...order,
              front_style: {} as Card,
              back_style: {} as Card,
              order_metadata: {} as Delivery,
            };
          }
        });

        setOrders(parsedOrders);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function getDate(timestamp: string) {
    const date = new Date(timestamp);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  }

  console.log(wallets);

  return (
    <>
      {loading && <Loading />}
      <Navbar />

      <div className="lg:container mx-auto mt-8 lg:px-0 px-1">
        <div className="grid grid-cols-2 gap-x-10 mt-10">
          {/* Business Cards */}
          <div>
            <p className="text-white text-xs lg:text-2xl ps-2 mb-5">
              Track your Business Card orders
            </p>
            {orders.length > 0 &&
              orders.map((card) => (
                <div
                  key={card.order_id}
                  className="grid lg:grid-cols-4 mb-4 secondary-bg p-4 rounded-lg"
                >
                  <div className="col-span-2">
                    <p className="text-white mb-3 text-xs lg:text-lg font-poppins font-bold">
                      Your designed card
                    </p>
                    <img src={card.card_img} alt="" />
                  </div>
                  <div className="col-span-2 text-white space-y-3">
                    <p className="text-white mb-3 text-xs lg:text-lg font-poppins font-bold lg:mt-0 mt-2">
                      Card Information
                    </p>
                    <p className="text-xs lg:text-lg">
                      Ordered date : {getDate(card.created_at)}
                    </p>
                    <p className="text-xs lg:text-lg">
                      Card type :{" "}
                      {card.card_type === "recycled_paper"
                        ? "PVC"
                        : card.card_type}
                    </p>
                    <p className="text-xs lg:text-lg">
                      Quantity: {card.quantity}
                    </p>
                    <p className="text-xs lg:text-lg">Status : {card.status}</p>
                  </div>
                </div>
              ))}
          </div>

          {/* Wallets */}
          <div>
            <p className="text-white text-xs lg:text-2xl ps-2 mb-5">
              Track your wallet orders
            </p>
            {wallets.length > 0 &&
              wallets.map((card) => (
                <div
                  key={card.order_id}
                  className="grid lg:grid-cols-4 mb-4 secondary-bg p-4 rounded-lg gap-x-5"
                >
                  <div className="col-span-2">
                    <p className="text-white mb-3 text-xs lg:text-lg font-poppins font-bold">
                      Your ordered wallet
                    </p>
                    {card.wallets.length > 0 && (
                      <img
                        src={card.wallets[0].image} // Displaying the first wallet's image
                        className="rounded-lg"
                        alt="Ordered Wallet"
                      />
                    )}
                  </div>
                  <div className="col-span-2 text-white space-y-3">
                    <p className="text-white mb-3 font-poppins lg:mt-1 mt-2 text-xs lg:text-lg font-bold">
                      Wallet Information
                    </p>
                    <p className="text-xs lg:text-lg">
                      Ordered date : {getDate(card.created_at)}
                    </p>
                    <p className="text-xs lg:text-lg">
                      Quantity: {card.wallets.map((w) => w.quantity)}
                    </p>
                    <p className="text-xs lg:text-lg">Status : {card.status}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        {orders.length < 1 && wallets.length < 1 && (
          <div className="flex justify-center h-[50vh] items-center px-4">
            <div className="border-gradient p-4">
              <p className="text-white font-poppins mb-5 lg:text-xl">
                You haven't ordered our Business cards or wallets yet, but when
                you do, they will be displayed here.
              </p>

              <Link
                to="/all-products"
                className="btn-bg rounded shadow-none p-3 font-poppins mb-3"
              >
                Order Now
              </Link>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default MyOrders;
