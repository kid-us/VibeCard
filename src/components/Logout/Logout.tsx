import axios from "axios";
import { baseUrl } from "../../services/request";
import useUserData from "../../store/useUserData";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { logout } = useUserData();

  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("logout");
    axios
      .post(`${baseUrl}/api/v1/auth/logout`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
        logout();
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <button
      onClick={() => handleLogout()}
      className="chakra text-red-700 rounded text-lg"
    >
      <span className="bi-power"></span> Logout
    </button>
  );
};

export default Logout;
