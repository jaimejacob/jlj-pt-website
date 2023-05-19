import React from 'react'
import './footer.css'
import {BsLinkedin, BsInstagram, BsTwitter} from 'react-icons/bs'

const Footer = () => {
  const thisYear = new Date().getFullYear()

  return (
    <footer>
      <a href="/#" className='footer__logo'>Jaime L. Jacob</a>

      <ul className='permalinks'>
        <li><a href="/#">Home</a></li>
        <li><a href="/#about">About</a></li>
        <li><a href="/#experience">Experience</a></li>
        <li><a href="/#services">Services</a></li>
        <li><a href="/#portfolio">Portfolio</a></li>
        <li><a href="/#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/jaimeljacob/" target='_blank' rel='noreferrer'><BsLinkedin /></a>
        <a href="https://www.instagram.com/jlj.pt/" target='_blank' rel='noreferrer'><BsInstagram /></a>
        <a href="https://twitter.com/jlj_pt" target='_blank' rel='noreferrer'><BsTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; {thisYear} Jaime L. Jacob - All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer