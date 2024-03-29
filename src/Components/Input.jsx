import React from 'react'
import Img from '../images/img.png'
import Attach from '../images/attach.png'
import Send from '../images/plane.jpeg'

function Input() {
  return (
    <div className='input'>
      <input type="text" placeholder='Type something' />
      <div className='send'>
        <img src={Img} alt="" />
        <input type="file" style={{display:'none'}} id="file" />
        <label htmlFor="file">
          <img src={Attach} alt="" />
        </label>
        
        <img className='button' src={Send} alt="" />

      </div>
    </div>
  )
}

export default Input