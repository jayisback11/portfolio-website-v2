import React, { useRef } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser'
import { icons } from './socialIcons'
import SendIcon from '@mui/icons-material/Send';

function Contact () {
  const form = useRef()

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_dkqg9c6',
        'template_93puip9',
        form.current,
        'dFSzfOLyvGNa9_KBw'
      )
      .then(
        result => {},
        error => {}
      )
  }
  return (
    <div className='contact'>
      <h2>Contact</h2>
      <div className='social-icons'>
        {icons.map((icon, index) => (
          <a href={icon.link} target='_blank'>
            <icon.icon fontSize='large' />
          </a>
        ))}
      </div>
      <p>
        I will love to hear from you. Whether it’s a project, job opportunity,
        or just a chat. Feel free to contact me. I will get back to you as soon
        as possible.
      </p>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type='text' name='user_name' placeholder='Full Name' />
        <label>Email</label>
        <input type='email' name='user_email' placeholder='Email' />
        <label>Message</label>
        <textarea name='message' placeholder='Message' />
        <input className='submit-btn' type='submit' value='Send'/>
      </form>
    </div>
  )
}

export default Contact
