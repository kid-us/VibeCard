import axios from "axios";
import { baseUrl } from "../../services/request";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import { Data, StyleData } from "../../services/viewCard";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import Default from "../ViewCard/Default";
import Center from "../ViewCard/Center";
import Right from "../ViewCard/Right";

const ViewCard = () => {
  const [title] = useState("My Card");
  useDocumentTitle(title);

  const { id } = useParams();
  const [data, setData] = useState<Data>();
  const [styles, setStyles] = useState<StyleData>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/v1/cards/card/${id}?increment=true`)
      .then((response) => {
        setLoading(false);
        setData(response.data);
        setStyles(JSON.parse(response.data.styles));
      })
      .then((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {loading && <Loading />}
      <div className="h-[100vh]">
        <div className="lg:px-40 md:px-36 px-2">
          <div className="lg:pt-10 md:pt-10 py-5 lg:ps-24">
            <Link to={"/"} className="text-2xl text-white logo-font">
              vibecard
            </Link>
          </div>

          <div className="lg:flex justify-center lg:mt-16 mt-5 lg:pb-0 pb-5">
            <div className="lg:block flex justify-center lg:me-28 lg:mb-0 mb-10 lg:content-center">
              <img
                src={data?.qr_code}
                alt="Qr code"
                className="lg:w-80 w-72 rounded-2xl shadow-2xl shadow-zinc-950"
              />
            </div>
            <div className="lg:w-[28%]">
              {/* Default / Left */}
              {data && styles && data.card_layout === "default" && (
                <Default data={data} styles={styles} />
              )}
              {/* Centered */}
              {data && styles && data.card_layout === "centered" && (
                <Center data={data} styles={styles} />
              )}
              {/* Right */}
              {data && styles && data.card_layout === "right" && (
                <Right data={data} styles={styles} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewCard;
