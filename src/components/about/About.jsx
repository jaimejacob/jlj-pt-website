import React from 'react'
import './about.css'
import 'animate.css'
import {AiOutlineFire, AiOutlineRocket, AiOutlineHeart} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5 className='animate__animated animate__fadeIn'>Get to know</h5>
      <h2 className='animate__animated animate__fadeIn'>About Me</h2>

      <div className="container about__container">

        <div className="about__content">
          <div className="about__cards animate__animated animate__fadeIn">
            <article className='about__card'>
              <AiOutlineHeart className='about__icon'/>
              <h5>Passionate</h5>
              <small>For creating amazing experiences</small>
            </article>

            <article className='about__card'>
              <AiOutlineFire className='about__icon'/>
              <h5>Fascinated</h5>
              <small>About UX/UI & user journey</small>
            </article>

            <article className='about__card'>
              <AiOutlineRocket className='about__icon'/>
              <h5>Motivated</h5>
              <small>By learning new skills</small>
            </article>
          </div>
          <div className='about__text animate__animated animate__fadeIn'>
            <h2 className='color-text'>I'm Jaime, nice to meet you!  👋🏼</h2>
            <p>
              I’m a product creative with a deep love for technology, design and the arts, and a strong experience in Customer Service, 
              Success and Technical Support. <br /><br /> Passionate about product optimization and monetization, I drive product and service development, 
              improvement and implementation from a zealous customer-centric perspective, with smart use of modern bespoke tools and 
              data-driven analytics.
              <br /><br />
              With a generalist skillset focusing on Internet Technologies, Frontend Development & Design, Domain Names, DNS & Web Hosting, I develop new products and experiences by using my business, research and technical knowledge to identify new opportunities, and my design skills to do storytelling, roadmapping, wireframing and prototyping.
            </p>
          </div>
          <a href="#contact" className='btn btn-primary animate__animated animate__fadeIn'>Let's Talk</a>
        </div>

      </div>
    </section>
  )
}

export default About