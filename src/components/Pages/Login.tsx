import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="px-40 ">
      <h1 className="mb-10 pt-10">VibeCard</h1>
      <div className="flex justify-center w-full ">
        <div className=" w-5/6 rounded shadow-lg">
          <div className="grid grid-cols-2">
            <div className="p-10">
              <h1 className="text-2xl">Welcome Back</h1>
              <p className="text-sm mb-14 mt-2">
                Log in to your Vibecard account.
              </p>
              <form>
                <div className="mb-5">
                  <label
                    className="text-sm text-gray-500 block"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    className="bg-gray-100 py-2 rounded-lg w-full focus:outline-none px-5 mt-1 block"
                  />
                </div>
                <div className="mb-5 relative">
                  <label
                    className="text-sm text-gray-500 block"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="bg-gray-100 py-2 rounded-lg w-full focus:outline-none px-5 mt-1 block"
                  />
                  <span className="absolute bi-eye-slash right-2 top-8 cursor-pointer"></span>
                  <div className="mt-2">
                    <Link to="/" className="text-sm text-blue-600">
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

            <div className="">
              <p>Lorem</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
