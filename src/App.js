import React, {useRef, useState, useEffect} from 'react'
import About from './component/about/About';
import Contact from './component/contact/Contact';
import Footer from './component/footer/Footer';
import Home from './component/home/Home';
import Resume from './component/resume/Resume';
import Service from './component/service/Service';
import Testimonial from './component/service/Testimonial';
import Navbar from './component/sidebar/Navbar';
import "./styles/app.css"
import { InfinitySpin } from  'react-loader-spinner'
import Skills from './component/about/Skills';


function App() {
  const getTheme = () => {
    return JSON.parse(localStorage.getItem('dark')) || false
  }

  const [loading, setLoading] = useState(false)
  const [change, setChange] = useState(false)
  const [changeBg, setChangeBg] = useState(false)
  const [background, setBackground] = useState(getTheme())
  const navRef = useRef()
  const btnRef = useRef()
  const darkMode = useRef()
  const darkmodeRef = useRef()
  useEffect(() => {
    setLoading(true)
    setTimeout(() =>{
      setLoading(false)
    },
    1000)
  }, [])
  useEffect(() => {
localStorage.setItem('dark', JSON.stringify(background))
  }, [background])
  
  const handleClick =()=>{
    navRef.current?.classList.toggle('sidebar__toggle')
    btnRef.current?.classList.toggle('btn__change')
    change ? setChange(false) : setChange(true);
  }
  const changeBackground = () =>{
    // darkMode.current?.classList.toggle('bg__change')
    // darkmodeRef.current?.classList.toggle('bg')
    changeBg ? setBackground(false) : setBackground(true);
    changeBg ? setChangeBg(false) : setChangeBg(true);
    setBackground(!background)
  }
  return (
    <>
      {
        loading ?
        <div className='spinner'>
          <InfinitySpin 
  width='200'
  color="#4fa94d"
/>
        </div>
        :
        <div className={`App ${background ? "bg" : ""}`} ref={darkmodeRef}>

              <Navbar navRef={navRef} changeBg={changeBg} setChangeBg={setChangeBg} changeBackground={changeBackground} />
      <div className='app__wrapper'>
      <Home btnRef={btnRef} handleClick={handleClick} change={change} setChange={setChange} darkMode={darkMode}/>
      <About/>
      <Skills />
      <Resume/>
      <Service/>
      <Testimonial />
      <Contact />
      <Footer />
      </div>
      </div>
      }
</>
  );
}

export default App;
