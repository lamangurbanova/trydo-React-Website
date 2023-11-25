import React from "react";
import Button from "../../components/Button";

const SectionAbout = () => {
  return (
    <div className="about-area bg-color-5 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="box-img">
              <img className="w-100" src="images/about-4.png" alt="" />
            </div>
          </div>
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-center">
            <div className="about-inner">
              <div className="section-title align-items-start">
                <h2 className="title">Working Process</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
                  exercitationem impedit iure quia quo recusandae?
                </p>
              </div>
              <div className="about-accordion mt-30">
                Your Business Skills But Never Stop Improving.
              </div>
              <div className="about-btn">
                <Button className="aboutBtn redBtn" name="See how it works"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionAbout;
