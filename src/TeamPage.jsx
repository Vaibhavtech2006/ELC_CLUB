import React from "react";
import "./TeamPage.css";  // You can style this page according to your needs
import photo1 from "./ph1.png";  // Assuming your image is named ph1.jpg (correct the file name if needed)
import photo2 from "./myphoto.jpg"
import ph3 from "./ph3.png"
import ph4 from "./ph4.jpg"
import ph5 from "./ph5.jpg"
import ph6 from "./ph6.jpg"
import ph7 from "./ph7.jpg"
import ph8 from "./ph8.jpg"
import ph9 from "./ph9.jpg"
import ph10 from "./ph10.jpg"
import ph11 from "./ph11.jpg"
import ph12 from "./ph12.jpg"
import ph14 from "./ph14.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const teamMembers = [
  {
    name: "Gunabh Sharan",
    role: "President",
    image: photo1,
    linkedin: "https://www.linkedin.com/in/chirag-ramesh-chandra",
    twitter: "https://twitter.com/chiragramesh",
    instagram: "https://www.instagram.com/chiragramesh"
  },
  {
    name: "Hanshika Chauhan",
    role: "Vice President",
    image: ph3,
    linkedin: "https://www.linkedin.com/in/hanshika-chauhan-1a57242a8/",
    twitter: "https://twitter.com/vaibhavkhandelwal",
    instagram: "https://www.instagram.com/vaibhavkhandelwal"
  },
  {
    name: "Vaibhav Khandelwal",
    role: "Technical",
    image: photo2,
    linkedin: "https://www.linkedin.com/in/vaibhav-khandelwal-8686a2294/",
    twitter: "https://twitter.com/vaibhavkhandelwal",
    instagram: "https://www.instagram.com/vaibhavkhandelwal"
  },
  {
    name: "Ayushi Shishodia",
    role: "Secretary",
    image: ph4,
    linkedin: "https://www.linkedin.com/in/chirag-ramesh-chandra",
    twitter: "https://twitter.com/chiragramesh",
    instagram: "https://www.instagram.com/chiragramesh"
  },
  {
    name: "Kirti Sharma",
    role: "Designer",
    image: ph5,
    linkedin: "https://www.linkedin.com/in/hanshika-chauhan-1a57242a8/",
    twitter: "https://twitter.com/vaibhavkhandelwal",
    instagram: "https://www.instagram.com/vaibhavkhandelwal"
  },
  {
    name: "Aditi Sinha",
    role: "Designer",
    image: ph6,
    linkedin: "https://www.linkedin.com/in/vaibhav-khandelwal-8686a2294/",
    twitter: "https://twitter.com/vaibhavkhandelwal",
    instagram: "https://www.instagram.com/vaibhavkhandelwal"
  },
  {
    name: "Harsh Rohilla",
    role: "Technical",
    image: ph7,
    linkedin: "https://www.linkedin.com/in/vaibhav-khandelwal-8686a2294/",
    twitter: "https://twitter.com/vaibhavkhandelwal",
    instagram: "https://www.instagram.com/vaibhavkhandelwal"
  },
  {
    name: "Tannu Choudhary",
    role: "Treasurer",
    image: ph8,
    linkedin: "https://www.linkedin.com/in/vaibhav-khandelwal-8686a2294/",
    twitter: "https://twitter.com/vaibhavkhandelwal",
    instagram: "https://www.instagram.com/vaibhavkhandelwal"
  },
  {
    name: "Hitt Jain",
    role: "Outreach & PR",
    image: ph9,
    linkedin: "https://www.linkedin.com/in/vaibhav-khandelwal-8686a2294/",
    twitter: "https://twitter.com/vaibhavkhandelwal",
    instagram: "https://www.instagram.com/vaibhavkhandelwal"
  },
  {
    name: "Ujjaval Mishra",
    role: "Outreach & PR",
    image: ph11,
    linkedin: "https://www.linkedin.com/in/ujjaval-mishra-6974072a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    twitter: "https://x.com/ArmyUjjaval?t=j4Dt4X3CuAr9LXkYwuTYbg&s=09",
    instagram: "https://www.instagram.com/ujjavalmishra9918/profilecard/?igsh=MXNjZ3p6aGd4ZGJ5Mg=="
  },
  {
    name: "Divyanshi Rajput",
    role: "Social Media",
    image: ph12,
    linkedin: "https://www.linkedin.com/in/divyanshi-rajput-a60791296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    twitter: "https://twitter.com/vaibhavkhandelwal",
    instagram: "https://www.instagram.com/_divya_rajput_2550?igsh=ZjQya2Jnd3BkcTZv"
  },
  {
    name: "Nancy Bansal",
    role: "Social Media",
    image: ph14,
    linkedin: "https://www.linkedin.com/in/nancy-bansal-267710279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    twitter: "https://twitter.com/vaibhavkhandelwal",
    instagram: "https://www.instagram.com/nanc_yy7/"
  },
  {
    name: "Palak Chauhan",
    role: "Documentation",
    image: ph10,
    linkedin: "https://www.linkedin.com/in/palak-chauhan-ab5b20325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app ",
    twitter: "https://twitter.com/vaibhavkhandelwal",
    instagram: "https://www.instagram.com/_palak_1223/profilecard/?igsh=MWVrZXc4ZWJubWdmdg=="
  }
];

const TeamPage = () => {
  return (
    <div className="team-page">
      <h2>Meet Our Team</h2>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.image} alt={member.name} className="team-image" />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <div className="social-links">
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
