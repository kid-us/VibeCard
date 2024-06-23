import { useState } from "react";
import InputImages from "./InputImages";
import { useContentStore } from "../../../store/useContentStore";
import { z } from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCardData } from "../../../store/useCardData";
// import axios from "axios";
// import { baseUrl } from "../../../services/request";

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
  const { contact, updateContacts } = useContentStore();
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

  //   const [name, setName] = useState("Lorem");
  //   const [email, setEmail] = useState("lore@gmail.com");
  //   const [phone, setPhone] = useState("0993866658");
  //   const [location, setLocation] = useState("Ethiopia");
  //   const [tagLine, setTagLine] = useState("Lorem ipsum dolor");
  //   const [jobTitle, setJobTitle] = useState("Developer");
  //   const [company, setCompany] = useState("Vibecard");
  //   const [pronoun, setPronoun] = useState("Mr");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [tagLine, setTagLine] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [pronoun, setPronoun] = useState("");
  const [pronounError, setPronounError] = useState(false);
  const [profilePhotoError, setProfilePhotoError] = useState(false);

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

  // On Form Submit
  const onSubmit = (data: FieldValues) => {
    if (pronoun === "") {
      setPronounError(true);
      return;
    }
    if (previews.profile === null) {
      setProfilePhotoError(true);
      return;
    }

    // Prepare form data
    const formData = new FormData();

    // Append profile pictures if available
    if (pictures.profile) {
      formData.append("main_picture", pictures.profile);
    }
    if (pictures.cover) {
      formData.append("cover_picture", pictures.cover);
    }
    if (pictures.logo) {
      formData.append("company_logo", pictures.logo);
    }

    // Append other form fields
    formData.append("pronouns", pronoun);
    formData.append("full_name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("job_title", data.job);
    formData.append("bio", tagLine);
    formData.append("company_name", data.company);
    formData.append("card_type", "business");

    console.log(Object.fromEntries(formData));

    // axios
    //   .post(`${baseUrl}//api/v1/cards/create`, formData, {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     withCredentials: true,
    //   })
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    //     bio: "Lorem ipsum dolor"
    // card_type: "business"
    // company_logo: File {name: '2023-10-13 00.59.56 127.0.0.1 67475a89e620.png', lastModified: 1697147996376, lastModifiedDate: Fri Oct 13 2023 00:59:56 GMT+0300 (East Africa Time), webkitRelativePath: '', size: 2662, …}
    // company_name: "Vibecard"
    // cover_picture: File {name: '2023-10-12 23.48.37 127.0.0.1 efa36a86fa2f.png', lastModified: 1697143717534, lastModifiedDate: Thu Oct 12 2023 23:48:37 GMT+0300 (East Africa Time), webkitRelativePath: '', size: 294608, …}
    // email: "lore@gmail.com"
    // full_name: "Lorem"
    // job_title: "Developer"
    // main_picture: File {name: '2023-10-15 10.38.09 github.com bff66448c7dc.png', lastModified: 1697355489434, lastModifiedDate: Sun Oct 15 2023 10:38:09 GMT+0300 (East Africa Time), webkitRelativePath: '', size: 154795, …}
    // phone: "993866658"
    // pronouns: "Mr"
  };

  return (
    <div className="relative lg:px-5">
      <p className="lg:text-2xl text-xl font-poppins mt-2">
        Create your Business card
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="lg:px-8 pt-10 pb-16 lg:mt-6 shadow lg:shadow-zinc-400 lg:rounded-xl"
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
        <div className="grid grid-cols-2 lg:gap-x-8 gap-x-3 mt-5 lg:p-4 lg:h-[47dvh] overflow-y-scroll">
          {/* Pronoun */}
          <div className="mb-4">
            <label className="text-xs lg:text-gray-600 block" htmlFor="pronoun">
              Pronoun <span className="text-red-700 text-2xl">*</span>
            </label>

            <select
              name="pronoun"
              className="bg-gray-200 py-3 rounded-lg focus:outline-none w-full mt-1 block shadow-sm shadow-zinc-400 font-poppins text-sm px-3 text-black"
              onChange={(event) => {
                setPronoun(event.currentTarget.value);
                setCardPronoun(event.currentTarget.value);
              }}
              defaultValue={pronoun}
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
                setName(e.currentTarget.value);
                setCardName(e.currentTarget.value);
              }}
              value={name}
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
                setJobTitle(e.currentTarget.value);
                setCardJob(e.currentTarget.value);
              }}
              value={jobTitle}
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
                setLocation(e.currentTarget.value);
                setCardLocation(e.currentTarget.value);
              }}
              value={location}
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
                setCompany(e.currentTarget.value);
                setCardCompany(e.currentTarget.value);
              }}
              value={company}
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
                setTagLine(e.currentTarget.value);
                setCardTagLine(e.currentTarget.value);
              }}
              value={tagLine}
              // autoComplete="off"
            />
          </div>
        </div>

        {/* Button */}
        <div className="absolute -bottom-3 lg:pe-10 w-full lg:left-5">
          <div className="flex justify-end rounded-b-xl lg:bg-white bg-zinc-800 py-2 lg:shadow shadow-zinc-400">
            <button className="bg-sky-800 shadow-md active:shadow-none shadow-gray-900 text-white rounded px-16 lg:py-2 py-3 me-1 w-full">
              Create
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
