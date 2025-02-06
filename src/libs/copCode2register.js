import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Register.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterRightSide = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [isOtpVerified, setIsOtpVerified] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to send OTP to the email
  const sendOtp = async () => {
    try {
      const response = await fetch("http://localhost:5000/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email }),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success(data.message);
        setIsOtpSent(true);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Failed to send OTP");
    }
  };

  // Function to verify OTP entered by the user
  const verifyOtp = async () => {
    try {
      const response = await fetch("http://localhost:5000/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email, otp }),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success(data.message);
        setIsOtpVerified(true);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Failed to verify OTP");
    }
  };

  // Function to handle form submission and registration
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isOtpVerified) {
      toast.error("Please verify OTP before registering");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success(data.message);
        navigate("/login"); // Redirect to login page after successful registration
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Registration failed");
    }
  };

  return (
    <>
      <div className="register-page">
        <div className="register-left-side">
          <h1 className="register-title">Register</h1>
          <p className="register-description">
            Join us today to get started with your journey.
          </p>
        </div>

        <div className="register-right-side">
          <h2 className="register-heading">Create Your Account</h2>
          <form className="register-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            {!isOtpSent && (
              <button type="button" className="otp-button" onClick={sendOtp}>
                Send OTP
              </button>
            )}

            {isOtpSent && !isOtpVerified && (
              <>
                <div className="form-group">
                  <label htmlFor="otp" className="form-label">
                    OTP
                  </label>
                  <input
                    type="text"
                    id="otp"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter OTP"
                    required
                  />
                </div>
                <button
                  type="button"
                  className="verify-otp-button"
                  onClick={verifyOtp}
                >
                  Verify OTP
                </button>
              </>
            )}

            {isOtpVerified && (
              <>
                <div className="form-group">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <div className="password-wrapper">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      required
                    />
                    <span
                      className="toggle-password"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm Password
                  </label>
                  <div className="password-wrapper">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm your password"
                      required
                    />
                    <span
                      className="toggle-password"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                </div>
                <button type="submit" className="form-button">
                  Register
                </button>
              </>
            )}
          </form>

          <div className="toastHidden">
            <ToastContainer />
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterRightSide;
