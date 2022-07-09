import React, { useState } from 'react'
import logo from 'assets/images/logo.svg'
import arrowDown from 'assets/images/icon-arrow-down.svg'
import imageEmily from 'assets/images/image-emily.jpg'
import imageJennie from 'assets/images/image-jennie.jpg'
import imageThomas from 'assets/images/image-thomas.jpg'
import fillLogo from 'assets/images/fill-logo.svg'
import hamburgerIcon from 'assets/images/icon-hamburger.svg'
import './App.css'

function App() {
  const clients = [
    {
      id: 1,
      slug: 'emily',
      name: 'Emily R.',
      jobTitle: 'Marketing Director',
      profilePhoto: imageEmily,
      feedback:
        'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
    },
    {
      id: 2,
      slug: 'thomas',
      name: 'Thomas S.',
      jobTitle: 'Chief Operating Officer',
      profilePhoto: imageThomas,
      feedback:
        "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.",
    },
    {
      id: 3,
      slug: 'jennie',
      name: 'Jennie F.',
      jobTitle: 'Business Owner',
      profilePhoto: imageJennie,
      feedback:
        'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
    },
  ]
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className="App">
      <header className="navbar">
        <img src={logo} alt="site logo" className="site-logo" />

        <div className="right-nav-wrapper">
          <nav className="nav">
            <a href="#about" className="nav-item">
              About
            </a>
            <a href="#services" className="nav-item">
              Services
            </a>
            <a href="#projects" className="nav-item">
              Projects
            </a>
          </nav>

          <button className="contact-btn">CONTACT</button>
        </div>

        <div className="toggle-menu-wrapper">
          <img
            src={hamburgerIcon}
            alt="hamburger"
            onClick={() => setShowMenu((prev) => !prev)}
            className="hamburger-icon"
          />

          <div className={`menu ${showMenu && 'show'}`}>
            <div className="triangle"></div>
            <div className="wrapper">
              <a href="#about" className="menu-item" onClick={() => setShowMenu(false)}>
                About
              </a>
              <a href="#services" className="menu-item" onClick={() => setShowMenu(false)}>
                Services
              </a>
              <a href="#projects" className="menu-item" onClick={() => setShowMenu(false)}>
                Projects
              </a>

              <button className="contact-btn">CONTACT</button>
            </div>
          </div>
        </div>
      </header>

      <section className="hero-section">
        <div className="heading-wrapper">
          <h1 className="heading">WE ARE CREATIVES</h1>
          <img src={arrowDown} alt="arrow down" className="arrow-down" />
        </div>
      </section>

      <section className="about-services-section">
        <div id="about" className="transform-brand">
          <div className="inner-wrapper">
            <h2>Transform your brand</h2>
            <p>
              We are a full-service creative agency specilizing in helping brands grow fast. Engage
              your clients through compelling visuals that do most of the marketing for you.
            </p>

            <a href="#learn" className="learn-more">
              LEARN MORE
            </a>
          </div>
        </div>
        <div className="image-transform-wrapper"></div>
        <div className="image-stand-out-wrapper"></div>
        <div className="stand-out-right-audience">
          <div className="inner-wrapper">
            <h2>Stand out to the right audience</h2>
            <p>
              Using a collaborative formula of designers, researchers, photographers, videographers,
              and copywriters, we'll build and extend your branc in digital places.
            </p>
            <a href="#learn" className="learn-more">
              LEARN MORE
            </a>
          </div>
        </div>
        <div id="services" className="graphic-design">
          <div className="inner-wrapper">
            <h3>Graphic Design</h3>
            <p>
              Great design makes you memorable. We deliver artwork that underscores your brand
              message and captures potential clients' attention.
            </p>
          </div>
        </div>
        <div className="photography">
          <div className="inner-wrapper">
            <h3>Photography</h3>
            <p>
              Increase your credibility by getting the most stunning, high-quality photos that
              improve your business image.
            </p>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h3>CLIENT TESTIMONIALS</h3>
        <div className="clients-container">
          {clients.map((client) => (
            <div className="client-wrapper" key={client.id}>
              <img src={client.profilePhoto} alt={client.slug} className="profile-photo" />
              <p className="feedback">{client.feedback}</p>
              <div className="name">{client.name}</div>
              <div className="job-title">{client.jobTitle}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="gallery-section" id="projects">
        <div className="milk-bottles"></div>
        <div className="Orange"></div>
        <div className="cone"></div>
        <div className="sugar-cubes"></div>
      </section>

      <footer className="footer">
        <img src={fillLogo} alt="site logo" className="footer-site-logo" />

        <div className="footer-nav-wrapper">
          <a href="#about" className="nav-item">
            About
          </a>
          <a href="#services" className="nav-item">
            Services
          </a>
          <a href="#projects" className="nav-item">
            Projects
          </a>
        </div>

        <div className="social-link-wrapper">
          <i className="fa-brands fa-facebook-square"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-pinterest"></i>
        </div>
      </footer>
    </div>
  )
}

export default App
