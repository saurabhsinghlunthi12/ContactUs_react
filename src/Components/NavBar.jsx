import React from 'react'
import "./NavBar.css"
import immigrationLogo from "../Images/immigrationlogo.jpg"

const NavBar = () => {
  return (
    <div className='nav'>
     <div >
     <img className='logoImg' src={immigrationLogo} alt="Do Something Man" width={100} height={100}/>
     </div>
     <div className='navLinks'>
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
     </div>
    </div>
  )
}

export default NavBar
