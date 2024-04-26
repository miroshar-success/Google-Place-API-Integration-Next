"use client";
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import Link from "next/link";
import Icon from "@/uitils/Icon";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const Home2WhyChoose = () => {
  const settings = useMemo(() => {
    return {
      spaceBetween: 10,
      slidesPerView: "auto",
      freeMode: true,
      watchSlidesProgress: true,
      speed: 1500,
      allowTouchMove: false,
      effect: "fade",
      fadeEffect: {
        crossFade: true, 
      },
    };
  }, []);
  return (
    <>
      <div className="feature-card-section mb-120">
        <div className="container">
          <div className="row mb-50">
            <div className="col-lg-12">
              <div className="section-title2 text-center">
                <div className="eg-section-tag">
                  <span>Who We Are</span>
                </div>
                <h2>Why cancelling your much awaited trip ?</h2>
              </div>
            </div>
          </div>
          <div className="row gy-5 mb-80">
            <div className="col-xl-4 col-md-6">
              <div className="feature-card style-2">
                <div className="feature-card-icon">
                <Icon name="worldCoverage" width={70}  height={70} viewBox="0 0 70 70"></Icon>    
                </div>
                <div className="feature-card-content">
                  <h6>Worldwide Connectivity</h6>
                  <p>Enabling solo travelers from all corners of the globe to discover and connect with each other.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="feature-card style-2">
                <div className="feature-card-icon">
                <Icon name="flexibleDates" width={70}  height={70} viewBox="0 0 70 70"></Icon>  
                </div>
                <div className="feature-card-content">
                  <h6>Flexible dates</h6>
                  <p>
                    Efficiently matching you with travel companions that have compatible holiday days 
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Home2WhyChoose;
