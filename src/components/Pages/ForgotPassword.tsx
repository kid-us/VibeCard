import { Link, useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { z } from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { baseUrl } from "../../services/request";
import { useState } from "react";

const schema = z.object({
  email: z.string().email({ message: "Email address required." }),
});

type FormData = z.infer<typeof schema>;

const ForgotPassword = () => {
  const [forgotPasswordError, setForgotPasswordError] = useState("");
  const [loader, setLoader] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    setLoader(true);
    axios
      .put(
        `${baseUrl}/api/v1/auth/password-reset-request?email=${data.email}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response);
        navigate(`/check-email?email=${data.email}`);
      })
      .catch(() => {
        setLoader(false);
        setForgotPasswordError("Email address not found");
      });
  };

  return (
    <div className="h-[100vh]">
      <div className="lg:px-40 md:px-36 px-2">
        <div className="lg:pt-10 md:pt-10 py-5 lg:ps-24">
          <Link to={"/"} className="text-2xl text-white logo-font">
            vibecard
          </Link>
        </div>
      </div>

      <div className="flex justify-center lg:px-40 md:px-36 px-2 lg:mt-28 md:mt-24 mt-20">
        <div className="content-center lg:w-3/6 md:w-5/6 w-full h-96">
          <div className="lg:p-10 md:p-9 p-8 shadow-lg secondary-bg rounded-lg text-white border border-violet-800">
            <h1 className="text-2xl">Rest your Password</h1>
            <p className="text-gray-400 text-sm mt-6">
              Forgot your password? No problem! Just enter the email address
              associated with your account, and we'll send you a link to reset
              your password. Follow the instructions in the email to create a
              new password and regain access to your account.
            </p>
            <p className="text-gray-400 text-sm mt-2">
              If you don't receive the email, please check your spam folder or
              contact our support team for help.
            </p>
            {forgotPasswordError !== "" && (
              <p className="text-red-600 text-sm mt-5">
                <span className="bi-exclamation-triangle-fill me-4"></span>
                {forgotPasswordError}
              </p>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="my-5">
              <label className="text-sm text-gray-500 block" htmlFor="email">
                Email
              </label>
              <input
                {...register("email")}
                type="email"
                name="email"
                className={`bg-gray-100 py-3 rounded-lg w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${
                  errors.email && "border-red-600 border-1 border"
                }`}
              />
              {errors.email && (
                <p className="text-red-600 text-xs pt-1">
                  {errors.email.message}
                </p>
              )}
              {/* Button */}
              <Button loader={loader} label="Reset Password" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
