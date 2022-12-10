import React from 'react'
import { FaBusinessTime } from'react-icons/fa'
import { FaBriefcase } from'react-icons/fa'
import { FaBinoculars } from'react-icons/fa'
import { FaReact } from'react-icons/fa'
import { FaJsSquare } from'react-icons/fa'
import { FaWordpressSimple } from'react-icons/fa'


function Service() {
  return (
    <div className="section__service" id='service'>
            <div className="service__head">
                <h2>Service</h2>
            </div>
            <div className="div__pt">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, impedit ex sint debitis culpa porro quia ipsa nobis adipisci! Rem, quaerat!</p>
            </div>

            <div className="service__overall">
            <div className="service">
                <div className="div__service1">
                    <span><FaBusinessTime /></span>
                    <div className="div__p">
                        <h3>Lorem Ipsum</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus corrupti debitis expedita nisi quos perferendis!</p>
                    </div>
                </div>

                <div className="div__service1">
                    <span><FaBriefcase /></span>
                    <div className="div__p">
                        <h3>Magni Dolores</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus corrupti debitis expedita nisi quos perferendis!</p>
                    </div>
                </div>

                <div className="div__service1">
                    <span><FaReact /></span>
                    <div className="div__p">
                        <h3>Magni Dolores</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus corrupti debitis expedita nisi quos perferendis!</p>
                    </div>
                </div>
            </div>

            <div className="service">
                <div className="div__service1">
                    <span><FaBinoculars /></span>
                    <div className="div__p">
                        <h3>Sed ut perspiciatis</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus corrupti debitis expedita nisi quos perferendis!</p>
                    </div>
                </div>

                <div className="div__service1">
                    <span><FaJsSquare /></span>
                    <div className="div__p">
                        <h3>Nemo Enim</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus corrupti debitis expedita nisi quos perferendis!</p>
                    </div>
                </div>

                <div className="div__service1">
                    <span><FaWordpressSimple /></span>
                    <div className="div__p">
                        <h3>Eiusmod Tempor</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus corrupti debitis expedita nisi quos perferendis!</p>
                    </div>
                </div>
            </div>
            </div>
    </div>
  )
}

export default Service