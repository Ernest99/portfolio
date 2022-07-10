import React from 'react'
import './media.css'
import {AiFillInstagram} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'

const Media = () => {
  return (
    <div>
<div className="media">

    <button><a href="https://www.instagram.com/vibrant_coder/" target="_blank" rel="noopener noreferrer"><AiFillInstagram/></a></button>
    <button><a href="https://twitter.com/ernest_ghansah" target="_blank" rel="noopener noreferrer"><BsTwitter/></a></button>
    <button><a href="linkedin.com/in/ernest-ghansah-33b8211b9" target="_blank" rel="noopener noreferrer"><FaLinkedinIn/></a></button>
    <button><a href="https://github.com/Ernest99" target="_blank" rel="noopener noreferrer"><BsGithub/></a></button>
</div>
    </div>
  )
}

export default Media