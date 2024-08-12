import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import DefaultCard from "../Layout/DefaultCard";
import CenteredCard from "../Layout/CenteredCard";
import RightCard from "../Layout/RightCard";
import SmallDeviceSidebar from "../Create/SmallDeviceSidebar";
import Sidebar from "../Create/Sidebar";
import Colors from "../Create/Sidebar/Colors";
import Texts from "../Create/Sidebar/Texts";
import Content from "../Create/Sidebar/Content";
import Layout from "../Create/Sidebar/Layout";
import { userPic } from "../../assets";
import Navbar from "../Navbar/Navbar";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { baseUrl } from "@/services/request";
import axios from "axios";
import { useCardData } from "../../store/useCardData";
import useAuthStore from "../../store/useUserData";
import { BusinessCardData, SocialMedia } from "../Insights/Cards";
import { useContentStore } from "@/store/useContentStore";
import { useTextColorStore } from "@/store/useTextColorStore";
import { useLayoutStore } from "../../store/useLayoutStore";
import { useCoverColorStore } from "@/store/useCoverColorStore";
import { useCardColorStore } from "@/store/useCardColorStore";
import EditForm from "../Create/EditForm";
import CreateForm from "../Create/CreateForm";
import Loading from "../Loading/Loading";

const Create = () => {
  const [title] = useState("Create Card");
  useDocumentTitle(title);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const editedUrl = searchParams.get("edit");

  useEffect(() => {
    // if (!editedUrl) {
    axios
      .get(`${baseUrl}/api/v1/auth/can-create-card`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        navigate("/pricing");
      });
  }, []);

  // Reload
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      const message =
        "Are you sure you want to leave? Your changes might not be saved.";
      event.returnValue = message; // Standard for most browsers
      return message; // For some older browsers
    };

    const handlePopState = () => {
      // Logic for detecting navigation
      const confirmNavigation = window.confirm(
        "Are you sure you want to leave this page? Your changes might not be saved."
      );
      if (!confirmNavigation) {
        // Prevent the navigation by pushing a new state
        window.history.pushState(null, "", window.location.href);
      }
    };

    // Add event listeners
    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("popstate", handlePopState);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const {
    preview,
    setCardCompany,
    setCardEmail,
    setCardJob,
    setCardLocation,
    setCardName,
    setPreview,
    setCardTagLine,
    setCardPronoun,
    setCardPhone,
  } = useCardData();

  const { updateContacts, updateCoverLogo, updateSocialMedia } =
    useContentStore();

  const { updateColor, updateFont, updateSize } = useTextColorStore();
  const { updateLayout } = useLayoutStore();
  const { updateCoverColor } = useCoverColorStore();
  const { updateCardColor } = useCardColorStore();

  useEffect(() => {
    if (editedUrl) {
      setLoading(true);
      axios
        .get<BusinessCardData>(`${baseUrl}/api/v1/cards/card/${editedUrl}`)
        .then((response) => {
          const data = response.data;

          // Parse the styles JSON string
          let styles;
          if (typeof data.styles === "string") {
            try {
              styles = JSON.parse(data.styles);
            } catch (e) {
              return;
            }
          }

          // Layout
          updateLayout(data.card_layout);
          // Cards
          setCardName(data.full_name);
          setCardPronoun(data.pronouns);
          setCardCompany(data.company_name);
          setCardEmail(data.email);
          setCardJob(data.job_title);
          setCardLocation(data.location);
          setCardPhone(data.phone);
          setCardTagLine(data.bio);
          setPreview("cover", data.covor_picture);
          setPreview("logo", data.company_logo);
          setPreview("profile", data.main_picture);

          updateContacts(
            styles.contacts.map((c: SocialMedia) => ({
              link: c.link,
              icon: c.icon,
              color: c.color,
            }))
          );
          // Social Media
          updateSocialMedia(
            styles.socialMedia.map((c: SocialMedia) => ({
              link: c.link,
              icon: c.icon,
              color: c.color,
            }))
          );
          //  Company Logo
          if (data.company_logo !== "" || null) {
            updateCoverLogo(true);
          }
          // Card BG and Cover
          updateCoverColor(styles.coverBG.bg_color);
          updateCardColor(styles.cardBg.bg_color);
          // Font Color
          updateColor("tagLine", styles.bio.font_color);
          updateColor("company", styles.company.font_color);
          updateColor("jobTitle", styles.jobTitle.font_color);
          updateColor("name", styles.name.font_color);
          updateColor("pronoun", styles.pronoun.font_color);
          updateColor("location", styles.location.font_color);
          updateColor("button", styles.button.bg_color);
          // Font Style
          updateFont("tagLine", styles.bio.font_style);
          updateFont("company", styles.company.font_style);
          updateFont("jobTitle", styles.jobTitle.font_style);
          updateFont("name", styles.name.font_style);
          updateFont("pronoun", styles.pronoun.font_style);
          updateFont("location", styles.location.font_style);
          updateFont("button", styles.button.text_color);
          // Font Size
          updateSize("tagLine", styles.bio.font_size);
          updateSize("company", styles.company.font_size);
          updateSize("jobTitle", styles.jobTitle.font_size);
          updateSize("name", styles.name.font_size);
          updateSize("pronoun", styles.pronoun.font_size);
          updateSize("location", styles.location.font_size);

          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      // Layout
      updateLayout("default");
      // Cards
      setCardName(null);
      setCardPronoun(null);
      setCardCompany(null);
      setCardEmail(null);
      setCardJob(null);
      setCardLocation(null);
      setCardPhone(null);
      setCardTagLine(null);
      setPreview("cover", null);
      setPreview("logo", null);
      setPreview("profile", null);
      // Contacts
      updateContacts([
        {
          link: "",
          icon: "bi-envelope-fill",
          color: "#ffffff",
        },
        {
          link: "",
          icon: "bi-telephone-fill",
          color: "#22c55e",
        },
      ]);
      // Social Media
      updateSocialMedia([]);
      updateColor("tagLine", "#9ca3af");
      updateColor("company", "#9ca3af");
      updateColor("jobTitle", "#2dd4bf");
      updateColor("name", "#ffffff");
      updateColor("pronoun", "#9ca3af");
      updateColor("location", "#9ca3af");
      updateColor("button", "#14b8a6");
      // Font Style
      updateFont("tagLine", "ubuntu");
      updateFont("company", "metamorphous");
      updateFont("jobTitle", "syne");
      updateFont("name", "font-poppins");
      updateFont("pronoun", "font-monospace");
      updateFont("location", "roboto");
      updateFont("button", "#000000");
      // Card BG and Cover
      updateCoverColor("gradient-cover");
      updateCardColor("#222222");
      // Font Size
      updateSize("tagLine", "text-sm");
      updateSize("company", "text-sm");
      updateSize("jobTitle", "text-lg");
      updateSize("name", "text-xl");
      updateSize("pronoun", "text-sm");
      updateSize("location", "text-sm");
      updateSize("button", "");
    }
  }, []);

  const { layout } = useLayoutStore();
  const { user } = useAuthStore();
  // States
  const [modal, setModal] = useState(false);
  const [activeModal, setActiveModal] = useState("");

  const [previewCard, setPreviewCard] = useState(false);

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
    <>
      {loading && <Loading />}
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
              <div className="col-span-7 nav-bg shadow shadow-gray-800 secondary-bg">
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
                    <Link to="/dashboard" className="me-16 text-md">
                      Dashboard
                    </Link>
                    <Link to="/insights" className="me-16 text-md">
                      Insights
                    </Link>
                    <Link to="/setting" className="me-5 text-md">
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
            className={`lg:hidden fixed bottom-20 right-2 text-white px-2 py-1 z-40`}
          >
            <p
              className={`${
                previewCard ? "bi-eye-slash-fill" : "bi-eye-fill"
              } text-xl`}
            ></p>
          </div>

          {/* Form */}
          <div
            className={`block ${
              previewCard && "hidden"
            } col-span-5 w-full lg:p-3 lg:mt-20 lg:pt-0 p-3 pt-2`}
          >
            {editedUrl ? (
              <EditForm layout={layout} />
            ) : (
              <CreateForm layout={layout} />
            )}
            {/* <Form layout={layout} /> */}
          </div>

          {/* Card Layout*/}
          <div
            className={`lg:flex  ${
              !previewCard && "hidden"
            } lg:col-span-2 lg:pe-5 lg:pt-0 lg:pb-0 pt-5 lg:h-auto pb-10 px-3 h-[95vh] overflow-scroll lg:mt-20`}
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

            <div className="z-50 secondary-bg h-[90dvh] absolute bottom-0 w-full rounded-t-3xl text-white pb-10 animate__animated animate__fadeInUp">
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
        {!previewCard && (
          <div className="lg:hidden absolute bottom-0 w-full z-40 border-t border-gray-600">
            <SmallDeviceSidebar
              active={activeModal}
              handleClick={(value: string) => handleModal(value)}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Create;
