import { Link } from "react-router-dom";
// import { user } from "../../assets";
import { useState } from "react";
import InputFields from "./Create/InputFields";
import Card from "./Create/Card";
import { user } from "../../assets";
import InputImages from "./Create/InputImages";

const Create = () => {
  const [previews, setPreviews] = useState({
    profile: null,
    cover: null,
    logo: null,
  });

  //   Form Values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [tagLine, setTagLine] = useState("");
  const [website, setWebsite] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [pronoun, setPronoun] = useState("");
  //   const [socialLink1, setSocialLink1] = useState("");
  //   const [socialLink2, setSocialLink2] = useState("");
  //   const [socialLink3, setSocialLink3] = useState("");

  const handlePreviewChange = (
    type: "profile" | "cover" | "logo",
    preview: string | null
  ) => {
    setPreviews((prevPreviews) => ({
      ...prevPreviews,
      [type]: preview,
    }));
  };

  return (
    <div className="menu-bg">
      <div className="bg-white shadow">
        <div className="container mx-auto py-1">
          <nav className="flex justify-between py-2">
            <div>
              <Link to={"/"} className="logo-font text-2xl">
                vibecard
              </Link>
            </div>
            <div className="flex justify-between">
              <div className="space-x-10">
                <Link to={"/insight"} className="text-sm">
                  <span className="bi-bar-chart-fill text-black text-xs me-1"></span>
                  Insights
                </Link>
                <Link to={"/insight"} className="text-sm">
                  <span className="bi-gear-fill text-black text-xs me-1"></span>
                  Settings
                </Link>
              </div>
              <div className="ms-16 flex cursor-pointer">
                <img
                  src={user}
                  alt=""
                  className="w-8 border-2 border-black rounded-full"
                />
                <span className="bi-caret-down-fill mt-1 ms-1"></span>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div className="grid grid-cols-5">
        <div className="grid grid-cols-5 bg-stone-800 -md w-full h-[93dvh]">
          <div className="text-white bg-stone-900 overflow-hidden">
            <div className="py-5 text-center cursor-pointer hover:bg-stone-800 p-3">
              <p className="bi-grid-1x2-fill text-xl"></p>
              <p className="text-[10px] font-poppins text-gray-300 py-1">
                Layout
              </p>
            </div>
            <div className="py-5 text-center cursor-pointer hover:bg-stone-800 p-3">
              <p className="bi-fonts text-xl"></p>
              <p className="text-[10px] font-poppins text-gray-300 py-1">
                Text
              </p>
            </div>
            <div className="py-5 text-center cursor-pointer hover:bg-stone-800 p-3">
              <p className="bi-body-text text-xl"></p>
              <p className="text-[10px] font-poppins text-gray-300 py-1">
                Content
              </p>
            </div>
            <div className="py-5 text-center cursor-pointer hover:bg-stone-800 p-3">
              <p className="bi-gear-fill text-center text-xl"></p>
              <p className="text-[10px] font-poppins text-gray-300 py-1">
                Setting
              </p>
            </div>
          </div>
          <div className="col-span-4 p-4"></div>
        </div>

        <div className="col-span-4 w-full p-3 mt-4">
          {/* Form */}
          <div className="grid grid-cols-5 bg-white shadow shadow-zinc-400 rounded-lg overflow-hidden p-5">
            <div className="col-span-3">
              <p className="text-xl font-poppins my-6 ps-4">
                Create your Business card
              </p>
              <div className="bg-white h-[71dvh] overflow-y-scroll px-6">
                {/* Images */}
                <div className="flex justify-between flex-shrink-0">
                  {/* Profile */}
                  <InputImages
                    type="profile"
                    onPreviewChange={handlePreviewChange}
                  />
                  {/* Cover */}
                  <InputImages
                    type="cover"
                    onPreviewChange={handlePreviewChange}
                  />
                  <InputImages
                    type="logo"
                    onPreviewChange={handlePreviewChange}
                  />
                </div>
                {/* Inputs */}
                <div className="grid grid-cols-2 gap-x-8 mt-5">
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
                      className={`bg-gray-100 py-3 rounded-lg focus:outline-none w-full mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm px-3`}
                      onChange={(event) =>
                        setPronoun(event.currentTarget.value)
                      }
                    >
                      <option hidden selected>
                        {" "}
                      </option>
                      <option value="Mr"> Mr</option>
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
                    emailAddress={(email: string) => setEmail(email)}
                    required
                  />
                  {/* Phone */}
                  <InputFields
                    label="phone"
                    type="tel"
                    inputName="Phone"
                    phone={(phone: string) => setPhone(phone)}
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
                  {/* Website */}
                  <InputFields
                    label="website"
                    type="url"
                    inputName="Website"
                    website={(website: string) => setWebsite(website)}
                    required={false}
                  />
                  {/* Social-media */}
                  {/* <div className="mb-4">
                    <label
                      className="text-xs text-gray-600 block"
                      htmlFor="social-media"
                    >
                      Social Media
                    </label>
                    <input
                      type="text"
                      name="social-media"
                      className={`bg-gray-100 py-3 rounded-lg focus:outline-none w-full mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm px-3 mb-3 `}
                      onChange={(event) =>
                        setSocialLink1(event.currentTarget.value)
                      }
                    />
                    <input
                      type="text"
                      name="social-media"
                      className={`bg-gray-100 py-3 rounded-lg focus:outline-none w-full mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm px-3 mb-3 `}
                      onChange={(event) =>
                        setSocialLink2(event.currentTarget.value)
                      }
                    />
                    <input
                      type="text"
                      name="social-media"
                      className={`bg-gray-100 py-3 rounded-lg focus:outline-none w-full mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm px-3 mb-3 `}
                      onChange={(event) =>
                        setSocialLink3(event.currentTarget.value)
                      }
                    />
                  </div> */}
                </div>
              </div>
            </div>

            {/* Card */}
            <div className="col-span-2">
              <Card
                pronoun={pronoun}
                name={name}
                email={email}
                phone={phone}
                website={website}
                jobTitle={jobTitle}
                tagLine={tagLine}
                company={company}
                location={location}
                preview={previews}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
