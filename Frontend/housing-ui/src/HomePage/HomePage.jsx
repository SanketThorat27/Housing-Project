import React from "react";
import "./HomePage.css";
import housing1 from "../images/housing1.png";
import logo from "../images/logo.png";
import housing2 from "../images/housing2.png";
import housing3 from "../images/housing3.png";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const HomePage = () => {
  const navigate=useNavigate()
  const handleSignout=()=>{
    localStorage.removeItem("token")
    navigate("/")
    toast.success("Logout Successful",{position:"top-right"})
  }
  return (
    <div className="homepage-container">
      {/* Navigation Bar */}
      <header className="header">
        <div className="wrapper">
          <div className="logo">
            <img src={logo} alt="Logo" className="logo-img" />
          </div>
          <nav>
            <ul className="nav-area">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <Link to="/Predictprice">
                <a href="#">Predict Price</a>
                </Link>
              </li>
              <li>
                <a href="#">Redirect</a>
              </li>
              <li>
                {" "}
                <Link to="/ContactUs">
                  <a href="#">Contact Us</a>
                </Link>
              </li>
              
              <li onClick={handleSignout}>
                <a href="#">Sign Out</a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Welcome Text */}
        <div className="welcome-text">
          <h1>
            We are <span>Creative</span>
          </h1>
          <a href="#" className="contact-btn">
            Contact Us
          </a>
        </div>
      </header>

      {/* Feature Section */}
    
      {/* Banner Image */}
      {/* {<div className="banner">
        <img src={housing1} alt="Banner" className="banner-img" />
      </div>} */}

      <div className="feature-section">
        <img src={housing2} alt="Feature" className="feature-img" />
      </div>

      

      {/* Extra Image Section */}
      <div className="extra-image">
        <img src={housing3} alt="Extra" className="extra-img" />
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; California Housing Project. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
