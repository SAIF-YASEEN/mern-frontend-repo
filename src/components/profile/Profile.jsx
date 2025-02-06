import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Profile.css";
import { DefualtProfilePic } from "../../constants/Constant";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

// API URL to get user profile
const PROFILE_API_URL = "https://test-repo-production-b3a0.up.railway.app/complete-profile";
const ProfilePage = () => {
  const [profilePic, setProfilePic] = useState(DefualtProfilePic);
  const [userData, setUserData] = useState("");
  const [loading, setLoading] = useState(true); // Added loading state

  // Handle profile picture change
  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    console.log("profile pic ", userData);
    const reader = new FileReader();
    reader.onload = () => {
      const base64Image = reader.result;
      setProfilePic(base64Image);
      localStorage.setItem("profilePic", base64Image);
    };
    reader.readAsDataURL(file);
  };

  // Fetch profile data when component is mounted
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const stringLocalEmail = localStorage
          .getItem("userEmail")
          ?.replace(/"/g, ""); // Remove quotes
        if (!stringLocalEmail) {
          setLoading(false);
          return;
        }

        const response = await axios.get(
          `${PROFILE_API_URL}?email=${encodeURIComponent(stringLocalEmail)}`
        );

        if (response.data) {
          setUserData(response.data);

          if (response.data.profilePicture) {
            setProfilePic(response.data.profilePicture);
          }
        }
      } catch (error) {
        console.error("Error fetching user profile data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  // Show a loading spinner or blank page until data is fetched
  if (loading) {
    return <div className="loading-screen">Loading...</div>;
  }

  return (
    <div className="profile-page__container-main">
      <div className="handleIcons">
        <div className="profile-page__profile-pic-container">
          <img
            src={localStorage.getItem("profilePic") || profilePic}
            alt="Profile"
            className="profile-page__profile-pic"
          />
          <p className="ProfileName">{userData.username || "Unknown User"}</p>
          <label
            htmlFor="profile-page__profile-pic-input"
            className="profile-page__change-button"
          >
            Change
          </label>
          <input
            id="profile-page__profile-pic-input"
            type="file"
            accept="image/*"
            onChange={handleProfilePicChange}
            className="profile-page__hidden-input"
          />
        </div>

        {/* Social Media Icons */}
        <div className="social-icons__container">
          <a
            href={userData.facebook || "https://www.facebook.com"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook
              className="social-icon"
              size={40}
              style={{ color: "#1877F2" }}
            />
          </a>
          <a
            href={userData.twitter || "https://www.twitter.com"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter
              className="social-icon"
              size={40}
              style={{ color: "#1DA1F2" }}
            />
          </a>
          <a
            href={userData.instagram || "https://www.instagram.com"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              className="social-icon"
              size={40}
              style={{ color: "#E4405F" }}
            />
          </a>
          <a
            href={userData.linkedin || "https://www.linkedin.com"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              className="social-icon"
              size={40}
              style={{ color: "#0A66C2" }}
            />
          </a>
          <a
            href={userData.github || "https://www.github.com"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              className="social-icon"
              size={40}
              style={{ color: "#181717" }}
            />
          </a>
        </div>
      </div>

      <h2 className="profile-page__form-title">
        <span className="dynamic">{userData.username}</span> Profile
      </h2>

      <div className="profile-page__form-container">
        <form className="formformform">
          <div className="profile-page__form-group">
            <label className="profile-page__label">Name</label>
            <input
              type="text"
              value={userData.username || ""}
              className="profile-page__input-field"
              readOnly
            />
          </div>

          <div className="profile-page__form-group">
            <label className="profile-page__label">Email</label>
            <input
              type="email"
              disabled
              value={userData.email || ""}
              className="profile-page__input-field"
            />
          </div>

          <div className="profile-page__form-group">
            <label className="profile-page__label">Phone</label>
            <input
              type="text"
              disabled
              value={userData.phone || ""}
              className="profile-page__input-field"
            />
          </div>

          <div className="profile-page__form-group">
            <label className="profile-page__label">Address</label>
            <input
              type="text"
              disabled
              value={userData.address || ""}
              className="profile-page__input-field"
            />
          </div>

          <div className="profile-page__form-group">
            <label className="profile-page__label">City</label>
            <input
              type="text"
              disabled
              value={userData.city || ""}
              className="profile-page__input-field"
            />
          </div>

          <div className="profile-page__form-group">
            <label className="profile-page__label">Country</label>
            <input
              type="text"
              disabled
              value={userData.country || ""}
              className="profile-page__input-field"
            />
          </div>

          <div className="profile-page__form-group">
            <label className="profile-page__label">Gender</label>
            <input
              type="text"
              disabled
              value={userData.gender || ""}
              className="profile-page__input-field"
            />
          </div>

          <div className="profile-page__form-group">
            <label className="profile-page__label">Education</label>
            <textarea
              disabled
              value={userData.education || ""}
              className="profile-page__input-field"
            />
          </div>

          <div className="profile-page__form-group">
            <label className="profile-page__label">Bio</label>
            <textarea
              disabled
              value={userData.bio || ""}
              className="profile-page__input-field"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
