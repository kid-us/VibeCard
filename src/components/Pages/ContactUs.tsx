import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
// import axios from "axios";
// import { baseUrl } from "@/services/request";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import Button from "../Button/Button";

const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be greater than 3 characters." }),
  email: z.string().email({ message: "Email address required" }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type FormData = z.infer<typeof schema>;

const ContactUs = () => {
  const [title] = useState("Contact Us");
  useDocumentTitle(title);

  const [errorMsg, setErrorMsg] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);
  const [loader, setLoader] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    console.log(data);

    setLoader(true);
    setSuccessMsg(true);
    // axios
    //   .post(`${baseUrl}/api/v1/auth/update`, data, {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     withCredentials: true,
    //   })
    //   .then(() => {
    //     setSuccessMsg(true);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    setErrorMsg(true);
    //     setLoader(false);
    //   });
  };
  return (
    <>
      <Navbar />

      {/* Modal */}
      {successMsg && (
        <>
          <div className="overlay w-full z-50"></div>
          <div className="flex justify-center align-center">
            <div className="fixed lg:top-60 top-44 z-50 lg:w-[30%] lg:mx-0 mx-1 secondary-bg rounded-xl border-gradient-2">
              <button
                onClick={() => setSuccessMsg(false)}
                className="absolute right-5 top-3 bi-x-lg text-white"
              ></button>
              <div className="p-8">
                <div className="text-center mt-4">
                  <p className="bi-check-circle-fill text-green-500 text-4xl"></p>
                  <p className="text-white mt-5 text-xl chakra">
                    Thank you for sending us a message Message send
                    Successfully!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <div className="lg:container mx-auto text-white mt-14 px-2">
        <p className="text-4xl font-extrabold lg:text-center">Let's Chat!</p>
        <div className="flex justify-center">
          <div className="lg:w-[50%] w-full">
            <p className="mt-3 text-xl text-gray-300">
              Question? Complaint? Complement? Idea for a new product? We want
              to hear from you even if it's just to say hi.
            </p>
          </div>
        </div>
        {errorMsg && (
          <p className="text-center mt-10 text-red-500">
            We couldn't accept messages right now!
          </p>
        )}
        <div className="flex justify-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="lg:w-[55%] w-full secondary-bg mt-10 rounded p-10"
          >
            {/* Error message */}
            {errorMsg && (
              <p className="text-red-600 my-5 text-lg">Something went wrong!</p>
            )}

            {/* Username */}
            <div className="mb-5">
              <label className="text-sm text-gray-500 block" htmlFor="username">
                Username
              </label>
              <input
                {...register("username")}
                type="text"
                name="username"
                className={`bg-gray-100 text-black py-3 rounded w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${
                  errors.username && "border-red-400 border-1 border"
                }`}
              />
              {errors.username && (
                <p className="text-red-400 text-xs pt-1">
                  {errors.username.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="mb-5">
              <label className="text-sm text-gray-500 block" htmlFor="email">
                Email
              </label>
              <input
                {...register("email")}
                type="email"
                name="email"
                className={`bg-gray-100 text-black py-3 rounded w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${
                  errors.email && "border-red-400 border-1 border"
                }`}
              />
              {errors.email && (
                <p className="text-red-400 text-xs pt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="mb-5 relative">
              <label className="text-sm text-gray-500 block" htmlFor="message">
                Your Message
              </label>
              <textarea
                {...register("message")}
                name="message"
                className={`bg-gray-100 text-black py-3 rounded w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm resize-none h-28 ${
                  errors.message && "border-red-400 border-1 border"
                }`}
              ></textarea>

              {errors.message && (
                <p className="text-red-400 text-xs pt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Confirm Password */}

            <div className="mt-10">
              {/* Button */}
              <Button loader={loader} label="Submit" />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
