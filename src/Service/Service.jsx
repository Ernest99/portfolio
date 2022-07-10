import React from 'react'
import './service.css'
import {FaRegLightbulb} from 'react-icons/fa'
import {RiGlobeLine} from 'react-icons/ri'
import {MdOutlineDesignServices} from 'react-icons/md'
import {MdLaptopChromebook} from 'react-icons/md'
import {BiSupport} from 'react-icons/bi'
import {FaHandsHelping} from 'react-icons/fa'

const Service = () => {
    return (
        <div>
            <section id="service">
                <h4>What I Offer</h4>
                <h2>SERVICES</h2>
                <div className="container">
                    <div className="service_container">
                        <div className="box">
                            <FaRegLightbulb className='service_icon'/>
                            <h3>UI/UX Design</h3>
                        </div>
                        <div className="box">
                            <RiGlobeLine className='service_icon'/>
                            <h3>Web Design</h3>
                        </div>
                        <div className="box">
                            <MdOutlineDesignServices className='service_icon'/>
                            <h3>Graphic Design</h3>
                        </div>
                        {/* ------ */}
                        <div className="box">
                            <MdLaptopChromebook className='service_icon'/>
                            <h3>Web Development</h3>
                        </div>
                        <div className="box">
                            <BiSupport className='service_icon'/>
                            <h3>IT Support</h3>
                        </div>
                        <div className="box">
                            <FaHandsHelping className='service_icon'/>
                            <h3>Mentorship</h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Service