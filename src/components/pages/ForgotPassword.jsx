import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/ForgotPassword.css";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [resetCode, setResetCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [step, setStep] = useState("sendCode");

  const showToast = (message, type = "error") => {
    toast(message, {
      type: type,
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const handleRequest = async (action) => {
    try {
      const payload = { action, email };
      if (action === "verifyCode") payload.resetCode = resetCode;
      if (action === "resetPassword") payload.newPassword = newPassword;

      const response = await axios.post("https://test-repo-production-b3a0.up.railway.app/reset", payload);

      showToast(response.data.message, "success");

      if (action === "sendCode") setStep("verifyCode");
      if (action === "verifyCode") setStep("resetPassword");
      if (action === "resetPassword")
        setTimeout(() => (window.location.href = "/login"), 1000);
    } catch (error) {
      showToast(error.response?.data?.message || "Error occurred.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (step === "sendCode") {
      handleRequest("sendCode");
    } else if (step === "verifyCode") {
      handleRequest("verifyCode");
    } else if (step === "resetPassword") {
      if (!newPassword || !confirmPassword) {
        showToast("All fields are required.");
        return;
      }
      if (newPassword !== confirmPassword) {
        showToast("Passwords do not match.");
        return;
      }
      handleRequest("resetPassword");
    }
  };

  return (
    <>
      <div className="reset-password-page">
        <div className="reset-password-container">
          <div className="reset-password-left-side">
            <h1 className="reset-password-title">Welcome Back!</h1>
            <p className="reset-password-description">
              Reset your password to regain access and continue exploring.
            </p>
          </div>

          <div className="reset-password-right-side">
            <h2 className="reset-password-heading">Reset Password</h2>
            <form onSubmit={handleSubmit} className="reset-password-form">
              {step === "sendCode" && (
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                  />
                  <button className="form-button" type="submit">
                    Send Reset Code
                  </button>
                </div>
              )}

              {step === "verifyCode" && (
                <div className="form-group">
                  <label className="form-label">Reset Code</label>
                  <input
                    type="text"
                    value={resetCode}
                    onChange={(e) => setResetCode(e.target.value)}
                    placeholder="Enter reset code"
                  />
                  <button className="form-button" type="submit">
                    Verify Code
                  </button>
                </div>
              )}

              {step === "resetPassword" && (
                <>
                  <div className="form-group">
                    <label className="form-label">New Password</label>
                    <input
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Enter new password"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Confirm Password</label>
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm your password"
                    />
                  </div>
                  <button className="form-button" type="submit">
                    Reset Password
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
      <div>
        <ToastContainer />
      </div>
    </>
  );
};

export default ResetPassword;
