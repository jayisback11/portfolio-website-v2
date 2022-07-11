import React, { useRef, useState } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser'
import { icons } from './socialIcons'
import ContactSVG from '../../assets/images/svg/contact.svg'

function Contact () {
  const form = useRef()
  const [fullName, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [success, isSuccess] = useState(false)

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
        result => {
          setFullname('')
          setEmail('')
          setMessage('')
          isSuccess(true)
        },
        error => {}
      )
  }
  return (
    <div className='contact'>
      <img
        src={ContactSVG}
        alt=''
        data-aos='fade-down-right'
        data-aos-duration={2000}
        data-aos-offset={500}
      />
      <h2>Contact</h2>
      <div className='social-icons'>
        {icons.map((icon, index) => (
          <a href={icon.link} target='_blank' rel='noreferrer'>
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
        <input
          type='text'
          onChange={event => setFullname(event.target.value)}
          value={fullName}
          name='user_name'
          placeholder='Full Name'
          required
        />
        <input
          type='email'
          onChange={event => setEmail(event.target.value)}
          name='user_email'
          placeholder='Email'
          value={email}
          required
        />
        <textarea
          name='message'
          placeholder='Message'
          onChange={event => setMessage(event.target.value)}
          value={message}
          required
        />
        <input className='submit-btn' type='submit' value='Send' />
      </form>
      {success && (
        <p
          className='message-success'
          data-aos='fade-down-right'
          data-aos-offset={-500}
        >
          Email Sent!
        </p>
      )}
    </div>
  )
}

export default Contact
