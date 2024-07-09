import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import Chart from "../Insights/Chart";
import Cards from "../Insights/Cards";
import { useInsightStore } from "@/store/useInsightStore";
import axios from "axios";
import { baseUrl } from "@/services/request";
import History from "../Insights/History";
import LinkTaps from "../Insights/LinkTaps";

const Insights = () => {
  const { activeCard } = useInsightStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/api/v1/cards/insights?card_url=${activeCard}&filter=this_month`,
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        console.log(response.data); // Assuming you want to log the response data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the async function
  }, [activeCard]);

  // console.log(activeCard);

  const [title] = useState("Insight");
  useDocumentTitle(title);

  return (
    <>
      <Navbar />
      <div className="lg:my-16 my-8 lg:container mx-auto lg:px-0 px-2">
        <div className="lg:grid grid-cols-5 gap-x-14 rounded">
          {/* Cards */}
          <div className="col-span-2 lg:mb-0 mb-10">
            <Cards />
          </div>
          <div className="col-span-3">
            {/* History */}
            <History />
            <div className="border-gradient rounded-lg">
              <Chart />
            </div>
            {/* Link Taps */}
            {activeCard && <LinkTaps cardUrl={activeCard} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Insights;
