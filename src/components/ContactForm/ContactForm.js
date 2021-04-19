import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({});

  const updateInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };
  return (
    <div className="Contact">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            name="name"
            placeholder="Name"
            onChange={updateInput}
            value={formData.name || ''}
          />
          <input
            className="input"
            type="email"
            name="email"
            placeholder="Email"
            onChange={updateInput}
            value={formData.email || ''}
          />
          <textarea
            className="input"
            type="text"
            name="message"
            placeholder="Message"
            onChange={updateInput}
            value={formData.message || ''}
          ></textarea>
          <div class="wrap">
            <button className="button" onClicktype="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
