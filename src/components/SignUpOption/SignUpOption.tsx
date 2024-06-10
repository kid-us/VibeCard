import { Link } from "react-router-dom";
import { google } from "../../assets";
const SignUpOption = () => {
  return (
    <>
      <div className="grid grid-cols-3 mt-4">
        <div className="border-t-2 mt-2"></div>
        <div className="text-center text-xs">or</div>
        <div className="border-t-2 mt-2"></div>
      </div>
      <Link to="/" className="text-xs">
        <div className="flex justify-center text-center border-2 w-full rounded-lg py-3 mt-4">
          <img src={google} className="me-4 w-3 h-3" />
          <span>Continue with google</span>.
        </div>
      </Link>
    </>
  );
};

export default SignUpOption;
