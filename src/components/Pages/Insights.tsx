import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import Chart from "../Insights/Chart";
import Cards from "../Insights/Cards";
import { useInsightStore } from "@/store/useInsightStore";
import axios from "axios";
import { baseUrl } from "@/services/request";
import History from "../Insights/History";
// import LinkTaps from "../Insights/LinkTaps";

export interface Accounts {
  // card_view: number;
  // contacts: number;
  account_type: string;
  click_count: number;
}

interface Insights {
  card_view: number;
  contacts: number;
}

const Insights = () => {
  const [title] = useState("Insight");
  useDocumentTitle(title);

  const { activeCard } = useInsightStore();
  const [totalContact, setTotalContact] = useState(0);
  const [totalCardView, setTotalCardView] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Insights>(
          `${baseUrl}/api/v1/cards/insights?card_url=${activeCard}&filter=this_month`,
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );

        // const resposeData = response.data;

        console.log(response.data);

        // if (data) {
        setTotalContact(response.data.contacts);
        setTotalCardView(response.data.card_view);
        // }

        // const accountCounts = response.data.map((acc: Accounts) => ({
        //   account_type: acc.account_type,
        //   click_count: acc.click_count,
        // }));
        // setAccounts(accountCounts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (activeCard) {
      fetchData();
    }
  }, [activeCard]);

  // const totalClicks =
  //   accounts?.reduce((acc, curr) => acc + curr.click_count, 0) || 0;

  return (
    <>
      <Navbar />
      <div className="lg:my-16 my-8 lg:container mx-auto lg:px-0 px-2">
        <a href="www/facebook.com">Google</a>

        <div className="lg:grid grid-cols-5 gap-x-14 rounded">
          {/* Cards */}
          <div className="col-span-2 lg:mb-0 mb-10">
            <Cards />
          </div>
          <div className="col-span-3">
            {/* History */}
            <History
              // totLinkTaps={totalClicks}
              totalContact={totalContact}
              totalView={totalCardView}
            />
            <div className="border-gradient rounded-lg">
              <Chart />
            </div>
            {/* Link Taps */}
            {/* {activeCard && (
              <LinkTaps
                cardUrl={activeCard}
                socialClicked={accounts?.length ? accounts : null}
              />
            )} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Insights;
