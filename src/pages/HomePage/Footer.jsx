import React from "react";
import { NavLink } from "react-router-dom";

import Button from "../../components/Button";

const Footer = () => {
  return (
    <div>
      <div className="call-to-action pb-120">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="inner">
                <span>READY TO DO THIS</span>
                <h2>Let's get to work</h2>
                <NavLink to="/contact">
                  <Button className="rn-button" name="Contact Us" />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="pb-30 bg-image">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-4 col-md-6 col-sm-6 col-12 d-flex justify-content-center">
              <NavLink to="/">
                <img src="images/logo (1).png" alt="" />
              </NavLink>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="inner d-flex justify-content-center">
                <ul className="social-share  d-flex justify-content-center list-unstyled">
                  <li>
                    <NavLink to="">
                      <i class="fa-brands fa-facebook-f"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="">
                      <i class="fa-brands fa-linkedin-in"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="">
                      <i class="fa-brands fa-instagram"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="">
                      <i class="fa-brands fa-twitter"></i>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                <div className="text d-flex justify-content-center justify-content-lg-end">
                    <p className="m-0">Copyright © 2022 Rainbow-Themes. All Rights Reserved.</p>
                </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
