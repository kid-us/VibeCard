import { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { baseUrl } from "@/services/request";

const MyOrders = () => {
  useEffect(() => {
    axios
      .get(`${baseUrl}/api/v1/products/my-orders`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navbar />

      <div className="container mx-auto mt-8">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim rerum,
          dolore earum temporibus id neque saepe veniam tempore hic explicabo
          error velit quisquam voluptate ad optio similique! Consequatur,
          repudiandae ducimus!
        </p>
      </div>
    </>
  );
};

export default MyOrders;
