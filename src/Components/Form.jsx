import React, { useState } from 'react'
import "./Form.css"

const Form = () => {
  const [formData,setFormData]=useState({fname:"",email:"",comment:""});
  //function to update formData
  function changeHandler(event){
    setFormData(prev=>{
      return{...prev,
        [event.target.name]:event.target.value
      }
    }
      
    )
  };

   // function to console submitted details by user
  function submithandler(event){
    event.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={submithandler} className='form'>
  <div className='formDetails'>
  <div className='connectBtn'>
        <button className='call'>Via Support Chat</button>
        <button className='chat'>Via Call</button>
    </div>
    <div className='emailBtn' ><button className='email'>Via Email Form</button></div>
    <div className='inputs'>
        <input type="text" onChange={changeHandler} name="fname" id="name" placeholder='Enter Full Name' /> <br />
        <input type="text" onChange={changeHandler} name="email" id="email" placeholder='Enter Email Address' /> <br />
        <textarea type="text" onChange={changeHandler} name="comment" id="comment" placeholder='Type your query' /><br />
    </div>
    <div className='submitDiv'><button className='submitBtn'>Submit</button></div>
    </div>
  </form>
  )
}

export default Form
