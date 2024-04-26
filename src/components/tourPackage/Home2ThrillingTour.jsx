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

const Home2ThrillingTour = () => {
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 2000,
      spaceBetween: 25,
      navigation: {
        nextEl: ".package-card-slider-next",
        prevEl: ".package-card-slider-prev",
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
          slidesPerView: 2,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1400: {
          slidesPerView: 3,
        },
      },
    };
  }, []);
  return (
    <>
      <div className="tour-pack-section">
        <div className="container">
          <div className="row mb-50">
            <div className="col-lg-12">
              <div className="section-title2 text-center">
                <div className="eg-section-tag two">
                  <span>Itinerary packages</span>
                </div>
                <h2 className="text-white">Thrilling Itineraries</h2>
              </div>
            </div>
          </div>
          <div className="package-card-slider-wrap">
            <div className="row">
              <div className="col-lg-12">
                <Swiper
                  {...settings}
                  className="swiper package-card-slider mb-60"
                >
                  <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <div className="package-card3">
                        <Link
                          href="/package/package-details"
                          className="package-card-img"
                        >
                          <img
                            src="/assets/img/home2/package-card3-img1.png"
                            alt=""
                          />
                          <div className="batch">
                            <span>New</span>
                          </div>
                        </Link>
                        <div className="package-card-content">
                          <div className="card-content-top">
                            <div className="rating-area">
                              <span>(28 Interested)</span>
                            </div>
                            <h5>
                              <Link href="/package/package-details">
                                A Journey through Historical and Culture.
                              </Link>
                            </h5>
                            <ul className="feature-list">
                              <li>
                                <Icon name="itinDate" width={14} height={14} viewBox="0 0 14 14"></Icon>
                                4 Days
                              </li>
                              <li>
                              <Icon name="itinLocat" width={14} height={14} viewBox="0 0 14 14"></Icon>
                                6 Location
                              </li>
                              <li>
                              <Icon name="itinActivity" width={14} height={14} viewBox="0 0 14 14"></Icon>
                                2 Activities
                              </li>
                            </ul>
                          </div>
                          <div className="card-content-bottom">
                            <div className="price-area">
                              <span className="title">Group Size:</span>
                              <span>3</span>
                            </div>
                            <Link href="/package/package-details" className="primary-btn2">
                              Join this Itinerary
                            </Link>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="package-card3">
                        <Link
                          href="/package/package-details"
                          className="package-card-img"
                        >
                          <img
                            src="/assets/img/home2/package-card3-img2.png"
                            alt=""
                          />
                          <div className="batch two">
                            <span>Popular</span>
                          </div>
                        </Link>
                        <div className="package-card-content">
                          <div className="card-content-top">
                            <div className="rating-area">  
                              <span>(40 Interested)</span>
                            </div>
                            <h5>
                              <Link href="/package/package-details">
                                Proin congue gravida eratqus convallis sem.
                              </Link>
                            </h5>
                            <ul className="feature-list">
                              <li>
                              <Icon name="itinDate" width={14} height={14} viewBox="0 0 14 14"></Icon>
                                3 Days
                              </li>
                              <li>
                              <Icon name="itinLocat" width={14} height={14} viewBox="0 0 14 14"></Icon>
                                5 Location
                              </li>
                              <li>
                              <Icon name="itinActivity" width={14} height={14} viewBox="0 0 14 14"></Icon>
                                2 Activities
                              </li>
                            </ul>
                          </div>
                          <div className="card-content-bottom">
                            <div className="price-area">
                              <span className="title">Group Size:</span>
                              <span>5</span>
                            </div>
                            <Link href="/package/package-details" className="primary-btn2">
                              Join this Itinerary
                            </Link>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="package-card3">
                        <Link
                          href="/package/package-details"
                          className="package-card-img"
                        >
                          <img
                            src="/assets/img/home2/package-card3-img3.png"
                            alt=""
                          />
                          <div className="batch">
                            <span>Trending</span>
                          </div>
                        </Link>
                        <div className="package-card-content">
                          <div className="card-content-top">
                            <div className="rating-area">
                              <span>(35 Interested)</span>
                            </div>
                            <h5>
                              <Link href="/package/package-details">
                                Duis sed metus condimentum sapien sodales.
                              </Link>
                            </h5>
                            <ul className="feature-list">
                              <li>
                              <Icon name="itinDate" width={14} height={14} viewBox="0 0 14 14"></Icon>
                                5 Days
                              </li>
                              <li>
                              <Icon name="itinLocat" width={14} height={14} viewBox="0 0 14 14"></Icon>
                                3 Location
                              </li>
                              <li>
                              <Icon name="itinActivity" width={14} height={14} viewBox="0 0 14 14"></Icon>
                                1 Activity
                              </li>
                            </ul>
                          </div>
                          <div className="card-content-bottom">
                            <div className="price-area">
                              <span className="title">Group Size:</span>
                              <span>6</span>
                            </div>
                            <Link href="/package/package-details" className="primary-btn2">
                              Join this Itinerary
                            </Link>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="package-card3">
                        <Link
                          href="/package/package-details"
                          className="package-card-img"
                        >
                          <img
                            src="/assets/img/home2/package-card3-img7.png"
                            alt=""
                          />
                          <div className="batch">
                            <span>Popular</span>
                          </div>
                        </Link>
                        <div className="package-card-content">
                          <div className="card-content-top">
                            <div className="rating-area">
                              <span>(28 Interested)</span>
                            </div>
                            <h5>
                              <Link href="/package/package-details">
                                An exploration of history and culture.
                              </Link>
                            </h5>
                            <ul className="feature-list">
                              <li>
                              <Icon name="itinDate" width={14} height={14} viewBox="0 0 14 14"></Icon>
                                4 Days
                              </li>
                              <li>
                              <Icon name="itinLocat" width={14} height={14} viewBox="0 0 14 14"></Icon>
                                6 Location
                              </li>
                              <li>
                              <Icon name="itinActivity" width={14} height={14} viewBox="0 0 14 14"></Icon>
                                4 Activities
                              </li>
                            </ul>
                          </div>
                          <div className="card-content-bottom">
                            <div className="price-area">
                              <span className="title">Group Size:</span>
                              <span>4</span>
                            </div>
                            <Link href="/package/package-details" className="primary-btn2">
                              Join this Itinerary
                            </Link>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                </Swiper>
                <div className="slide-and-view-btn-grp style-2">
                  <div className="slider-btn-grp3">
                    <div className="slider-btn package-card-slider-prev">
                      <i className="bi bi-arrow-left" />
                      <span>PREV</span>
                    </div>
                    <Link href="/package" className="secondary-btn2">
                      View All Package
                    </Link>
                    <div className="slider-btn package-card-slider-next">
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

export default Home2ThrillingTour;
