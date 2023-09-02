import React, {useState} from 'react'
import { FaFacebook } from'react-icons/fa'
import { FaTwitter } from'react-icons/fa'
import { FaInstagramSquare } from'react-icons/fa'
import { FaGithub } from'react-icons/fa'
import { FaLinkedin } from'react-icons/fa'
import { FaHome } from'react-icons/fa'
import { FaUser } from'react-icons/fa'
import { FaFile } from'react-icons/fa'
import { FaServer } from'react-icons/fa'
import { FaEnvelope } from'react-icons/fa'
import Footer from '../footer/Footer'
// import img1 from '../img/e8218764-cc87-442d-9655-c46fbd5783fa.jpg'
import avatar from '../img/mf-avatar.svg'

function Navbar(props) {
  const [activeNav, setActiveNav] = useState('#')
  const navRef = props.navRef
  return (
    <div className='div__nav' ref={navRef}>
           <img src={avatar} alt="" />
           <h1>Emmanuel Chinonso</h1>
           <div className="social__icons">
             <a href="https://www.facebook.com/profile.php?id=100092307465040"><FaFacebook /></a> 
             <a href="www.twitter.com"><FaTwitter /></a>
             <a href="https://instagram.com/chukwunonso803?igshid=OGY3MTU3OGY1Mw=="><FaInstagramSquare /></a>
             <a href="https://github.com/ognaira803"><FaGithub /></a>
             <a href="https://linkedin.com/in/emmanuel-chinonso-297502241"><FaLinkedin /></a>
           </div>
           <div className="nav__list">
               <li> <a href="#home" onClick={()=>{setActiveNav('#home')}} className={activeNav === '#home' ? 'active' : ''}> <span><FaHome/> </span><span> Home</span></a></li>
               <li> <a href="#about" onClick={()=>{setActiveNav('#about')}} className={activeNav === '#about' ? 'active' : ''}> <span><FaUser/></span> <span> About</span></a></li>
               
               <li> <a href="#resume" onClick={()=>{setActiveNav('#resume')}} className={activeNav === '#resume' ? 'active' : ''}> <span><FaFile/> </span> <span>Resume</span></a></li>
               <li> <a href="#service" onClick={()=>{setActiveNav('#service')}} className={activeNav === '#service' ? 'active' : ''}> <span><FaServer/></span> <span>Service</span></a></li>
               <li> <a href="#contact" onClick={()=>{setActiveNav('#contact')}} className={activeNav === '#contact' ? 'active' : ''}> <span><FaEnvelope/> </span> <span>Contact</span></a></li>
           </div>

           <Footer />
    </div>
  )
}

export default Navbar
