import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Login/Card";
import LogForm from "./Login/LogForm";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(0);
  const [submitButtonClicked, setSubmitButtonClicked] = useState(false);

  return (
    <div
      className="lg:px-40 md:px-36 px-2 h-[100vh]"
      style={{ backgroundColor: "#effe" }}
    >
      <div className="lg:mb-10 lg:pt-10 md:mb-10 md:pt-10 py-5 lg:ps-24">
        <Link to={"/"} className="text-xl text-teal-950 ">
          VibeCard
        </Link>
      </div>
      <div className="flex justify-center w-full">
        <div className="lg:w-5/6 md:w-5/6 w-full">
          <div className="lg:grid grid-cols-2 gap-5">
            <div className="lg:p-10 md:p-9 p-8 shadow-lg bg-white">
              <h1 className="text-2xl">Welcome Back</h1>
              <p className="text-sm mb-14 mt-2">
                Log in to your Vibecard account.
              </p>

              {/* Form */}
              <LogForm
                emailAddress={(email: string) => setEmail(email)}
                passwordLen={(len: number) => setPassword(len)}
                buttonClicked={(value: boolean) =>
                  setSubmitButtonClicked(value)
                }
              />

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
              <p className="text-sm mt-5 text-end text-gray-500">
                Don't have an account?
                <Link to="/register" className="text-sm text-blue-600 ms-1">
                  Create
                </Link>
              </p>
            </div>
            {/* Card */}
            <Card
              email={email}
              passLength={password}
              submitted={submitButtonClicked}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
