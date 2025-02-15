import React from "react";
import { Route } from "react-router-dom";
import Home from "../components/pages/Home";
import AboutPage from "../components/pages/About";
import ContactPage from "../components/pages/Contact";
import LoginPage from "../components/pages/Login";
import RegisterPage from "../components/pages/Register";
import ForgotPassword from "../components/pages/ForgotPassword";
import Userinfo from "../components/pages/UserInfo";
import ProfilePage from "../components/pages/ProfilePage";
import MernBuilding from "../components/docs/MernBuilding";
import MERNOverview from "../components/docs/MernOverview";
import MernServices from "../components/docs/MernServices";
import Developer from "../components/docs/developer";
import Test from "../tests/text";
import VerifyOtp from "../components/pages/VerifyOTP";
import UpcomingPage from "../components/pages/Upcoming";
const HeaderLayoutRouter = () => {
  return (
    <>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/userinfo" element={<Userinfo />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/Test" element={<Test />} />
      <Route path="/verifyOTP" element={<VerifyOtp />} />
      <Route path="/docs/overview" element={<MERNOverview />} />
      <Route path="/docs/building" element={<MernBuilding />} />
      <Route path="/docs/services" element={<MernServices />} />
      <Route path="/docs/developer" element={<Developer />} />
      <Route path="/upcomingfeautures" element={<UpcomingPage />} />
    </>
  );
};

export default HeaderLayoutRouter;
