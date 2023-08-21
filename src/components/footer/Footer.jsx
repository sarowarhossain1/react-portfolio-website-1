import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub,FaFacebook} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <div className="footer_copyright">
       <small>© 2023 - All rights reserved by Nayem</small>
    </div>
    <div className="footer_social">
      <a href="https://facebook.com" target="_blank"> <FaFacebook/></a>
      <a href="https://github.com/" target="_blank"> <FaGithub/></a>
      <a href="https://linkedin.com" target="_blank"> <BsLinkedin/></a>
    </div>
    <ul className='footer_link'>
      <li> <a href="#"> Home</a> </li>
      <li> <a href="#about"> About</a> </li>
      <li> <a href="#mySkill"> SKILL</a> </li>
      <li> <a href="#projects"> Portfolio</a> </li>
      <li> <a href="#contact"> contact</a> </li>
      
    </ul>
    </footer>
  )
}

export default Footer