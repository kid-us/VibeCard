import { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "../Login/Card";
import Form from "../Login/Form";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(0);

  return (
    <div className="px-40 bg-zinc-50 h-[100vh]">
      <div className="mb-10 pt-10 ps-24">
        <Link to={"/"} className="text-xl">
          VibeCard
        </Link>
      </div>
      <div className="flex justify-center w-full ">
        <div className="w-5/6">
          <div className="grid grid-cols-2 gap-5">
            <div className="p-10 shadow-lg bg-white">
              <h1 className="text-2xl">Welcome Back</h1>
              <p className="text-sm mb-14 mt-2">
                Log in to your Vibecard account.
              </p>

              {/* Form */}
              <Form
                emailAddress={(email: string) => setEmail(email)}
                passwordLen={(len: number) => setPassword(len)}
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
              <p className="text-sm mt-5 text-end">
                Don't have an account?
                <Link to="/register" className="text-sm text-blue-600 ms-1">
                  Create
                </Link>
              </p>
            </div>
            {/* Card */}
            <Card email={email} passLength={password} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
