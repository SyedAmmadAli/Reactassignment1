import React from 'react'
import logo from '../../assets/logo.png'
import style from './navbar.module.css'

export const Navbar = () => {
  return (
    <>
   
<nav className="navbar navbar-expand-lg navbar-dark bg-dark opacity-100 sticky-top" >
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
          <a className="nav-link" href="#">ABOUT</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">SERVICES</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">PRICING</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">CONTACT</a>
        </li>
       
      </ul>
     
    </div>
  </div>
</nav>

</>
  )
}
