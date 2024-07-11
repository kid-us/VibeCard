import { useState } from "react";
import InputImages from "./InputImages";
import { useContentStore } from "../../store/useContentStore";
import { useCardData } from "../../store/useCardData";
import Loader from "../Loader/Loader";
import { useTextColorStore } from "../../store/useTextColorStore";
import { useCardColorStore } from "../../store/useCardColorStore";
import { useCoverColorStore } from "../../store/useCoverColorStore";

import axios from "axios";
import { baseUrl } from "../../services/request";
import { Link, useLocation } from "react-router-dom";

interface Props {
  layout: string;
}

interface FilePreviews {
  profile: File | null;
  cover: File | null;
  logo: File | null;
}

const EditForm = ({ layout }: Props) => {
  const pageLocation = useLocation();
  const searchParams = new URLSearchParams(pageLocation.search);
  const editedUrl = searchParams.get("edit");

  const [popUp, setPopUp] = useState(true);
  const [cardEdited, setCardEdited] = useState(false);
  // Form
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [userLocation, setUserLocation] = useState("");
  const [bio, setBio] = useState("");
  const [job, setJob] = useState("");
  const [userCompany, setUserCompany] = useState("");
  const [userPronoun, setUserPronoun] = useState("");

  const [loader, setLoader] = useState(false);

  // Zustand
  const { contact, updateContacts, socialMedia } = useContentStore();
  const { button, company, jobTitle, location, name, pronoun, tagLine } =
    useTextColorStore();
  const { cardColorBg } = useCardColorStore();
  const { coverColorBg } = useCoverColorStore();
  const {
    companyVal,
    emailVal,
    jobTitleVal,
    locationVal,
    nameVal,
    phoneVal,
    pronounVal,
    tagLineVal,
    setCardCompany,
    setPreview,
    setCardEmail,
    setCardJob,
    setCardLocation,
    setCardName,
    setCardPhone,
    setCardPronoun,
    setCardTagLine,
  } = useCardData();

  //   States
  const [, setPreviews] = useState({
    profile: null,
    cover: null,
    logo: null,
  });

  const [pictures, setPictures] = useState<FilePreviews>({
    profile: null,
    cover: null,
    logo: null,
  });

  //   Preview Images
  const handlePreviewChange = (
    type: "profile" | "cover" | "logo",
    preview: string | null
  ) => {
    setPreviews((prevPreviews) => ({
      ...prevPreviews,
      [type]: preview,
    }));
    setPreview(type, preview);
  };

  // Image Fiels
  const handleFile = (
    type: "profile" | "cover" | "logo",
    file: File | null
  ) => {
    setPictures((prevPreviews) => ({
      ...prevPreviews,
      [type]: file,
    }));
  };

  //   Icon Update
  function updateIcons(val: string, icons: string, IconColor: string) {
    const iconExists = contact.some((c) => c.icon == icons);
    if (val !== "") {
      if (iconExists) {
        updateContacts(
          contact.map((c) => (c.icon == icons ? { ...c, link: val } : c))
        );
      } else {
        updateContacts([
          ...contact,
          {
            link: val,
            color: IconColor,
            icon: icons,
          },
        ]);
      }
    } else {
      const filtered = contact.filter((c) => c.icon !== icons);
      updateContacts(filtered);
    }
  }

  // Email
  const handleEmail = (val: string) => {
    setCardEmail(val);
    if (val !== "") {
      setEmail(val);
      updateIcons(val, "bi-envelope-fill", "bg-sky-900");
    }
  };

  // Phone
  const handlePhone = (val: string) => {
    setCardPhone(val);
    if (val !== "") {
      setPhone(val);
      updateIcons(val, "bi-telephone-fill", "#22c55e");
    }
  };

  //   Form Errors
  const [fullNameError, setFullNameError] = useState(false);
  const [companyError, setCompanyError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [locationError, setLocationError] = useState(false);
  const [jobError, setJobError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // OnFormSubmit
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoader(true);

    // Validate Inputs
    if (fullName !== "" && fullName.length < 3) {
      setFullNameError(true);
      setLoader(false);
      return;
    } else {
      setFullNameError(false);
    }
    if (userCompany !== "" && userCompany.length < 1) {
      setCompanyError(true);
      setLoader(false);
      return;
    } else {
      setCompanyError(false);
    }

    if (phone !== "" && phone.length < 6) {
      setPhoneError(true);
      setLoader(false);
      return;
    } else {
      setPhoneError(false);
    }
    if (userLocation !== "" && userLocation.length < 3) {
      setLocationError(true);
      setLoader(false);
      return;
    } else {
      setLocationError(false);
    }
    if (job !== "" && job.length < 3) {
      setJobError(true);
      setLoader(false);
      return;
    } else {
      setJobError(false);
    }
    if (emailRegex.test(email)) {
      setEmailError(true);
      setLoader(false);
      return;
    } else {
      setEmailError(false);
    }
    // Define card styles
    const cardStyles = {
      // TEXT
      pronoun: {
        font_size: pronoun.size,
        font_style: pronoun.font,
        font_color: pronoun.color,
      },
      jobTitle: {
        font_size: jobTitle.size,
        font_style: jobTitle.font,
        font_color: jobTitle.color,
      },
      bio: {
        font_size: tagLine.size,
        font_style: tagLine.font,
        font_color: tagLine.color,
      },
      company: {
        font_size: company.size,
        font_style: company.font,
        font_color: company.color,
      },
      location: {
        font_size: location.size,
        font_style: location.font,
        font_color: location.color,
      },
      name: {
        font_size: name.size,
        font_style: name.font,
        font_color: name.color,
      },
      button: {
        text_color: button.font,
        bg_color: button.color,
      },
      // Card BG
      cardBg: { bg_color: cardColorBg },
      // Cover BG
      coverBG: { bg_color: coverColorBg },
      // Contact
      contacts: contact,
      // Social Media
      socialMedia: socialMedia,
    };

    // Prepare form data
    const formData = new FormData();
    if (pictures.profile) formData.append("main_picture", pictures.profile);
    if (pictures.cover) formData.append("covor_picture", pictures.cover);
    if (pictures.logo) formData.append("company_logo", pictures.logo);
    formData.append("pronouns", userPronoun);
    formData.append("full_name", fullName);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("location", userLocation);
    formData.append("job_title", job);
    formData.append("bio", bio);
    formData.append("company_name", userCompany);
    formData.append("card_layout", layout);
    formData.append("card_type", "business");
    formData.append("card_style_schema", JSON.stringify(cardStyles));

    const formDataObject: { [key: string]: any } = {};
    formData.forEach((value, key) => {
      if (value instanceof File) {
        formDataObject[key] = {
          name: value.name,
          type: value.type,
          size: value.size,
        };
      } else {
        formDataObject[key] = value;
      }
    });
    console.log(formDataObject);

    try {
      await axios.put(`${baseUrl}/api/v1/cards/edit/${editedUrl}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      setCardEdited(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="relative lg:px-5">
      {/* Modal */}
      {popUp && (
        <>
          <div className="overlay w-full z-50"></div>
          <div className="flex justify-center align-center">
            <div className="absolute lg:top-40 top-28 z-50 lg:w-[60%] secondary-bg rounded-xl border-gradient-2">
              <p
                onClick={() => setPopUp(false)}
                className="absolute right-5 top-3 bi-x-lg cursor-pointer"
              ></p>
              <div className="p-8">
                <h1 className="text-gray-400 text-xl chakra">Notice:</h1>
                <p className="my-3 text-sm text-gray-300 font-poppins">
                  Only changed fields will be updated. If a field value is not
                  provided, the previous data for that field will remain
                  unchanged. You can choose to update a specific field or make
                  changes to the entire card
                </p>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Edited */}
      {cardEdited && (
        <>
          <div className="overlay w-full z-50"></div>
          <div className="flex justify-center align-center">
            <div className="absolute lg:top-40 top-28 z-50 lg:w-[60%] secondary-bg rounded-xl border-gradient-2">
              <div className="p-8">
                <p className="text-lg chakra text-gray-300 my-5">
                  You have Edited (Updated) your card Successfully.
                </p>

                <Link
                  to={"/dashboard"}
                  className="btn-bg shadow-none py-3 text-sm"
                >
                  Goto Dashboard
                </Link>
              </div>
            </div>
          </div>
        </>
      )}

      <p className="mb-4">Create your Business card</p>

      <form
        onSubmit={handleFormSubmit}
        className="lg:px-8 lg:pt-10 lg:pb-16 lg:mt-6 lg:mb-0 pt-10 shadow lg:shadow-zinc-400 rounded-xl secondary-bg lg:overflow-auto lg:h-auto h-[69dvh] overflow-y-scroll border border-gray-700 mb-10"
      >
        {/* Images */}
        <div className="lg:flex justify-between flex-shrink-0 grid grid-cols-3 gap-1 lg:px-0 px-1">
          {/* Profile */}
          <InputImages
            title="Profile Picture"
            type="profile"
            onPreviewChange={handlePreviewChange}
            onHandleFile={handleFile}
          />
          {/* Cover */}
          <InputImages
            title="Cover Photo"
            type="cover"
            onPreviewChange={handlePreviewChange}
            onHandleFile={handleFile}
          />
          <InputImages
            title="Company Logo"
            type="logo"
            onPreviewChange={handlePreviewChange}
            onHandleFile={handleFile}
          />
        </div>

        {/* Inputs Fields */}
        <div className="grid grid-cols-2 lg:gap-x-8 gap-x-3 mt-5 lg:p-4 lg:px-0 px-2 lg:h-[47dvh] overflow-y-scroll">
          {/* Pronoun */}
          <div className="mb-4">
            <label
              className="lg:text-xs text-sm text-gray-100 block"
              htmlFor="pronoun"
            >
              Pronoun <span className="text-red-700 text-2xl">*</span>{" "}
            </label>

            <select
              name="pronoun"
              className="bg-transparent secondary-bg border border-gray-600 text-white py-3 rounded-lg focus:outline-none w-full mt-1 block shadow-sm shadow-zinc-400 font-poppins text-sm px-3"
              onChange={(event) => {
                setUserPronoun(event.currentTarget.value);
                setCardPronoun(event.currentTarget.value);
              }}
              defaultValue={pronounVal !== null ? pronounVal : userPronoun}
            >
              <option value="" hidden></option>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Prof">Professor</option>
              <option value="Dr">Dr</option>
            </select>
          </div>

          {/* Name */}
          <div className="mb-3">
            <label
              className="lg:text-xs text-sm text-gray-100 block"
              htmlFor="name"
            >
              Name
              <span className="text-red-700 text-2xl">*</span>
            </label>
            <input
              type="text"
              name="name"
              className={`bg-transparent border border-gray-600 text-white py-3 rounded-md focus:outline-none w-full mt-1 block shadow-sm shadow-zinc-400 font-poppins text-sm px-3`}
              onChange={(e) => {
                setFullName(e.currentTarget.value);
                setCardName(e.currentTarget.value);
              }}
              value={nameVal !== null ? nameVal : fullName}
            />

            {fullNameError && (
              <p className="text-red-600 text-xs pt-1">
                Name must be greater than 3 chars.
              </p>
            )}
          </div>

          {/* Email */}
          <div className="mb-3">
            <label
              className="lg:text-xs text-sm text-gray-100 block"
              htmlFor="email"
            >
              Email
              <span className="text-red-700 text-2xl">*</span>
            </label>
            <input
              type="email"
              name="email"
              className={`bg-transparent border border-gray-600 text-white py-3 rounded-md focus:outline-none w-full mt-1 block shadow-sm shadow-zinc-400 font-poppins text-sm px-3`}
              onChange={(e) => handleEmail(e.currentTarget.value)}
              value={emailVal !== null ? emailVal : email}
            />

            {emailError && (
              <p className="text-red-600 text-xs pt-1">
                Email must be a valid address.
              </p>
            )}
          </div>

          {/* Phone */}
          <div className="mb-3">
            <label
              className="lg:text-xs text-sm text-gray-100 block"
              htmlFor="phone"
            >
              Phone
              <span className="text-red-700 text-2xl">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              className={`bg-transparent border border-gray-600 text-white py-3 rounded-md focus:outline-none w-full mt-1 block shadow-sm shadow-zinc-400 font-poppins text-sm px-3`}
              onChange={(e) => handlePhone(e.currentTarget.value)}
              value={phoneVal !== null ? phoneVal : phone}
              // autoComplete="off"
            />

            {phoneError && (
              <p className="text-red-600 text-xs pt-1">
                Phone must be at least 10 chars.
              </p>
            )}
          </div>

          {/* Job-Title */}
          <div className="mb-3">
            <label
              className="lg:text-xs text-sm text-gray-100 block"
              htmlFor="job-title"
            >
              Job Title
              <span className="text-red-700 text-2xl">*</span>
            </label>
            <input
              type="text"
              name="job"
              className={`bg-transparent border border-gray-600 text-white py-3 rounded-md focus:outline-none w-full mt-1 block shadow-sm shadow-zinc-400 font-poppins text-sm px-3`}
              onChange={(e) => {
                setJob(e.currentTarget.value);
                setCardJob(e.currentTarget.value);
              }}
              value={jobTitleVal !== null ? jobTitleVal : job}
            />

            {jobError && (
              <p className="text-red-600 text-xs pt-1">
                Job title must be greater than 3 chars.
              </p>
            )}
          </div>

          {/* Location */}
          <div className="mb-3">
            <label
              className="lg:text-xs text-sm text-gray-100 block"
              htmlFor="location"
            >
              Location
              <span className="text-red-700 text-2xl">*</span>
            </label>
            <input
              type="text"
              name="location"
              className={`bg-transparent border border-gray-600 text-white py-3 rounded-md focus:outline-none w-full mt-1 block shadow-sm shadow-zinc-400 font-poppins text-sm px-3`}
              onChange={(e) => {
                setUserLocation(e.currentTarget.value);
                setCardLocation(e.currentTarget.value);
              }}
              value={locationVal !== null ? locationVal : userLocation}
            />

            {locationError && (
              <p className="text-red-600 text-xs pt-1">
                Location must be greater than 3 chars.
              </p>
            )}
          </div>

          {/* Company */}
          <div className="mb-3">
            <label
              className="lg:text-xs text-sm text-gray-100 block"
              htmlFor="company"
            >
              Company
              <span className="text-red-700 text-2xl">*</span>
            </label>
            <input
              type="text"
              name="company"
              className={`bg-transparent border border-gray-600 text-white py-3 rounded-md focus:outline-none w-full mt-1 block shadow-sm shadow-zinc-400 font-poppins text-sm px-3`}
              onChange={(e) => {
                setUserCompany(e.currentTarget.value);
                setCardCompany(e.currentTarget.value);
              }}
              value={companyVal !== null ? companyVal : userCompany}
            />

            {companyError && (
              <p className="text-red-600 text-xs pt-1">
                Company name must be at least 1 chars.
              </p>
            )}
          </div>

          {/* Tag-line || Bio*/}
          <div className="mb-3">
            <label
              className="lg:text-xs text-sm text-gray-100 block"
              htmlFor="tag-line"
            >
              Bio
              <span className="text-transparent text-2xl">*</span>
            </label>
            <input
              type="text"
              name="tag-line"
              className={`bg-transparent border border-gray-600 text-white py-3 rounded-md focus:outline-none w-full mt-1 block shadow-sm shadow-zinc-400 font-poppins text-sm px-3`}
              onChange={(e) => {
                setBio(e.currentTarget.value);
                setCardTagLine(e.currentTarget.value);
              }}
              value={tagLineVal !== null ? tagLineVal : bio}
            />
          </div>
        </div>

        {/* Button */}
        <div className="lg:absolute -bottom-2 lg:pe-10 w-full lg:left-5 lg:mb-0">
          <div
            className={`flex justify-end rounded-b-xl secondary-bg py-3 lg:shadow border border-gray-700`}
          >
            <button
              type="submit"
              className="btn-bg shadow-md active:shadow-none shadow-gray-900 text-white rounded px-16 lg:py-3 py-3 lg:me-10 lg:w-auto w-full lg:mx-0 mx-5"
            >
              {loader ? <Loader /> : "Update"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
