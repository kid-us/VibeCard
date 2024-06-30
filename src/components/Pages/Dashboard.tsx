import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../../services/request";
import useAuthStore from "../../store/useUserData";
import Navbar from "../Navbar/Navbar";

interface Card {
  card_url: string;
  job_title: string;
  company_name: string;
  full_name: string;
  main_picture: string;
  pronouns: string;
}

const Dashboard = () => {
  const { user } = useAuthStore();
  const [links, setLinks] = useState<Card[]>([]);
  const [copiedUrls, setCopiedUrls] = useState<string[]>([]);

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
          full_name: card.full_name,
          main_picture: card.main_picture,
          pronouns: card.pronouns,
          company_name: card.company_name,
        }));
        setLinks(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleCopy = (card_url: string) => {
    navigator.clipboard
      .writeText(`vibe-card.vercel.app/card/${card_url}`)
      .then(() => {
        setCopiedUrls((prev) => [...prev, card_url]);
        setTimeout(() => {
          setCopiedUrls((prev) => prev.filter((url) => url !== card_url));
        }, 10000);
      });
  };

  return (
    <>
      <Navbar bg="bg-white shadow" />
      <div className="h-[100vh]">
        <div className="container mx-auto">
          <div className="flex justify-center lg:mt-20 mt-10 lg:shadow lg:pb-20 lg:rounded">
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
                          <div className="flex justify-between w-full bg-zinc-900 text-white px-5 py-5 mb-4 rounded shadow shadow-zinc-900">
                            <div className="flex">
                              <img
                                src={link.main_picture}
                                alt=""
                                className="rounded-full lg:w-16 w-14 h-14"
                              />
                              <div className="content-center ms-3">
                                <p className="font-poppins">
                                  {link.pronouns} {link.full_name}
                                </p>
                                <p className="chakra text-sm">
                                  Job:{link.job_title}
                                </p>
                                <p className="chakra text-xs">
                                  Works at: {link.company_name}
                                </p>
                              </div>
                            </div>
                            <div className="flex">
                              <Link
                                key={link.card_url}
                                to={`/card/${link.card_url}`}
                                className="block chakra mb-2 pt-5 px-5 hover:text-gray-400"
                              >
                                View{" "}
                                <span className="bi-arrow-up-right ms-1"></span>
                              </Link>
                              <button
                                onClick={() => handleCopy(link.card_url)}
                                className={` pt-2 px-5 ms-5`}
                              >
                                <span className="bi-clipboard me-2"></span>
                                {copiedUrls.includes(link.card_url)
                                  ? "Copied"
                                  : "Copy"}
                              </button>
                            </div>
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
