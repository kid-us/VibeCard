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

const Create = () => {
  const { layout } = useLayoutStore();
  // States
  const [modal, setModal] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [menu, setMenu] = useState(false);

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
    <div className="menu-bg relative lg:h-auto h-[100dvh]">
      {/* Small Device Navbar */}
      <div className="lg:hidden fixed w-full bg-white shadow z-40">
        <nav
          className={`flex justify-between lg:py-3 py-4 px-5 ${
            menu && "menu-bg animate__animated animate__fadeInLeft"
          }`}
        >
          <div>
            <Link to={"/"} className="logo-font text-2xl">
              vibecard
            </Link>
          </div>
          <div className="flex justify-between">
            {/* Small Device Nav*/}
            <div className="lg:hidden relative">
              <p
                onClick={() => setMenu(!menu)}
                className={`lg:hidden rounded-full border border-black font-poppins text-2xl text-teal-950 font-bold`}
              >
                {menu ? (
                  <span className="px-3 flex">
                    <span
                      className={`text-sm font-light pt-[6px] pe-3 ${
                        menu ? "text-black" : "text-white"
                      } `}
                    >
                      Menu
                    </span>
                    <span
                      className={`bi-x text-2xl ${
                        menu ? "text-black" : "text-white"
                      }`}
                    ></span>
                  </span>
                ) : (
                  <span className="px-3 flex">
                    <span className={`text-sm font-light pt-[6px] pe-3`}>
                      Menu
                    </span>
                    <span className={`bi-list text-2xl`}></span>
                  </span>
                )}
              </p>
            </div>
            {/* Small Device menu */}
            {menu && (
              <div className="absolute menu-bg w-full h-[100vh] right-0 top-16 p-4">
                <div className="flex cursor-pointer">
                  <img
                    src={preview.profile ? preview.profile : userPic}
                    alt="user"
                    className="w-16 h-16 overflow-hidden border-2 border-black rounded-full"
                  />
                  <div className="content-center">
                    <p className="ms-4 text-xl chakra">Lorem</p>
                  </div>
                </div>
                <p className="mt-5 mb-4">
                  <Link to={"/insight"} className="text-xl pb-2 font-poppins">
                    Insights
                  </Link>
                </p>
                <p>
                  <Link to={"/setting"} className="text-xl pb-2 font-poppins">
                    Settings
                  </Link>
                </p>
                <p className="mt-4">
                  <Link to={"/logout"} className="text-xl pb-2 font-poppins">
                    Logout
                  </Link>
                </p>
              </div>
            )}
          </div>
        </nav>
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
            <div className="col-span-7 bg-white shadow">
              <div className="flex justify-between px-5">
                {/* Vibecard */}
                <div>
                  <Link to="/">
                    <p className="text-3xl ps-3 logo-font text-black py-3">
                      vibecard
                    </p>
                  </Link>
                </div>
                {/* Links */}
                <div className="mt-4 flex me-4">
                  <Link to="/setting" className="me-16 chakra">
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
                    <p className="ms-3 text-gray-500 mt-1">Lorem</p>
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
          } col-span-5 w-full lg:p-3 lg:mt-20 lg:pt-0 p-3 pt-20`}
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
            <p className="mb-4 chakra">Card Preview</p>
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
