import React, { useState, useEffect } from "react";

import './stylesheets/Contact.css'
import submitForm from './submitForm';

const Contact = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [success, setSuccess] = React.useState(false);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      setIsSubmitting(true);
      setError(null);
      setSuccess(false);
  
      // submit the form to the server
      submitForm({ name, email, message })
        .then(() => {
          setIsSubmitting(false);
          setSuccess(true);
        })
        .catch((error) => {
          setIsSubmitting(false);
          setError(error);
        });
    };
  
    return (
        <div>
        <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        {error && <div className="error">{error.message}</div>}
        {success && <div className="success">Your message has been sent!</div>}
        <label htmlFor="name">
          <input
            type="text"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder='your name'
            required
          />
        </label>
        <br />
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder='your email'
            required
          />
        </label>
        <br />
        <label htmlFor="message">
          <textarea
            name="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder='your message'
            required
          />
        </label>
        <br />
        <button type="submit" disabled={isSubmitting}>
          Send
        </button>
      </form>
      </div>
    );
  };
  
  export default Contact;
