import React, { useState } from "react";
import "../styles/Contact.css";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import BASE_URL from "../../configs/backendurl";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Contact Data:", formData);

    try {
      const response = await fetch(`${BASE_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        alert(result.message);
        setFormData({ email: "", message: "" });
      } else {
        const errorData = await response.json();
        alert(errorData.message || "Failed to save contact");
      }
    } catch (error) {
      console.error("Error submitting contact:", error);
      alert("An error occurred: " + error.message);
    }
  };
  const logos = [
    { Icon: FaReact, label: "React.js", color: "#61DAFB" },
    { Icon: SiExpress, label: "Express.js", color: "#000000" },
    { Icon: FaNodeJs, label: "Node.js", color: "#68A063" },
    { Icon: SiMongodb, label: "MongoDB", color: "#47A248" },
  ];
  return (
    <>
      <div className="mainmain">
        <div className="norway-section">
          <h1 className="france-title">Join the MERN Community</h1>
          <p className="argentina-description">
            Send us a message and we’ll get back to you.
          </p>

          <div className="australia-arrow">
            <h2>REGISTER TO</h2>
            <div className="italy-merncolors">
              <span className="spain-m">M</span>
              <span className="portugal-e">E</span>
              <span className="china-r">R</span>
              <span className="russia-n">N</span>
            </div>
          </div>
          <div className="mern-logos">
            {logos.map(({ Icon, label, color }, index) => (
              <div className="logo-container" key={index}>
                <Icon
                  size={100}
                  style={{
                    color,
                    animation:
                      label === "React.js"
                        ? "rotateReact 15s linear infinite"
                        : undefined,
                  }}
                />
                <h3>{label}</h3>
              </div>
            ))}
          </div>
        </div>

        <section className="india-form-section">
          <div className="mexico-container">
            <h1 className="uk-title">Contact Us</h1>

            <form onSubmit={handleSubmit} className="egypt-form">
              <div className="china-group">
                <label htmlFor="email" className="turkey-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="ghana-input"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
              </div>
              <div className="china-group">
                <label htmlFor="message" className="turkey-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="ghana-input"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                />
              </div>
              <button type="submit" className="kenya-btn">
                Submit
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
