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
import { FaMoon} from'react-icons/fa'
import Footer from '../footer/Footer'
// import img1 from '../img/e8218764-cc87-442d-9655-c46fbd5783fa.jpg'
import avatar from '../img/mf-avatar.svg'

function Navbar(props) {
  const [activeNav, setActiveNav] = useState('#')
  const navRef = props.navRef
  const darkMode = props.darkMode
  const changeBg = props.changeBg
  const changeBackground = props.changeBackground
  return (
    <div className='div__nav' ref={navRef}>
           <img src={avatar} alt="" />
           <h1>Emmanuel Chinonso</h1>
           <div className="social__icons">
             <span><FaFacebook /></span> 
             <span><FaTwitter /></span>
             <span><FaInstagramSquare /></span>
             <span><FaGithub /></span>
             <span><FaLinkedin /></span>
           </div>
           <div className="nav__list">
               <li> <a href="#home" onClick={()=>{setActiveNav('#home')}} className={activeNav === '#home' ? 'active' : ''}><FaHome/> Home</a></li>
               <li> <a href="#about" onClick={()=>{setActiveNav('#about')}} className={activeNav === '#about' ? 'active' : ''}><FaUser/> About</a></li>
               
               <li> <a href="#resume" onClick={()=>{setActiveNav('#resume')}} className={activeNav === '#resume' ? 'active' : ''}><FaFile/> Resume</a></li>
               <li> <a href="#service" onClick={()=>{setActiveNav('#service')}} className={activeNav === '#service' ? 'active' : ''}><FaServer/> Service</a></li>
               <li> <a href="#contact" onClick={()=>{setActiveNav('#contact')}} className={activeNav === '#contact' ? 'active' : ''}><FaEnvelope/> Contact</a></li>
               <li><button onClick={()=>{changeBackground()}}><span ref={darkMode}><FaMoon /></span>{ changeBg ? 'Light' : 'Dark'}</button></li>
           </div>

           <Footer />
    </div>
  )
}

export default Navbar
