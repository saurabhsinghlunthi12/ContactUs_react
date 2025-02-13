import React from 'react'
import "./Form.css"

const Form = () => {
  return (
    <div className='form'>
  <div className='formDetails'>
  <div className='connectBtn'>
        <button className='call'>Via Support Chat</button>
        <button className='chat'>Via Call</button>
    </div>
    <div className='emailBtn' ><button className='email'>Via Email Form</button></div>
    <div className='inputs'>
        <input type="text" name="name" id="name" placeholder='Enter Full Name' /> <br />
        <input type="text" name="email" id="email" placeholder='Enter Email Address' /> <br />
        <textarea type="text" name="comment" id="comment" placeholder='Type your query' /><br />
    </div>
    <div className='submitDiv'><button className='submitBtn'>Submit</button></div>
    </div>
  </div>
  )
}

export default Form
