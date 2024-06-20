import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import Button from "../../Button/Button";
import axios from "axios";
import { baseUrl } from "../../../store/request";

interface Props {
  emailAddress: (email: string) => void;
  passwordLen: (len: number) => void;
  buttonClicked: (value: boolean) => void;
  username?: (username: string) => void;
}

const schema = z.object({
  email: z.string().email({ message: "Email address required." }),
  password: z.string().min(1, {
    message: "Password required.",
  }),
});

type FormData = z.infer<typeof schema>;

const Form = ({ emailAddress, passwordLen, buttonClicked }: Props) => {
  const navigate = useNavigate();

  const [loginError, setLoginError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: FieldValues) => {
    buttonClicked(true);

    axios
      .post(`${baseUrl}/api/v1/auth/login`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 401) {
          setLoginError("Invalid Email and Password");
        }
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Login error */}
      {loginError !== "" && (
        <div className="relative">
          <p className="absolute -top-10 text-red-600 text-sm">
            <span className="bi-exclamation-triangle-fill me-4"></span>
            {loginError}
          </p>
        </div>
      )}
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
          onChange={(event) => emailAddress(event.currentTarget.value)}
        />
        {errors.email && (
          <p className="text-red-600 text-xs pt-1">{errors.email.message}</p>
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
            errors.email && "border-red-600 border-1 border"
          }`}
          onChange={(event) => passwordLen(event.currentTarget.value.length)}
        />
        <span
          onClick={() => setShowPassword(!showPassword)}
          className={`absolute ${
            showPassword ? "bi-eye" : "bi-eye-slash"
          } right-2 top-8 cursor-pointer`}
        ></span>
        {errors.password && (
          <p className="text-red-600 text-xs pt-1">{errors.password.message}</p>
        )}
        <div className="mt-2 text-end">
          <Link to="/request" className="text-xs text-blue-600">
            Forgot Password?
          </Link>
        </div>
      </div>

      {/* Button */}
      <Button label="Login" />
    </form>
  );
};

export default Form;
