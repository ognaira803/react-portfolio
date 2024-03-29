import React from 'react'

function Skills() {
  return (
    <div className="skills">
    <div className="skills__head">
        <h2>Skills</h2>
    </div>
    <div className="skills__rating">
        <div className="div__skills__part1">
            <div className="html">
                <span>HTML</span>
                <div className="html__rating">

                </div>
            </div>

            <div className="css">
                <span>CSS / SASS / BOOTSTRAP /MATERIAL UI</span>
                <div className="css__rating">
                    
                </div>
            </div>

            <div className="javascript">
                <span>JAVASCRIPT / REACT</span>
                <div className="javascript__rating">
                    
                </div>
            </div>
        </div>


        <div className="div__skills__part1">
            <div className="php">
                <span>NODE JS / MONGO DB</span>
                <div className="php__rating">

                </div>
            </div>

            <div className="wordpress">
                <span>WORDPRESS</span>
                <div className="wordpress__rating">
                    
                </div>
            </div>

            <div className="photoshop">
                <span>PHOTOSHOP</span>
                <div className="photoshop__rating">
                    
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Skills
