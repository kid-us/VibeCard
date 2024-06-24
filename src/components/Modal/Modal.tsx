import { Link } from "react-router-dom";
import "./modals.css";

interface Props {
  link?: string;
  onModal: (val: boolean) => void;
}

const Modal = ({ link, onModal }: Props) => {
  return (
    // v1/cards/card/id
    <>
      <div
        onClick={() => onModal(false)}
        className="overlay z-40 top-0 w-full"
      ></div>
      <div className="modals p-10">
        <button
          onClick={() => onModal(false)}
          className="absolute -top-2 -right-2 rounded-lg h-8 w-8 bi-x shadow shadow-zinc-900 text-white bg-red-500"
        ></button>
        <h1 className="text-2xl text-center mb-5 mt-2">
          <span className="bi-check-circle-fill text-green-600 me-5"></span>
          You have created your business card Successfully!
        </h1>
        <div className="flex justify-between px-10 ">
          <p className="chakra bg-zinc-700 rounded px-10 text-white shadow shadow-teal-400 py-2 mt-5">
            Copy Card Link
          </p>
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
