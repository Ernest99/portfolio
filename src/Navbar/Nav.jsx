import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {RiServiceLine} from 'react-icons/ri'
import {MdOutlineContactSupport} from 'react-icons/md'
import {MdOutlineWorkOutline} from 'react-icons/md'



const Nav = () => {
  return (
    <div>
<nav>

    <a href="#home" className='active'>
      <AiOutlineHome/>
      <span className='tooltip_text'>Home</span>
    </a>
    <a href="#about">
      <AiOutlineUser/>
      <span className='tooltip_text'>About</span>
    </a>
    <a href="#service">
      <RiServiceLine/>
      <span className='tooltip_text'>Service</span>
    </a>
    <a href="#project">
      <MdOutlineWorkOutline/>
      <span className='tooltip_text'>Project</span>
    </a>
    <a href="#contact">
      <MdOutlineContactSupport/>
      <span className='tooltip_text'>Contact</span>
    </a>
</nav> 
    </div>
  )
}

export default Nav