import React from 'react'
import { FaBusinessTime } from'react-icons/fa'
import { FaBriefcase } from'react-icons/fa'
import { FaBinoculars } from'react-icons/fa'
import { FaReact } from'react-icons/fa'
import { FaJsSquare } from'react-icons/fa'
import { FaWordpressSimple } from'react-icons/fa'


function Service() {
  return (
    <div className="section__service section" id='service'>
            <div className="service__head">
                <h2>Service</h2>
            </div>

            <div className="service__overall">
            <div className="service">
                <div className="div__service1">
                    <span><FaBusinessTime /></span>
                    <div className="div__p">
                        <h3>Front-end Development</h3>
                        <p>I design captivating user interfaces, build responsive websites, and craft seamless user experiences. My expertise lies in HTML, CSS, and JavaScript, enabling me to create interactive features, optimize site performance, and ensure cross-device compatibility. From concept to code, I turn ideas into engaging and functional digital realities.</p>
                    </div>
                </div>

                <div className="div__service1">
                    <span><FaBriefcase /></span>
                    <div className="div__p">
                        <h3>Back-end Development</h3>
                        <p>
                        I specialize in back-end development, powering websites and apps behind the scenes. I create and manage databases, develop APIs for seamless data exchange, ensure smooth functionality, handle server-side logic, and optimize performance for a secure and efficient user experience.
                        </p>
                    </div>
                </div>

                <div className="div__service1">
                    <span><FaReact /></span>
                    <div className="div__p">
                        <h3>E-commerce Development</h3>
                        <p>
                        I specialize in e-commerce development, crafting online stores that drive results. I create user-friendly interfaces, seamless checkout processes, and responsive designs for optimal shopping experiences. From product showcases to secure payment gateways, my expertise ensures engaging, efficient, and profitable e-commerce solutions.
                        </p>
                    </div>
                </div>
            </div>

            <div className="service">
                <div className="div__service1">
                    <span><FaBinoculars /></span>
                    <div className="div__p">
                        <h3>Custom Web Solutions & Lessons</h3>
                        <p> I empower learners with hands-on HTML, CSS, and JavaScript expertise, enabling them to build responsive websites, interactive user interfaces, and dynamic web applications. I focus on fostering practical coding skills and problem-solving abilities, ensuring they can create impactful digital experiences.</p>
                    </div>
                </div>

                <div className="div__service1">
                    <span><FaJsSquare /></span>
                    <div className="div__p">
                        <h3>UI/UX Designs</h3>
                        <p>I design intuitive interfaces that users love, and I optimize interactions for a delightful experience. My goal is to bridge aesthetics and functionality, creating designs that not only look great but also ensure users can navigate effortlessly and achieve their goals.</p>
                    </div>
                </div>

                <div className="div__service1">
                    <span><FaWordpressSimple /></span>
                    <div className="div__p">
                        <h3>Logo & Print Designs</h3>
                        <p>I design impactful logos and captivating print materials that leave a lasting impression. From unique logos that embody brands' essence to eye-catching brochures, flyers, and business cards, my skills transform ideas into visually stunning assets. Let me bring your vision to life with distinctive designs that resonate and stand out.</p>
                    </div>
                </div>
            </div>
            </div>
    </div>
  )
}

export default Service