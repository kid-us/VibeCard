import { Link } from "react-router-dom";
import { useState } from "react";
import InputFields from "./Create/InputFields";
import { user } from "../../assets";
import InputImages from "./Create/InputImages";
import Sidebar from "./Create/Sidebar";
import { useContentStore } from "../../store/useContentStore";
import { useLayoutStore } from "../../store/useLayoutStore";
import DefaultCard from "../Layout/DefaultCard";
import CenteredCard from "../Layout/CenteredCard";
import RightCard from "../Layout/RightCard";
import SmallDeviceSidebar from "./Create/SmallDeviceSidebar";
import Colors from "./Create/Sidebar/Colors";
import Texts from "./Create/Sidebar/Texts";
import Content from "./Create/Sidebar/Content";
import Layout from "./Create/Sidebar/Layout";

const Create = () => {
  const [previews, setPreviews] = useState({
    profile: null,
    cover: null,
    logo: null,
  });

  const { contact, updateContacts } = useContentStore();
  const { layout } = useLayoutStore();

  const [modal, setModal] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [menu, setMenu] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  //   Form Values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [tagLine, setTagLine] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [pronoun, setPronoun] = useState("");

  const handlePreviewChange = (
    type: "profile" | "cover" | "logo",
    preview: string | null
  ) => {
    setPreviews((prevPreviews) => ({
      ...prevPreviews,
      [type]: preview,
    }));
  };

  // Email
  const handleEmail = (val: string) => {
    setEmail(val);
    const iconExists = contact.some((c) => c.icon == "bi-envelope-fill");
    if (val !== "") {
      if (iconExists) {
        updateContacts(
          contact.map((c) =>
            c.icon == "bi-envelope-fill" ? { ...c, link: val } : c
          )
        );
      } else {
        updateContacts([
          ...contact,
          {
            link: val,
            color: "bg-sky-900",
            icon: "bi-envelope-fill",
          },
        ]);
      }
    } else {
      const filtered = contact.filter((c) => c.icon !== "bi-envelope-fill");
      updateContacts(filtered);
    }
  };

  // Phone
  const handlePhone = (val: string) => {
    setPhone(val);
    if (val !== "") {
      const iconExists = contact.some((c) => c.icon == "bi-telephone-fill");

      if (iconExists) {
        updateContacts(
          contact.map((c) =>
            c.icon == "bi-telephone-fill" ? { ...c, link: val } : c
          )
        );
      } else {
        updateContacts([
          ...contact,
          {
            link: val,
            color: "#22c55e",
            icon: "bi-telephone-fill",
          },
        ]);
      }
    } else {
      const filtered = contact.filter((c) => c.icon !== "bi-telephone-fill");
      updateContacts(filtered);
    }
  };

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
    <div className="relative menu lg:h-auto h-[100dvh]">
      {/* Navbar */}
      <div className="fixed w-full bg-white shadow z-50">
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
            {/* Large Device */}
            <div className="lg:block hidden space-x-16">
              <Link to={"/insight"} className="text-sm">
                Insights
              </Link>
              <Link to={"/setting"} className="text-sm">
                Settings
              </Link>
            </div>
            <div
              onClick={() => setDropdown(!dropdown)}
              className="ms-28 lg:flex hidden cursor-pointer relative"
            >
              <img
                src={previews.profile ? previews.profile : user}
                alt="user"
                className="w-8 h-8 overflow-hidden border-2 border-black rounded-full"
              />
              <span
                className={`${
                  dropdown ? "bi-caret-up-fill" : "bi-caret-down-fill"
                }  mt-1 ms-1`}
              ></span>

              {/* Dropdown */}
              {dropdown && (
                <div className="absolute w-44 h-20 bg-white shadow shadow-zinc-800 top-11 -left-28 rounded px-4 pt-2">
                  <p className="text sm font-poppins mb-3 text-gray-500">
                    @Lorem
                  </p>
                  <Link
                    to="/logout"
                    className="bi-box-arrow-in-left bg-teal-500 px-8 text-white py-1 rounded shadow shadow-zinc-800"
                  >
                    Logout
                  </Link>
                </div>
              )}
            </div>

            {/* Small Device */}
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
            {menu && (
              <div className="absolute menu-bg w-full h-[100vh] right-0 top-16 p-4">
                <div className="flex cursor-pointer">
                  <img
                    src={previews.profile ? previews.profile : user}
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

      {/* Large Device */}
      <div className="lg:grid lg:grid-cols-9">
        {/* Sidebar */}
        <div className="lg:block hidden col-span-2">
          <Sidebar />
        </div>

        {/* Form */}
        <div className="lg:block hidden col-span-5 w-full p-3 mt-14">
          <div className="relative px-5">
            <p className="text-2xl font-poppins mt-2">
              Create your Business card
            </p>
            <div className="px-8 pt-10 pb-16 mt-6 shadow shadow-zinc-400 rounded-xl">
              {/* Images */}
              <div className="flex justify-between flex-shrink-0">
                {/* Profile */}
                <InputImages
                  title="Profile Picture"
                  type="profile"
                  onPreviewChange={handlePreviewChange}
                />
                {/* Cover */}
                <InputImages
                  title="Cover Photo"
                  type="cover"
                  onPreviewChange={handlePreviewChange}
                />
                <InputImages
                  title="Company Logo"
                  type="logo"
                  onPreviewChange={handlePreviewChange}
                />
              </div>
              {/* Inputs */}
              <div className="grid grid-cols-2 gap-x-8 mt-5 p-4 h-[47dvh] overflow-y-scroll">
                {/* Pronoun */}
                <div className="mb-4">
                  <label
                    className="text-xs text-gray-600 block"
                    htmlFor="pronoun"
                  >
                    Pronoun <span className="text-red-700 text-2xl">*</span>
                  </label>

                  <select
                    name="pronoun"
                    className="bg-gray-200 py-3 rounded-lg focus:outline-none w-full mt-1 block shadow-sm shadow-zinc-400 font-poppins text-sm px-3"
                    onChange={(event) => setPronoun(event.currentTarget.value)}
                    defaultValue={pronoun}
                  >
                    <option value="" hidden></option>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Prof">Professor</option>
                    <option value="Dr">Dr</option>
                  </select>
                </div>
                {/* Name */}
                <InputFields
                  label="name"
                  type="text"
                  inputName="Name"
                  name={(name: string) => setName(name)}
                  value={name}
                  required
                />
                {/* Email */}
                <InputFields
                  label="email"
                  type="email"
                  inputName="Email"
                  emailAddress={(email: string) => handleEmail(email)}
                  value={email}
                  required
                />
                {/* Phone */}
                <InputFields
                  label="phone"
                  type="tel"
                  inputName="Phone"
                  phone={(phone: string) => handlePhone(phone)}
                  value={phone}
                  required
                />
                {/* Job-Title */}
                <InputFields
                  label="job-title"
                  type="text"
                  inputName="Job Title"
                  jobTitle={(job: string) => setJobTitle(job)}
                  value={jobTitle}
                  required
                />
                {/* Location */}
                <InputFields
                  label="location"
                  type="text"
                  inputName="Location"
                  location={(location: string) => setLocation(location)}
                  value={location}
                  required
                />
                {/* Company */}
                <InputFields
                  label="company"
                  type="text"
                  inputName="Company"
                  company={(company: string) => setCompany(company)}
                  value={company}
                  required
                />
                {/* Tag-line */}
                <InputFields
                  label="tag-line"
                  type="text"
                  inputName="Tag Line"
                  tag={(tag: string) => setTagLine(tag)}
                  value={tagLine}
                  required={false}
                />
              </div>
            </div>
            {/* Button */}
            <div className="absolute -bottom-3 pe-10 w-full">
              <div className="flex justify-end rounded-b-xl bg-white py-4 shadow-xl shadow-zinc-900">
                <button className="bg-sky-800 shadow-md active:shadow-none shadow-gray-900 text-white rounded px-16 py-2 me-10">
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Card Layout*/}
        <div className="lg:flex lg:col-span-2 lg:pe-5 lg:pt-0 lg:pb-0 pt-20 lg:h-auto pb-10 px-3 h-[95vh] overflow-scroll lg:mt-20">
          <div className="content-center w-full">
            {/* {layout} */}
            {layout === "default" && (
              <DefaultCard
                pronounVal={pronoun}
                nameVal={name}
                emailVal={email}
                phoneVal={phone}
                jobTitleVal={jobTitle}
                tagLineVal={tagLine}
                companyVal={company}
                locationVal={location}
                preview={previews}
              />
            )}

            {layout === "centered" && (
              <CenteredCard
                pronounVal={pronoun}
                nameVal={name}
                emailVal={email}
                phoneVal={phone}
                jobTitleVal={jobTitle}
                tagLineVal={tagLine}
                companyVal={company}
                locationVal={location}
                preview={previews}
              />
            )}
            {layout === "right" && (
              <RightCard
                pronounVal={pronoun}
                nameVal={name}
                emailVal={email}
                phoneVal={phone}
                jobTitleVal={jobTitle}
                tagLineVal={tagLine}
                companyVal={company}
                locationVal={location}
                preview={previews}
              />
            )}
          </div>
        </div>
      </div>

      {/* Small Device Sidebars */}
      {modal && (
        <>
          <div className="overlay z-10" onClick={() => setModal(false)}></div>
          <p
            onClick={() => setModal(false)}
            className="absolute top-2 z-50 right-1 bg-red-500 text-white text-xl bi-x px-2 rounded p-1"
          ></p>
          <div className="z-50 bg-zinc-800 h-[90dvh] absolute bottom-0 w-full rounded text-white overflow-y-scroll pb-10 animate__animated animate__fadeInUp">
            {/* Forms */}
            {modal && activeModal === "Forms" && (
              <div className="relative p-5">
                <p className="text-xl font-poppins mt-4 mb-10">
                  Create your Business card
                </p>
                <div>
                  {/* Images */}
                  <div className="grid grid-cols-3 gap-x-2">
                    {/* Profile */}
                    <InputImages
                      title="Profile Picture"
                      type="profile"
                      onPreviewChange={handlePreviewChange}
                    />
                    {/* Logo */}
                    <InputImages
                      title="Company Logo"
                      type="logo"
                      onPreviewChange={handlePreviewChange}
                    />
                    {/* Cover */}
                    <InputImages
                      title="Cover Photo"
                      type="cover"
                      onPreviewChange={handlePreviewChange}
                    />
                  </div>
                  {/* Inputs */}
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    {/* Pronoun */}
                    <div className="mb-4">
                      <label
                        className="text-xs text-gray-600 block"
                        htmlFor="pronoun"
                      >
                        Pronoun <span className="text-red-700 text-2xl">*</span>
                      </label>

                      <select
                        name="pronoun"
                        className="bg-gray-200 py-3 rounded-lg focus:outline-none w-full mt-1 block shadow-sm shadow-zinc-400 font-poppins text-sm px-3"
                        onChange={(event) =>
                          setPronoun(event.currentTarget.value)
                        }
                        defaultValue={pronoun}
                      >
                        <option value="" hidden></option>
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Prof">Professor</option>
                        <option value="Dr">Dr</option>
                      </select>
                    </div>
                    {/* Name */}
                    <InputFields
                      label="name"
                      type="text"
                      inputName="Name"
                      name={(name: string) => setName(name)}
                      value={name}
                      required
                    />
                    {/* Email */}
                    <InputFields
                      label="email"
                      type="email"
                      inputName="Email"
                      emailAddress={(email: string) => handleEmail(email)}
                      value={email}
                      required
                    />
                    {/* Phone */}
                    <InputFields
                      label="phone"
                      type="tel"
                      inputName="Phone"
                      phone={(phone: string) => handlePhone(phone)}
                      value={phone}
                      required
                    />
                    {/* Job-Title */}
                    <InputFields
                      label="job-title"
                      type="text"
                      inputName="Job Title"
                      jobTitle={(job: string) => setJobTitle(job)}
                      value={jobTitle}
                      required
                    />
                    {/* Location */}
                    <InputFields
                      label="location"
                      type="text"
                      inputName="Location"
                      location={(location: string) => setLocation(location)}
                      value={location}
                      required
                    />
                    {/* Company */}
                    <InputFields
                      label="company"
                      type="text"
                      inputName="Company"
                      company={(company: string) => setCompany(company)}
                      value={company}
                      required
                    />
                    {/* Tag-line */}
                    <InputFields
                      label="tag-line"
                      type="text"
                      inputName="Tag Line"
                      tag={(tag: string) => setTagLine(tag)}
                      value={tagLine}
                      required={false}
                    />
                  </div>
                </div>
                {/* Button */}
                <div className="px-2 w-full pb-12">
                  <div className="flex justify-end py-4 shadow-xl rounded-xl shadow-zinc-900">
                    <button className="bg-sky-800 shadow-md active:shadow-none shadow-gray-500 text-white rounded-xl px-24 py-3">
                      Update
                    </button>
                  </div>
                </div>
              </div>
            )}

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
