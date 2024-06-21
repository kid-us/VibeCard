import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "./Home/Hero";
import Gradient from "../Gradient/Gradient";
import Footer from "../Footer/Footer";
import { video } from "../../assets";
import axios from "axios";
import { baseUrl } from "../../services/request";
import { useUserData } from "../../store/useUserData";
import Loading from "../Loading/Loading";

const Home = () => {
  const { updateEmail, updateUsername, updateType } = useUserData();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`${baseUrl}/api/v1/auth/me`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        updateEmail(response.data.email);
        updateUsername(response.data.username);
        updateType(response.data.type);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);
  return (
    <>
      {loading && <Loading />}

      <Navbar />
      <Gradient />
      <div className="container mx-auto">
        <div className="lg:mt-48 mt-24">
          <Hero />
        </div>
      </div>

      {/* Video */}
      <div className="menu-bg lg:mt-28 mt-16 py-10">
        <div className="container mx-auto">
          <p className="lg:mb-10 mb-5 text-center lg:text-3xl text-2xl lg:px-0 px-4 font-extrabold font-poppins">
            Designing a Smart Business Card Made Simple
          </p>
          <div className="lg:p-0 p-3">
            <div className="shadow-md shadow-zinc-900 lg:rounded-lg rounded overflow-hidden">
              <video autoPlay muted loop className="">
                <source src={video} type="video/webm" />
              </video>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
