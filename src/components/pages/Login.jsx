import React from "react";

import "../styles/Login.css";
import LoginLeftSide from "../login/LeftSide";
import LoginRightSide from "../login/RightSide";
function LoginPage() {
  return (
    <div className="login-page">
      <LoginLeftSide />
      <LoginRightSide />
    </div>
  );
}

export default LoginPage;
