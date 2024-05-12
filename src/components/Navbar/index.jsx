import React from 'react'
import logo from '../../assets/logo.png'
import style from './navbar.module.css'

export const Navbar = () => {
  return (
    <>
   
<nav className="navbar navbar-expand-lg navbar_effect navbar-dark bg-dark opacity-100 fixed-top" >
  <div className="container">
    <a className="navbar-brand" href="#"><img src={logo} alt="logo.png" style={{width:"160px"}} /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse"  id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about_sec">ABOUT</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#service_sect">SERVICES</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#accordian">FAQ' S</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact_form">CONTACT</a>
        </li>
       
      </ul>
     
    </div>
  </div>
</nav>

</>
  )
}
