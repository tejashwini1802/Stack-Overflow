import React from 'react'

import { NavLink } from 'react-router-dom'
import Globe from '../../assets/Globe.svg'
import './LeftSidebar.css'

const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
      <nav className='side-nav'>
        <NavLink to='/' className='side-nav-links' activeClassname='active'>
          <p>Home</p>
        </NavLink>
        <div className='side-nav-div'>
          <div>
            <p>PUBLIC</p>
            
            <NavLink to='/Questions' className='side-nav-links' activeClassname='active' style={{ paddingLeft:"10px"}}>
              <img src={Globe} alt="Globe" />
              <p style={{paddingLeft : "10px"}}>Questions</p>
            </NavLink> 
            <NavLink to='/Tags' className="side-nav-links" style={{ paddingLeft : "40px"}} activeClassname='active'>
              <p>Tags</p>
            </NavLink>
            <NavLink to='/Users' className="side-nav-links" style={{ paddingLeft : "40px"}} activeClassname='active'>
              <p>Users</p>
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
    
  )
}

export default LeftSidebar