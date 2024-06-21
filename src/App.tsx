import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Pages/Home";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import ForgotPassword from "./components/Pages/ForgotPassword";
import Page404 from "./components/Pages/Page404";
import CheckEmail from "./components/Pages/CheckEmail";
import Create from "./components/Pages/Create";
import Verify from "./components/Pages/Verify";
import axios from "axios";
import { baseUrl } from "./services/request";
import { useUserData } from "./store/useUserData";
import Loading from "./components/Loading/Loading";

function App() {
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/request" element={<ForgotPassword />} />
        <Route path="/check-email" element={<CheckEmail />} />
        <Route path="/create" element={<Create />} />
        <Route path="/404" element={<Page404 />} />
        <Route path="*" element={<Navigate to="/404" />}></Route>
      </Routes>
    </>
  );
}

export default App;
