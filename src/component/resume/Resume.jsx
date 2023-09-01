import React from 'react'
import MovingComponent from 'react-moving-text'
import cv from '../resume/cvdoc/CHINONSO EMMANUEL CV.pdf'

function Resume() {
  
  return (
    <div className='section__resume section' id='resume'>
      <div className="resume__head">
                <h2>Resume</h2>
            <div className="cv__download">
            <MovingComponent
  type="bounce"
  duration="1800ms"
  delay="0s"
  direction="normal"
  timing="ease"
  iteration="infinite"
  fillMode="none">
              <a href={cv} download>Download CV</a>
</MovingComponent>
            </div>
            </div>
            <div className="resume__overall">
              <div className="summary">
                <h2 className='h1'>Summary</h2>
                <div className="sum">
                  <div className="emman">
                  <h2>Emmanuel Chinonso</h2>
                  <p>I'm a dedicated web developer with a keen eye for detail and a passion for crafting seamless online experiences. Proficient in front-end and back-end technologies, I specialize in transforming ideas into functional and visually appealing websites</p>
                  <div className="list">
                    <li>Ikeja, Lagos Nig.</li>
                    <li>08095032236</li>
                    <li>ognaira803@gmail.com</li>
                  </div>
                  </div>
                  <div className="education">
                  <h2 className='h1'>Education</h2>
                  <div className="div__course">
                    <div className="course">
                    <h2>WEB DEVELOPMENT & GRAPHIC DESIGN</h2>
                    <span>2022-2023</span>
                    <p className="sch">CvHub Ikeja, Lagos State</p>
                    <p>I'm thrilled to share my experience pursuing my career in web development & Graphic design. This journey allowed me to blend my passion for designs and technology, honing skills in design software.</p>
                    </div>
                  </div>
                  <div className="div__course">
                    <div className="course">
                    <h2>COMPUTER SCIENCE</h2>
                    <span>2022</span>
                    <p className="sch">University of Lagos, Lagos State</p>
                    <p>I'm a passionate computer science student, driven by the endless possibilities of technology. My goal is to create impactful solutions that shape the digital world and improve lives. Excited to learn and contribute.</p>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
              <div className="profession">
                <h2 className='h2'>Professional Experience</h2>
                <div className="senior">
                  <div className="snr__web">
                      <div className="snr__webli">
                      <h2>Internship</h2>
                      <span>2019-present</span>
                      <p>CvHub Ikeja, Lagos State</p>
                      </div>
                   <div className="senior__list">
                    <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                    <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.</li>
                    <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                    <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
                  </div>
                  </div>
                   <div className="snr__web">
                    <div className="snr__webli">
                      <h2>Senior Web Developer</h2>
                     <span>2019-present</span>
                      <p>Experion, NYC</p>
                    </div>
                   <div className="senior__list">
                    <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
                    <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
                    <li>Recommended and consulted with clients on the most appropriate graphic design</li>
                    <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
                  </div>
                   </div>
                </div>
              </div>
            </div>
    </div>
  )
}

export default Resume
