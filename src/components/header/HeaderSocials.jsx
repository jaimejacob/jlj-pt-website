import React from 'react'
import {BsLinkedin, BsInstagram, BsTwitter} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/jaimeljacob/" target='_blank' rel='noreferrer'><BsLinkedin /></a>
        <a href="https://www.instagram.com/jlj.pt/" target='_blank' rel='noreferrer'><BsInstagram /></a>
        <a href="https://twitter.com/jlj_pt" target='_blank' rel='noreferrer'><BsTwitter /></a>
    </div>
  )
}

export default HeaderSocials