import React from 'react'
import Typewriter from 'react-ts-typewriter';
import './header.css'
import CTA from './CTA'
import HeaderSocial from './HeaderSocial'
import ME from '../../assets/me.png'

const Header = () => {
  return (
   <header>
     <div className="container header_container">
      <h4>I am a MERN Stack Developer</h4>
     <h1> <Typewriter text="Md Sarowar Hossain Nayem" loop={true} speed={300}></Typewriter></h1>
        <CTA></CTA>
        <HeaderSocial></HeaderSocial>

        <div className="me">
          <img src={ME} alt="me" />
        </div>
     

       <a href="#contact" className='scroll_down'> Scroll Down </a>
     </div>
     
   </header>
  )
}

export default Header