import React from "react";

import "./contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact_banner">
        <h1 className="contact_title">CONTACT US </h1>
      </div>

      <div className="contact-container">
        <form className="contact-form">
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="E-mail" required />
          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            required
          ></textarea>
          <button type="submit">Send</button>
        </form>
        <div className="contact-info">
          <h2>Leave Your Message</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <p>
            <strong>E-mail:</strong> youremail@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
