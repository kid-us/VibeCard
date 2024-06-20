import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { baseUrl } from "../../store/request";
const Verify = () => {
  const location = useLocation();
  const [verified, setVerified] = useState(false);

  const searchParams = new URLSearchParams(location.search);
  const emailAddress = searchParams.get("email");
  const token = searchParams.get("token");
  const uid = searchParams.get("uid");

  // vibe-card.vercel.app/verify?token=TOKEN&uid=UID
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
            <h1 className="text-4xl">Verify your email</h1>
            {!verified ? (
              <p className="text-gray-500 mt-6">
                We've sent an activation link to the email{" "}
                <span className="text-sky-600">
                  {emailAddress && emailAddress}
                </span>
                . To complete the verification process and activate your
                vibecard account, please check your inbox (and spam/junk folder,
                just in case) and click on the verification link.
              </p>
            ) : (
              <>
                <p className="text-center pt-10 text-2xl">
                  <span className="bi-check-circle-fill text-blue-500 me-5 text-xl"></span>
                  Your account is Verified.
                </p>
                <Link to="/login">
                  <p className="bg-teal-400 w-full py-3 rounded font-poppins mt-7 shadow shadow-zinc-900 text-center">
                    Log In
                  </p>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verify;
