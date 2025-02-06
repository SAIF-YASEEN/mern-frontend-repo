import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { FaUser, FaSignInAlt, FaSignOutAlt, FaTrash } from "react-icons/fa";
import "./Settings.css";
import { FaLink } from "react-icons/fa";
import { FaCheck, FaTimes } from "react-icons/fa";
import { DefualtProfilePic } from "../../constants/Constant";
const UserActions = () => {
  const [profilePic, setProfilePic] = useState(
    localStorage.getItem("profilePic")
  );
  const [profilePicC, setProfilePicC] = useState(DefualtProfilePic);

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState(""); // New state for username
  const [createdAt, setCreatedAt] = useState("");
  const [updatedAt, setUpdatedAt] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [actionType, setActionType] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = JSON.parse(localStorage.getItem("userEmail"));
    if (storedEmail) {
      setEmail(storedEmail);
      fetchUserData(storedEmail);
    }
  }, []);
  const fetchUserData = async (userEmail) => {
    try {
      // Fetch user data from both endpoints
      const [userResponse, profileResponse] = await Promise.all([
        axios.get(
          `https://test-repo-production-b3a0.up.railway.app/user/${userEmail}`
        ), // Get from User.js
        axios.get(
          `https://test-repo-production-b3a0.up.railway.app/profile/${userEmail}`
        ), // Get from Profile.js
      ]);

      console.log("Fetched user data:", userResponse.data);
      console.log("Fetched profile data:", profileResponse.data);

      if (userResponse.data) {
        setUsername(userResponse.data.username);

        if (userResponse.data.createdAt) {
          // Format `createdAt` from User.js
          const formattedCreatedAt = new Date(
            userResponse.data.createdAt
          ).toLocaleString();
          setCreatedAt(formattedCreatedAt);
        } else {
          toast.error("User creation date not available.");
        }
      }

      if (profileResponse.data) {
        if (profileResponse.data.updatedAt) {
          // Format `updatedAt` from Profile.js
          const formattedUpdatedAt = new Date(
            profileResponse.data.updatedAt
          ).toLocaleString();
          setUpdatedAt(formattedUpdatedAt);
        } else {
          toast.error("Profile update date not available.");
        }
      }
    } catch (error) {
      toast.error("Failed to load user data.");
    }
  };

  const handleUsernameChange = async () => {
    try {
      const response = await axios.post(
        "https://test-repo-production-b3a0.up.railway.app/update-username",
        {
          email,
          username,
        }
      );

      if (response.data.success) {
        toast.success("Username updated successfully!");
      } else {
        // Show toast with the message from backend
        toast.error(response.data.message); // This will show: "You can only change your username once every 24 hours"
      }
    } catch (error) {
      toast.error("An error occurred while updating the username");
    }
  };

  const handleDelete = async () => {
    if (!email) {
      toast.error("No user is logged in.");
      return;
    }
    try {
      const response = await axios.delete(
        "https://test-repo-production-b3a0.up.railway.app/api/users/delete",
        { data: { email } }
      );
      if (response.data.message) {
        toast.success(response.data.message);
        localStorage.clear();
      } else {
        toast.error("Failed to delete user.");
      }
    } catch (error) {
      toast.error("An error occurred: " + error.message);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    toast.success("Logged out successfully.");
    navigate("/login");
  };

  const handleAction = (action) => {
    setActionType(action);
    setShowModal(true);
  };

  const confirmAction = () => {
    setShowModal(false);
    if (actionType === "delete") {
      handleDelete();
      setTimeout(() => {
        window.location.href = "/"; // This ensures redirection after reload
      }, 1000);
    } else if (actionType === "logout") {
      handleLogout();
    } else if (actionType === "login") {
      navigate("/login");
    } else if (actionType === "signup") {
      navigate("/register");
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [timeDifference, setTimeDifference] = useState("");

  useEffect(() => {
    if (updatedAt) {
      const timeDiff = new Date(currentDateTime) - new Date(updatedAt);
      const seconds = Math.floor(timeDiff / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);

      const remainingMinutes = minutes % 60;
      const remainingSeconds = seconds % 60;

      let timeString = "";

      if (days > 0) {
        timeString += `${days} days `;
      }
      if (hours > 0) {
        timeString += `${hours} hours `;
      }
      if (remainingMinutes > 0) {
        timeString += `${remainingMinutes} minutes `;
      }
      if (remainingSeconds > 0) {
        timeString += `${remainingSeconds} seconds `;
      }

      timeString += "ago";
      setTimeDifference(timeString);
    }
  }, [currentDateTime, updatedAt]);

  return (
    <>
      <div className="user-actions-container">
        <div className="profile-section-setting">
          <img
            src={profilePic || profilePicC}
            alt="User Profile"
            style={{
              width: "170px",
              height: "170px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "6px solid #c8c6c6",
            }}
          />
        </div>

        <h1 className="account-settings-title">Account Settings</h1>
        <p className="user-email-info">
          Logged in as: <strong>{email || "Not available"}</strong>
        </p>

        {/* New Username Input */}
        <div className="username-section">
          <label htmlFor="username">Change Username</label>
          <input
            type="text"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter new username"
          />
          <div className="btnsFunctions">
            <div className="btnUpdateUserName">
              <button onClick={handleUsernameChange} className="action-button">
                Update Username
              </button>
            </div>

            <button
              onClick={() => handleAction("delete")}
              className="action-button delete-account-button"
            >
              <FaTrash /> Delete Account
            </button>

            <button
              onClick={() => handleAction("login")}
              className="action-button login-account-button"
            >
              <FaSignInAlt /> Login Another Account
            </button>

            <button
              onClick={() => handleAction("signup")}
              className="action-button signup-account-button"
            >
              <FaUser /> Sign Up
            </button>

            <button
              onClick={() => handleAction("logout")}
              className="action-button logout-account-button"
            >
              <FaSignOutAlt /> Logout
            </button>
          </div>
          <div className="toastSettingUserName">
            <ToastContainer />
          </div>
        </div>
        <div className="user-timestamps">
          <div className="timestamps-header">
            <div className="timestamp-item">
              <span className="label">Account Created:</span>
              <FaLink size={16} className="icon" />
              {createdAt
                ? `${new Date(createdAt).toLocaleDateString()} ${new Date(
                    createdAt
                  ).toLocaleTimeString()}`
                : "Not available"}
            </div>
            <div className="timestamp-item">
              <span className="label">Last Updated:</span>
              <FaLink size={16} className="icon" />
              {updatedAt
                ? `${new Date(updatedAt).toLocaleDateString()} ${new Date(
                    updatedAt
                  ).toLocaleTimeString()}`
                : "Not available"}
            </div>
          </div>

          {updatedAt && (
            <div className="timestamps-details">
              <div className="time-difference">Updated: {timeDifference}</div>
              <div className="time-grid">
                <div>
                  <strong>Year:</strong> {new Date(updatedAt).getFullYear()}
                </div>
                <div>
                  <strong>Month:</strong>{" "}
                  {new Date(updatedAt).toLocaleString("default", {
                    month: "long",
                  })}
                </div>
                <div>
                  <strong>Day:</strong>{" "}
                  {new Date(updatedAt).toLocaleString("default", {
                    weekday: "long",
                  })}
                </div>
                <div>
                  <strong>Hours:</strong> {new Date(updatedAt).getHours()}
                </div>
                <div>
                  <strong>Minutes:</strong> {new Date(updatedAt).getMinutes()}
                </div>
                <div>
                  <strong>Seconds:</strong> {new Date(updatedAt).getSeconds()}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="modal-title">Confirm Action</h2>
            <p className="modal-message">
              Are you sure you want to {actionType} your account?
            </p>
            <div className="modal-buttons">
              <button
                onClick={() => setShowModal(false)}
                className="modal-cancel-button"
              >
                <FaTimes
                  size={15}
                  color="white"
                  style={{ marginRight: "10px" }}
                />
                No
              </button>
              <button onClick={confirmAction} className="modal-confirm-button">
                <FaCheck
                  size={15}
                  color="white"
                  style={{ marginRight: "10px" }}
                />
                Proceed
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast Container placed here so it's not hidden */}
    </>
  );
};

export default UserActions;
