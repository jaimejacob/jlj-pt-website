import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/jaime-hero.png'
import HeaderSocials from './HeaderSocials'
import 'animate.css'


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1 className='animate__animated animate__fadeIn'><a href="https://jlj.pt">Jaime L. Jacob</a></h1>
        <h5 className='text-light animate__animated animate__fadeIn'>Product Manager & Designer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me animate__animated animate__zoomIn animate__delay-1s">
          <img src={ME} alt="Me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>

        
      </div>
    </header>
  )
}

export default Header