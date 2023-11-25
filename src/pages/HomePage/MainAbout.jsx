import React from "react";
import Button from "../../components/Button";

const MainAbout = () => {
  return (
    <div className="about-area bg-color-5 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="about-inner">
              <div className="section-title align-items-start">
                <h2 className="title">About</h2>
                <p className="desc text-start p-0">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which dont look
                  even slightly believable.
                </p>
              </div>
              <div className="mt-30">
                <h4>Lorem ipsum dolor sit.</h4>
                <ul className="list-unstyled">
                  <li className="mx-0 mb-2">
                  <i class="fa-solid fa-check me-2"></i>
                  The Philosophy Of business analytics
                  </li>
                  <li className="mx-0 mb-2">
                  <i class="fa-solid fa-check me-2"></i>
                  Fast-Track Your business
                  </li>
                  <li className="mx-0 mb-2">
                  <i class="fa-solid fa-check me-2"></i>
                  Lies And Damn Lies About business
                  </li>
                  <li className="mx-0 mb-2">
                  <i class="fa-solid fa-check me-2"></i>
                  The Ultimate Deal On business
                  </li>
                </ul>
              </div>
              <div className="mt-30">
                <h4>Lorem ipsum dolor sit.</h4>
                <ul className="list-unstyled">
                  <li className="mx-0 mb-2">
                  <i class="fa-solid fa-check me-2"></i>
                  Proof That business Really Works
                  </li>
                  <li className="mx-0 mb-2">
                  <i class="fa-solid fa-check me-2"></i>
                  Here Is What You Should Do For Your business
                  </li>
                  <li className="mx-0 mb-2">
                  <i class="fa-solid fa-check me-2"></i>
                  The Hidden Mystery Behind business
                  </li>
                 
                </ul>
              </div>
              
            </div>
            
          </div>
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-center">
            <div className="thumbnail position-relative">
              <img className="w-100" src="images/about-3.png" alt="" />
              <button className="video">
              <i class="fa-solid fa-play"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainAbout;
