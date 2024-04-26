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
const Home2Testimonial = () => {
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 2500,
      spaceBetween: 25,
      loop: true,
      navigation: {
        nextEl: ".testimonial-card-slider-next",
        prevEl: ".testimonial-card-slider-prev",
      },

      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        386: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        1400: {
          slidesPerView: 1,
        },
      },
    };
  }, []);
  return (
    <>
      <div className="home2-testimonial-section mb-120">
        <div className="container-fluid">
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-5">
              <div className="testimonial-content-wrapper">
                <div className="section-title2 mb-40">
                  <div className="eg-section-tag two">
                    <span>Testimonial</span>
                  </div>
                  <h2>Find The Compliments From Our Travelers</h2>
                  <p>
                    Hear from some of our satisfied travelers about how our service has transformed their trips.
                    From sharing itineraries and activities to making lifelong memories, 
                    our community of travelers has nothing but good things to say about their experiences with us.
                    Read on to see what they have to say!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="testimonial-card-slider-area">
                <div className="row">
                  <div className="col-lg-12">
                    <Swiper
                      {...settings}
                      className="swiper home2-testimonial-card-slider mb-35"
                    >
                      <div className="swiper-wrapper">
                        <SwiperSlide className="swiper-slide">
                          <div className="tesimonial-card-wrapper style-2">
                            <div className="tesimonial-card">
                              <img
                                src="/assets/img/home2/vector/testi-quote.svg"
                                alt=""
                                className="quote"
                              />
                              <div className="testimonial-content">
                                <p>
                                  “This service has completely transformed my travel experiences.
                                   I've met so many amazing people and made lifelong memories. 
                                   Thank you for creating such a wonderful platform!”
                                </p>
                              </div>
                              <div className="testimonial-bottom">
                                <div className="rating-area">
                                  <ul className="rating">
                                    <li>
                                      <i className="bi bi-star-fill" />
                                    </li>
                                    <li>
                                      <i className="bi bi-star-fill" />
                                    </li>
                                    <li>
                                      <i className="bi bi-star-fill" />
                                    </li>
                                    <li>
                                      <i className="bi bi-star-fill" />
                                    </li>
                                    <li>
                                      <i className="bi bi-star-fill" />
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="author-area">
                              <div className="author-img">
                                <img
                                  src="/assets/img/home1/testi-author-img1.png"
                                  alt=""
                                />
                              </div>
                              <div className="author-content">
                                <h5>Jeno Jhonson</h5> 
                                <span>Solo Traveler</span>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                          <div className="tesimonial-card-wrapper style-2">
                            <div className="tesimonial-card">
                              <img
                                src="/assets/img/home2/vector/testi-quote.svg"
                                alt=""
                                className="quote"
                              />
                              <div className="testimonial-content">
                                <p>
                                  “I was hesitant to try a new travel service at first, but I'm so glad I did. 
                                  The ability to share activities and itineraries with other travelers made my trip
                                  so much more enjoyable and memorable.”
                                </p>
                              </div>
                              <div className="testimonial-bottom">
                                <div className="rating-area">
                                  <ul className="rating">
                                    <li>
                                      <i className="bi bi-star-fill" />
                                    </li>
                                    <li>
                                      <i className="bi bi-star-fill" />
                                    </li>
                                    <li>
                                      <i className="bi bi-star-fill" />
                                    </li>
                                    <li>
                                      <i className="bi bi-star-fill" />
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="author-area">
                              <div className="author-img">
                                <img
                                  src="/assets/img/home1/testi-author-img2.png"
                                  alt=""
                                />
                              </div>
                              <div className="author-content">
                                <h5>Yassine Bme</h5>
                                <span>Solo Traveler</span>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                          <div className="tesimonial-card-wrapper style-2">
                            <div className="tesimonial-card">
                              <img
                                src="/assets/img/home2/vector/testi-quote.svg"
                                alt=""
                                className="quote"
                              />
                              <div className="testimonial-content">
                                <p>
                                  “I was blown away by the level of community and support on this platform.
                                  It was so easy to connect with other travelers and plan our adventures together.
                                  I can't wait to use this service again!”
                                </p>
                              </div>
                              <div className="testimonial-bottom">
                                <div className="rating-area">
                                  <ul className="rating">
                                    <li>
                                      <i className="bi bi-star-fill" />
                                    </li>
                                    <li>
                                      <i className="bi bi-star-fill" />
                                    </li>
                                    <li>
                                      <i className="bi bi-star-fill" />
                                    </li>
                                    <li>
                                      <i className="bi bi-star-fill" />
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="author-area">
                              <div className="author-img">
                                <img
                                  src="/assets/img/home1/testi-author-img3.png"
                                  alt=""
                                />
                              </div>
                              <div className="author-content">
                                <h5>Dani Alves</h5>
                                <span>Solo Traveler</span>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      </div>
                    </Swiper>
                    <div className="slide-and-view-btn-grp style-3">
                      <div className="slider-btn-grp3">
                        <div className="slider-btn testimonial-card-slider-prev">
                          <i className="bi bi-arrow-left" />
                          <span>PREV</span>
                        </div>
                        <div className="slider-btn testimonial-card-slider-next">
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
        </div>
      </div>
    </>
  );
};

export default Home2Testimonial;
