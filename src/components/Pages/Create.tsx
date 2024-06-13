import { Link } from "react-router-dom";
import { user } from "../../assets";
import { ChangeEvent, useState } from "react";
import InputFields from "./Create/InputFields";
import Card from "./Create/Card";

const Create = () => {
  const [, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [coverPreview, setCoverPreview] = useState<string | null>(null);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);

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

  const handleFileChange = (
    e: ChangeEvent<HTMLInputElement>,
    previewType: string
  ) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      //   console.log(previewType);
      if (previewType === "profile") {
        setPreview(URL.createObjectURL(selectedFile));
      } else if (previewType === "cover") {
        setCoverPreview(URL.createObjectURL(selectedFile));
      } else if (previewType === "logo") {
        setLogoPreview(URL.createObjectURL(selectedFile));
      }
    }
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

        <div className="col-span-4 w-full p-3 ">
          <div className="flex justify-between bg-white rounded p-2 mb-4">
            <div className="flex">
              <img src={user} alt="user" className="w-12" />
              <div className="text-sm content-center ms-4">
                <p className="text-gray-900 font-poppins">Lorem</p>
                <p className="text-sky-600">lorem@gmail.com</p>
              </div>
            </div>
            <div>
              <p>Logout</p>
            </div>
          </div>
          {/* Form */}
          <div className="grid grid-cols-5 bg-white shadow shadow-zinc-400 rounded-lg overflow-hidden p-5">
            <div className="col-span-3">
              <p className="text-xl font-poppins my-6 ps-4">
                Create your Business card
              </p>
              <div className="bg-white h-[64dvh] overflow-y-scroll px-6">
                {/* Images */}
                <div className="flex justify-between flex-shrink-0">
                  {/* Profile */}
                  <div className="">
                    <p className="text-xs text-gray-500 mb-4 font-poppins">
                      Profile{" "}
                    </p>
                    <div className="border rounded-lg border-gray-300 w-28 p-3 relative">
                      <input
                        type="file"
                        id="profile-file"
                        className="hidden"
                        onChange={(event) => handleFileChange(event, "profile")}
                        accept="image/*"
                      />
                      {preview ? (
                        <div>
                          <img
                            src={preview}
                            alt="Cropped preview"
                            className="file-preview"
                          />
                        </div>
                      ) : (
                        <label
                          htmlFor="profile-file"
                          className="cursor-pointer"
                        >
                          <div className="flex flex-col text-center">
                            <i className="bi-image text-xl text-gray-600"></i>
                            <span className="text-[8px] text-gray-400">
                              Select image or video file or drag and drop one
                              here
                            </span>
                          </div>
                        </label>
                      )}
                    </div>
                  </div>
                  {/* Cover */}
                  <div className="">
                    <p className="text-xs text-gray-500 mb-4 font-poppins">
                      Cover{" "}
                    </p>
                    <div className="border rounded-lg border-gray-300 w-72 h-24 overflow-hidden p-3 relative">
                      <input
                        type="file"
                        id="cover-file"
                        className="hidden"
                        onChange={(event) => handleFileChange(event, "cover")}
                        accept="image/*"
                      />
                      {coverPreview ? (
                        <div>
                          <img
                            src={coverPreview}
                            alt="Cropped preview"
                            className="file-preview"
                          />
                        </div>
                      ) : (
                        <label htmlFor="cover-file" className="cursor-pointer">
                          <div className="flex flex-col text-center">
                            <i className="bi-image text-xl text-gray-600"></i>
                            <span className="text-[8px] text-gray-400">
                              Select image or video file or drag and drop one
                              here
                            </span>
                          </div>
                        </label>
                      )}
                    </div>
                  </div>
                  {/* Logo */}
                  <div className="">
                    <p className="text-xs text-gray-500 mb-4 font-poppins">
                      Logo{" "}
                    </p>
                    <div className="border rounded-lg border-gray-300 w-24 h-24 overflow-hidden p-3 relative">
                      <input
                        type="file"
                        id="logo-file"
                        className="hidden"
                        onChange={(event) => handleFileChange(event, "logo")}
                        accept="image/*"
                      />
                      {logoPreview ? (
                        <div>
                          <img
                            src={logoPreview}
                            alt="Cropped preview"
                            className="file-preview"
                          />
                        </div>
                      ) : (
                        <label htmlFor="logo-file" className="cursor-pointer">
                          <div className="flex flex-col text-center">
                            <i className="bi-image text-xl text-gray-600"></i>
                            <span className="text-[8px] text-gray-400">
                              Select image or video file or drag and drop one
                              here
                            </span>
                          </div>
                        </label>
                      )}
                    </div>
                  </div>
                </div>
                {/* Inputs */}
                <div className="grid grid-cols-2 gap-x-8 mt-5">
                  {/* Pronoun */}
                  <div className="mb-4">
                    <label
                      className="text-xs text-gray-600 block"
                      htmlFor="pronoun"
                    >
                      Pronoun
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
                  />
                  {/* Email */}
                  <InputFields
                    label="email"
                    type="email"
                    inputName="Email"
                    emailAddress={(email: string) => setEmail(email)}
                  />
                  {/* Phone */}
                  <InputFields
                    label="phone"
                    type="tel"
                    inputName="Phone"
                    phone={(phone: string) => setPhone(phone)}
                  />
                  {/* Job-Title */}
                  <InputFields
                    label="job-title"
                    type="text"
                    inputName="Job Title"
                    jobTitle={(job: string) => setJobTitle(job)}
                  />
                  {/* Location */}
                  <InputFields
                    label="location"
                    type="text"
                    inputName="Location"
                    location={(location: string) => setLocation(location)}
                  />
                  {/* Company */}
                  <InputFields
                    label="company"
                    type="text"
                    inputName="Company"
                    company={(company: string) => setCompany(company)}
                  />
                  {/* Tag-line */}
                  <InputFields
                    label="tag-line"
                    type="text"
                    inputName="Tag Line"
                    tag={(tag: string) => setTagLine(tag)}
                  />
                  {/* Website */}
                  <InputFields
                    label="website"
                    type="url"
                    inputName="Website"
                    website={(website: string) => setWebsite(website)}
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
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
