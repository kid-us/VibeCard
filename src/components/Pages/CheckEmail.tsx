import { Link } from "react-router-dom";

const CheckEmail = () => {
  return (
    <div className="h-[100vh]" style={{ backgroundColor: "#effe" }}>
      <div className="lg:px-40 md:px-36 px-2">
        <div className="lg:pt-10 md:pt-10 py-5 lg:ps-24">
          <Link to={"/"} className="text-xl text-teal-950">
            VibeCard
          </Link>
        </div>
      </div>

      <div className="flex justify-center lg:px-40 md:px-36 px-2 lg:mt-28 md:mt-28">
        <div className="content-center lg:w-3/6 md:w-5/6 w-full h-96">
          <div className="lg:p-10 md:p-9 p-8 shadow-lg bg-white rounded-lg">
            <h1 className="text-4xl">Password reset email sent</h1>
            <p className="text-gray-500 text-sm mt-6">
              We've sent you a link to reset your password. The link expires in
              6 hours.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Didn't get an email? Check your junk folder or request another
              link{" "}
              <Link to="/request" className="text-xl text-blue-600">
                here
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckEmail;
