import React, {useRef, useState, useEffect } from 'react'
import CountUp from 'react-countup'
import img1 from '../img/e8218764-cc87-442d-9655-c46fbd5783fa.jpg'
import { FaRegSmile } from'react-icons/fa'
import { FaRegCalendarCheck } from'react-icons/fa'
import { FaHeadset } from'react-icons/fa'
import { FaUserFriends } from'react-icons/fa'
import "animate.css/animate.min.css"


function About() {
    const headRef = useRef()
    const [visible, setVisible] = useState()
    console.log('visible', visible)
    useEffect(() => {
            const observer = new IntersectionObserver ((entries)=>{
                const entry = entries[0];
                setVisible(entry.isIntersecting)
            })
            observer.observe(headRef.current)

    }, [])
    
  return (
    <div className='section__about' id='about'>
        <div className='head'>
          <h2 ref={headRef}>About</h2>  
        </div>

        <div className="pt">
            <p>Magnam dolores commodi suscipit. Necessitatibus eius  suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="div__info">
        <div className='fist__div'><img src={img1} alt="" /></div>
        <div className='secon__div'>
            <h2>Web Developer and Graphics Designer.</h2>
            <p>Lorem ipsum dolor sit  elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className='first__li'>
                <div>
                    <li>
                       Birthday: <span>1 May 1995</span> 
                    </li>
                    <li>
                       Website: <span>www.example.com</span> 
                    </li>
                    <li>
                        
                       Phone: <span>+123 456 7890</span>
                    </li>
                    <li>
                       City: <span>New York, USA</span>
                    </li>
                    </div>
                <div>
                    <li>
                        Age: <span>30</span>
                    </li>
                    <li>
                    Degree: <span>Master</span>
                    </li>
                    <li>
                        
                       PhEmailone: <span>Available</span>
                    </li>
                    <li>
                        
                       Freelance: <span>Available</span>
                    </li>
                </div>
            </div>
                </div>
      </div>

        <div className="div__fact">
            <div className="fact__head">
                <h2>Facts</h2>
            </div>
            <div className="fact__pt">
                <p>Magnam dolores commodi suscipit. Necessitx aliquid fuga eum quidem. Sit sint consectetur velit.  in iste officiis commodi quidem hic quas.</p>
            </div>
            <div className="fact__main">
                <div className="main">
                    <span className='icon__span'>
                        <FaRegSmile />
                    </span>
                    <div className="main__cal">
                    <span><CountUp start={0} end={100} duration={5} delay={0}></CountUp></span>
                    <p>Happy Clients</p>
                    </div>
                </div>
                <div className="main">
                    <span className='icon__span'>
                        <FaRegCalendarCheck />
                    </span>
                    <div className="main__cal">
                    <span><CountUp start={0} end={521} duration={5} delay={0}></CountUp></span>
                    <p>Projects</p>
                    </div>
                </div>
                <div className="main">
                    <span className='icon__span'>
                        <FaHeadset />
                    </span>
                    <div className="main__cal">
                    <span><CountUp start={0} end={760} duration={5} delay={0}></CountUp></span>
                    <p>Hours Of Support</p>
                    </div>
                </div>
                <div className="main">
                    <span className='icon__span'>
                        <FaUserFriends />
                    </span>
                    <div className="main__cal">
                    <span><CountUp start={0} end={32} duration={5} delay={0}></CountUp></span>
                    <p>Hard Workers </p>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default About
