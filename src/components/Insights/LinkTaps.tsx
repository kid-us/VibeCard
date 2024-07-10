import { baseUrl } from "@/services/request";
import { Data, StyleData } from "@/services/viewCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { Accounts } from "../Pages/Insights";

interface Props {
  cardUrl: string | null;
  socialClicked: Accounts[] | null;
}

const LinkTaps = ({ cardUrl, socialClicked }: Props) => {
  const [data, setData] = useState<Data>();
  const [styles, setStyles] = useState<StyleData>();

  useEffect(() => {
    if (cardUrl) {
      axios
        .get(`${baseUrl}/api/v1/cards/card/${cardUrl}`)
        .then((response) => {
          setData(response.data);
          setStyles(JSON.parse(response.data.styles));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [cardUrl]);

  const getClickCount = (icon: string) => {
    const account = socialClicked?.find(
      (social) => social.account_type === icon.replace("bi-", "")
    );
    return account ? account.click_count : 0;
  };

  return (
    <div className="col-span-3 secondary-bg text-white shadow rounded mt-5">
      <div className="grid grid-cols-12 mb-6 pb-3 border-b border-gray-200 p-4">
        <div className="col-span-2">
          <h1 className="lg:text-lg text-sm">Link</h1>
        </div>
        <div className="lg:col-span-4 col-span-4">
          <h1 className="lg:text-lg text-sm">Name</h1>
        </div>
        <div className="lg:col-span-5 col-span-4">
          <h1 className="lg:text-lg text-sm">Job</h1>
        </div>
        <div className="lg:col-span-1 col-span-2">
          <h1 className="lg:text-lg text-sm">Taps</h1>
        </div>
      </div>
      <div>
        {styles?.socialMedia.map((s) => (
          <div
            key={s.icon}
            className="grid lg:grid-cols-12 grid-cols-12 bg-white text-black mb-2 rounded px-4 pt-3"
          >
            <div className="lg:col-span-2 col-span-2 mb-4">
              <span
                className={`${s.icon} lg:text-4xl text-xl rounded p-1`}
                style={{ color: s.color }}
              ></span>
            </div>
            <div className="lg:col-span-4 col-span-4">
              <p className="lg:text-lg text-xs">{data?.full_name}</p>
            </div>
            <div className="lg:col-span-5 col-span-4">
              <p className="lg:text-lg text-xs">{data?.job_title}</p>
            </div>
            <div className="lg:col-span-1 col-span-2">
              <p className="text-xl">{getClickCount(s.icon)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LinkTaps;
