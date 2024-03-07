import React, { useState } from 'react';
import '../assets/styles/Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className='content contact'>
      <div className="left">
        
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
      </div>
      <div className="right">
      <h2 className='h2'>Contact Us</h2>
      </div>
    </div>
  );
}

export default Contact;
