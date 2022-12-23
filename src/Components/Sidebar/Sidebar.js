import React from 'react';
import './Sidebar.css'

function Sidebar() {
  return (
    <div className="sidebarcomp container-fluid p-0 m-0">
       <nav className="sidebar">
           <ul className="menu">
               <li className="navitem headitem">
                   <a href="#" className="navlink "><span><i className="fa fa-home"></i>Admin Settings</span></a>
               </li>
               <li className="navitem">
                   <a href="/" className="navlink"><span><i className="fa fa-home"></i>Labor Code Maintenance</span></a>
               </li>
               <li className="navitem">
                   <a href="/supply" className="navlink"><span><i className="fa fa-home"></i>Supplies Code Maintenance</span></a>
               </li>
               <li className="navitem">
                   <a href="/equipment" className="navlink"><span><i className="fa fa-home"></i>Equipment Code Maintenance</span></a>
               </li>
               <li className="navitem">
                   <a href="/projectexpense" className="navlink"><span><i className="fa fa-home"></i>Project Expense Code Manitenance</span></a>
               </li>
               <li className="navitem">
                   <a href="#" className="navlink"><span><i className="fa fa-home"></i>User Maintenance</span></a>
               </li>
               <li className="navitem">
                   <a href="#" className="navlink"><span><i className="fa fa-home"></i>Project Maintenance</span></a>
               </li>
               <li className="navitem headitem">
                   <a href="#" className="navlink"><span><i className="fa fa-home"></i>Sub-Contactor Settings</span></a>
               </li>
               <li className="navitem">
                   <a href="#" className="navlink"><span><i className="fa fa-home"></i>Contract rates</span></a>
               </li>
               <li className="navitem">
                   <a href="#" className="navlink"><span><i className="fa fa-home"></i>Time Card Approval</span></a>
               </li>
               
           </ul>
       </nav>
    </div>
  )
}

export default Sidebar