import React, {useRef, useState, useEffect } from 'react'
import CountUp from 'react-countup'
import img1 from '../img/e8218764-cc87-442d-9655-c46fbd5783fa.jpg'
import { FaRegSmile } from'react-icons/fa'
import { FaRegCalendarCheck } from'react-icons/fa'
import { FaHeadset } from'react-icons/fa'
import { FaUserFriends } from'react-icons/fa'
import "animate.css/animate.min.css"


function About(props) {
    const headRef = props.headRef
    
    // const headRef = useRef()
    // const [visible, setVisible] = useState()
    // console.log('visible', visible)
    // useEffect(() => {
    //         const observer = new IntersectionObserver ((entries)=>{
    //             const entry = entries[0];
    //             setVisible(entry.isIntersecting)
    //         })
    //         observer.observe(headRef.current)

    // }, [])
    
  return (
    <div className='section__about' id='about'>
        <div className='head'>
          <h2 ref={headRef}>About</h2>  
        </div>
        <div className="div__info">
        <div className='fist__div'><img src={img1} alt="" /></div>
        <div className='secon__div'>
            <h2>Web Developer and Graphics Designer.</h2>
            <div className='first__li'>
                    <li>
                       Birthday: <span>26 December 2000</span> 
                    </li>
                    <li>
                       Website: <span>www.example.com</span> 
                    </li>
                    <li>
                        
                       Phone: <span>+2348095032236</span>
                    </li>
                    <li>
                       City: <span>Ikeja, Lagos Nigeria</span>
                    </li>
                    <li>
                        Age: <span>23</span>
                    </li>
                    <li>
                    Degree: <span>Master</span>
                    </li>
                    <li>
                        
                       Email: <span>ognaira803@gmail.com</span>
                    </li>
                    <li>
                        
                       Freelance: <span>Available</span>
                    </li>
            </div>
                </div>
      </div>

        <div className="div__fact">
            <div className="fact__head">
                <h2>Facts</h2>
            </div>
            <div className="fact__main">
                <div className="main">
                    <span className='icon__span'>
                        <FaRegSmile />
                    </span>
                    <div className="main__cal">
                    <span className='span1'><CountUp start={0} end={100} duration={5} delay={0}></CountUp></span>
                    <p>Happy Clients</p>
                    </div>
                </div>
                <div className="main">
                    <span className='icon__span'>
                        <FaRegCalendarCheck />
                    </span>
                    <div className="main__cal">
                    <span className='span1'><CountUp start={0} end={521} duration={5} delay={0}></CountUp></span>
                    <p>Projects completed</p>
                    </div>
                </div>
                <div className="main">
                    <span className='icon__span'>
                        <FaHeadset />
                    </span>
                    <div className="main__cal">
                    <span className='span1'><CountUp start={0} end={760} duration={5} delay={0}></CountUp></span>
                    <p>Hours Of Support</p>
                    </div>
                </div>
                <div className="main">
                    <span className='icon__span'>
                        <FaUserFriends />
                    </span>
                    <div className="main__cal">
                    <span className='span1'><CountUp start={0} end={32} duration={5} delay={0}></CountUp></span>
                    <p>Hard Workers </p>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default About
