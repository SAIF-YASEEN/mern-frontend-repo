import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Developer.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";
import Footer from "../partials/Footer";

const DeveloperAbout = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1200, easing: "ease-in-out", once: true });
  }, []);

  return (
    <>
      <section className="developer-about">
        <div className="container-saiftry">
          {/* Introduction */}
          <div data-aos="fade-up">
            <h2 className="mern-title-lt">Meet the Developer - SAIF UR REHMAN</h2>
            <p className="mern-intro-lt">
              I'm <strong>SAIF</strong>, a Full Stack Web Developer passionate
              about building high-performance web applications using the{" "}
              <strong>MERN Stack</strong>. My focus is on crafting seamless,
              secure, and optimized digital experiences.
            </p>
          </div>

          {/* Experience & Skills */}
          <div className="about-grid">
            {[
              {
                title: "Development Philosophy",
                content:
                  "I believe in writing clean, maintainable, and scalable code. Simplicity drives my development process, ensuring projects are efficient, secure, and easy to expand.",
              },
              {
                title: "Professional Experience",
                content:
                  "Experienced in designing intuitive UIs, robust backends, and well-structured APIs, I focus on efficiency and scalability in high-performance applications.",
              },
              {
                title: "Key Technologies",
                content: (
                  <ul>
                    <li>
                      <strong>Frontend:</strong> React, Next.js, Redux,
                      TypeScript
                    </li>
                    <li>
                      <strong>Backend:</strong> Node.js, Express, REST, GraphQL
                    </li>
                    <li>
                      <strong>Database:</strong> MongoDB, MySQL, PostgreSQL
                    </li>
                    <li>
                      <strong>Security:</strong> JWT, OAuth, Bcrypt, CSRF
                      Protection
                    </li>
                    <li>
                      <strong>Deployment:</strong> AWS, Heroku, Netlify, Vercel
                    </li>
                    <li>
                      <strong>CI/CD & DevOps:</strong> Docker, Kubernetes,
                      GitHub Actions
                    </li>
                    <li>
                      <strong>Tools:</strong> Git, GitHub, Webpack, Babel
                    </li>
                  </ul>
                ),
              },
            ].map((section, index) => (
              <div
                className="about-section"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                key={section.title}
              >
                <h3>{section.title}</h3>
                <p>{section.content}</p>
              </div>
            ))}
          </div>

          {/* Goals & Passion */}
          <div className="about-grid">
            {[
              {
                title: "Current & Future Goals",
                content:
                  "Currently exploring serverless architectures, microservices, and cloud platforms like AWS Lambda, Google Cloud, and Azure Functions while deepening my expertise in GraphQL and WebSockets.",
              },
              {
                title: "Why I Love Web Development",
                content:
                  "The ever-evolving web fascinates me. I enjoy bringing ideas to life, solving real-world problems, and creating impactful projects.",
              },
              {
                title: "Soft Skills & Work Ethic",
                content:
                  "Beyond technical skills, I value adaptability, problem-solving, and effective communication, ensuring seamless collaboration and project success.",
              },
            ].map((section, index) => (
              <div
                className="about-section"
                data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                key={section.title}
              >
                <h3>{section.title}</h3>
                <p>{section.content}</p>
              </div>
            ))}
          </div>

          {/* User Experience & Design */}
          <div className="about-grid">
            {[
              {
                title: "Design Aesthetic & User Experience",
                content:
                  "I strive to create intuitive and delightful user experiences, ensuring that my applications are both functional and visually appealing.",
              },
              {
                title: "Cross-Platform Design",
                content:
                  "With responsive design practices, I ensure my applications are fully optimized across various devices, screen sizes, and browsers.",
              },
            ].map((section, index) => (
              <div
                className="about-section"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                key={section.title}
              >
                <h3>{section.title}</h3>
                <p>{section.content}</p>
              </div>
            ))}
          </div>

          {/* Mentorship & Learning */}
          <div className="about-grid">
            {[
              {
                title: "Mentorship",
                content:
                  "I love sharing my knowledge with aspiring developers by providing guidance, resources, and best practices to help them grow.",
              },
              {
                title: "Always Learning",
                content:
                  "The tech industry evolves rapidly, and I continuously explore new technologies, frameworks, and methodologies to stay ahead.",
              },
            ].map((section, index) => (
              <div
                className="about-section"
                data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                key={section.title}
              >
                <h3>{section.title}</h3>
                <p>{section.content}</p>
              </div>
            ))}
          </div>

          {/* Collaboration & Open Source */}
          <div data-aos="fade-up">
            <h3 className="mern-section-title">Collaboration & Open Source</h3>
            <p>
              Actively involved in open-source projects, I enjoy collaborating
              with developers worldwide to create meaningful and impactful
              software.
            </p>
          </div>

          {/* Contact & Socials */}
          <div data-aos="fade-up">
            <h3 className="mern-section-title">Let's Connect</h3>
            <p>
              I'm open to collaboration and discussions! Whether it's a project
              or a tech talk, feel free to reach out.
            </p>

            <div className="contact-buttons">
              <Link to="/contact" className="btn contact-btn">
                Get in Touch
              </Link>
            </div>

            <div className="social-links">
              {[
                {
                  icon: FaGithub,
                  link: "https://github.com/SAIF-YASEEN",
                  label: "Github",
                },
                {
                  icon: FaLinkedin,
                  link: "https://www.linkedin.com/in/saif-ur-rehman-196282294/",
                  label: "LinkedIn",
                },
                {
                  icon: FaTwitter,
                  link: "https://twitter.com/saifdev",
                  label: "Twitter",
                },
                {
                  icon: FaInstagram,
                  link: "https://www.instagram.com/saif_ur_rehman0708/",
                  label: "Instagram",
                },
                {
                  icon: FaFacebook,
                  link: "https://www.facebook.com/profile.php?id=61570955691196",
                  label: "Facebook",
                },
                {
                  icon: FaYoutube,
                  link: "https://www.youtube.com/",
                  label: "YouTube",
                },
              ].map(({ icon: Icon, link, label }) => (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  key={label}
                >
                  <Icon size={30} />
                </a>
              ))}
              <FaEnvelope
                size={30}
                onClick={() => setShowPopup(true)}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
        </div>
      </section>

      {showPopup && (
        <div className="email-popup">
          <p>saifurrehman0708@gmail.com</p>
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}

      <Footer />
    </>
  );
};

export default DeveloperAbout;
