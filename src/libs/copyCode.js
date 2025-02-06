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
  const [loading, setLoading] = useState(true); // Initialize loading state
  const [profilePic, setProfilePic] = useState(""); // Initialize profilePic state
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
        const notpareseuserEmail = localStorage.getItem("userEmail");
        const UserEmail = JSON.parse(notpareseuserEmail); // Retrieve the email from localStorage
        console.log(UserEmail);

        const response = await axios.get(
          "http://localhost:5000/complete-profile",
          {
            data: { email: UserEmail }, // Send email in the body of the request
          }
        );

        setFormData(response.data);

        // Set profile picture if available
        if (response.data.profilePicture) {
          setProfilePic(response.data.profilePicture);
        }
      } catch (error) {
        console.error("Error fetching user profile data:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching data
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

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/complete-profile", // Adjust this API endpoint to your backend URL
        formDataToSend,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (response.status === 200 || response.status === 201) {
        // Profile is saved successfully
        alert("Profile saved successfully!");
        navigate("/profile"); // Navigate to the profile page after successful save
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
        {/* Form Row 1 */}
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
              value={formData.email}
              name="email"
              className="input-field"
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Form Row 2 */}
        <div className="form-row">
          <div className="input-group">
            <FaCalendarAlt className="icon" />
            <label htmlFor="dob">Date of Birth:</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              className="input-field"
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="gender">Gender:</label>
            <select
              id="gender"
              value={formData.gender}
              name="gender"
              className="input-field"
              onChange={handleInputChange}
            >
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        {/* Form Row 3 */}
        <div className="form-row">
          <div className="input-group">
            <FaCity className="icon" />
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              className="input-field"
              placeholder="Enter your city"
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="country">Country:</label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              className="input-field"
              placeholder="Enter your country"
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Form Row 4 */}
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
              placeholder="Enter your phone number"
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
              placeholder="Highest qualification"
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Form Row 5 */}
        <div className="form-row">
          <div className="input-group">
            <FaAward className="icon" />
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              value={formData.address}
              id="address"
              name="address"
              className="input-field"
              placeholder="Enter your address"
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <FaPen className="icon" />
            <label htmlFor="bio">Bio:</label>
            <textarea
              id="bio"
              value={formData.bio}
              name="bio"
              className="input-field"
              placeholder="Write a brief bio"
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Social Media Form Row */}
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
