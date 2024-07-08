import { z } from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
// import Button from "../../Button/Button";
// import axios from "axios";
// import { baseUrl } from "../../../services/request";
// import { useNavigate } from "react-router-dom";
// import { baseUrl } from "../../services/request";
import Button from "../Button/Button";
import Navbar from "../Navbar/Navbar";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be greater than 3 characters." }),
  email: z.string().email({ message: "Email address required." }),
  password: z.string().min(8, {
    message: "Password must be greater than 8 characters.",
  }),
});

type FormData = z.infer<typeof schema>;

const Setting = () => {
  const [title] = useState("Setting");
  useDocumentTitle(title);

  // const navigate = useNavigate();

  // const [registerError, setRegisterError] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [loader, setLoader] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: FieldValues) => {
    if (data.password !== confirmPassword) {
      return setConfirmPasswordError(true);
    } else {
      setConfirmPasswordError(false);
      setLoader(true);
      // axios
      //   .get(`${baseUrl}/api/v1/auth/check-email/${data.email}`, {
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   })
      //   .then(() => {
      //     axios
      //       .post(`${baseUrl}/api/v1/auth/register`, data, {
      //         headers: {
      //           "Content-Type": "application/json",
      //         },
      //       })
      //       .then(() => {
      //         navigate(`/verify?email=${data.email}`);
      //       })
      //       .catch((error) => {
      //         console.log(error);
      //       });
      // })
      // .catch(() => {
      //   setLoader(false);
      //   setRegisterError("Email already exist.");
      // });
    }
  };

  return (
    <>
      <Navbar />
      <div className="">
        <div className="container mx-auto lg:p-10 secondary-bg mt-10">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" py-10 lg:px-40 px-10 rounded shadow"
          >
            <h1 className="mb-10 text-2xl text-white">Account Settings</h1>
            {/* Email exist error */}
            {/* {registerError !== "" && (
              <div className="relative">
                <p className="absolute -top-7 text-red-600 text-sm">
                  <span className="bi-exclamation-triangle-fill me-4"></span>
                  {registerError}
                </p>
              </div>
            )} */}

            {/* Username */}
            <div className="mb-5">
              <label className="text-sm text-gray-500 block" htmlFor="username">
                Username
              </label>
              <input
                {...register("username")}
                type="text"
                name="username"
                className={`bg-gray-100 py-3 rounded-lg w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${
                  errors.email && "border-red-600 border-1 border"
                }`}
              />
              {errors.username && (
                <p className="text-red-600 text-xs pt-1">
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
                className={`bg-gray-100 py-3 rounded-lg w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${
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
            <div className="mb-5 relative">
              <label className="text-sm text-gray-500 block" htmlFor="password">
                Password
              </label>
              <input
                {...register("password")}
                type={showPassword ? "text" : "password"}
                name="password"
                className={`bg-gray-100 py-3 rounded-lg w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${
                  errors.password && "border-red-600 border-1 border"
                }`}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className={`absolute ${
                  showPassword ? "bi-eye" : "bi-eye-slash"
                } right-2 top-8 cursor-pointer`}
              ></span>
              {errors.password && (
                <p className="text-red-600 text-xs pt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="mb-5">
              <label className="text-sm text-gray-500 block" htmlFor="password">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirm-password"
                className={`bg-gray-100 py-3 rounded-lg w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${
                  confirmPasswordError && "border-red-600 border-1 border"
                }`}
                onChange={(event) =>
                  setConfirmPassword(event.currentTarget.value)
                }
              />

              {confirmPasswordError && (
                <p className="text-red-600 text-xs pt-1">
                  Password does not match!
                </p>
              )}
            </div>
            <div className="mt-10">
              {/* Button */}
              <Button loader={loader} label="Update" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Setting;
