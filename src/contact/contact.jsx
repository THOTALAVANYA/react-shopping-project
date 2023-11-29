import React, { useState } from "react";
import "./contact.css";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="contact">
      <h1>Contact Us</h1>

      <div className="input-group">
        <label htmlFor="name">Name</label>
        <input type="text" name="name"  id="name" value={formData.name} onChange={handleChange} />
      </div>

      <div className="input-group">
        <label htmlFor="email">Email</label>
        <input type="email"  name=" email" id="email" value={formData.email} onChange={handleChange} />
      </div>

      <div className="input-group">
        <label htmlFor="mobile">Mobile</label>
        <input type="text"  name="mobile" id="mobile" value={formData.mobile} onChange={handleChange} />
      </div>

      <div className="input-group">
        <label htmlFor="message">Message</label>
        <textarea id="message"  name="message" value={formData.message} onChange={handleChange} />
      </div>

      <div>
        <button className="cancel">Cancel</button>
        <button className="submit">Submit</button>
      </div>
    </div>
  );
};
