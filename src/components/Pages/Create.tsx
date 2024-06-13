import { Link } from "react-router-dom";
import { user } from "../../assets";
import { ChangeEvent, useState } from "react";
import InputFields from "./Create/InputFields";

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
  const [socialLink1, setSocialLink1] = useState("");
  const [socialLink2, setSocialLink2] = useState("");
  const [socialLink3, setSocialLink3] = useState("");

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
    <div className="">
      <div className="container mx-auto">
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

      <div className="px-10 mt-7">
        <div className="grid grid-cols-4 gap-6">
          {/* <div className="menu-bg rounded-md w-full h-96"></div> */}
          <div className="col-span-4 shadow rounded shadow-zinc-400 w-full p-2">
            <div className="flex">
              <img src={user} alt="user" className="w-12" />
              <div className="text-sm content-center ms-4">
                <p className="text-gray-500">Lorem</p>
                <p className="text--500">lorem@gmail.com</p>
              </div>
            </div>
            <p className="text-sm px-3 mt-10">Create your Business card</p>
            {/* Images */}
            <div className="flex justify-between flex-shrink-0 p-4">
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
                    <label htmlFor="profile-file" className="cursor-pointer">
                      <div className="flex flex-col text-center">
                        <i className="bi-image text-xl text-gray-600"></i>
                        <span className="text-[8px] text-gray-400">
                          Select image or video file or drag and drop one here
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
                          Select image or video file or drag and drop one here
                        </span>
                      </div>
                    </label>
                  )}
                </div>
              </div>
              {/* Logo */}
              <div className="">
                <p className="text-xs text-gray-500 mb-4 font-poppins">Logo </p>
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
                          Select image or video file or drag and drop one here
                        </span>
                      </div>
                    </label>
                  )}
                </div>
              </div>
            </div>
            {/* Inputs */}
            <div className="grid grid-cols-2 gap-x-10 px-4">
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
                  onChange={(event) => setPronoun(event.currentTarget.value)}
                >
                  <option value="mr"> Mr</option>
                  <option value="mrs">Mrs</option>
                  <option value="prof">Professor</option>
                  <option value="dr">Dr</option>
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
              <div className="mb-4">
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
              </div>
            </div>
          </div>
          {/* <div className="shadow rounded shadow-zinc-400 w-full h-96"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Create;
