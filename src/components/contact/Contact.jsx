import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BsWhatsapp} from 'react-icons/bs'
import UserForm from './UserForm'

const Contact = () => {
  
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <HiOutlineMail className='contact__icon' />
            <h4>Email</h4>
            <h5>hi@jlj.pt</h5>
            <a href="mailto:hi@jlj.pt" target='_blank' rel="noreferrer" className='btn'>Send me an email</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__icon' />
            <h4>WhatsApp</h4>
            <h5>+351 91 106 40 91</h5>
            <a href="https://api.whatsapp.com/send?phone=351911064091" target='_blank' rel="noreferrer" className='btn'>Send me a message</a>
          </article>
        </div>

        <UserForm />
      </div>
    </section>
  )
}

export default Contact