import React, { useState } from "react";
import RegisterLeftSide from "../register/RegisterLeftSide";
import RegisterRightSide from "../register/RegisterRightSide";
import "../styles/Register.css";

function RegisterPage() {
  const [userRegisteredData, setUserRegisteredData] = useState({});

  const handleUserRegistration = (formData) => {
    setUserRegisteredData(formData);
    console.log("User Registered Data:", formData); // For testing
    alert("User registered successfully!");
  };

  return (
    <div className="register-page">
      <RegisterLeftSide />
      <RegisterRightSide onRegister={handleUserRegistration} />
    </div>
  );
}

export default RegisterPage;
