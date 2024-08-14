import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import Chart from "../Insights/Chart";
import Cards from "../Insights/Cards";
import { useInsightStore } from "@/store/useInsightStore";
import axios from "axios";
import { baseUrl } from "@/services/request";
import History from "../Insights/History";
// import DatePicker from "../Insights/DatePicker";
import LinkTaps from "../Insights/LinkTaps";

// import * as React from "react";
// import { addDays } from "date-fns";
// import { DateRange } from "react-day-picker";
import filter from "@/services/filter";
import useAuthStore from "@/store/useUserData";
import { useNavigate } from "react-router-dom";

export interface Insights {
  social_media_name: string;
  clicked_value: number;
}

const Insights = () => {
  const [title] = useState("Insight");
  useDocumentTitle(title);

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { plan } = useAuthStore();

  const navigate = useNavigate();

  useEffect(() => {
    if (plan && plan === "free") {
      navigate("/pricing");
    }
  }, []);

  // Zustand
  const { activeCard } = useInsightStore();
  // Insight
  const [cardInsight, setCardInsight] = useState<Insights[]>([]);
  const [totalContact, setTotalContact] = useState(0);
  const [totalCardView, setTotalCardView] = useState(0);
  const [totalSocialMedia, setTotalSocialMedia] = useState(0);

  const [viewCardData, setViewCardData] = useState("today");
  const [dropdown, setDropdown] = useState(false);

  // Custom Date
  // const [date, setDate] = React.useState<DateRange | undefined>({
  //   from: new Date(),
  //   to: addDays(new Date(), 20),
  // });

  useEffect(() => {
    const fetchData = async () => {
      if (viewCardData === "custom") {
        // alert("custom");
        try {
          const response = await axios.get<Insights>(
            `${baseUrl}/api/v1/cards/insights?card_url=${activeCard}&filter=custom`,
            {
              headers: {
                "Content-Type": "application/json",
              },
              withCredentials: true,
            }
          );
          console.log(response.data);
          // setTotalContact(response.data.contacts);
          // setTotalCardView(response.data.card_view);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      } else {
        try {
          const response = await axios.get<Insights[]>(
            `${baseUrl}/api/v1/cards/insights?card_url=${activeCard}&filter=${viewCardData}&view_card=false`,
            {
              headers: {
                "Content-Type": "application/json",
              },
              withCredentials: true,
            }
          );
          // console.log(response.data);
          // Card Views
          setCardInsight(response.data);
          const totalCardViewSum = response.data
            .filter((card) => card.social_media_name === "card_view")
            .reduce((sum, card) => sum + card.clicked_value, 0);
          setTotalCardView(totalCardViewSum);
          // Contacts
          const totalContactSum = response.data
            .filter((card) => card.social_media_name === "contacts")
            .reduce((sum, card) => sum + card.clicked_value, 0);
          setTotalContact(totalContactSum);
          // Total Social Media
          const totalSocialMediaSum = response.data
            .filter(
              (card) =>
                card.social_media_name !== "contacts" &&
                card.social_media_name !== "card_view"
            )
            .reduce((sum, card) => sum + card.clicked_value, 0);
          setTotalSocialMedia(totalSocialMediaSum);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    if (activeCard) {
      fetchData();
    }
  }, [activeCard, viewCardData]);

  // const handleCustom = () => {
  //   setViewCardData("custom");
  // };

  return (
    <>
      <Navbar />

      <div className=" lg:container mx-auto lg:px-0 px-2 lg:my-14 my-8">
        <div className="lg:grid grid-cols-5 gap-x-14 rounded">
          {/* Cards */}
          <div className="col-span-2 lg:mb-0 mb-10">
            <Cards />
          </div>
          <div className="col-span-3">
            <div className="flex justify-between mb-10">
              {/* <div>
                <p className="text-white text-sm mb-2">
                  Filter by Calendar Date
                </p>
                <div className="flex">
                  <DatePicker date={date} setDate={setDate} />
                  <button
                    onClick={() => handleCustom()}
                    className="ms-2 btn-bg shadow-none py-2 rounded text-white text-sm"
                  >
                    Fetch
                  </button>
                </div>
              </div> */}

              <div className="relative">
                <p className="text-white text-sm mb-2">Filter</p>
                <div
                  onClick={() => setDropdown(!dropdown)}
                  className="flex justify-between bg-white border rounded-md w-36 text-center pt-2 pb-1 cursor-pointer px-2"
                >
                  <p className="first-letter:uppercase text-sm text-gray-700">
                    {filter.map((f) => f.filterBy === viewCardData && f.name)}
                  </p>
                  <p
                    className={`${
                      dropdown ? "bi-caret-up-fill" : "bi-caret-down-fill"
                    } text-gray-700`}
                  ></p>
                </div>
                {dropdown && (
                  <div className="absolute z-50 space-y-1 bg-gray-100 border border-gray-400 rounded w-36 py-3 text-sm ps-2 mt-2 text-gray-900">
                    {filter.map((f) => (
                      <p
                        key={f.id}
                        onClick={() => {
                          setViewCardData(f.filterBy);
                          setDropdown(false);
                        }}
                        className="cursor-pointer hover:text-teal-600"
                      >
                        {f.name}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* History */}
            <History
              contact={totalContact}
              social={totalSocialMedia}
              view={totalCardView}
            />

            <div className="border-gradient rounded-lg my-2">
              <Chart
                cardChartData={viewCardData}
                contact={totalContact}
                social={totalSocialMedia}
                view={totalCardView}
              />
            </div>

            {/* Link Taps */}
            {activeCard && (
              <LinkTaps cardUrl={activeCard} socialMedia={cardInsight} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Insights;
