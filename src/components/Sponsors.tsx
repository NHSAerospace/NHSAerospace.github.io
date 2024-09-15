import React from 'react';
import './Sponsors.css';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import microchipLogo from '../images/MICV2CB.png';

const Sponsors = () => {
  const [emailStatus, setEmailStatus] = useState('');

  function sendEmail(e: any) {
    e.preventDefault();

    emailjs.sendForm('service_bounkcb', 'template_60hfgbf', e.target, 'YKTt2qnb2TpDGknWp')
      .then((result) => {
        setEmailStatus('Message successfully sent!');
      }, (error) => {
        setEmailStatus('Message failed to send. Please try again later or contact us at nhsaerospace@gmail.com.');
      });
  }

  return (
    <div className='sponsors'>
      <div className='sponsor-logos'>
        <img src={microchipLogo} alt='Microchip-Logo' className='sponsor-logo' />
      </div>
      <h1>Sponsors</h1>
      <p>To embark on endevours like the NASA Student Launch Initiative and Rockets For Schools, our club depends on funding from our sponsors. All sponsors will have their company logo displayed on our rockets, website, and team T-shirts. Sponsors will also be featured in our NASA SLI proposal. If you would like to help fund our endevours and contribute to the next generation of aerospace engineers, fill out the form below to become a sponsor of the Northville Aerospace Club today!</p>
      <form onSubmit={sendEmail} className='sponsor-email'>
        <h1>Become a Sponsor</h1>
        <input type='text' name='user_name' placeholder='Your Name' required />
        <input type='email' name='user_email' placeholder='Your Email' required />
        <input type='text' name='company_name' placeholder='Company Name' />
        <textarea name="message" placeholder='Message' required />
        <input type='submit' value='Send' className='send' />
      </form>
      <p>{emailStatus}</p>
      <p>Email <a href='mailto:nhsaerospace@gmail.com'>nhsaerospace@gmail.com</a> for additional information.</p>
    </div>
  );
}

export default Sponsors;