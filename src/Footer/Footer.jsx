import React from 'react'
import './footer.css'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'

const Footer = () => {
    return (
        <footer>
            <a href="#home" className='footer_logo'>ERNEST GHANSAH</a>
            <ul className='permalinks'>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#service">Service</a></li>
                <li><a href="#project">Project</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="footer_media">
                <a href="https://www.instagram.com/vibrant_coder/" target="_blank" rel="noopener noreferrer"><AiOutlineInstagram/></a>
                <a href="https://twitter.com/ernest_ghansah" target="_blank" rel="noopener noreferrer"><AiOutlineTwitter/></a>
                <a href="linkedin.com/in/ernest-ghansah-33b8211b9" target="_blank" rel="noopener noreferrer"><AiOutlineLinkedin/></a>
            </div>
            <div className="copy"><span>&copy;</span>2022 ALL rights Reserved</div>
        </footer>
    )
}

export default Footer