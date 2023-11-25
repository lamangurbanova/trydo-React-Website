import React from "react";
import Button from "../../components/Button";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "./style.css";
import "swiper/css/navigation";

const MainSlider = () => {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="slide-box slider-1">
            <div className="container">
              <div className="row">
                <div className="col-12 d-flex justify-content-end">
                  <div className="inner-text d-flex align-items-end  flex-column">
                    <h1 className="title">Business.</h1>
                    <p className="desc">
                      There are many variations of passages but the majority
                      have suffered alteration.
                    </p>
                    <div className="slide-btn">
                      <Button className="slideBtn redBtn" name="Contact Us" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide-box slider-2">
          <div className="container">
            <div className="row">
              <div className="col-12 d-flex">
                <div className="inner-text d-flex align-items-start  flex-column">
                  <h1 className="title">Business.</h1>
                  <p className="desc text-start p-0">
                    There are many variations of passages but the majority have
                    suffered alteration.
                  </p>
                  <div className="slide-btn">
                    <Button className="slideBtn" name="Contact Us" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MainSlider;
