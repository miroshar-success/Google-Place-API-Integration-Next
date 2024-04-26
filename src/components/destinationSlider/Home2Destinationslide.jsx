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
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const Home2Destinationslide = () => {
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 25,
      navigation: {
        nextEl: ".destination-card2-next",
        prevEl: ".destination-card2-prev",
      },

      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        386: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        1400: {
          slidesPerView: 4,
        },
      },
    };
  }, []);
  return (
    <>
      <div className="destination-card2-slider-section mb-120">
        <div className="container">
          <div className="row mb-50">
            <div className="col-lg-12">
              <div className="section-title2 text-center">
                <div className="eg-section-tag">
                  <span>Journey Adventurist's Link</span>
                </div>
                <h2>Trendy Travel Locations</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <Swiper
                {...settings}
                className="swiper destination-card2-slider mb-50"
              >
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="destination-card2">
                      <Link
                        href="/destination/destination-details"
                        className="destination-card-img"
                      >
                        <img
                          src="/assets/img/home2/destination-card2-img1.jpg"
                          alt=""
                        />
                      </Link>
                      <div className="batch">
                        <span>5 Tour</span>
                      </div>
                      <div className="destination-card2-content">
                        <span>Travel To</span>
                        <h4>
                          <Link href="/destination/destination-details">
                            New York
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="destination-card2">
                      <Link
                        href="/destination/destination-details"
                        className="destination-card-img"
                      >
                        <img
                          src="/assets/img/home2/destination-card2-img2.jpg"
                          alt=""
                        />
                      </Link>
                      <div className="batch">
                        <span>8 Tour</span>
                      </div>
                      <div className="destination-card2-content">
                        <span>Travel To</span>
                        <h4>
                          <Link href="/destination/destination-details">
                            Switzerland
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="destination-card2">
                      <Link
                        href="/destination/destination-details"
                        className="destination-card-img"
                      >
                        <img
                          src="/assets/img/home2/destination-card2-img3.jpg"
                          alt=""
                        />
                      </Link>
                      <div className="batch">
                        <span>4 Tour</span>
                      </div>
                      <div className="destination-card2-content">
                        <span>Travel To</span>
                        <h4>
                          <Link href="/destination/destination-details">
                            Saudi Arab
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="destination-card2">
                      <Link
                        href="/destination/destination-details"
                        className="destination-card-img"
                      >
                        <img
                          src="/assets/img/home2/destination-card2-img4.jpg"
                          alt=""
                        />
                      </Link>
                      <div className="batch">
                        <span>6 Tour</span>
                      </div>
                      <div className="destination-card2-content">
                        <span>Travel To</span>
                        <h4>
                          <Link href="/destination/destination-details">
                            Indonesia
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="destination-card2">
                      <Link
                        href="/destination/destination-details"
                        className="destination-card-img"
                      >
                        <img
                          src="/assets/img/home2/destination-card2-img5.jpg"
                          alt=""
                        />
                      </Link>
                      <div className="batch">
                        <span>7 Tour</span>
                      </div>
                      <div className="destination-card2-content">
                        <span>Travel To</span>
                        <h4>
                          <Link href="/destination/destination-details">
                            Brazil
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="destination-card2">
                      <Link
                        href="/destination/destination-details"
                        className="destination-card-img"
                      >
                        <img
                          src="/assets/img/home2/destination-card2-img6.jpg"
                          alt=""
                        />
                      </Link>
                      <div className="batch">
                        <span>8 Tour</span>
                      </div>
                      <div className="destination-card2-content">
                        <span>Travel To</span>
                        <h4>
                          <Link href="/destination/destination-details">
                            Japan
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="destination-card2">
                      <Link
                        href="/destination/destination-details"
                        className="destination-card-img"
                      >
                        <img
                          src="/assets/img/home2/destination-card2-img7.jpg"
                          alt=""
                        />
                      </Link>
                      <div className="batch">
                        <span>3 Tour</span>
                      </div>
                      <div className="destination-card2-content">
                        <span>Travel To</span>
                        <h4>
                          <Link href="/destination/destination-details">
                            Australia
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="destination-card2">
                      <Link
                        href="/destination/destination-details"
                        className="destination-card-img"
                      >
                        <img
                          src="/assets/img/home2/destination-card2-img4.jpg"
                          alt=""
                        />
                      </Link>
                      <div className="batch">
                        <span>6 Tour</span>
                      </div>
                      <div className="destination-card2-content">
                        <span>Travel To</span>
                        <h4>
                          <Link href="/destination/destination-details">
                            Indonesia
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              </Swiper>
              <div className="slide-and-view-btn-grp">
                <div className="slider-btn-grp3 two">
                  <div className="slider-btn destination-card2-prev">
                    <i className="bi bi-arrow-left" />
                    <span>PREV</span>
                  </div>
                  <div className="slider-btn destination-card2-next">
                    <span>NEXT</span>
                    <i className="bi bi-arrow-right" />
                  </div>
                </div>
                <Link href="/destination/style2" className="secondary-btn2">
                  View All Destination
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home2Destinationslide;
