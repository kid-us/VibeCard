import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../../services/request";
import useAuthStore from "../../store/useUserData";
import Navbar from "../Navbar/Navbar";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import Loader from "../Loader/Loader";
import ShareComponent from "../Share/ShareComponent";
import useSubscription from "@/hooks/useSubscription";
import { useTranslation } from "react-i18next";

interface Card {
  card_url: string;
  job_title: string;
  company_name: string;
  full_name: string;
  main_picture: string;
  pronouns: string;
}

const Dashboard = () => {
  const [title] = useState("Dashboard");
  useDocumentTitle(title);

  const { t } = useTranslation();

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { quota } = useSubscription();

  const [deleteCard, setDeleteCard] = useState(false);
  const [deletedCardUrl, setDeletedCardUrl] = useState("");
  const [loader, setLoader] = useState(false);
  const [deleteConfirmed, setDeleteConfirmed] = useState(false);

  const { user } = useAuthStore();
  const [links, setLinks] = useState<Card[]>([]);
  const [copiedUrls, setCopiedUrls] = useState<string[]>([]);
  const [cardUrl, setCardUrl] = useState("");
  const [viewShare, setViewShare] = useState(false);

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

  const handleDelete = () => {
    setLoader(true);
    axios
      .get(`${baseUrl}/api/v1/cards/delete/${deletedCardUrl}`, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      })
      .then(() => {
        setDeleteConfirmed(true);
      })
      .catch((err) => {
        setLoader(false);
        console.log(err);
      });
  };

  const handleManageSubscription = () => {
    axios
      .get(`${baseUrl}/api/v1/payment/manage-subscription`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        window.location.href = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const shareTitle = "Vibecard Digital Business Card";
  const description =
    "Check out my new digital business card created with Vibecard!";

  return (
    <>
      {deleteCard && (
        <>
          <div className="overlay w-full z-50"></div>
          <div className="flex justify-center align-center">
            <div className="fixed lg:top-60 top-44 z-50 lg:w-[30%] lg:mx-0 mx-1 secondary-bg rounded-xl border-gradient-2">
              <button
                onClick={() =>
                  deleteConfirmed
                    ? window.location.reload()
                    : setDeleteCard(false)
                }
                className="absolute right-5 top-3 bi-x-lg text-white"
              ></button>
              <div className="p-8">
                {!deleteConfirmed ? (
                  <>
                    <h1 className="text-gray-400 text-xl ">Delete Card</h1>
                    <p className="text-sm  text-gray-300 my-5">
                      Are you sure you want to delete the card? This action
                      cannot be undone. Do you want to proceed?
                    </p>
                    <div className="flex justify-between gap-x-10">
                      <button
                        onClick={() => setDeleteCard(false)}
                        className="w-full bg-sky-600 rounded text-white shadow-none h-12"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => handleDelete()}
                        className="w-full bg-red-500 rounded text-white shadow-none h-12"
                      >
                        {loader ? (
                          <Loader />
                        ) : (
                          <p>
                            Delete
                            <span className="bi-trash-fill ms-3"></span>
                          </p>
                        )}
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="text-center mt-4">
                    <p className="bi-check-circle-fill text-green-500 text-4xl"></p>
                    <p className="text-white mt-5 text-xl chakra">
                      Card Deleted Successfully!
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}

      <Navbar />
      <div className="h-[100vh]">
        <div className="lg:container mx-auto px-2">
          <div className="flex justify-center lg:mt-20 mt-10 lg:shadow lg:pb-20 lg:rounded">
            <div className="lg:grid grid-cols-10 gap-">
              <div className="lg:col-span-6 lg:px-1 md:p-9 py-5 px-2 ">
                <div className="content-center text-white">
                  <h1 className="lg:text-4xl text-2xl">
                    {t("welcome")} <span className="text-teal-400">{user}</span>
                  </h1>
                  <p className="lg:mb-0 lg:text-3xl text-lg mt-10 mb-5 font-poppins">
                    {t("dashboardDesc")}
                  </p>
                  <div className="lg:flex gap-x-6">
                    <button
                      onClick={() => handleManageSubscription()}
                      className="font-poppins btn-bg shadow rounded lg:w-72 w-full mt-3 lg:mb-0 mb-5"
                    >
                      {t("dashBtn2")}
                    </button>
                    <Link
                      to={"/my-orders"}
                      className="font-poppins btn-bg shadow rounded lg:w-72 w-full mt-3 lg:mb-0 mb-5"
                    >
                      {t("dashBtn3")}
                    </Link>
                  </div>
                  {/* Previous Card */}
                  {links.length > 0 && (
                    <div className="mt-10 shadow rounded-x">
                      <p className="text-2xl mb-4 py-5 font-poppins">
                        {t("previousCard")}
                      </p>
                      {links.map((link) => (
                        <div
                          key={link.card_url}
                          className="flex justify-between secondary-bg mb-5 rounded-xl shadow border-gradient-2 border shadow-zinc-900"
                        >
                          <div className="relative lg:flex grid grid-cols-2 justify-between w-full text-white px-5 py-5 mb-4 rounded shadow shadow-zinc-900">
                            {/* Share Social Medias */}
                            {viewShare && cardUrl === link.card_url && (
                              <div className="absolute lg:right-32 right-0 lg:px-0 px-5 z-50 top-10 lg:-top-20 secondary-bg border-gradient py-1 space-x-2">
                                <div className="flex justify-between px-5 mt-2 mb-4">
                                  <p className="text-sm">Share your card</p>
                                  <button
                                    onClick={() => setViewShare(false)}
                                    className="bi-x text-xl text-red-400"
                                  ></button>
                                </div>

                                <div className="space-x-3 flex mb-3">
                                  <ShareComponent
                                    url={`vibe-card.vercel.app/card/${link.card_url}`}
                                    title={shareTitle}
                                    description={description}
                                  />
                                </div>
                              </div>
                            )}

                            {/* Card Preview */}
                            <div className="lg:flex lg:border-r border-gray-700 pe-6 lg:mb-0 mb-4">
                              <img
                                src={link.main_picture}
                                alt="Card Image"
                                className="rounded-full lg:w-14 w-14 h-14 object-cover border-gradient"
                              />
                              <div className="content-center lg:ms-3">
                                <p className="font-poppins font-extrabold">
                                  {link.pronouns} {link.full_name}
                                </p>
                                <p className="text-xs font-poppins">
                                  {t("job")}:{link.job_title}
                                </p>
                                <p className="font-poppins text-xs">
                                  {t("worksAt")} : {link.company_name}
                                </p>
                              </div>
                            </div>

                            {/* View */}
                            <div>
                              <Link
                                to={`/card/${link.card_url}`}
                                className="block text-sm mb-2 pt-5 hover:text-gray-400 font-poppins"
                              >
                                {t("view") + " "}
                                <span className="bi-arrow-up-right text-sky-600 ms-1"></span>
                              </Link>
                            </div>

                            {/* Copy */}
                            <p
                              onClick={() => handleCopy(link.card_url)}
                              className={`lg:px-5 pt-5 lg:ms-5 cursor-pointer font-poppins text-sm`}
                            >
                              <span className="bi-clipboard me-2"></span>
                              {copiedUrls.includes(link.card_url)
                                ? t("copied")
                                : t("copy")}
                            </p>

                            {/* Share */}
                            <button
                              onClick={() => {
                                setViewShare(true);
                                setCardUrl(link.card_url);
                              }}
                              className={`pt-2 lg:ms-5 font-poppins text-sm`}
                            >
                              <span className="bi-share-fill me-2"></span>
                              {t("share")}
                            </button>

                            {/* Edit */}
                            <Link
                              to={`/create?edit=${link.card_url}`}
                              className="block font-poppins text-sm mb-2 pt-6 lg:px-5 hover:text-gray-400"
                            >
                              <span className="bi-pen-fill text-green-600"></span>{" "}
                              {t("edit")}
                            </Link>

                            {/* Delete */}
                            <button
                              onClick={() => {
                                setDeletedCardUrl(link.card_url);
                                setDeleteCard(true);
                              }}
                              className="text-white rounded-lg font-poppins text-sm mb-2 pt-5 hover:text-gray-400"
                            >
                              <span className="bi-trash-fill text-red-600"></span>{" "}
                              {t("delete")}
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="lg:col-span-4 mb-5">
                <Link to={quota ? "/create" : "/pricing"}>
                  <div className="flex justify-center mx-2 gap-x-10 btn-bg px-0 lg:mx-10 py-20 lg:mt-14 shadow-none">
                    <p className="text-center bi-plus-lg mb-8  bg-white w-10 h-10 rounded-full pt-2 text-black shadow-lg"></p>

                    <p className="text-white font-poppins mt-2">
                      {t("dashBtn")}
                    </p>
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
