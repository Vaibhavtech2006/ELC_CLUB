import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import WelcomeMessage from "./WelcomeMessage";
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from "./logo.png";
import AboutPage from "./Pages/AboutPage";
import TeamPage from "./TeamPage";
import PrayaasELC from "./event";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);

  // Toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsNavbarExpanded(!isNavbarExpanded); // Toggle navbar expansion
  };

  return (
    <Router>
      <div className="container">
        {/* Navbar */}
        <nav className={`navbar ${isNavbarExpanded ? "expanded" : ""}`}>
          <div className="logo">
            <img src={logo} alt="ELC ABESIT Logo" className="logo-image" />
          </div>
          <button className="menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        {/* Main Content */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={
              <div>
                <header className="header" id="home">
                  <WelcomeMessage />
                  <p>We believe in togetherness</p>
                  <div className="tags">
                    <span className="tag learn">Learn</span>
                    <span className="tag collaborate">Collaborate</span>
                    <span className="tag grow">Grow</span>
                  </div>
                </header>

                {/* Sponsors Section */}
                <section className="sponsors" id="sponsors">
                  <h2>Our Events</h2>
                  <p>Explore the exciting and impactful events we have organized for our community:</p>
                  <ul>
                    <li><strong>Voter Education Workshop:</strong> A workshop to educate the youth on the power of voting and their responsibility as informed voters.</li>
                    <li><strong>Interactive Debates:</strong> Thought-provoking debates on key social and political issues, where students actively participate.</li>
                    <li><strong>Community Engagement Sessions:</strong> Building community ties by engaging with local leaders and activists.</li>
                    <li><strong>Leadership and Empowerment Talks:</strong> Inviting experts to speak about leadership, empowerment, and social responsibility.</li>
                  </ul>
                </section>
              </div>
            } />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/events" element={<PrayaasELC />} />
          </Routes>
        </div>

        {/* Footer Section */}
        <footer className="footer" id="contact">
          <h3>Connect with us</h3>
          <div className="connect-icons">
            <button>Instagram</button>
            <button>LinkedIn</button>
            <button>GitHub</button>
            <button>Discord</button>
            <button>Twitter</button>
            <button>WhatsApp</button>
            <button>Gmail</button>
          </div>
          <p>Follow Us: Stay updated with our latest activities and updates!</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
