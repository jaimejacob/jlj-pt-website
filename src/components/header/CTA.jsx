import React from 'react'
import CV from '../../assets/jlj-cv.pdf'
import 'animate.css'
import {FiDownload} from 'react-icons/fi'
import {FiMessageCircle} from 'react-icons/fi'

const CTA = () => {
  return (
    <div className='cta animate__animated animate__fadeIn'>
        <a href={CV} download className='btn'>Download CV <FiDownload /></a>
        <a href="#contact" className='btn btn-primary'>Let's talk <FiMessageCircle /></a>
    </div>
  )
}

export default CTA