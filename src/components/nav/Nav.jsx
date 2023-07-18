import React from 'react'
import './nav.css'
import {AiOutlineHome,AiOutlineUser,AiOutlineProject} from 'react-icons/ai'
import {MdContactMail} from 'react-icons/md'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
   <nav>
  <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}> <AiOutlineHome/> </a>
    <a href="#about" onClick={() => setActiveNav('#about')}  className={activeNav === '#about' ? 'active' : ''}> <AiOutlineUser/>  </a>
    <a href="#projects"  onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''} > <AiOutlineProject/>  </a>
    <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''} > <MdContactMail/></a>
   </nav>
  )
}

export default Nav