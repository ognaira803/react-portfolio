import React from 'react'
import Location from './Location'
import Message from './Message'

function Contact() {
  return (
    <div className='section__contact' id="contact">
        <div className="contact__head">
            <h2>Contact</h2>
        </div>
        <div className="contact__pt">
            <p>Voluptatem, odio cum, sapiente rem. Consectetur, quasi ad. Voluptate odio pariatur illo.</p>
        </div>
        <div className="div__contain">
        <Location />
        <Message />
        </div>
    </div>
  )
}

export default Contact