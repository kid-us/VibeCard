import { baseUrl } from "@/services/request";
import { Data, StyleData } from "@/services/viewCard";
import axios from "axios";
import { useEffect, useState } from "react";

interface Props {
  cardUrl: string | null;
}

const LinkTaps = ({ cardUrl }: Props) => {
  const [data, setData] = useState<Data>();
  const [styles, setStyles] = useState<StyleData>();

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/v1/cards/card/${cardUrl}`)
      .then((response) => {
        setData(response.data);
        setStyles(JSON.parse(response.data.styles));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(data);
  console.log(styles);

  return (
    <div className="col-span-3 shadow shadow-gray-400 rounded mt-5 p-4 text-white">
      <div className="grid grid-cols-12 lg:grid-cols-4 shadow mb-6">
        <div className="lg:col-span-1 col-span-2">
          <h1 className="lg:text-lg text-sm">Link</h1>
        </div>
        <div className="lg:col-span-1 col-span-4">
          <h1 className="lg:text-lg text-sm">Name</h1>
        </div>
        <div className="lg:col-span-1 col-span-4">
          <h1 className="lg:text-lg text-sm">Job</h1>
        </div>
        <div className="lg:col-span-1 col-span-2">
          <h1 className="lg:text-lg text-sm">Taps</h1>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-12">
        {styles?.socialMedia.map((s) => (
          <>
            <div className="lg:col-span-1 col-span-2 mb-4">
              <span
                className={`${s.icon} lg:text-4xl text-xl bg-white rounded p-1`}
                style={{ color: s.color }}
              ></span>
            </div>
            <div className="lg:col-span-1 col-span-4">
              <p className="lg:text-xl text-xs">{data?.full_name}</p>
            </div>
            <div className="lg:col-span-1 col-span-4">
              <p className="lg:text-xl text-xs">{data?.job_title}</p>
            </div>
            <div className="lg:col-span-1 col-span-2">
              <p className="lg:text-xl text-sm">8</p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default LinkTaps;
