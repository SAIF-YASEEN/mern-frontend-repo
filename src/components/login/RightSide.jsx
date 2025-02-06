import React, { useState } from "react";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify"; // Toastify for notifications
import "react-toastify/dist/ReactToastify.css";
import BASE_URL from "../../configs/backendurl";
const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false); // To manage the submit state

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  // Show toast notifications
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

  // Handle login submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    localStorage.setItem("userEmail", JSON.stringify(loginData.email));

    try {
      const response = await axios.post(
        "https://test-repo-production-b3a0.up.railway.app/login",
        loginData
      );

      if (response.data && response.data.success) {
        showToast(
          `Login Successful! Welcome, ${response.data.user.name}`,
          "success"
        );

        // Log the user data to console (optional)
        console.log("User Data:", response.data.user);

        // Store the name and token in localStorage
        localStorage.setItem("jwtToken", response.data.token);
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userName", response.data.user.name); // Optionally store name in localStorage

        // Redirect to the profile page on successful login
        setTimeout(() => {
          window.location.href = "/"; // This ensures redirection after reload
        }, 1000);
      } else {
        showToast("Invalid email or password. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);

      if (error.response && error.response.data.message) {
        showToast(error.response.data.message);
      } else {
        showToast("An error occurred. Please try again later.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="login-page-right">
        <h2 className="login-page-heading">Login</h2>
        <form className="login-page-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              value={loginData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-input"
              value={loginData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="form-button">
            {isSubmitting ? <span className="loading-spinner"></span> : "Login"}
          </button>
          <div className="forgotsignup">
            <p className="login-footer-text">
              Don't have an account?{" "}
              <NavLink to="/register" className="navlink">
                Sign Up
              </NavLink>
            </p>
            <NavLink to="/forgotpassword" className="navlink forgotLink">
              Forgot Password?
            </NavLink>
          </div>
        </form>
      </div>

      {/* Toast Container for Notifications */}
      <div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
