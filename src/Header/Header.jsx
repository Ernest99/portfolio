import React from 'react'
import './header.css'
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import Nav from '../Navbar/Nav';
import Bounce from 'react-reveal/Bounce';
import Btn from './Btn';
import Media from './Media';

const Header = () => {
    // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web Developer", "UX Designer", "Creator", "Web Designer", "Graphic Designer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 400,
      typeSpeed: 15,
      backSpeed: 15,
      backDelay: 900,
      loop: true
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <header id='home'>
        <div className="content">
          <Bounce top>
            <h3>I'M</h3>
            </Bounce>
            <h1>
            <Bounce bottom cascade>
              ERNEST GHANSAH
            </Bounce>
              </h1>
            <h2>A <span ref={el}></span></h2>
            <Btn text="Download Resume"/>
        </div>
        <Nav/>
        <Media/>
    </header>
  )
}

export default Header
