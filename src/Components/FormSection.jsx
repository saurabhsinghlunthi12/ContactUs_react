import React from 'react'
import "./FormSection.css"
import Form from './Form'
import serviceImg from "../Images/24hrs_service.jpg"



const FormSection = () => {
  return (
    <div className='formSection'>
      <div>
        <Form/>
      </div>
      <div>
        <img className='serviceImg' src={serviceImg} alt="Working 24/7" width={400} height={400}/>
      </div>
    </div>
  )
}

export default FormSection
