// src/components/ContactForm.js
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import CircularProgress from '@mui/material/CircularProgress';

import './ContactForm.css';
import K from '../keys'

function ContactForm() {
  const [email, setEmail] = useState('');
  const [sentState, setSentState] = useState(0); // 1-> success -1-> error
  const [loading, setLoading] = useState(false);
  const form = useRef();


  const SERVICE_ID = K.email.serviceID
  const PUBLIC_KEY = K.email.publicKey
  const TEMPLATE_ID = K.email.templateID

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement email sending logic
    setLoading(true)

    emailjs
    .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
    .then(
      () => {
        setSentState(1)
        setLoading(false)
      },
      (error) => {
        setSentState(-1)
        setLoading(false)
      },
    );
  };

  return (
    <section className="contact-form">

{ sentState === 0 &&
    (  
        <>
    <h2>הפוך למתעניין מספר #12862</h2>
    { !loading && 
      <form onSubmit={handleSubmit} ref={form}>
        <input 
          type="email" 
          name="from_name"
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="israel.israeli@gmail.com" 
          required 
        />
        <button type="submit" dir='rtl'>תעדכנו אותי!</button>
      </form>
}
      </>
      )

      }
      
      {sentState === 1 && !loading &&  <>
      <p style={{ color: 'green', fontSize: '32px', fontWeight: 'bolder' }}>Email sent successfully!</p>
      <p>Thanks for showing interest in iFit! We will let you know when the app is available.</p>
      </>
      }
      {sentState === -1 && !loading && <p>Error sending email. Please try again.</p>}
      {loading &&  <CircularProgress />}

    </section>
  );
}

export default ContactForm;
