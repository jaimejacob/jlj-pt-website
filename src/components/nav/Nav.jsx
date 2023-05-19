import React from 'react'
import './nav.css'
import {FiHome, FiUser, FiBookOpen, FiMessageCircle, FiFolder} from 'react-icons/fi'
import {RiServiceLine} from 'react-icons/ri'
import {useState} from 'react'
import 'animate.css'

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav className='animate__animated animate__fadeIn'>
      <a href="/#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FiHome /></a>
      <a href="/#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FiUser /></a>
      <a href="/#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FiBookOpen /></a>
      <a href="/#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
      <a href="/#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><FiFolder /></a>
      <a href="/#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><FiMessageCircle /></a>
    </nav>
  )
}

export default Nav