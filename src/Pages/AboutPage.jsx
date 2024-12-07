import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import logo from "../logo.png"; // Adjust the logo import path as needed
import "./AboutPage.css"

// AboutPage Component
const AboutPage = () => {
  return (
    <div className="container">
      {/* Navbar */}
    

      {/* About Section */}
      <div className="about-page">
        <h2>
          In the ELCs, members will be part of interesting and thought-provoking, mostly classroom-based activities. These activities have been carefully designed to impart specific learning which will help them become an Empowered (Prospective) Voter.
        </h2>
      </div>

      {/* Our Mission, Activities, Why Join Section */}
      <div className="enhanced-box">
        <div className="content-slide">
          <h3>Our Mission</h3>
          <p>
            Our mission is to provide empowering learning experiences to help individuals become informed and responsible voters, contributing to a stronger democracy.
          </p>
        </div>
        <div className="content-slide">
          <h3>Our Activities</h3>
          <ul>
            <li>Classroom discussions on voter education</li>
            <li>Interactive workshops for real-world insights</li>
            <li>Debates and thought-provoking discussions</li>
          </ul>
        </div>
        <div className="content-slide">
          <h3>Why Join ELC ABESIT?</h3>
          <p>
            Join us for a unique opportunity to engage with a community that fosters learning, empowerment, and social impact, preparing you for your role as an active and informed voter.
          </p>
        </div>
      </div>

      {/* Footer Section */}
     
    </div>
  );
};

export default AboutPage;
