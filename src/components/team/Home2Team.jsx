"use client";
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const Home2Team = () => {
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 25,
      // autoplay: {
      // 	delay: 2500, // Autoplay duration in milliseconds
      // 	disableOnInteraction: false,
      // },
      navigation: {
        nextEl: ".teams-card-next",
        prevEl: ".teams-card-prev",
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
          slidesPerView: 2,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 3,
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
      <div className="teams-section mb-120">
        <div className="container">
          <div className="row mb-50">
            <div className="col-lg-12">
              <div className="section-title2 text-center">
                <div className="eg-section-tag">
                  <span>Tour Guide</span>
                </div>
                <h2>Our Travel Guide </h2>
              </div>
            </div>
          </div>
          <div className="teams-slider-area">
            <div className="row mb-60">
              <div className="col-lg-12">
                <Swiper {...settings} className="swiper teams-card-slider">
                  <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <div className="teams-card">
                        <img src="/assets/img/home2/teams-card-bg.png" alt="" />
                        <div className="teams-img">
                          <img
                            src="/assets/img/home2/teams-card-img1.png"
                            alt=""
                          />
                        </div>
                        <div className="teams-content">
                          <h4>Landry Palmer</h4>
                          <span>Tour Guide</span>
                        </div>
                        <ul className="social-list">
                          <li>
                            <a href="https://www.instagram.com/">
                              <i className="bx bxl-instagram" />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.pinterest.com/">
                              <i className="bx bxl-pinterest-alt" />
                            </a>
                          </li>
                          <li>
                            <a href="https://twitter.com/">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={18}
                                height={18}
                                fill="currentColor"
                                className="bi bi-twitter-x"
                                viewBox="0 0 16 16"
                              >
                                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.facebook.com/">
                              <i className="bx bxl-facebook" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="teams-card">
                        <img src="/assets/img/home2/teams-card-bg.png" alt="" />
                        <div className="teams-img">
                          <img
                            src="/assets/img/home2/teams-card-img2.png"
                            alt=""
                          />
                        </div>
                        <div className="teams-content">
                          <h4>Jackson Mason</h4>
                          <span>Tour Guide</span>
                        </div>
                        <ul className="social-list">
                          <li>
                            <a href="https://www.instagram.com/">
                              <i className="bx bxl-instagram" />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.pinterest.com/">
                              <i className="bx bxl-pinterest-alt" />
                            </a>
                          </li>
                          <li>
                            <a href="https://twitter.com/">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={18}
                                height={18}
                                fill="currentColor"
                                className="bi bi-twitter-x"
                                viewBox="0 0 16 16"
                              >
                                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.facebook.com/">
                              <i className="bx bxl-facebook" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="teams-card">
                        <img src="/assets/img/home2/teams-card-bg.png" alt="" />
                        <div className="teams-img">
                          <img
                            src="/assets/img/home2/teams-card-img3.png"
                            alt=""
                          />
                        </div>
                        <div className="teams-content">
                          <h4>Joseph David</h4>
                          <span>Tour Guide</span>
                        </div>
                        <ul className="social-list">
                          <li>
                            <a href="https://www.instagram.com/">
                              <i className="bx bxl-instagram" />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.pinterest.com/">
                              <i className="bx bxl-pinterest-alt" />
                            </a>
                          </li>
                          <li>
                            <a href="https://twitter.com/">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={18}
                                height={18}
                                fill="currentColor"
                                className="bi bi-twitter-x"
                                viewBox="0 0 16 16"
                              >
                                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.facebook.com/">
                              <i className="bx bxl-facebook" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="teams-card">
                        <img src="/assets/img/home2/teams-card-bg.png" alt="" />
                        <div className="teams-img">
                          <img
                            src="/assets/img/home2/teams-card-img4.png"
                            alt=""
                          />
                        </div>
                        <div className="teams-content">
                          <h4>Josiah Caleb</h4>
                          <span>Tour Guide</span>
                        </div>
                        <ul className="social-list">
                          <li>
                            <a href="https://www.instagram.com/">
                              <i className="bx bxl-instagram" />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.pinterest.com/">
                              <i className="bx bxl-pinterest-alt" />
                            </a>
                          </li>
                          <li>
                            <a href="https://twitter.com/">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={18}
                                height={18}
                                fill="currentColor"
                                className="bi bi-twitter-x"
                                viewBox="0 0 16 16"
                              >
                                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.facebook.com/">
                              <i className="bx bxl-facebook" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="teams-card">
                        <img src="/assets/img/home2/teams-card-bg.png" alt="" />
                        <div className="teams-img">
                          <img
                            src="/assets/img/home2/teams-card-img5.png"
                            alt=""
                          />
                        </div>
                        <div className="teams-content">
                          <h4>David Luis</h4>
                          <span>Tour Guide</span>
                        </div>
                        <ul className="social-list">
                          <li>
                            <a href="https://www.instagram.com/">
                              <i className="bx bxl-instagram" />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.pinterest.com/">
                              <i className="bx bxl-pinterest-alt" />
                            </a>
                          </li>
                          <li>
                            <a href="https://twitter.com/">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={18}
                                height={18}
                                fill="currentColor"
                                className="bi bi-twitter-x"
                                viewBox="0 0 16 16"
                              >
                                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.facebook.com/">
                              <i className="bx bxl-facebook" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="teams-card">
                        <img src="/assets/img/home2/teams-card-bg.png" alt="" />
                        <div className="teams-img">
                          <img
                            src="/assets/img/home2/teams-card-img6.png"
                            alt=""
                          />
                        </div>
                        <div className="teams-content">
                          <h4>Alison Bekkar</h4>
                          <span>Tour Guide</span>
                        </div>
                        <ul className="social-list">
                          <li>
                            <a href="https://www.instagram.com/">
                              <i className="bx bxl-instagram" />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.pinterest.com/">
                              <i className="bx bxl-pinterest-alt" />
                            </a>
                          </li>
                          <li>
                            <a href="https://twitter.com/">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={18}
                                height={18}
                                fill="currentColor"
                                className="bi bi-twitter-x"
                                viewBox="0 0 16 16"
                              >
                                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.facebook.com/">
                              <i className="bx bxl-facebook" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="teams-card">
                        <img src="/assets/img/home2/teams-card-bg.png" alt="" />
                        <div className="teams-img">
                          <img
                            src="/assets/img/home2/teams-card-img7.png"
                            alt=""
                          />
                        </div>
                        <div className="teams-content">
                          <h4>Arthor Morgan</h4>
                          <span>Tour Guide</span>
                        </div>
                        <ul className="social-list">
                          <li>
                            <a href="https://www.instagram.com/">
                              <i className="bx bxl-instagram" />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.pinterest.com/">
                              <i className="bx bxl-pinterest-alt" />
                            </a>
                          </li>
                          <li>
                            <a href="https://twitter.com/">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={18}
                                height={18}
                                fill="currentColor"
                                className="bi bi-twitter-x"
                                viewBox="0 0 16 16"
                              >
                                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.facebook.com/">
                              <i className="bx bxl-facebook" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </SwiperSlide>
                  </div>
                </Swiper>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="slide-and-view-btn-grp style-4">
                  <div className="slider-btn-grp3">
                    <div className="slider-btn teams-card-prev">
                      <i className="bi bi-arrow-left" />
                      <span>PREV</span>
                    </div>
                    <div className="slider-btn teams-card-next">
                      <span>NEXT</span>
                      <i className="bi bi-arrow-right" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home2Team;
