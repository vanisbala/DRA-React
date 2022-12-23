import React from 'react'
import './Header.css'

function SubHeader({props}) {
  return (
    <div>
        <div className="subheader">
            {/* <h3>Restoration Labor Class and Billing Codes</h3> */}
            <h3> {props.showTable ? props.subHeader : props.subHeader + '-Addnew' } 
            </h3>
        </div>
    </div>
  )
}

export default SubHeader