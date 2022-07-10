import React from 'react'
import './contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {RiMessengerLine} from 'react-icons/ri'
import  { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ro0phk6', 'template_t205i6i', form.current, 'zmVkzISzBPmTgtQ5G')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
        <div>
            <section className="container contact_container" id='contact'>
                <h4>Get In Touch</h4>
                <h2>CONTACT ME</h2>
                <div className="contact_options">
                    <div className="contact_option">
                        <article>
                            <MdOutlineMailOutline className='contact_icon'/>
                            <h3>Email</h3>
                            <h5>vybrantalpha@gmail.com</h5>
                            <a href="mailto:vybrantalpha@gmail.com">Send an Email</a>
                        </article>
                        <article>
                            <BsWhatsapp className='contact_icon'/>
                            <h3>WhatsApp</h3>
                            <h5>0265429443</h5>
                            <a
                                href="https://wa.me/+233265429443"
                                target="_blank"
                                rel="noopener noreferrer">Chat Me</a>
                        </article>
                        <article>
                            <RiMessengerLine className='contact_icon'/>
                            <h3>Messenger</h3>
                            <h5>Ernest Ghansah</h5>
                            <a href="mailto:vybrantalpha@gmail.com">Message Me</a>
                        </article>
                    </div>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name="name" placeholder='Your full name'  required/>
                        <input type="email" name="email" placeholder='Your email' inputMode='email' required/>
                        <textarea name="message" rows="7" placeholder='Your message' required></textarea>
                        <button type='submit' className='contact_btn'>Send Message</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Contact