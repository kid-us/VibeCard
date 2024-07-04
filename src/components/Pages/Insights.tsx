import Navbar from "../Navbar/Navbar";
import { baseUrl } from "../../services/request";
import axios from "axios";
import { useEffect, useState } from "react";

const Insights = () => {
  const [cards, setCards] = useState();
  useEffect(() => {
    axios
      .get(`${baseUrl}/api/v1/cards/my-cards`, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      })
      .then((response) => {
        setCards(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Navbar bg="bg-white shadow" />
      <div>Insights</div>
    </>
  );
};

export default Insights;
