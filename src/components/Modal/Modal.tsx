import { Link, useNavigate } from "react-router-dom";
import "./modals.css";
import { useState } from "react";

interface Props {
  link?: string;
  onModal: (val: boolean) => void;
}

const Modal = ({ link, onModal }: Props) => {
  const navigate = useNavigate();
  const [copy, setCopy] = useState("Copy Card Link");
  const handleCopy = (card_url: string) => {
    navigator.clipboard
      .writeText(`vibe-card.vercel.app/card/${card_url}`)
      .then(() => {
        setCopy("Copied");
      });
  };
  return (
    <>
      <div
        onClick={() => {
          onModal(false);
          navigate("/dashboard");
        }}
        className="overlay z-40 top-0 w-full"
      ></div>

      <div className="modals p-10">
        <button
          onClick={() => {
            onModal(false);
            navigate("/dashboard");
          }}
          className="absolute -top-2 -right-2 rounded-lg h-8 w-8 bi-x shadow shadow-zinc-900 text-white bg-red-500"
        ></button>
        <h1 className="text-2xl text-center mb-5 mt-2">
          <span className="bi-check-circle-fill text-green-600 me-5"></span>
          You have created your business card Successfully!
        </h1>
        <div className="flex justify-between px-10 ">
          {link && (
            <p
              onClick={() => handleCopy(link)}
              className="chakra bg-zinc-700 rounded px-10 text-white shadow shadow-teal-400 py-2 mt-5"
            >
              {copy}
            </p>
          )}
          <Link to={`/card/${link}`}>
            <p className="chakra bg-blue-900 rounded px-10 text-white shadow-md shadow-teal-400 py-2 mt-5">
              Preview Card
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Modal;
