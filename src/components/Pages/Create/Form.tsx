import { useState } from "react";
import InputImages from "./InputImages";
import { useContentStore } from "../../../store/useContentStore";
import { z } from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCardData } from "../../../store/useCardData";
import Loader from "../../Loader/Loader";
import { useTextColorStore } from "../../../store/useTextColorStore";
import { useCardColorStore } from "../../../store/useCardColorStore";
import { useCoverColorStore } from "../../../store/useCoverColorStore";

import axios from "axios";
import { baseUrl } from "../../../services/request";
import Modal from "../../Modal/Modal";

interface FilePreviews {
  profile: File | null;
  cover: File | null;
  logo: File | null;
}

// Zod
const schema = z.object({
  name: z.string().min(3, { message: "Name required." }),
  company: z.string().min(3, { message: "Company required." }),
  phone: z.number().min(10, { message: "Phone number required." }),
  job: z.string().min(3, { message: "Job title required." }),
  location: z.string().min(3, { message: "Location required." }),
  email: z.string().email({ message: "Email address required." }),
});

type FormData = z.infer<typeof schema>;

const Form = () => {
  // Zustand
  const { contact, updateContacts, socialMedia } = useContentStore();
  const { button, company, jobTitle, location, name, pronoun, tagLine } =
    useTextColorStore();
  const { cardColorBg } = useCardColorStore();
  const { coverColorBg } = useCoverColorStore();
  const {
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

  // Form Hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  //   States
  const [previews, setPreviews] = useState({
    profile: null,
    cover: null,
    logo: null,
  });

  const [pictures, setPictures] = useState<FilePreviews>({
    profile: null,
    cover: null,
    logo: null,
  });

  const [fullName, setFullName] = useState("Lorem");
  const [email, setEmail] = useState("lore@example.com");
  const [phone, setPhone] = useState("098765432");
  const [userLocation, setUserLocation] = useState("Ethiopia");
  const [bio, setBio] = useState("Lorem Ipsun dolor");
  const [job, setJob] = useState("Developer");
  const [userCompany, setUserCompany] = useState("Vibecard");
  const [userPronoun, setUserPronoun] = useState("Mr");

  const [pronounError, setPronounError] = useState(false);
  const [profilePhotoError, setProfilePhotoError] = useState(false);
  const [loader, setLoader] = useState(false);
  const [modal, setModal] = useState(false);
  const [cardLink, setCardLink] = useState("");

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
    setEmail(val);
    updateIcons(val, "bi-envelope-fill", "bg-sky-900");
  };

  // Phone
  const handlePhone = (val: string) => {
    setCardPhone(val);
    setPhone(val);
    updateIcons(val, "bi-telephone-fill", "#22c55e");
  };

  // OnFormSubmit
  const onSubmit = async (data: FieldValues) => {
    // Reset errors and loader state
    setPronounError(false);
    setProfilePhotoError(false);

    // Validate required fields
    if (!userPronoun) {
      setPronounError(true);
      return;
    }
    if (!previews.profile) {
      setProfilePhotoError(true);
      return;
    }

    setLoader(true);

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
    if (pictures.cover) formData.append("cover_picture", pictures.cover);
    if (pictures.logo) formData.append("company_logo", pictures.logo);

    formData.append("pronouns", userPronoun);
    formData.append("full_name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("job_title", data.job);
    formData.append("bio", bio);
    formData.append("company_name", data.company);
    formData.append("card_layout", "1");
    formData.append("card_type", "business");
    formData.append("card_style_schema", JSON.stringify(cardStyles));
// "ey5KX3jjfMKp2N0Lvcel5HheJrCIxX3SmscPtVb7R8ackEnBFPEsR3ta-MHtivIjyv3Pf8zyco8JjE2a5WLlaQ"
    try {
      const response = await axios.post(
        `${baseUrl}/api/v1/cards/create`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      console.log(response);
      setModal(true);
      setCardLink(response.data.link);
    } catch (error) {
      console.error(error);
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="relative lg:px-5">
      {modal && (
        <Modal link={cardLink} onModal={(val: boolean) => setModal(val)} />
      )}
      <p className="lg:text-2xl text-xl font-poppins mt-2">
        Create your Business card
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="lg:px-8 pt-10 pb-16 lg:mt-6 shadow lg:shadow-zinc-400 lg:rounded-xl bg-white"
      >
        {/* Images */}
        <div className="lg:flex justify-between flex-shrink-0 grid grid-cols-3 gap-1">
          {/* Profile */}
          <InputImages
            title="Profile Picture"
            type="profile"
            onPreviewChange={handlePreviewChange}
            onHandleFile={handleFile}
            error={profilePhotoError}
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
        <div className="grid grid-cols-2 lg:gap-x-8 gap-x-3 mt-5 lg:p-4 lg:h-[48dvh] overflow-y-scroll">
          {/* Pronoun */}
          <div className="mb-4">
            <label className="text-xs lg:text-gray-600 block" htmlFor="pronoun">
              Pronoun <span className="text-red-700 text-2xl">*</span>
            </label>

            <select
              name="pronoun"
              className="bg-gray-200 py-3 rounded-lg focus:outline-none w-full mt-1 block shadow-sm shadow-zinc-400 font-poppins text-sm px-3 text-black"
              onChange={(event) => {
                setUserPronoun(event.currentTarget.value);
                setCardPronoun(event.currentTarget.value);
              }}
              defaultValue={userPronoun}
            >
              <option value="" hidden></option>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Prof">Professor</option>
              <option value="Dr">Dr</option>
            </select>

            {pronounError && (
              <p className="text-red-600 text-xs pt-1">Pronoun required.</p>
            )}
          </div>

          {/* Name */}
          <div className="mb-3">
            <label className="text-xs lg:text-gray-600 block" htmlFor="name">
              Name
              <span className="text-red-700 text-2xl">*</span>
            </label>
            <input
              {...register("name")}
              type="text"
              name="name"
              className={`lg:bg-gray-200 py-3 rounded-md focus:outline-none w-full mt-1 block shadow-sm shadow-zinc-400 font-poppins text-sm px-3 text-black ${
                errors.name && "border-red-600 border-1 border"
              }`}
              onChange={(e) => {
                setFullName(e.currentTarget.value);
                setCardName(e.currentTarget.value);
              }}
              value={fullName}
              // autoComplete="off"
            />
            {errors.name && (
              <p className="text-red-600 text-xs pt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="text-xs lg:text-gray-600 block" htmlFor="email">
              Email
              <span className="text-red-700 text-2xl">*</span>
            </label>
            <input
              {...register("email")}
              type="email"
              name="email"
              className={`lg:bg-gray-200 py-3 rounded-md focus:outline-none w-full mt-1 block shadow-sm shadow-zinc-400 font-poppins text-sm px-3 text-black ${
                errors.email && "border-red-600 border-1 border"
              }`}
              onChange={(e) => handleEmail(e.currentTarget.value)}
              value={email}
              // autoComplete="off"
            />
            {errors.email && (
              <p className="text-red-600 text-xs pt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div className="mb-3">
            <label className="text-xs lg:text-gray-600 block" htmlFor="phone">
              Phone
              <span className="text-red-700 text-2xl">*</span>
            </label>
            <input
              {...register("phone", { valueAsNumber: true })}
              type="tel"
              name="phone"
              className={`lg:bg-gray-200 py-3 rounded-md focus:outline-none w-full mt-1 block shadow-sm shadow-zinc-400 font-poppins text-sm px-3 text-black ${
                errors.phone && "border-red-600 border-1 border"
              }`}
              onChange={(e) => handlePhone(e.currentTarget.value)}
              value={phone}
              // autoComplete="off"
            />
            {errors.phone && (
              <p className="text-red-600 text-xs pt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Job-Title */}
          <div className="mb-3">
            <label
              className="text-xs lg:text-gray-600 block"
              htmlFor="job-title"
            >
              Job Title
              <span className="text-red-700 text-2xl">*</span>
            </label>
            <input
              {...register("job")}
              type="text"
              name="job"
              className={`lg:bg-gray-200 py-3 rounded-md focus:outline-none w-full mt-1 block shadow-sm shadow-zinc-400 font-poppins text-sm px-3 text-black ${
                errors.job && "border-red-600 border-1 border"
              }`}
              onChange={(e) => {
                setJob(e.currentTarget.value);
                setCardJob(e.currentTarget.value);
              }}
              value={job}
              // autoComplete="off"
            />
            {errors.job && (
              <p className="text-red-600 text-xs pt-1">{errors.job.message}</p>
            )}
          </div>

          {/* Location */}
          <div className="mb-3">
            <label
              className="text-xs lg:text-gray-600 block"
              htmlFor="location"
            >
              Location
              <span className="text-red-700 text-2xl">*</span>
            </label>
            <input
              {...register("location")}
              type="text"
              name="location"
              className={`lg:bg-gray-200 py-3 rounded-md focus:outline-none w-full mt-1 block shadow-sm shadow-zinc-400 font-poppins text-sm px-3 text-black ${
                errors.location && "border-red-600 border-1 border"
              }`}
              onChange={(e) => {
                setUserLocation(e.currentTarget.value);
                setCardLocation(e.currentTarget.value);
              }}
              value={userLocation}
              // autoComplete="off"
            />
            {errors.location && (
              <p className="text-red-600 text-xs pt-1">
                {errors.location.message}
              </p>
            )}
          </div>

          {/* Company */}
          <div className="mb-3">
            <label className="text-xs lg:text-gray-600 block" htmlFor="company">
              Company
              <span className="text-red-700 text-2xl">*</span>
            </label>
            <input
              {...register("company")}
              type="text"
              name="company"
              className={`lg:bg-gray-200 py-3 rounded-md focus:outline-none w-full mt-1 block shadow-sm shadow-zinc-400 font-poppins text-sm px-3 text-black ${
                errors.company && "border-red-600 border-1 border"
              }`}
              onChange={(e) => {
                setUserCompany(e.currentTarget.value);
                setCardCompany(e.currentTarget.value);
              }}
              value={userCompany}
              // autoComplete="off"
            />
            {errors.company && (
              <p className="text-red-600 text-xs pt-1">
                {errors.company.message}
              </p>
            )}
          </div>

          {/* Tag-line || Bio*/}
          <div className="mb-3">
            <label
              className="text-xs lg:text-gray-600 block"
              htmlFor="tag-line"
            >
              Bio
              <span className="text-transparent text-2xl">*</span>
            </label>
            <input
              type="text"
              name="tag-line"
              className={`lg:bg-gray-200 py-3 rounded-md focus:outline-none w-full mt-1 block shadow-sm shadow-zinc-400 font-poppins text-sm px-3 text-black`}
              onChange={(e) => {
                setBio(e.currentTarget.value);
                setCardTagLine(e.currentTarget.value);
              }}
              value={bio}
              // autoComplete="off"
            />
          </div>
        </div>

        {/* Button */}
        <div className="absolute -bottom-2 lg:pe-10 w-full lg:left-5">
          <div className="flex justify-end rounded-b-xl lg:bg-white bg-zinc-800 py-3 lg:shadow border">
            <button className="bg-sky-800 shadow-md active:shadow-none shadow-gray-900 text-white rounded px-16 lg:py-3 lg:me-10 lg:w-auto w-full">
              {loader ? <Loader /> : "Create"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
