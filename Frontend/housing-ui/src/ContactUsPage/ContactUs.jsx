import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="container">
      <div className="form-container">
        <h2 className="title">Get in Touch</h2>
        <p className="subtitle">Have any questions? We'd love to hear from you.</p>
        <form className="form">
          <div className="input-group">
            <input type="text" placeholder="Name" className="input" />
            <input type="email" placeholder="Email" className="input" />
            <input type="tel" placeholder="Phone Number" className="input" />
          </div>
          <textarea placeholder="Message" rows="4" className="textarea"></textarea>
          <button type="submit" className="button">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
