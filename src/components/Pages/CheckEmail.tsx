import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { baseUrl } from "../../store/request";
import { z } from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../Button/Button";

const schema = z.object({
  password: z.string().min(8, {
    message: "Password must be greater than 8 characters.",
  }),
});

type FormData = z.infer<typeof schema>;

const CheckEmail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [verified, setVerified] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");
  const uid = searchParams.get("uid");

  useEffect(() => {
    if (token && uid) {
      const verify = {
        uid: uid,
        token: token,
      };

      axios
        .post(`${baseUrl}/api/v1/auth/verify-email`, verify, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then(() => {
          setVerified(true);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setVerified(false);
    }
  }, [location]);

  // New Password
  const onSubmit = (data: FieldValues) => {
    console.log(data);
    // axios
    //   .post(`${baseUrl}/api/v1/auth/password-reset-request`, data, {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   })
    //   .then((response) => {
    // console.log(response);
    navigate("/check-email");
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
  };

  return (
    <div className="h-[100vh] menu-bg">
      <div className="lg:px-40 md:px-36 px-2">
        <div className="lg:pt-10 md:pt-10 py-5 lg:ps-24">
          <Link to={"/"} className="text-2xl text-teal-950 logo-font">
            vibecard
          </Link>
        </div>
      </div>

      <div className="flex justify-center lg:px-40 md:px-36 px-2 lg:mt-28 md:mt-28">
        <div className="content-center lg:w-3/6 md:w-5/6 w-full h-96">
          <div className="lg:p-10 md:p-9 p-8 shadow-lg bg-white rounded-lg">
            {verified ? (
              <>
                <h1 className="text-4xl">Password reset email sent</h1>
                <p className="text-gray-500 text-sm mt-6">
                  We've sent you a link to reset your password. The link expires
                  in 6 hours.
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  Didn't get an email? Check your junk folder or request another
                  link{" "}
                  <Link to="/request" className="text-xl text-blue-600">
                    here
                  </Link>
                  .
                </p>
              </>
            ) : (
              <>
                <h1 className="text-2xl">Enter your new Password</h1>
                <p className="text-gray-500 text-sm mt-6">
                  Enter you new strong password.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="my-5">
                  <label
                    className="text-sm text-gray-500 block"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    {...register("password")}
                    type="password"
                    name="password"
                    className={`bg-gray-100 py-3 rounded-lg w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${
                      errors.password && "border-red-600 border-1 border"
                    }`}
                  />
                  {errors.password && (
                    <p className="text-red-600 text-xs pt-1">
                      {errors.password.message}
                    </p>
                  )}
                  {/* Button */}
                  <Button label="Reset Password" />
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckEmail;
