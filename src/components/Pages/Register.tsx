import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import RegForm from "./Register/RegForm";
import SignUpOption from "../SignUpOption/SignUpOption";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(0);
  const [submitButtonClicked, setSubmitButtonClicked] = useState(false);

  return (
    <div
      className="lg:px-40 md:px-36 px-2 pb-10"
      style={{ backgroundColor: "#effe" }}
    >
      <div className="lg:mb-5 lg:pt-10 md:mb-10 md:pt-10 py-5 lg:ps-24">
        <Link to={"/"} className="text-xl text-teal-950 ">
          VibeCard
        </Link>
      </div>
      <div className="flex justify-center w-full">
        <div className="lg:w-5/6 md:w-5/6 w-full">
          <div className="lg:grid grid-cols-2 gap-5">
            <div className="lg:p-10 md:p-9 p-8 shadow-lg bg-white">
              <h1 className="text-2xl">Join VibeVibeCardcard</h1>
              <p className="text-sm mb-10 mt-2">Sign up for free!</p>

              {/* Form */}
              <RegForm
                emailAddress={(email: string) => setEmail(email)}
                passwordLen={(len: number) => setPassword(len)}
                username={(username: string) => setUsername(username)}
                buttonClicked={(value: boolean) =>
                  setSubmitButtonClicked(value)
                }
              />

              {/* Sign up option */}
              <SignUpOption />

              {/* Footer */}
              <p className="text-sm mt-5 text-end text-gray-500">
                Already have an account?
                <Link to="/login" className="text-sm text-blue-600 ms-1">
                  Login
                </Link>
              </p>
            </div>
            {/* Card */}
            <Card
              email={email}
              passLength={password}
              submitted={submitButtonClicked}
              username={username}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
