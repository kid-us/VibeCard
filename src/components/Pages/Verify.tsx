import { Link, useLocation } from "react-router-dom";
const Verify = () => {
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const emailAddress = searchParams.get("email");

  return (
    <div className="h-[100vh]">
      <div className="lg:px-40 md:px-36 px-2">
        <div className="lg:pt-10 md:pt-10 py-5 lg:ps-24">
          <Link to={"/"} className="text-2xl text-white logo-font">
            vibecard
          </Link>
        </div>
      </div>

      <div className="flex justify-center lg:px-40 md:px-36 px-2 lg:mt-28 md:mt-28">
        <div className="content-center lg:w-3/6 md:w-5/6 w-full h-96">
          <div className="lg:p-10 md:p-9 p-8 shadow-lg secondary-bg rounded-lg text-white border border-violet-800">
            {emailAddress ? (
              <>
                <h1 className="text-4xl">Verify your email</h1>
                <p className="text-gray-500 mt-6">
                  We've sent an activation link to the email{" "}
                  <span className="text-sky-600">{emailAddress}</span>. To
                  complete the verification process and activate your vibecard
                  account, please check your inbox (and spam/junk folder, just
                  in case) and click on the verification link.
                </p>
              </>
            ) : (
              <>
                <h1 className="text-3xl">
                  Welcome to <span className="logo-font">vibecard</span>
                </h1>
                <p className="text-center pt-10 text-2xl">
                  <span className="bi-check-circle-fill text-blue-500 me-5 text-xl"></span>
                  Your account is Verified.
                </p>
                <Link to="/login">
                  <p className="btn-bg w-full py-3 rounded font-poppins mt-7 shadow shadow-zinc-900 text-center">
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
