import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
        <div className='row'>
            <div className='col-md-4'>
                <img src="logo.png" alt="company logo" width='50%' className="mb-4"></img>
            </div>
            <div className='col-md-4 title'>
                <h2>Subcontractor Job Center</h2>
            </div>
            <div className='col-md-4 title'>
                {/* <img src="..." alt="profile" className="img-thumbnail"/>  */}
                <i className="fa fa-user"></i>
           </div>
        </div>
    </div>
  )
}

export default Header