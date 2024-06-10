import { Link } from "react-router-dom";
import { z } from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

interface Props {
  emailAddress: (email: string) => void;
  passwordLen: (len: number) => void;
  buttonClicked: (value: boolean) => void;
}

const schema = z.object({
  email: z.string().email({ message: "Email address required." }),
  password: z.string().min(8, {
    message: "Password must be greater than 8 characters.",
  }),
});

type FormData = z.infer<typeof schema>;

const Form = ({ emailAddress, passwordLen, buttonClicked }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: FieldValues) => {
    buttonClicked(true);
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
          <Link to="/" className="text-xs text-blue-600">
            Forgot Password?
          </Link>
        </div>
      </div>
      <button className="bg-teal-400 w-full py-3 rounded-xl font-poppins mt-5 shadow-lg">
        Login
      </button>
    </form>
  );
};

export default Form;
