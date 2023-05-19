import React from 'react'
import './services.css'
import {FiCheck} from 'react-icons/fi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Design & Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <FiCheck className='service__list-icon'/>
              <p>Custom website design and development tailored to your business needs and target audience.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon'/>
              <p>Responsive and accessible web design that works seamlessly on all devices and screen sizes.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon'/>
              <p>Search engine optimization (SEO) to improve your website's visibility and attract more organic traffic.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon'/>
              <p>User-friendly content management system (CMS) that allows you to update your website's content easily.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon'/>
              <p>Website maintenance and support services to ensure your website stays up-to-date and runs smoothly.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon'/>
              <p>Integration with third-party tools and platforms, such as social media, email marketing, and payment gateways.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon'/>
              <p>Performance optimization to improve your website's loading speed and overall user experience.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Product Design & Management</h3>
          </div>

          <ul className="service__list">
            <li>
              <FiCheck className='service__list-icon'/>
              <p>Product design services that focus on user-centered design principles to create products that are both functional and visually appealing.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon'/>
              <p>User research and testing to understand your target audience's needs, pain points, and preferences.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon'/>
              <p>Rapid prototyping and iteration to quickly test and refine product ideas before investing too much time and resources.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon'/>
              <p>Product roadmap development to help you plan and prioritize your product development efforts.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon'/>
              <p>Agile project management methodologies to ensure that your product is delivered on time and within budget.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon'/>
              <p>Data-driven decision-making based on user feedback and analytics to continuously improve your product.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon'/>
              <p>Integration with other systems, such as CRM or ERP, to create a seamless user experience.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon'/>
              <p>Product launch and marketing support to help you introduce your product to the market and attract new customers.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web & Digital Consultancy</h3>
          </div>

          <ul className="service__list">
            <li>
              <FiCheck className='service__list-icon'/>
              <p>Strategic planning and consulting services to help you define your business goals and develop a digital strategy that aligns with them.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon'/>
              <p>Website audit and analysis to identify areas of improvement and optimize your website's performance.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon'/>
              <p>User experience (UX) design consulting to ensure your website is easy to navigate and use, leading to higher engagement and conversions.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon'/>
              <p>Conversion rate optimization (CRO) to help you increase your website's conversion rate and generate more leads or sales.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon'/>
              <p>Digital marketing consulting services to help you reach your target audience and achieve your marketing goals.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon'/>
              <p>Social media marketing and management services to help you build and engage with your online community.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon'/>
              <p>Email marketing consulting to help you create effective email campaigns that drive results.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services