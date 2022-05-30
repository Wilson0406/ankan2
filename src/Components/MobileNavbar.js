import React from 'react'
import './Css/mobileNavbar.css'
import NavUl from './NavUl'

export default function MobileNavbar() {

  let handleClick = ()=>{
    let navul = document.getElementById("nav-ul");
    navul.style.display = "flex";

  }
  return (
    <>
        <div className="mobile-nav">
          <img className='logo' src="./icon/logo.svg" alt="" />
          <span className="nav-icons">
          <i className="fa-solid fa-bars" onClick={handleClick}></i>
          <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <NavUl></NavUl>
        </div>
    </>
  )
}
