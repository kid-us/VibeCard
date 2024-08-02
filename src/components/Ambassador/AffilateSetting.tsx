import AffiliateNavbar from "./AffiliateNavbar";

import { z } from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import Button from "../Button/Button";
import axios from "axios";
import { baseUrl } from "../../services/request";
import { useNavigate } from "react-router-dom";
import AffiliateFooter from "./AffiliateFooter";

interface Social {
  name: string;
  value: string;
  icon: string;
  color: string;
}

const socialMedias: Social[] = [
  { name: "Tik Tok", value: "tiktok", icon: "bi-tiktok", color: "text-white" },
  {
    name: "Instagram",
    value: "instagram",
    icon: "bi-instagram",
    color: "text-pink-500",
  },
  {
    name: "YouTube",
    value: "youtube",
    icon: "bi-youtube",
    color: "text-red-500",
  },
  {
    name: "Facebook",
    value: "facebook",
    icon: "bi-facebook",
    color: "text-blue-500",
  },
  {
    name: "Twitch",
    value: "twitch",
    icon: "bi-twitch",
    color: "text-purple-600",
  },
  {
    name: "Twitter",
    value: "twitter",
    icon: "bi-twitter",
    color: "text-cyan-600",
  },
] as const;

const schema = z.object({
  twitter: z.string().optional().optional(),
  twitch: z.string().optional(),
  youtube: z.string().optional(),
  facebook: z.string().optional(),
  instagram: z.string().optional(),
  tiktok: z.string().optional(),

  first_name: z
    .string()
    .min(3, { message: "First Name must be greater than 3 characters." }),
  last_name: z
    .string()
    .min(3, { message: "Last Name must be greater than 3 characters." }),
  email: z.string().email({ message: "Email address required." }),
  password: z.string().min(8, {
    message: "Password must be greater than 8 characters.",
  }),
});

type FormData = z.infer<typeof schema>;

