import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../../services/request";
import useAuthStore from "../../store/useUserData";

interface Card {
  card_url: string;
  job_title: string;
}

const Dashboard = () => {
  const { user } = useAuthStore();
  const [links, setLinks] = useState<Card[]>([]);
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
    <div className="bg-white h-[100vh]">
      <div className="container mx-auto">
        <div className="lg:mb-10 lg:pt-10 md:mb-10 md:pt-10 py-5 lg:ps-20 ps-4">
          <Link to={"/"} className="text-2xl text-teal-950 logo-font">
            vibecard
          </Link>
        </div>
        <div className="flex justify-center lg:mt-20 lg:shadow lg:pb-20 lg:rounded">
          <div className="lg:grid grid-cols-10 gap-4">
            <div className="lg:col-span-6 lg:p-16 md:p-9 p-5">
              <div className="content-center">
                <h1 className="text-4xl">
                  Welcome Back <span className="text-teal-400">{user}</span>
                </h1>
                <p className="lg:mb-0 text-3xl mt-10 mb-5">
                  Elevate your business and career to the next level with our
                  services.
                </p>
                {links.length > 0 && (
                  <div className="mt-5">
                    <p className="text-xl mb-4">See your Previous Cards</p>
                    {links.map((link) => (
                      <Link
                        key={link.card_url}
                        to={`/card/${link.card_url}`}
                        className="block chakra mb-2 text-sky-800"
                      >
                        {link.job_title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="lg:col-span-2">
              <Link to={"/create"}>
                <div className="mx-4 lg:mb-2 mb-8">
                  <div className="bg-white lg:mt-28 lg:py-16 lg:px-6 p-6 rounded-lg shadow-md shadow-zinc-600">
                    <p className="text-center bi-plus-lg mb-8 bg-gray-500 w-10 h-10 rounded-full pt-2 text-white shadow-lg"></p>
                    <p>Create Business Card</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="lg:col-span-2 lg:mb-0 mb-10">
              <Link to={"/create"}>
                <div className="mx-4 mb-2">
                  <div className="bg-white lg:mt-28 lg:py-16 lg:px-10 p-6 rounded-lg shadow-md shadow-zinc-600">
                    <p className="text-center bi-plus-lg mb-8 bg-gray-500 w-10 h-10 rounded-full pt-2 text-white shadow-lg"></p>
                    <p>Create Rsume</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
