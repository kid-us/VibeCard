import { Link } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./Create/Sidebar";
import { useLayoutStore } from "../../store/useLayoutStore";
import DefaultCard from "../Layout/DefaultCard";
import CenteredCard from "../Layout/CenteredCard";
import RightCard from "../Layout/RightCard";
import SmallDeviceSidebar from "./Create/SmallDeviceSidebar";
import Colors from "./Create/Sidebar/Colors";
import Texts from "./Create/Sidebar/Texts";
import Content from "./Create/Sidebar/Content";
import Layout from "./Create/Sidebar/Layout";
import Form from "./Create/Form";
import { useCardData } from "../../store/useCardData";
import { userPic } from "../../assets";
import Navbar from "../Navbar/Navbar";
import useAuthStore from "../../store/useUserData";

const Create = () => {
  const { layout } = useLayoutStore();
  const { user } = useAuthStore();
  // States
  const [modal, setModal] = useState(false);
  const [activeModal, setActiveModal] = useState("");

  const [previewCard, setPreviewCard] = useState(false);

  const { preview } = useCardData();

  // Sidebar Small Device
  const handleModal = (value: string) => {
    if (value === activeModal) {
      setModal(false);
      setActiveModal("");
    } else {
      setModal(true);
      setActiveModal(value);
    }
  };

  return (
    <div className="text-white relative lg:h-auto h-[100dvh]">
      {/* Small Device Navbar */}
      <div className="lg:hidden">
        <Navbar />
      </div>

      {/* Large Device Page */}
      <div className="lg:grid lg:grid-cols-9">
        {/* Sidebar */}
        <div className="lg:block hidden col-span-2">
          <Sidebar />
        </div>

        {/* Large device Navbar */}
        <div className="absolute lg:block hidden w-full">
          <div className="grid grid-cols-9">
            <div className="col-span-2"></div>
            <div className="col-span-7 bg-secondary shadow shadow-gray-800">
              <div className="flex justify-between px-5 text-white">
                {/* Vibecard */}
                <div>
                  <Link to="/">
                    <p className="text-3xl ps-3 logo-font text-white py-3">
                      vibecard
                    </p>
                  </Link>
                </div>
                {/* Links */}
                <div className="mt-4 flex me-4">
                  <Link to="/insights" className="me-16 chakra">
                    Insights
                  </Link>
                  <Link to="/setting" className="me-5 chakra">
                    Setting
                  </Link>
                  <div className="flex ms-10">
                    <img
                      src={preview.profile ? preview.profile : userPic}
                      alt="user"
                      className="w-8 h-8 overflow-hidden rounded-full"
                    />
                    <p className="ms-3 text-gray-500 mt-1 text-ellipsis text-nowrap overflow-hidden">
                      {user}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Preview on Small Device */}
        <div
          onClick={() => setPreviewCard(!previewCard)}
          className={`lg:hidden fixed bottom-20 right-2 bg-gray-50 text-black shadow shadow-zinc-900 rounded px-2 py-1 z-50`}
        >
          <p
            className={`${
              previewCard ? "bi-eye-slash-fill" : "bi-eye-fill"
            } text-xl`}
          ></p>
        </div>

        {/* Form */}
        <div
          className={`lg:block ${
            previewCard && "hidden"
          } col-span-5 w-full lg:p-3 lg:mt-20 lg:pt-0 p-3 pt-2`}
        >
          <Form layout={layout} />
        </div>
        {/* Card Layout*/}
        <div
          className={`lg:flex  ${
            !previewCard && "hidden"
          } lg:col-span-2 lg:pe-5 lg:pt-0 lg:pb-0 pt-24 lg:h-auto pb-10 px-3 h-[95vh] overflow-scroll lg:mt-20`}
        >
          <div className="content-center w-full">
            <p className="mb-4">Card Preview</p>
            {/* {layout} */}
            {layout === "default" && <DefaultCard />}
            {layout === "centered" && <CenteredCard />}
            {layout === "right" && <RightCard />}
          </div>
        </div>
      </div>

      {/* Small Device Sidebars */}
      {modal && (
        <>
          <div
            className="overlay z-50"
            onClick={() => {
              setModal(false);
              setActiveModal("");
            }}
          ></div>

          <div className="z-50 bg-zinc-800 h-[90dvh] absolute bottom-0 w-full rounded-t-3xl text-white pb-10 animate__animated animate__fadeInUp">
            {/* Colors */}
            {modal && activeModal === "Colors" && (
              <div className="p-5">
                <Colors />
              </div>
            )}

            {/* Texts */}
            {modal && activeModal === "Text" && (
              <div className="p-5">
                <Texts />
              </div>
            )}

            {/* Contents */}
            {modal && activeModal === "Content" && (
              <div className="p-5">
                <Content />
              </div>
            )}

            {/* Layout */}
            {modal && activeModal === "Layout" && (
              <div className="p-5">
                <Layout />
              </div>
            )}
          </div>
        </>
      )}

      {/* Small Device Sidebar */}
      <div className="lg:hidden absolute bottom-0 w-full z-50">
        <SmallDeviceSidebar
          active={activeModal}
          handleClick={(value: string) => handleModal(value)}
        />
      </div>
    </div>
  );
};

export default Create;
