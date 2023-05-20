import React from 'react'
import './experience.css'
import {FiCheckCircle} from 'react-icons/fi'
import {BsFiletypeHtml, BsFiletypeCss} from 'react-icons/bs'
import {SiJavascript, SiReact, SiPython} from 'react-icons/si'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>My Tools of The Trade</h5>
      <h2>Experience & Skills</h2>

      <div className="container experience__container">

        <div className="experience__core">
          <h3>Core Skills & Expertise</h3>

          <div className="experience__content">
            <article className='experience__details'>
              <FiCheckCircle className='experience__details-icon' />
              <div>
                <h4>Customer Service</h4>
                <small className='text-light'>Expert</small>
              </div>
            </article>
            <article className='experience__details'>
              <FiCheckCircle className='experience__details-icon' />
              <div>
                <h4>Critical Thinking</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>
            <article className='experience__details'>
              <FiCheckCircle className='experience__details-icon' />
              <div>
                <h4>Technical Acumen</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FiCheckCircle className='experience__details-icon' />
              <div>
                <h4>UI/UX & Journey</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FiCheckCircle className='experience__details-icon' />
              <div>
                <h4>Storytelling</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <FiCheckCircle className='experience__details-icon' />
              <div>
                <h4>Problem-solving</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FiCheckCircle className='experience__details-icon' />
              <div>
                <h4>Project Management</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FiCheckCircle className='experience__details-icon' />
              <div>
                <h4>Team Leadership</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>

        </div>

        <div className="experience__tools">
          <h3>Tools & Software</h3>

          <div className="experience__content">
          <article className='experience__details'>
              <FiCheckCircle className='experience__details-icon' />
              <div>
                <h4>Airtable</h4>
                <small className='text-light'>Expert</small>
              </div>
            </article>
            <article className='experience__details'>
              <FiCheckCircle className='experience__details-icon' />
              <div>
                <h4>Figma</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>
            <article className='experience__details'>
              <FiCheckCircle className='experience__details-icon' />
              <div>
                <h4>Adobe Photoshop</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FiCheckCircle className='experience__details-icon' />
              <div>
                <h4>WordPress</h4>
                <small className='text-light'>Expert</small>
              </div>
            </article>
            <article className='experience__details'>
              <FiCheckCircle className='experience__details-icon' />
              <div>
                <h4>Ghost</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FiCheckCircle className='experience__details-icon' />
              <div>
                <h4>Zendesk</h4>
                <small className='text-light'>Expert</small>
              </div>
            </article>
            <article className='experience__details'>
              <FiCheckCircle className='experience__details-icon' />
              <div>
                <h4>Jira</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <FiCheckCircle className='experience__details-icon' />
              <div>
                <h4>Google Workspace</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>

      <h5 className='code-lang'>Favorite languages</h5>
      <div className='code-icons'>
        <article className='code-icon'>
          <BsFiletypeHtml />
        </article>
        <article className='code-icon'>
          <BsFiletypeCss />
        </article>
        <article className='code-icon'>
          <SiJavascript />
        </article>
        <article className='code-icon'>
          <SiReact />
        </article>
        <article className='code-icon'>
          <SiPython />
        </article>
      </div>
    </section>
  )
}

export default Experience