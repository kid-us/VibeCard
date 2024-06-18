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
const Create = () => {
  const [previews, setPreviews] = useState({
    profile: null,
    cover: null,
    logo: null,
  });

  const { contact, updateContacts } = useContentStore();
  const { layout } = useLayoutStore();

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

  return (
    <div className="menu">
      {/* Navbar */}
      <div className="fixed w-full bg-white shadow">
        <nav className="flex justify-between py-3 px-5">
          <div>
            <Link to={"/"} className="logo-font text-2xl">
              vibecard
            </Link>
          </div>
          <div className="flex justify-between">
            <div className="space-x-16">
              <Link to={"/insight"} className="text-sm">
                <span className="bi-bar-chart-fill text-black text-xs me-1"></span>
                Insights
              </Link>
              <Link to={"/insight"} className="text-sm">
                <span className="bi-gear-fill text-black text-xs me-1"></span>
                Settings
              </Link>
            </div>
            <div
              onClick={() => setDropdown(!dropdown)}
              className="ms-28 flex cursor-pointer relative"
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
          </div>
        </nav>
      </div>

      <div className="grid grid-cols-9">
        {/* Sidebar */}
        <div className="col-span-2">
          <Sidebar />
        </div>
        {/* Form */}
        <div className="col-span-5 w-full p-3 mt-14">
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
                    defaultValue=""
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
                  required
                />
                {/* Email */}
                <InputFields
                  label="email"
                  type="email"
                  inputName="Email"
                  emailAddress={(email: string) => handleEmail(email)}
                  required
                />
                {/* Phone */}
                <InputFields
                  label="phone"
                  type="tel"
                  inputName="Phone"
                  phone={(phone: string) => handlePhone(phone)}
                  required
                />
                {/* Job-Title */}
                <InputFields
                  label="job-title"
                  type="text"
                  inputName="Job Title"
                  jobTitle={(job: string) => setJobTitle(job)}
                  required
                />
                {/* Location */}
                <InputFields
                  label="location"
                  type="text"
                  inputName="Location"
                  location={(location: string) => setLocation(location)}
                  required
                />
                {/* Company */}
                <InputFields
                  label="company"
                  type="text"
                  inputName="Company"
                  company={(company: string) => setCompany(company)}
                  required
                />
                {/* Tag-line */}
                <InputFields
                  label="tag-line"
                  type="text"
                  inputName="Tag Line"
                  tag={(tag: string) => setTagLine(tag)}
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
        <div className="col-span-2 pe-5 flex">
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
    </div>
  );
};

export default Create;
