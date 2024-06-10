import { Link } from "react-router-dom";
import { z } from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const schema = z.object({
  email: z.string().email({ message: "Email address required." }),
  password: z.string().min(8, {
    message: "Password must be greater than 8 characters.",
  }),
});

type FormData = z.infer<typeof schema>;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div className="px-40 ">
      <h1 className="mb-10 pt-10">VibeCard</h1>
      <div className="flex justify-center w-full ">
        <div className="w-5/6 rounded shadow-lg">
          <div className="grid grid-cols-2">
            <div className="p-10">
              <h1 className="text-2xl">Welcome Back</h1>
              <p className="text-sm mb-14 mt-2">
                Log in to your Vibecard account.
              </p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-5">
                  <label
                    className="text-sm text-gray-500 block"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    name="email"
                    className={`bg-gray-100 py-2 rounded-lg w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 ${
                      errors.email && "border-red-600 border-1 border"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-600 text-xs pt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="mb-5 relative">
                  <label
                    className="text-sm text-gray-500 block"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    {...register("password")}
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className={`bg-gray-100 py-2 rounded-lg w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 ${
                      errors.email && "border-red-600 border-1 border"
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
                  <div className="mt-2 text-end">
                    <Link to="/" className="text-xs text-blue-600">
                      Forgot Password?
                    </Link>
                  </div>
                </div>
                <button className="bg-teal-400 w-full py-3 rounded-xl font-poppins mt-5">
                  Login
                </button>
              </form>

              <div className="grid grid-cols-3 mt-4">
                <div className="border-t-2 mt-2"></div>
                <div className="text-center text-xs">or</div>
                <div className="border-t-2 mt-2"></div>
              </div>
              <Link to="/" className="text-xs">
                <div className="text-center border-2 w-full rounded-lg py-3 mt-4">
                  <span className="bi-google me-4 text-red-500"></span>
                  Continue with goggle.
                </div>
              </Link>
              <p className="text-sm mt-5 text-end">
                Don't have an account?
                <Link to="/register" className="text-sm text-blue-600 ms-1">
                  Create
                </Link>
              </p>
            </div>

            <div className="flex justify-center">
              <div className="content-center">
                <div className="bg-gray-950 mx-5 rounded text-white p-5 w-full">
                  <h1 className="text-end text-sm">Member card</h1>
                  <h1>VibeCard</h1>
                  <div className="grid grid-cols-4">
                    <div className="col-span-3 text-sm">
                      <p className="mt-5 mb-3">Email: lorem@gmail.com</p>
                      <p>Password: lorem@gmail.com</p>
                    </div>
                    <div className="mt-5">
                      <p>sim</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
