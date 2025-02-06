import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS CSS
import "../styles/Home.css";
// React Icons for MERN Stack logos
import { FirstHomeComponent } from "../Home/first";
import { SecondHomeComponent } from "../Home/second";
import { ThirdHomeComponent } from "../Home/third";
import { FourthHomeComponent } from "../Home/fourth";
import Footer from '../partials/Footer'
const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <FirstHomeComponent></FirstHomeComponent>
      <SecondHomeComponent></SecondHomeComponent>
      <ThirdHomeComponent></ThirdHomeComponent>
      <FourthHomeComponent></FourthHomeComponent>
      <Footer/>
    </div>
  );
};

export default App;
