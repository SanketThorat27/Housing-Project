import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="container">
      <div className="form-container">
        <div className="left-container">
          <div className="left-inner-container">
            <h2>Let's Connect</h2>
            <p>Whether you have a question, want to suggest us something or simply want to connect.</p>
            <br />
            <p>Feel free to send me a message in the contact form</p>
          </div>
        </div>
        <div className="right-container">
          <div className="right-inner-container">
            <form action="#">
              <h2 className="lg-view">Contact</h2>
              <h2 className="sm-view">Let's Chat</h2>
              <p></p>
              <div className="social-container">
                <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
              </div>
              <input type="text" placeholder="Name *" required />
              <input type="email" placeholder="Email *" required />
              <input type="text" placeholder="Message " required />
              
             
             
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;