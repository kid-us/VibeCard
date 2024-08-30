import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { baseUrl } from "@/services/request";
import Loading from "../Loading/Loading";
import Footer from "../Footer/Footer";

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
}

interface GetWallets {
  created_at: string;
  order_id: string;
  order_metadata: Delivery;
  payment_status: string;
  wallets: Wallet[];
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
        console.log(response);

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

  return (
    <>
      {loading && <Loading />}
      <Navbar />

      <div className="container mx-auto mt-8">
        <p className="text-white text-2xl ps-2">Track your orders</p>

        <div className="grid grid-cols-2 mt-10">
          <div>
            {orders.length > 0 ? (
              orders.map((card) => (
                <div
                  key={card.order_id}
                  className="grid grid-cols-4 mb-4 secondary-bg p-4 rounded-lg"
                >
                  <div className="col-span-2">
                    <p className="text-white ps-10 mb-3">Your designed card</p>
                    <img src={card.card_img} alt="" />
                  </div>
                  <div className="col-span-2 text-white space-y-3">
                    <p className="text-white mb-3">Card Information</p>
                    <p>Ordered date : {getDate(card.created_at)}</p>
                    <p>
                      Card type :{" "}
                      {card.card_type === "recycled_paper"
                        ? "PVC"
                        : card.card_type}
                    </p>
                    <p>Quantity: {card.quantity}</p>
                    <p>Status : {card.status}</p>
                  </div>
                </div>
              ))
            ) : (
              <div>
                <p className="text-white">Your card orders will display here</p>
              </div>
            )}
          </div>
          <div></div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MyOrders;
