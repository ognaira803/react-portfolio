import React from 'react'
import { FaRegEnvelope } from'react-icons/fa'
import { FaMobileAlt } from'react-icons/fa'
import { FaMapMarkerAlt } from'react-icons/fa'

function Location() {
  return (
    <div className='location'>
       <div className="location1">
        <span><FaMapMarkerAlt /></span>
        <div className="inner__location">
            <h2>Location:</h2>
            <p>Chief Anthony Enahoro Estate, Ogba Lagos</p>
        </div>
       </div>

       <div className="location1">
        <span><FaRegEnvelope /></span>
        <div className="inner__location">
            <h2>Email:</h2>
            <p>ognaira803@gmail</p>
        </div>
       </div>
       <div className="location1">
        <span><FaMobileAlt /></span>
        <div className="inner__location">
            <h2>Call:</h2>
            <p>08095032236</p>
        </div>
       </div>
       <div className="map">
       <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4060348.1991014075!2d4.2254702!3d6.3702568!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9228fa2a3999%3A0xd7a8324bddbba1f0!2sIkeja!5e0!3m2!1sen!2sng!4v1656965352090!5m2!1sen!2sng" width="100%" height="350vh" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
       </div>
    </div>
    // AIzaSyApqbgxi4lNwVy5t3IQC5DiZ-8YPSJzInA
  )
}

export default Location