import './portfolio.css'
import IMG1 from '../../assets/jlj-design.png'
import IMG2 from '../../assets/hortensia-music-festival-design.png'
import IMG3 from '../../assets/sublime-design.png'
import {BsWordpress, BsFiletypeHtml, BsFiletypeCss, BsBoxArrowInUpRight} from 'react-icons/bs'
import {SiJavascript, SiFigma, SiAdobephotoshop, SiReact} from 'react-icons/si'

const projects = [
  {
    id: 1,
    image: IMG1,
    title: 'Jaime L. Jacob',
    link: 'https://jlj.pt',
    type: 'Website Development',
    description: 'Redevelopment of my personal website - formerly built with Ghost CMS - using React.js and HTML/CSS. Built on top of EGATORs React series, I customized the project design language, custom elements, sections and components, and integrated Formspree as opposed to EmailJS. ',
    lang: [<SiReact />, <SiJavascript />, <BsFiletypeHtml />, <BsFiletypeCss /> ]
  },
  {
    id: 2,
    image: IMG2,
    title: 'Hortênsia Music Festival',
    link: 'https://hortensiamusicfestival.com',
    type: 'Website & Brand Image Design',
    description: 'Hortênsia Music Festival is a yearly classical music festival located in the beautiful UNESCO world heritage city of Angra do Heroísmo in Terceira, Azores. I created the HMF website, branding, secundary logo and posters, working closely with Tamila Kharambura & Paul Tulloch to bring the vision of the festival website to life.',
    lang: [<BsWordpress />, <SiAdobephotoshop />, <SiFigma />]
  },
  {
    id: 3,
    image: IMG3,
    title: 'Sublime Real Estate',
    link: 'https://sublimerealestate.com',
    type: 'Logo & Brand Image Design',
    description: 'Sublime Real Estate is a premium real estate company based in the Algarve region, Portugal. Together with their management team, I developed and designed SRE first website, branding, logo and social media branding, with the logo representing the three member family founders.',
    lang: [<SiAdobephotoshop />, <SiFigma />]
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          projects.map(({id, image, description, title, link, type, lang}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <h5>{type}</h5>
                <p className='project-description'>{description}</p>
                <small className='made-with'>Built with {lang}</small>
                <div className="portfolio__item-cta">
                  <a href={link} className='btn btn-primary' target='_blank' rel="noreferrer">Visit <BsBoxArrowInUpRight /> </a>
                </div>
              </article>
            )
          })
        }
     
      </div>
    </section>
  )
}

export default Portfolio