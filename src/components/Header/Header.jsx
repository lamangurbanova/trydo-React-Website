import React, { useState } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import Button from "../Button";
import MainSlider from "../../pages/HomePage/MainSlider";

const Header = () => {
  const [getcloseBtn, setcloseBtn] = useState(false);
  const [getclass, setclass] = useState(false);

  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-4 col-lg-3 logo">
            <NavLink to="/">
              <img src="images/logo.png" alt="" />
            </NavLink>
          </div>
          <div className="col-6 col-md-8 col-lg-9 d-flex justify-content-end align-items-center">
            <div className="header-right d-flex justify-content-end align-items-center">
              <nav className="d-lg-block">
             
                <ul 
                  className={`${getclass ? "mobile-menu-open" : ""}  mainmenu mobile-menu list-unstyled m-0 justify-content-center align-items-center`}>
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/service">Service</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">About</NavLink>
                  </li>
                  <li>
                    <NavLink to="/pages">Pages</NavLink>
                  </li>
                  
                  <li>
                    <NavLink to="/blocks">Blocks</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                </ul>
              </nav>
              <Button className="header-btn btn-hover" name="Buy now" />
              <div
                className="bugermenu d-block d-lg-none"
              >
                {getcloseBtn ? (
                  <div onClick={() =>{setcloseBtn(false); setclass(false)} }>  
                    <span className={`${getcloseBtn ? "close-openmenu" : "close-closemenu"} close-btn`}>X</span>
                  </div>
                ) : (
                  <i onClick={()=>{setcloseBtn(true); setclass(true) }} class="fa-solid fa-bars"></i>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
