import axios from "axios";
import { baseUrl } from "../../services/request";
import useUserData from "../../store/useUserData";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { logout } = useUserData();

  const navigate = useNavigate();

  const handleLogout = () => {
    axios
      .post(
        `${baseUrl}/api/v1/auth/logout`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )
      .then(() => {
        logout();
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <button
      onClick={handleLogout}
      className="font-poppins text-gray-300 rounded"
    >
      <span className="bi-arrow-bar-right"></span> Logout
    </button>
  );
};

export default Logout;
