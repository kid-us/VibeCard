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
        {}, // No body needed for logout
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
      .catch((err) => {
        console.error("Logout failed: ", err);
      });
  };

  return (
    <button onClick={handleLogout} className="chakra text-red-700 rounded">
      <span className="bi-arrow-bar-right"></span> Logout
    </button>
  );
};

export default Logout;
