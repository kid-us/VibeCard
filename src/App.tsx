import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Pages/Home";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import ForgotPassword from "./components/Pages/ForgotPassword";
import Page404 from "./components/Pages/Page404";
import CheckEmail from "./components/Pages/CheckEmail";
import Create from "./components/Pages/Create";
import Verify from "./components/Pages/Verify";
import Dashboard from "./components/Pages/Dashboard";
import Protected from "./components/Protected/Protected";
import ViewCard from "./components/Pages/ViewCard";
import Pricing from "./components/Pages/Pricing";
import Products from "./components/Pages/Products";
import ProductDetail from "./components/Pages/ProductDetail";
import Setting from "./components/Pages/Setting";
import Insights from "./components/Pages/Insights";
import AboutUs from "./components/Pages/AboutUs";
import PrivacyPolicy from "./components/Pages/PrivacyPolicy";
import ContactUs from "./components/Pages/ContactUs";
import ImageEditor from "./components/Editor/ImageEditor";
import Ambassador from "./components/Pages/Ambassador";
import Affiliate from "./components/Pages/Affiliate";
import AffiliateSetting from "./components/Ambassador/AffilateSetting";
import AmbassadorProtected from "./components/Protected/AmbassadorProtected";
import WalletsDetail from "./components/Pages/WalletsDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editor" element={<ImageEditor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/all-products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/wallets/:id" element={<WalletsDetail />} />
        <Route path="/verify" element={<Verify />} />
        <Route
          path="/setting"
          element={
            <Protected>
              <Setting />
            </Protected>
          }
        />
        <Route
          path="/insights"
          element={
            <Protected>
              <Insights />
            </Protected>
          }
        />
        <Route path="/request" element={<ForgotPassword />} />
        <Route path="/check-email" element={<CheckEmail />} />
        <Route path="/card/:id" element={<ViewCard />} />
        <Route
          path="/dashboard"
          element={
            <Protected>
              <Dashboard />
            </Protected>
          }
        />
        <Route
          path="/create"
          element={
            <Protected>
              <Create />
            </Protected>
          }
        />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/404" element={<Page404 />} />
        <Route path="*" element={<Navigate to="/404" />}></Route>
        {/* Affiliate */}
        <Route path="/ambassador" element={<Ambassador />}></Route>
        <Route
          path="/affiliate"
          element={
            <AmbassadorProtected>
              <Affiliate />
            </AmbassadorProtected>
          }
        ></Route>
        <Route
          path="/affiliate/setting"
          element={
            <AmbassadorProtected>
              <AffiliateSetting />
            </AmbassadorProtected>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
