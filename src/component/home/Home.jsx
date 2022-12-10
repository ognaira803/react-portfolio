import React from 'react'
import { FaBars } from'react-icons/fa'
import { FaTimes } from'react-icons/fa'
import AnimatedText from 'react-animated-text-content';
import MovingComponent from 'react-moving-text'
function Home(props) {
  const handleClick = props.handleClick 
  const btnRef = props.btnRef
  const change = props.change
  const homeRef = props.homeRef
  return (
    <div className="home" ref={homeRef} id="home">
      <span className='span' ref={btnRef} onClick={handleClick}>{change ? <FaTimes /> : <FaBars />}</span>
      <div className="home__inner">
        <h1>
        <AnimatedText
  type="chars" // animate words or chars
  animation={{
    x: '200px',
    y: '-20px',
    scale: 1.1,
    ease: 'ease-in-out',
  }}
  animationType="bounce"
  interval={0.06}
  duration={0.8}
  tag="p"
  className="animated-paragraph"
  includeWhiteSpaces
  threshold={0.1}
  rootMargin="20%"
>
Ononiwu Emmanuel Chinonso
</AnimatedText>
        </h1>
        <h2>
          I'm a <MovingComponent type="typewriter"
          delay="10s"
  dataText={[
  'Developer',
  'Designer',
  'Freelancer',
]} />
        </h2>
      </div>
    </div>
  )
}

export default Home
