import React, { useState } from "react";
import "../../tests/test.css"; // Assuming this contains your global styles
import DefaultUser from "../images/Defualtuser.jpeg";
import Profile from "../profile/Profile";

import AccountInfo from "../profile/Settings";
import CompleteProfile from "../profile/CompleteProfile";

const ProfilePage = () => {
  const [activeSection, setActiveSection] = useState("profile");
  const [profileImage, setProfileImage] = useState(DefaultUser);
  // const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    dob: "",
    location: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handlers for input and form submission
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setProfileImage(URL.createObjectURL(file));
  };

  const handleSubmitProfile = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulating a network request
    setTimeout(() => {
      alert("Profile Saved!");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className={`profile-page ${darkMode ? "dark" : ""}`}>
      {/* Sidebar Navigation */}
      <div className="profile-sidebar">
        <h3>Navigation</h3>
        <ul>
          <li
            className={activeSection === "profile" ? "active" : ""}
            onClick={() => setActiveSection("profile")}
          >
            Profile
          </li>

          <li
            className={activeSection === "completeProfile" ? "active" : ""}
            onClick={() => setActiveSection("completeProfile")}
          >
            Edit Profile
          </li>
          <li
            className={activeSection === "accountInfo" ? "active" : ""}
            onClick={() => setActiveSection("accountInfo")}
          >
            Settings
          </li>
        </ul>
      </div>

      {/* Dynamic Content Section */}
      <div className="profile-content">
        {activeSection === "profile" && (
          <Profile
            profileImage={profileImage}
            handleImageChange={handleImageChange}
          />
        )}

        {activeSection === "completeProfile" && (
          <CompleteProfile
            formData={formData}
            handleInputChange={handleInputChange}
            handleSubmitProfile={handleSubmitProfile}
            isSubmitting={isSubmitting}
          />
        )}
        {activeSection === "accountInfo" && <AccountInfo />}
      </div>
    </div>
  );
};

export default ProfilePage;
