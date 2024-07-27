import { google } from "../../assets";
import axios from "axios";
import { baseUrl } from "@/services/request";
const SignUpOption = () => {
  const handleGoogleAccount = () => {
    axios
      .get(`${baseUrl}/api/v1/auth/login/google`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="grid grid-cols-3 mt-4">
        <div className="border-t-2 border-gray-700 mt-2"></div>
        <div className="text-center text-xs">or</div>
        <div className="border-t-2 mt-2 border-gray-700"></div>
      </div>

      <div
        onClick={() => handleGoogleAccount()}
        className="cursor-pointer text-xs flex justify-center text-center border-2 border-gray-700 w-full rounded-lg py-3 mt-4"
      >
        <img src={google} className="me-4 w-3 h-3" />
        <span>Continue with google</span>.
      </div>
    </>
  );
};

export default SignUpOption;
