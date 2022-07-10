import React from 'react'
import './project.css'
import IMG1 from '../assets/p1.png'
import IMG2 from '../assets/p2.png'
import IMG3 from '../assets/p3.png'
import IMG4 from '../assets/p4.png'
import IMG5 from '../assets/p5.png'
import IMG6 from '../assets/p6.png'

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Alpha Pizza',
        github: 'https://github.com',
        demo: 'https://alphapizza.netlify.app/'
    }, {
        id: 2,
        image: IMG2,
        title: 'Duapa App',
        github: 'https://github.com',
        demo: 'https://duapa.netlify.app/'
    }, {
        id: 3,
        image: IMG3,
        title: 'Hotello',
        github: 'https://github.com',
        demo: 'https://alphahotello.netlify.app/'
    }, {
        id: 4,
        image: IMG4,
        title: 'Weight Convertor',
        github: 'https://github.com',
        demo: 'https://weightconvertorapp.netlify.app/'
    }, {
        id: 5,
        image: IMG5,
        title: 'iStore',
        github: 'https://github.com',
        demo: 'https://ics-shop.netlify.app/'
    }, {
        id: 6,
        image: IMG6,
        title: 'Bernardolio',
        github: 'https://github.com',
        demo: 'https://bernardolio.netlify.app/'
    }
]

const Project = () => {
    return (
        <section id="project">
            <h4>My Recent Work</h4>
            <h2>PROJECTS</h2>
            <div className="container pro_container">
                {data.map(({id, image, title, github, demo}) => {
                    return (
                        <div key={id} className="pro_item">
                            <div className="pro_image">
                                <img src={image} alt={title}/>
                            </div>
                            <h3>{title}</h3>
                            <a href={github} className='pro_btn1' target='_blank' rel="noopener noreferrer">Github</a>
                            <a href={demo} className='pro_btn2' target='_blank' rel="noopener noreferrer">Live Demo</a>
                        </div>
                    )
                })
}
            </div>
        </section>
    )
}

export default Project