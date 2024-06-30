import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../../services/request";
import useAuthStore from "../../store/useUserData";
import Navbar from "../Navbar/Navbar";
// import Logout from "../Logout/Logout";

interface Card {
  card_url: string;
  job_title: string;
}

const Dashboard = () => {
  const { user } = useAuthStore();
  const [links, setLinks] = useState<Card[]>([]);
  // const [copy, setCopy] = useState("Copy");
  useEffect(() => {
    axios
      .get(`${baseUrl}/api/v1/cards/my-cards`, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      })
      .then((response) => {
        const cards = response.data.map((card: Card) => ({
          card_url: card.card_url,
          job_title: card.job_title,
        }));
        setLinks(cards);
      })
      .then((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Navbar bg="bg-white shadow" />
      <div className="h-[100vh]">
        <div className="container mx-auto">
          <div className="flex justify-center bg-white lg:mt-20 lg:shadow lg:pb-20 lg:rounded">
            <div className="lg:grid grid-cols-10 gap-4">
              <div className="lg:col-span-6 lg:px-16 md:p-9 p-5">
                <div className="content-center">
                  <h1 className="text-4xl">
                    Welcome Back <span className="text-teal-400">{user}</span>
                  </h1>
                  <p className="lg:mb-0 text-3xl mt-10 mb-5">
                    Elevate your business and career to the next level with our
                    services.
                  </p>
                  {links.length > 0 && (
                    <div className="mt-5 p-5 shadow rounded shadow-zinc-900">
                      <p className="text-xl mb-4">See your Previous Cards</p>
                      {links.map((link) => (
                        <div
                          key={link.card_url}
                          className="flex justify-between"
                        >
                          <div>
                            <p className="chakra">Title: {link.job_title}</p>
                          </div>
                          <div>
                            <Link
                              key={link.card_url}
                              to={`/card/${link.card_url}`}
                              className="block chakra mb-2 bg-teal-500 px-10 p-1 rounded shadow shadow-zinc-900 text-black"
                            >
                              View Card{" "}
                              <span className="bi-arrow-up-right-square-fill ms-1"></span>
                            </Link>
                            {/* <button
                            onClick={() => handleCopy(link.card_url)}
                            className="bg-teal-500 w-32 p-1 mb-2 rounded shadow shadow-zinc-900 text-white"
                          >
                            <span className="bi-c-circle me-2"></span>
                            {copy}
                          </button> */}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="lg:col-span-2">
                <Link to={"/create"}>
                  <div className="mx-4 lg:mb-2 mb-8">
                    <div className="bg-sky-900 lg:mt-28 lg:py-16 lg:px-6 p-6 rounded-lg shadow-md shadow-zinc-600">
                      <p className="text-center bi-plus-lg mb-8 bg-white w-10 h-10 rounded-full pt-2 text-black shadow-lg"></p>
                      <p className="text-white">Create Business Card</p>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="lg:col-span-2 lg:mb-0 mb-10">
                <Link to={"/create"}>
                  <div className="mx-4 mb-2">
                    <div className="bg-sky-900 lg:mt-28 lg:py-16 lg:px-10 p-6 rounded-lg shadow-md shadow-zinc-600">
                      <p className="text-center bi-plus-lg mb-8 bg-white w-10 h-10 rounded-full pt-2 text-black shadow-lg"></p>
                      <p className="text-white">Create Resume</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
