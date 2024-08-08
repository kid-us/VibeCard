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
import useAmbassador from "@/store/useAmbassador";
import { socialMedias } from "./AmbassadorRegister";

const schema = z.object({
  twitter: z.string().optional().optional(),
  twitch: z.string().optional(),
  youtube: z.string().optional(),
  facebook: z.string().optional(),
  instagram: z.string().optional(),
  tiktok: z.string().optional(),
  website: z.string().optional(),
  linkedin: z.string().optional(),

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
  const {
    email,
    facebook,
    firstName,
    instagram,
    lastName,
    linkedin,
    referral_code,
    youtube,
    website,
    twitter,
    twich,
    tiktok,
  } = useAmbassador();

  const navigate = useNavigate();

  const [registerError, setRegisterError] = useState("");

  const [loader, setLoader] = useState(false);

  // Default Value
  const [fName] = useState<string>(firstName ? firstName : "");
  const [lName] = useState<string>(lastName ? lastName : "");
  const [userEmail] = useState<string>(email ? email : "");
  const [userFacebook] = useState<string>(facebook ? facebook : "");
  const [userLinkedin] = useState<string>(linkedin ? linkedin : "");
  const [userTiktok] = useState<string>(tiktok ? tiktok : "");
  const [userWebsite] = useState<string>(website ? website : "");
  const [userTwich] = useState<string>(twich ? twich : "");
  const [userInstagram] = useState<string>(instagram ? instagram : "");
  const [userYoutube] = useState<string>(youtube ? youtube : "");
  const [userTwitter] = useState<string>(twitter ? twitter : "");

  const [referral, setReferral] = useState<string>(
    referral_code ? referral_code : ""
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const [showPassword, setShowPassword] = useState(false);

  const handleReferral = () => {
    axios
      .put(`${baseUrl}/api/v1/ambassador/edit-referral-code`, referral, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
              <button
                onClick={() => handleReferral()}
                className="btn-bg p-0 shadow-none h-11 mt-6 px-10 rounded text-white"
              >
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
                  value={fName}
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
                  value={lName}
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
                  value={userEmail}
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
                  {/* Tik tok */}
                  {social.value === "tiktok" && (
                    <input
                      {...register("tiktok")}
                      type="text"
                      className="text-white secondary-bg py-3 rounded w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm h-12 ps-5"
                      value={userTiktok}
                    />
                  )}
                  {/* instagram */}
                  {social.value === "instagram" && (
                    <input
                      {...register("instagram")}
                      type="text"
                      className="text-white secondary-bg py-3 rounded w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm h-12 ps-5"
                      value={userInstagram}
                    />
                  )}
                  {/* youtube */}
                  {social.value === "youtube" && (
                    <input
                      {...register("youtube")}
                      type="text"
                      className="text-white secondary-bg py-3 rounded w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm h-12 ps-5"
                      value={userYoutube}
                    />
                  )}
                  {/* facebook */}
                  {social.value === "facebook" && (
                    <input
                      {...register("facebook")}
                      type="text"
                      className="text-white secondary-bg py-3 rounded w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm h-12 ps-5"
                      value={userFacebook}
                    />
                  )}
                  {/* twitch */}
                  {social.value === "twitch" && (
                    <input
                      {...register("twitch")}
                      type="text"
                      className="text-white secondary-bg py-3 rounded w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm h-12 ps-5"
                      value={userTwich}
                    />
                  )}
                  {/* twitter */}
                  {social.value === "twitter" && (
                    <input
                      {...register("twitter")}
                      type="text"
                      className="text-white secondary-bg py-3 rounded w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm h-12 ps-5"
                      value={userTwitter}
                    />
                  )}
                  {/* linkedin */}
                  {social.value === "linkedin" && (
                    <input
                      {...register("linkedin")}
                      type="text"
                      className="text-white secondary-bg py-3 rounded w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm h-12 ps-5"
                      value={userLinkedin}
                    />
                  )}
                  {/* website */}
                  {social.value === "website" && (
                    <input
                      {...register("website")}
                      type="text"
                      className="text-white secondary-bg py-3 rounded w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm h-12 ps-5"
                      value={userWebsite}
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
