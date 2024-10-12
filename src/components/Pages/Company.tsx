import { company } from "@/assets";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

import { z } from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import useDocumentTitle from "@/hooks/useDocumentTitle";

const schema = z.object({
  fName: z
    .string()
    .min(3, { message: "First name must be greater than 3 characters." }),
  lName: z
    .string()
    .min(3, { message: "Last name must be greater than 3 characters." }),
  job: z
    .string()
    .min(3, { message: "JobTitle must be greater than 2 characters." }),
  company: z.string().min(3, { message: "Company name required." }),
  phone: z.string().min(3, { message: "Valid Phone number required." }),
  people: z
    .string()
    .min(3, { message: "Number of people must be grater than 2 chars." }),
  how_many: z.string().min(3, {
    message: "Number of digital cards must be grater than 2 chars.",
  }),

  email: z.string().email({ message: "Email is required." }),
});

type FormData = z.infer<typeof schema>;

const Company = () => {
  const [title] = useState("Vibecard Companies and Teams");
  useDocumentTitle(title);

  const { t } = useTranslation();

  const [loader, setLoader] = useState<boolean>(false);

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  // On Form Submit
  const onSubmit = (data: FieldValues) => {
    console.log(data);
    setLoader(true);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto lg:px-9 px-2">
        <div className="grid lg:grid-cols-2 lg:gap-x-4 mt-6">
          <div className="lg:mt-40 mt-5 overflow-hidden">
            <p className="text-white font-poppins lg:text-4xl text-3xl mb-5 lg:px-0 px-3">
              {t("company-title")}
            </p>
            <p className="text-white font-poppins text-lg lg:px-0 px-3">
              {t("company-desc")}
            </p>
          </div>
          <div className="flex justify-center lg:mt-0 mt-8">
            <img
              src={company}
              alt="Company"
              className="rounded lg:w-full w-96"
            />
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Login error */}
          {/* {loginError !== "" && (
            <div className="relative">
              <p className=" -top-10 text-red-600 text-sm">
                <span className="bi-exclamation-triangle-fill me-4"></span>
                {loginError}
              </p>
            </div>
          )} */}
          <p className="text-white text-center mt-16 font-poppins lg:text-3xl text-xl">
            {t("ready-to-get-started")}
          </p>
          <p className="text-center mt-2 font-poppins text-gray-300 lg:text-lg">
            {t("submit-the-form")}
          </p>
          <div className="grid lg:grid-cols-2 gap-x-5 lg:px-20 px-2 mt-10">
            {/* Email */}
            <div className="mb-5">
              <label
                className="text-sm text-gray-400 block font-poppins"
                htmlFor="email"
              >
                {t("email")}
              </label>
              <input
                {...register("email")}
                type="email"
                name="email"
                className="text-black font-poppins text-sm w-full py-3 mt-2 bg-gray-100 rounded focus:outline-none px-5 shadow shadow-gray-300"
              />
              {errors.email && (
                <p className="text-red-600 text-xs pt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* First Name */}
            <div className="mb-5">
              <label
                className="text-sm text-gray-400 block font-poppins"
                htmlFor="fName"
              >
                {t("fName")}
              </label>
              <input
                {...register("fName")}
                type="fName"
                name="fName"
                className="text-black font-poppins text-sm w-full py-3 mt-2 bg-gray-100 rounded focus:outline-none px-5 shadow shadow-gray-300"
              />
              {errors.fName && (
                <p className="text-red-600 text-xs pt-1">
                  {errors.fName.message}
                </p>
              )}
            </div>

            {/* Last Name */}
            <div className="mb-5">
              <label
                className="text-sm text-gray-400 block font-poppins"
                htmlFor="lName"
              >
                {t("lName")}
              </label>
              <input
                {...register("lName")}
                type="lName"
                name="lName"
                className="text-black font-poppins text-sm w-full py-3 mt-2 bg-gray-100 rounded focus:outline-none px-5 shadow shadow-gray-300"
              />
              {errors.lName && (
                <p className="text-red-600 text-xs pt-1">
                  {errors.lName.message}
                </p>
              )}
            </div>

            {/* Job Title */}
            <div className="mb-5">
              <label
                className="text-sm text-gray-400 block font-poppins"
                htmlFor="job"
              >
                {t("job")}
              </label>
              <input
                {...register("job")}
                type="job"
                name="job"
                className="text-black font-poppins text-sm w-full py-3 mt-2 bg-gray-100 rounded focus:outline-none px-5 shadow shadow-gray-300"
              />
              {errors.job && (
                <p className="text-red-600 text-xs pt-1">
                  {errors.job.message}
                </p>
              )}
            </div>

            {/* Company */}
            <div className="mb-5">
              <label
                className="text-sm text-gray-400 block font-poppins"
                htmlFor="company"
              >
                {t("company") + "Name"}
              </label>
              <input
                {...register("company")}
                type="company"
                name="company"
                className="text-black font-poppins text-sm w-full py-3 mt-2 bg-gray-100 rounded focus:outline-none px-5 shadow shadow-gray-300"
              />
              {errors.company && (
                <p className="text-red-600 text-xs pt-1">
                  {errors.company.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div className="mb-5">
              <label
                className="text-sm text-gray-400 block font-poppins"
                htmlFor="phone"
              >
                {t("phone")}
              </label>
              <input
                {...register("phone")}
                type="phone"
                name="phone"
                className="text-black font-poppins text-sm w-full py-3 mt-2 bg-gray-100 rounded focus:outline-none px-5 shadow shadow-gray-300"
              />
              {errors.phone && (
                <p className="text-red-600 text-xs pt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* How many People */}
            <div className="mb-5">
              <label
                className="text-sm text-gray-400 block font-poppins"
                htmlFor="people"
              >
                {t("how-many")}
              </label>
              <input
                {...register("people")}
                type="people"
                name="people"
                className="text-black font-poppins text-sm w-full py-3 mt-2 bg-gray-100 rounded focus:outline-none px-5 shadow shadow-gray-300"
              />
              {errors.people && (
                <p className="text-red-600 text-xs pt-1">
                  {errors.people.message}
                </p>
              )}
            </div>

            {/* How many Card*/}
            <div className="mb-5">
              <label
                className="text-sm text-gray-400 block font-poppins"
                htmlFor="how_many"
              >
                {t("how-many-card")}
              </label>
              <input
                {...register("how_many")}
                type="how_many"
                name="how_many"
                className="text-black font-poppins text-sm w-full py-3 mt-2 bg-gray-100 rounded focus:outline-none px-5 shadow shadow-gray-300"
              />
              {errors.how_many && (
                <p className="text-red-600 text-xs pt-1">
                  {errors.how_many.message}
                </p>
              )}
            </div>
          </div>

          {/* Button */}
          <div className="lg:px-20 px-2">
            <Button loader={loader} label="Submit" />
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Company;
