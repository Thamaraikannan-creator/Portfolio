import React, { useState } from 'react';
import '../styles/Contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import resume from '../styles/resume.pdf'

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
    // Handle form submission, e.g., send data to email or a server
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-page">
      <h2>Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Send Message</button>
        <a href={resume} download className='btn btn-primary'>resume</a>
      </form>
      
    </div>
  );
}

export default Contact;
