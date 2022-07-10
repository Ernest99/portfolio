import React from 'react'
import './about.css'
import profileImage from '../assets/dp.jpeg'
import {MdGppGood} from 'react-icons/md'
import {FiUsers} from 'react-icons/fi'
import {MdWorkOutline} from 'react-icons/md'

const About = () => {
    return (
        <div className="about" id='about'>

            <h4>Get To Know</h4>
            <h2>ABOUT ME</h2>
            <div className="container">
                <div className="flex-field">
                    <div className="dp">
                        <img src={profileImage} alt="my dp"/>
                    </div>
                    <div className="details">
                        <p>An experienced front-end developer with a demonstrated history of working in information technology services
and coding for the web. I am skilled in User Experience (UX), Responsive Web Design, Graphic Design, Web Design,
and HTML. Strong engineering professional with a Bachelor's degree focused on information technology at
BlueCrest University College. I am a good team player and a problem solver.</p>
                        <a href="tel: 0265429443" className='about-btn'>Let's Talk</a>
                        <div className="card_container">
                            <div className="card">
                                <MdGppGood className='card_icon'/>
                                <h4>Experience</h4>
                                <small>2+ Years Working</small>
                            </div>
                            <div className="card">
                                <FiUsers className='card_icon'/>
                                <h4>Clients</h4>
                                <small>5+ Nationwide</small>
                            </div>
                            <div className="card">
                                <MdWorkOutline className='card_icon'/>
                                <h4>Projects</h4>
                                <small>10+ Completed</small>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    )
}

export default About