import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import LogForm from "./Login/LogForm";
import SignUpOption from "../SignUpOption/SignUpOption";

const Login = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState(0);
  const [submitButtonClicked, setSubmitButtonClicked] = useState(false);

  return (
    <div className="lg:px-40 md:px-36 px-2 h-[100vh] menu-bg">
      <div className="lg:mb-10 lg:pt-10 md:mb-10 md:pt-10 py-5 lg:ps-24">
        <Link to={"/"} className="text-2xl text-teal-950 logo-font">
          vibecard
        </Link>
      </div>
      <div className="flex justify-center w-full">
        <div className="lg:w-5/6 md:w-5/6 w-full">
          <div className="lg:grid grid-cols-2 gap-5">
            <div className="lg:p-10 md:p-9 p-8 shadow-lg bg-white">
              <h1 className="text-2xl">Welcome Back</h1>
              <p className="text-sm mb-14 mt-2">
                Log in to your VibeCard account.
              </p>

              {/* Form */}
              <LogForm
                // emailAddress={(email: string) => setEmail(email)}
                // passwordLen={(len: number) => setPassword(len)}
                buttonClicked={(value: boolean) =>
                  setSubmitButtonClicked(value)
                }
              />

              {/* Sign up option */}
              <SignUpOption />

              {/* Footer */}
              <p className="text-sm mt-5 text-end text-gray-500">
                Don't have an account?
                <Link to="/register" className="text-sm text-blue-600 ms-1">
                  Create
                </Link>
              </p>
            </div>
            {/* Card */}
            <Card
              // email={email}
              // passLength={password}
              submitted={submitButtonClicked}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
