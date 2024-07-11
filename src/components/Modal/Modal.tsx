import { Link } from "react-router-dom";
import "./modals.css";
import { useState } from "react";

interface Props {
  link: string;
  // onModal: (val: boolean) => void;
}

const Modal = ({ link }: Props) => {
  const [copy, setCopy] = useState("Copy card Link");

  const handleCopy = (card_url: string) => {
    navigator.clipboard
      .writeText(`vibe-card.vercel.app/card/${card_url}`)
      .then(() => {
        setCopy("Copied");
      });
  };

  return (
    <>
      <div className="overlay w-full z-50"></div>
      <div className="flex justify-center align-center">
        <div className="absolute lg:top-40 top-28 z-50 lg:w-[60%] secondary-bg rounded-xl border-gradient-2">
          <Link
            to={"/dashboard"}
            className="absolute right-5 top-3 bi-x-lg cursor-pointer"
          ></Link>
          <div className="p-8">
            <h1 className="text-gray-400 text-xl ">Well Done :{")"}</h1>
            <p className="text-lg  text-gray-300 my-5">Your Card is ready</p>
            <div className="flex justify-between gap-x-10">
              <p
                onClick={() => handleCopy(link)}
                className="bg-black rounded w-full text-center text-white text-sm shadow shadow-teal-500 pt-3 cursor-pointer"
              >
                <span className="bi-clipboard text-lg me-4"></span>
                {copy}
              </p>
              <Link
                to={`/card/${link}`}
                className="w-full btn-bg rounded text-white shadow-none cursor-pointer"
              >
                Preview Card
                <span className="bi-arrow-up-right ms-3"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
