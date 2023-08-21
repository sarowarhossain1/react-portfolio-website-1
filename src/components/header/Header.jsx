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
      <h4>Hello There! I'm,</h4>
      <h3 >Md.Sarowar Hossain Nayem</h3>
      <h5>I'm a,</h5>
      <Typewriter text="Mern-Stack Developer"  loop={true} speed={400}></Typewriter>
     
        <CTA></CTA>
        <HeaderSocial></HeaderSocial>

        <div className="me" >
          <img src={ME} alt="me" />
        </div>
     

       <a href="#contact" className='scroll_down'> Scroll Down </a>
     </div>
     
   </header>
  )
}

export default Header