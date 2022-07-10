import React from 'react'
import './btn.css'

const Btn = ({text}) => {
  return (
    <div className='btn'>
      <a href="../assets/ernest_ghansah_cv.pdf" download className='btn-1'>{text}</a>
      {/* <a href="tel: 0265429443" className='btn-2'>Let's Talk</a> */}
    </div>
  )
}

export default Btn
