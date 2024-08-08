import { baseUrl } from "@/services/request";
import axios from "axios";
import { useEffect, useState } from "react";

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
}

interface TotalOrders {
  orders: {
    back_image: string;
    front_image: string;
    front_style: string; // String to parse
    back_style: string; // String to parse
    order_id: string;
    order_metadata: string; // String to parse
    quantity: number;
    vibecardLogo: boolean;
    orientation: string;
  }[];
}

const Test = () => {
  const [orders, setOrders] = useState<allOrders[]>([]);

  useEffect(() => {
    axios
      .get<TotalOrders>(`${baseUrl}/api/v1/products/orders`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const parsedOrders = response.data.orders.map((order) => {
          try {
            return {
              ...order,
              front_style: JSON.parse(order.front_style) as Card,
              back_style: JSON.parse(order.back_style) as Card,
              order_metadata: JSON.parse(order.order_metadata) as Delivery,
            };
          } catch (e) {
            console.error("Error parsing order data", e);
            return {
              ...order,
              front_style: {} as Card, // or some default value
              back_style: {} as Card, // or some default value
              order_metadata: {} as Delivery, // or some default value
            };
          }
        });
        setOrders(parsedOrders);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {orders.map((order) => (
        <div key={order.order_id} className="lg:grid grid-cols-2">
          <div className="w-full bg-gray-400 relative lg:mb-10">
            <div
              className={`lg:flex hidden top-0 ${
                order.orientation === "landscape" && "hidden"
              } w-full justify-between ps-10 pe-16`}
            >
              <p
                className={`${
                  order.orientation === "landscape" && "hidden"
                } text-sm mb-2 ps-6`}
              >
                Front
              </p>
              <p
                className={`${
                  order.orientation === "landscape" && "hidden"
                } text-sm mb-2`}
              >
                Back
              </p>
            </div>
            <>
              <div
                className={`${
                  order.orientation === "portrait"
                    ? "lg:flex gap-x-5 h-full items-center lg:my-0 my-14 lg:px-16 lg:ms-0 lg:m-0 m-auto"
                    : "lg:px-20 px-2 pb-5"
                }  `}
              >
                <p
                  className={`${
                    order.orientation == "portrait" && "lg:hidden"
                  } lg:mt-4 text-sm mb-2 text-white`}
                >
                  Front
                </p>
                {/* Front */}
                <div
                  className={`relative rounded-md  ${
                    order.orientation !== "landscape"
                      ? " lg:h-[400px] lg:w-full w-48 h-[30vh]"
                      : "lg:h-[280px] h-[30vh] w-full"
                  }  mb-4 shadow-md shadow-zinc-900 overflow-hidden ${
                    order.front_style.pickedBg === "#ffffff"
                      ? order.front_style.bgColor
                      : ""
                  }`}
                  style={{
                    backgroundColor:
                      order.front_style.pickedBg === "#ffffff"
                        ? ""
                        : order.front_style.pickedBg,
                  }}
                >
                  <div
                    className={`flex justify-center items-center h-full overflow-hidden`}
                  >
                    {order.front_image && (
                      <div
                        className={`absolute`}
                        style={{
                          transform: `translate(${order.front_style.imagePosition.x}%, ${order.front_style.imagePosition.y}%)`,
                        }}
                      >
                        <img
                          src={order.front_image}
                          alt="user"
                          className={`h-${order.front_style.imageSize} w-${order.front_style.imageSize} object-cover`}
                        />
                      </div>
                    )}
                    {order.front_style.text !== "" && (
                      <div
                        className={`absolute ${
                          order.orientation === "landscape" ? "top-3" : "top-3"
                        } `}
                        style={{
                          transform: `translate(${order.front_style.textPosition.x}%, ${order.front_style.textPosition.y}%)`,
                        }}
                      >
                        <p
                          className={`${order.front_style.fontStyle} text-${order.front_style.textSize} overflow-hidden text-ellipsis px-2`}
                          style={{
                            color: order.front_style.color,
                          }}
                        >
                          {order.front_style.text}
                        </p>
                      </div>
                    )}
                    {order.front_style.extraText !== "" && (
                      <div
                        className="absolute bottom-5"
                        style={{
                          transform: `translate(${order.front_style.extraTextPosition.x}px, ${order.front_style.extraTextPosition.y}px)`,
                        }}
                      >
                        <p
                          className={`${order.front_style.extraTextFontStyle} text-${order.front_style.extraTextFontSize} overflow-hidden text-ellipsis px-2`}
                          style={{
                            color: order.front_style.extraTextColor,
                          }}
                        >
                          {order.front_style.extraText}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                {/* Back */}
                <p
                  className={`${
                    order.orientation === "portrait" && "lg:hidden"
                  } mt-1 text-sm mb-2 text-white`}
                >
                  Back
                </p>
                <div
                  className={`relative rounded-md ${
                    order.orientation !== "landscape"
                      ? " lg:h-[400px] lg:w-full w-48 h-[30vh]"
                      : "lg:h-[280px] h-[30vh] w-full"
                  }  mb-5 shadow-md shadow-zinc-900 overflow-hidden ${
                    order.front_style.pickedBg === "#ffffff"
                      ? order.front_style.bgColor
                      : ""
                  }`}
                  style={{
                    backgroundColor:
                      order.back_style.pickedBg === "#ffffff"
                        ? ""
                        : order.back_style.pickedBg,
                    margin: "",
                  }}
                >
                  <div
                    className={`flex justify-center items-center h-full overflow-hidden`}
                  >
                    {order.back_image && (
                      <div
                        className={`absolute`}
                        style={{
                          transform: `translate(${order.back_style.imagePosition.x}px, ${order.back_style.imagePosition.y}px)`,
                        }}
                      >
                        <img
                          src={order.back_image}
                          alt="user"
                          className={`h-${order.back_style.imageSize} w-${order.back_style.imageSize} object-cover`}
                        />
                      </div>
                    )}
                    {order.back_style.text !== "" && (
                      <div
                        className="absolute top-3"
                        style={{
                          transform: `translate(${order.back_style.textPosition.x}px, ${order.back_style.textPosition.y}px)`,
                        }}
                      >
                        <p
                          className={`${order.back_style.fontStyle} text-${order.back_style.textSize} overflow-hidden text-ellipsis px-2`}
                          style={{
                            color: order.back_style.color,
                          }}
                        >
                          {order.back_style.text}
                        </p>
                      </div>
                    )}
                    {order.back_style.extraText !== "" && (
                      <div
                        className="absolute bottom-5"
                        style={{
                          transform: `translate(${order.back_style.extraTextPosition.x}px, ${order.back_style.extraTextPosition.y}px)`,
                        }}
                      >
                        <p
                          className={`${order.back_style.extraTextFontStyle} text-${order.back_style.extraTextFontSize} overflow-hidden text-ellipsis px-2`}
                          style={{
                            color: order.back_style.extraTextColor,
                          }}
                        >
                          {order.back_style.extraText}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </>
          </div>
          {/* Delivery Data */}
          <div className="bg-white mb-10 p-10">
            <p className="font-bold text-xl">Delivery Information</p>
            <p>First Name {order.order_metadata.fname} </p>
            <p>First Name {order.order_metadata.lname}</p>
            <p>First Name {order.order_metadata.email}</p>
            <p>First Name {order.order_metadata.location}</p>
            <p>First Name {order.order_metadata.phone}</p>
            <p>First Name {order.order_metadata.street}</p>
            <p>First Name {order.order_metadata.street_no}</p>
            <p>First Name {order.order_metadata.address}</p>
            <p>First Name {order.order_metadata.location}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Test;
