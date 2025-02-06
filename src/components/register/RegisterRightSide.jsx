import React, { useState } from "react";
import "../styles/Register.css";
import { useNavigate, NavLink } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify"; // Import React Toastify
import "react-toastify/dist/ReactToastify.css";

const generateRandomId = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=~`<>?/:;,.[]{}|\\";
  let id = "";
  for (let i = 0; i < 20; i++) {
    id += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return id;
};

const generatePassword = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=~`<>?/:;,.[]{}|\\";
  let password = "";
  for (let i = 0; i < 12; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
};

const RegisterRightSide = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    id: generateRandomId(),
  });

  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    confirmPassword: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const showToast = (message, type = "error") => {
    toast(message, {
      type: type,
      position: "top-right",
      autoClose: 5000, // 5 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "email") {
      setErrors({
        ...errors,
        email: value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
          ? ""
          : "Invalid email format",
      });
    }

    if (name === "confirmPassword") {
      setErrors({
        ...errors,
        confirmPassword:
          value === formData.password ? "" : "Passwords do not match",
      });
    }
  };

  const handleGeneratePassword = () => {
    const newPassword = generatePassword();
    setFormData({
      ...formData,
      password: newPassword,
      confirmPassword: newPassword,
    });
  };

  const sendOtp = async () => {
    try {
      const response = await fetch("https://test-repo-production-b3a0.up.railway.app/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email }),
      });

      const data = await response.json();
      if (response.ok) {
        showToast(data.message);
        setIsOtpSent(true);
      } else {
        showToast(data.message);
      }
    } catch (error) {
      showToast("Failed to send OTP");
    }
  };

  const verifyOtp = async () => {
    try {
      const response = await fetch("https://test-repo-production-b3a0.up.railway.app/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email, otp }),
      });

      const data = await response.json();
      if (response.ok) {
        showToast(data.message, "success");
        setIsOtpVerified(true);
      } else {
        showToast(data.message);
      }
    } catch (error) {
      showToast("Failed to verify OTP");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem("formData", JSON.stringify(formData));

    if (errors.email) {
      showToast(errors.email);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      showToast("Passwords do not match!");
      return;
    }

    if (!isOtpVerified) {
      showToast("Please verify OTP before registering");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://test-repo-production-b3a0.up.railway.app/main/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            password: formData.password,
            id: formData.id,
          }),
        }
      );

      if (response.ok) {
        const result = await response.json();
        showToast(result.message, "success");

        setFormData({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
          id: generateRandomId(),
        });

        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        const errorData = await response.json();
        showToast(errorData.message || "Registration failed");
      }
    } catch (error) {
      showToast(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="register-right-side">
        <h2 className="register-heading">Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
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
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          {!isOtpSent && (
            <button type="button" className="send-otp-btn" onClick={sendOtp}>
              Send OTP
            </button>
          )}

          {isOtpSent && !isOtpVerified && (
            <>
              <div className="form-group">
                <label htmlFor="otp">OTP</label>
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
                className="verify-otp-btn"
                onClick={verifyOtp}
              >
                Verify OTP
              </button>
            </>
          )}

          {isOtpVerified && (
            <>
              <div className="form-group">
                <label htmlFor="password">Password</label>
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
                <label htmlFor="confirmPassword">Confirm Password</label>
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
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                {errors.confirmPassword && (
                  <p className="error">{errors.confirmPassword}</p>
                )}
              </div>
              <button
                type="button"
                className="generate-password-btn"
                onClick={handleGeneratePassword}
              >
                Generate Password
              </button>
            </>
          )}

          <button type="submit" className="form-button">
            {isSubmitting ? (
              <span className="loading-spinner"></span>
            ) : (
              "Register"
            )}
          </button>
          <div className="already">
            <p>Already have an account?</p>
            <NavLink to="/login" className="navlink">
              Login
            </NavLink>
          </div>
        </form>
      </div>
      <div className="toastHidden">
        <ToastContainer />
      </div>
    </>
  );
};

export default RegisterRightSide;
