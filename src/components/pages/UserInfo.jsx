import React, { useEffect, useState } from "react";
import axios from "axios";

const UserInfo = () => {
  const [userInfo, setUserInfo] = useState(null); // To hold user details
  const [loading, setLoading] = useState(true); // Show loading state
  const [error, setError] = useState(null); // To handle errors

  // Fetch user details on component mount
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        // Replace with your endpoint to fetch user data
        const response = await axios.get("https://test-repo-production-b3a0.up.railway.app/userinfo", {
          withCredentials: true, // Required for cookies/session authentication
        });

        setUserInfo(response.data);
      } catch (err) {
        console.error("Error fetching user info:", err);
        setError("Failed to fetch user details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, []);

  // Show loading state
  if (loading) return <p>Loading user details...</p>;

  // Show error state
  if (error) return <p className="error-message">{error}</p>;

  return (
    <div className="user-info">
      <h2>User Information</h2>
      {userInfo && (
        <div className="user-details">
          <h3>Registration Details</h3>
          <p>
            <strong>ID:</strong> {userInfo.id}
          </p>
          <p>
            <strong>Name:</strong> {userInfo.name}
          </p>
          <p>
            <strong>Email:</strong> {userInfo.email}
          </p>
          <p>
            <strong>Registered At:</strong>{" "}
            {new Date(userInfo.registeredAt).toLocaleString()}
          </p>

          <h3>Login Information</h3>
          <p>
            <strong>Last Login Time:</strong>{" "}
            {new Date(userInfo.lastLogin).toLocaleString()}
          </p>
          <p>
            <strong>Total Logins:</strong> {userInfo.loginCount}
          </p>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
