import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  FaSave,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaCalendarAlt,
  FaCity,
  FaPhoneAlt,
  FaGraduationCap,
  FaAward,
  FaPen,
} from "react-icons/fa";
import "./CompleteProfile.css";

const CompleteProfile = () => {
  const [loading, setLoading] = useState(true);
  const [profilePic, setProfilePic] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    dob: "",
    gender: "",
    city: "",
    country: "",
    bio: "",
    address: "",
    phone: "",
    education: "",
    github: "",
    linkedin: "",
    facebook: "",
    instagram: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userEmail = JSON.parse(localStorage.getItem("userEmail"));

        if (!userEmail) {
          console.error("No user email found in localStorage");
          return;
        }

        const response = await axios.get(
          `http://localhost:5000/complete-profile?email=${userEmail}`
        );

        if (response.data) {
          setFormData((prev) => ({
            ...prev,
            ...response.data, // Pre-filling form data
          }));

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitProfile = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(
        "https://test-repo-production-b3a0.up.railway.app/complete-profile",
        formData
      );

      if (response.status === 200 || response.status === 201) {
        alert("Profile saved successfully!");
        navigate("/profile");
      }
    } catch (error) {
      console.error(
        "Error saving profile:",
        error.response?.data || error.message
      );
      alert(
        error.response?.data?.message ||
          "Error saving profile. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="complete-profile-section">
      <h2 className="header-text">Edit Profile</h2>
      <form onSubmit={handleSubmitProfile} className="profile-form">
        <div className="form-row">
          <div className="input-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              className="input-field"
              value={formData.username}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="input-field"
              value={formData.email}
              readOnly
            />
          </div>
        </div>

        <div className="form-row">
          <div className="input-group">
            <FaCalendarAlt className="icon" />
            <label htmlFor="dob">Date of Birth:</label>
            <input
              type="date"
              id="dob"
              name="dob"
              className="input-field"
              value={formData.dob}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="gender">Gender:</label>
            <select
              id="gender"
              name="gender"
              className="input-field"
              value={formData.gender}
              onChange={handleInputChange}
            >
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="input-group">
            <FaCity className="icon" />
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              name="city"
              className="input-field"
              value={formData.city}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="country">Country:</label>
            <input
              type="text"
              id="country"
              name="country"
              className="input-field"
              value={formData.country}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="input-group">
            <FaPhoneAlt className="icon" />
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="input-field"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <FaGraduationCap className="icon" />
            <label htmlFor="education">Education:</label>
            <input
              type="text"
              id="education"
              name="education"
              className="input-field"
              value={formData.education}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="input-group">
            <FaAward className="icon" />
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              className="input-field"
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <FaPen className="icon" />
            <label htmlFor="bio">Bio:</label>
            <textarea
              id="bio"
              name="bio"
              className="input-field"
              value={formData.bio}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-row">
            <div className="input-group">
              <FaGithub className="icon" />
              <label htmlFor="github">GitHub:</label>
              <input
                type="url"
                id="github"
                value={formData.github}
                name="github"
                className="input-field"
                placeholder="GitHub URL"
                onChange={handleInputChange}
              />
            </div>
            <div className="input-group">
              <FaLinkedin className="icon" />
              <label htmlFor="linkedin">LinkedIn:</label>
              <input
                type="url"
                id="linkedin"
                value={formData.linkedin}
                name="linkedin"
                className="input-field"
                placeholder="LinkedIn URL"
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* More Social Media */}
          <div className="form-row">
            <div className="input-group">
              <FaFacebook className="icon" />
              <label htmlFor="facebook">Facebook:</label>
              <input
                type="url"
                id="facebook"
                name="facebook"
                value={formData.facebook}
                className="input-field"
                placeholder="Facebook URL"
                onChange={handleInputChange}
              />
            </div>
            <div className="input-group">
              <FaInstagram className="icon" />
              <label htmlFor="instagram">Instagram:</label>
              <input
                type="url"
                id="instagram"
                value={formData.instagram}
                name="instagram"
                className="input-field"
                placeholder="Instagram URL"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="button-save btnbtnbtn"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            "Saving..."
          ) : (
            <>
              <FaSave /> Save Profile
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default CompleteProfile;