const AffiliateSetting = () => {
  const navigate = useNavigate();

  const [registerError, setRegisterError] = useState("");

  const [loader, setLoader] = useState(false);

  const [referral, setReferral] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    return;
    setLoader(true);
    axios
      .get(`${baseUrl}/api/v1/auth/check-email/${data.email}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        axios
          .post(`${baseUrl}/api/v1/auth/register`, data, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then(() => {
            navigate(`/verify?email=${data.email}`);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch(() => {
        setLoader(false);
        setRegisterError("Email already exist.");
      });
  };
  return (
    <>
      <div className="lg:container mx-auto px-2">
        <AffiliateNavbar />

        <div className="mt-10">
          <h1 className="text-xl text-white">Update Your Profile</h1>

          <div className="lg:flex bg-white my-5 rounded justify-between">
            <div className="p-4">
              <p>Referral Code</p>
              <p className="text-xs">Customize your URL referral code</p>
              <p className="text-xs">
                eg. https://vibecard.com/?ref={referral}
              </p>
            </div>
            <div className="lg:flex gap-x-7 mt-2 me-8 lg:px-0 px-5 lg:pb-0 pb-5">
              <div>
                <label htmlFor="referral" className="text-xs">
                  Referral Code
                </label>{" "}
                <br />
                <input
                  type="text"
                  name="referral"
                  className="rounded focus:outline-none h-11 secondary-bg lg:w-96 w-full text-white ps-3"
                  onChange={(e) => setReferral(e.currentTarget.value)}
                  value={referral}
                />
              </div>
              <button className="btn-bg p-0 shadow-none h-11 mt-6 px-10 rounded text-white">
                Save Change
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            {/* Email exist error */}
            {registerError !== "" && (
              <div className="relative">
                <p className="absolute -top-7 text-red-600 text-sm">
                  <span className="bi-exclamation-triangle-fill me-4"></span>
                  {registerError}
                </p>
              </div>
            )}

            <div className="lg:grid grid-cols-2 gap-x-10 bg-white rounded lg:p-8 p-4 mt-5">
              {/* First Name */}
              <div className="lg:mb-4 mb-3">
                <label
                  className="text-sm text-gray-700 block"
                  htmlFor="username"
                >
                  First Name <span className="bi-asterisk text-[5px]"></span>
                </label>
                <input
                  {...register("first_name")}
                  type="text"
                  name="first_name"
                  className={`text-white secondary-bg py-3 rounded w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm h-12 ${
                    errors.first_name && "border-red-600 border-1 border"
                  }`}
                />
                {errors.first_name && (
                  <p className="text-red-600 text-xs pt-1">
                    {errors.first_name.message}
                  </p>
                )}
              </div>

              {/* Last Name */}
              <div className="lg:mb-4 mb-3">
                <label
                  className="text-sm text-gray-700 block"
                  htmlFor="username"
                >
                  Last Name <span className="bi-asterisk text-[5px]"></span>
                </label>
                <input
                  {...register("last_name")}
                  type="text"
                  name="last_name"
                  className={`text-white secondary-bg py-3 rounded w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm h-12 ${
                    errors.email && "border-red-600 border-1 border"
                  }`}
                />
                {errors.last_name && (
                  <p className="text-red-600 text-xs pt-1">
                    {errors.last_name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="lg:mb-4 mb-3">
                <label className="text-sm text-gray-700 block" htmlFor="email">
                  Email <span className="bi-asterisk text-[5px]"></span>
                </label>
                <input
                  {...register("email")}
                  type="email"
                  name="email"
                  className={`text-white secondary-bg py-3 rounded w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm h-12 ${
                    errors.email && "border-red-600 border-1 border"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-600 text-xs pt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="lg:mb-4 mb-3 relative">
                <label
                  className="text-sm text-gray-700 block"
                  htmlFor="password"
                >
                  Password <span className="bi-asterisk text-[5px]"></span>
                </label>
                <input
                  {...register("password")}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className={`text-white secondary-bg py-3 rounded w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm h-12 ${
                    errors.password && "border-red-600 border-1 border"
                  }`}
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className={`absolute ${
                    showPassword ? "bi-eye" : "bi-eye-slash"
                  } right-2 top-8 cursor-pointer text-white px-2 text-lg border-l border-gray-500`}
                ></span>
                {errors.password && (
                  <p className="text-red-600 text-xs pt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Social medias */}
              {socialMedias.map((social) => (
                <div key={social.value} className="lg:mb-4 mb-3 relative">
                  <label
                    className="text-xs text-gray-900 block"
                    htmlFor="username"
                  >
                    {social.name}
                  </label>
                  <span
                    className={`absolute left-1 top-8 cursor-pointer px-2 text-lg border-r border-gray-500 bi-at text-white`}
                  ></span>
                  {/* Tik tok */}
                  {social.value === "tiktok" && (
                    <input
                      {...register("tiktok")}
                      type="text"
                      className="text-white secondary-bg py-3 rounded w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm h-12"
                    />
                  )}
                  {/* instagram */}
                  {social.value === "instagram" && (
                    <input
                      {...register("instagram")}
                      type="text"
                      className="text-white secondary-bg py-3 rounded w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm h-12"
                    />
                  )}
                  {/* youtube */}
                  {social.value === "youtube" && (
                    <input
                      {...register("youtube")}
                      type="text"
                      className="text-white secondary-bg py-3 rounded w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm h-12"
                    />
                  )}
                  {/* facebook */}
                  {social.value === "facebook" && (
                    <input
                      {...register("facebook")}
                      type="text"
                      className="text-white secondary-bg py-3 rounded w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm h-12"
                    />
                  )}
                  {/* twitch */}
                  {social.value === "twitch" && (
                    <input
                      {...register("twitch")}
                      type="text"
                      className="text-white secondary-bg py-3 rounded w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm h-12"
                    />
                  )}
                  {/* twitter */}
                  {social.value === "twitter" && (
                    <input
                      {...register("twitter")}
                      type="text"
                      className="text-white secondary-bg py-3 rounded w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm h-12"
                    />
                  )}
                  <span
                    className={`absolute right-2 top-8 cursor-pointer px-2 text-lg border-l border-gray-500 ${social.icon} ${social.color}`}
                  ></span>
                </div>
              ))}
              {/* Button */}
              <div className="col-span-2">
                <Button loader={loader} label="Submit" />
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* Footer */}
      <AffiliateFooter />
    </>
  );
};

export default AffiliateSetting;
