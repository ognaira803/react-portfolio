import React from 'react'
import MovingComponent from 'react-moving-text'
import cv from '../resume/cvdoc/cv.pdf'

function Resume() {
  
  return (
    <div className='section__resume' id='resume'>
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
            <div className="resume__pt">
                <p> Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>

            <div className="resume__overall">
              <div className="summary">
                <h2 className='h1'>Summary</h2>
                <div className="sum">
                  <div className="emman">
                  <h2>Emmanuel Chinonso</h2>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel facere, sed porro doloremque rem culpa sit aliquam temporibus, voluptatibus mollitia tenetur ullam aliquid? Voluptate dolores non quisquam consectetur veritatis delectus.</p>
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
                    <h2>MASTER OF FINE ARTS & GRAPHIC DESIGN</h2>
                    <span>2015-2017</span>
                    <p className="sch">Rochester Institute of Technology, Rochester, NY</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias molestias soluta dignissimos quas earum ipsum!</p>
                    </div>
                  </div>
                  <div className="div__course">
                    <div className="course">
                    <h2>BACHELOR OF FINE ARTS & GRAPHIC DESIGN</h2>
                    <span>2010-2014</span>
                    <p className="sch">Rochester Institute of Technology, Rochester, NY</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias molestias soluta dignissimos quas earum ipsum!</p>
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
                      <h2>Senior Web Developer</h2>
                      <span>2019-present</span>
                      <p>Experion, NYC</p>
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
