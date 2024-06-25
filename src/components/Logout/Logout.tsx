// import axios from "axios";
// import { baseUrl } from "../../services/request";
// import
const Logout = () => {
  //   const { logout } = useUserData();

  //   const handleLogout = () => {
  //     console.log("logout");
  //     // axios
  //     //   .post(`${baseUrl}/api/v1/auth/logout`, {
  //     //     headers: {
  //     //       "Content-Type": "application/json",
  //     //     },
  //     //     withCredentials: true,
  //     //   })
  //     //   .then(() => {
  //     logout();
  //     //   })
  //     //   .catch((err) => {
  //     //     console.log(err);
  //     //   });
  //   };

  return (
    <button
      // onClick={() => handleLogout()}
      className="chakra text-red-700 rounded text-lg"
    >
      <span className="bi-power"></span> Logout
    </button>
  );
};

export default Logout;
