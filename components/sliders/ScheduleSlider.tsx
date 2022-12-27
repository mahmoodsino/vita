import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ScheduleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    rows: 1,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    arrows: false,
    dotsClass: "button__bar",
  };
  return (
    <div className="  max-w-[100%] m-auto">
      <Slider {...settings}>
        <div key={2}>
          <div className="w-[100%] h-fit justify-around flex md:flex-row sm:items-center sm:flex-col  bg-cover">
            <div className="">
              <img className="" src="/Rectangle_sch.png" alt="" />
            </div>
          </div>
        </div>
        <div key={2}>
          <div className="w-[100%] h-fit justify-around flex md:flex-row sm:items-center sm:flex-col  bg-cover">
            <div className="">
              <img src="/Rectangle_sch.png" alt="" />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default ScheduleSlider;
