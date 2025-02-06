import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const VerifyOtp = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  const email = localStorage.getItem("pendingEmail");
  const password = localStorage.getItem("pendingPassword");

  const handleVerify = async () => {
    try {
      const response = await fetch("https://test-repo-production-b3a0.up.railway.app/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp, password }),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success(data.message);
        localStorage.removeItem("pendingEmail");
        localStorage.removeItem("pendingPassword");
        navigate("/login");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Verification failed");
    }
  };

  return (
    <div className="verify-otp-container">
      <h2>Verify OTP</h2>
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button onClick={handleVerify}>Verify</button>
      <ToastContainer />
    </div>
  );
};

export default VerifyOtp;
