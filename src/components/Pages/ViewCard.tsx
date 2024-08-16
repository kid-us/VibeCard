import axios from "axios";
import { baseUrl } from "../../services/request";
import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import { Data, StyleData } from "../../services/viewCard";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import Default from "../ViewCard/Default";
import Center from "../ViewCard/Center";
import Right from "../ViewCard/Right";
import html2canvas from "html2canvas";

const ViewCard = () => {
  const [title] = useState("My Card");
  useDocumentTitle(title);

  const captureRef = useRef<HTMLDivElement>(null);

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const [data, setData] = useState<Data>();
  const [styles, setStyles] = useState<StyleData>();
  const [loading, setLoading] = useState(true);
  const [qrImg, setQrImg] = useState<string | null>(null);
  const [profileImg, setProfileImg] = useState<string | null>(null);
  const [logo, setLogo] = useState<string | null>(null);
  const [coverImg, setCoverImg] = useState<string | null>(null);

  const blobImage = async (img: string) => {
    try {
      const response = await fetch(img);
      if (!response.ok) {
        throw new Error("Failed to fetch image");
      }
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      return url;
    } catch (error) {
      console.error("Error fetching and converting image:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/api/v1/cards/card/${id}?increment=true`
        );
        setData(response.data);
        setStyles(JSON.parse(response.data.styles));

        if (response.data.qr_code) {
          const qrCode = await blobImage(response.data.qr_code);
          setQrImg(qrCode ? qrCode : "");
        }
        if (response.data.main_picture) {
          const profile = await blobImage(response.data.main_picture);
          setProfileImg(profile ? profile : "");
        }
        if (response.data.covor_picture) {
          const cover = await blobImage(response.data.covor_picture);
          setCoverImg(cover ? cover : "");
        }
        if (response.data.company_logo) {
          const logo = await blobImage(response.data.company_logo);
          setLogo(logo ? logo : "");
        }

        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchData();
  }, [id, baseUrl]);

  const handleCapture = async () => {
    if (captureRef.current) {
      // Wait for images to load
      await Promise.all(
        Array.from(captureRef.current.querySelectorAll("img")).map(
          (img) =>
            new Promise<void>((resolve, reject) => {
              if (img.complete) {
                resolve();
              } else {
                img.onload = () => resolve();
                img.onerror = () => reject();
              }
            })
        )
      );

      const canvas = await html2canvas(captureRef.current, { useCORS: true });
      const dataUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "capture.png";
      link.click();
    }
  };

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

          <div
            ref={captureRef}
            className="lg:flex justify-center lg:mt-10 mt-5 py-5"
          >
            <div className="lg:block flex justify-center lg:me-28 lg:mb-0 mb-10 lg:content-center">
              {data?.qr_code && (
                <img
                  src={qrImg ? qrImg : ""}
                  alt="Qr code"
                  className="lg:w-80 w-72 rounded-2xl shadow-2xl shadow-zinc-950"
                />
              )}
            </div>
            <div className="lg:w-[28%] w-[88%] md:w-full lg:mx-0 mx-auto">
              {/* Default / Left */}
              {data && styles && data.card_layout === "default" && (
                <Default
                  data={data}
                  profile={profileImg ? profileImg : null}
                  cover={coverImg ? coverImg : ""}
                  logo={logo ? logo : ""}
                  styles={styles}
                  capture={() => handleCapture()}
                />
              )}
              {/* Centered */}
              {data && styles && data.card_layout === "centered" && (
                <Center
                  data={data}
                  profile={profileImg ? profileImg : null}
                  cover={coverImg ? coverImg : ""}
                  logo={logo ? logo : ""}
                  styles={styles}
                  capture={() => handleCapture()}
                />
              )}
              {/* Right */}
              {data && styles && data.card_layout === "right" && (
                <Right
                  data={data}
                  profile={profileImg ? profileImg : null}
                  cover={coverImg ? coverImg : ""}
                  logo={logo ? logo : ""}
                  styles={styles}
                  capture={() => handleCapture()}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewCard;
