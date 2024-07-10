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

export interface Accounts {
  account_type: string;
  click_count: number;
}

const Insights = () => {
  const [title] = useState("Insight");
  useDocumentTitle(title);

  const { activeCard } = useInsightStore();
  const [accounts, setAccounts] = useState<Accounts[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Accounts[]>(
          `${baseUrl}/api/v1/cards/insights?card_url=${activeCard}&filter=this_month`,
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );

        const accountCounts = response.data.map((acc: Accounts) => ({
          account_type: acc.account_type,
          click_count: acc.click_count,
        }));
        setAccounts(accountCounts);

        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (activeCard) {
      fetchData(); // Call the async function if activeCard is defined
    }
  }, [activeCard]);

  // if (accounts) {
  const totalClicks =
    accounts?.reduce((acc, curr) => acc + curr.click_count, 0) || 0;
  // }

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
            <History totLinkTaps={totalClicks} />
            <div className="border-gradient rounded-lg">
              <Chart />
            </div>
            {/* Link Taps */}
            {activeCard && (
              <LinkTaps
                cardUrl={activeCard}
                socialClicked={accounts?.length ? accounts : null}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Insights;
