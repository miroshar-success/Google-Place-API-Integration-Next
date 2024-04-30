"use client";
import React, { useMemo, useState } from "react";
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

const Home2Activities = () => {
  const [isOpen, setOpen] = useState(false);
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 25,
      effect: "fade", // Use the fade effect
      loop: true,
      fadeEffect: {
        crossFade: true, // Enable cross-fade transition
      },
      autoplay: {
        delay: 2500, // Autoplay duration in milliseconds
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination5",
        clickable: true,
      },
    };
  });
  return (
    <>
      <div className="slider-and-tab-section mb-120">
        <div className="row g-0">
          <div className="col-lg-5">
            <ul className="activities-slider-group">
              <li className="active">
                <div className="slider-area">
                  <Swiper
                    {...settings}
                    className="swiper activities-img-slider"
                  >
                    <div className="swiper-wrapper">
                      <SwiperSlide className="swiper-slide">
                        <div
                          className="slide-img"
                          style={{
                            backgroundImage:
                              "linear-gradient(180deg, rgba(16, 12, 8, 0.4) 0%, rgba(16, 12, 8, 0.4) 100%), url(assets/img/home2/zip-lining-01.jpg)",
                          }}
                        />
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div
                          className="slide-img"
                          style={{
                            backgroundImage:
                              "linear-gradient(180deg, rgba(16, 12, 8, 0.4) 0%, rgba(16, 12, 8, 0.4) 100%), url(assets/img/home2/zip-lining-01.jpg)",
                          }}
                        />
                      </SwiperSlide>
                    </div>
                  </Swiper>
                  <div className="swiper-pagination5 pagination1" />
                </div>
              </li>
              <li>
                <div className="slider-area">
                  <Swiper
                    {...settings}
                    className="swiper activities-img-slider">
                    <div className="swiper-wrapper">
                     
                      <SwiperSlide className="swiper-slide">
                        <div
                          className="slide-img"
                          style={{
                            backgroundImage:
                              "linear-gradient(180deg, rgba(16, 12, 8, 0.4) 0%, rgba(16, 12, 8, 0.4) 100%), url(assets/img/home2/zip-lining-01.jpg)",
                          }}
                        />
                      </SwiperSlide>
                    </div>
                  </Swiper>
                  <div className="swiper-pagination5 pagination1" />
                </div>
              </li>
              <li>
                <div className="slider-area">
                  <Swiper
                    {...settings}
                    className="swiper activities-img-slider"
                  >
                    <div className="swiper-wrapper">
                      <SwiperSlide className="swiper-slide">
                        <div
                          className="slide-img"
                          style={{
                            backgroundImage:
                              "linear-gradient(180deg, rgba(16, 12, 8, 0.4) 0%, rgba(16, 12, 8, 0.4) 100%), url(assets/img/home2/rafting-01.jpg)",
                          }}
                        />
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div
                          className="slide-img"
                          style={{
                            backgroundImage:
                              "linear-gradient(180deg, rgba(16, 12, 8, 0.4) 0%, rgba(16, 12, 8, 0.4) 100%), url(assets/img/home2/rafting-02.jpg)",
                          }}
                        />
                      </SwiperSlide>
                    </div>
                  </Swiper>
                  <div className="swiper-pagination5 pagination1" />
                </div>
              </li>
              <li>
                <div className="slider-area">
                  <Swiper
                    {...settings}
                    className="swiper activities-img-slider"
                  >
                    <div className="swiper-wrapper">
                      <SwiperSlide className="swiper-slide">
                        <div
                          className="slide-img"
                          style={{
                            backgroundImage:
                              "linear-gradient(180deg, rgba(16, 12, 8, 0.4) 0%, rgba(16, 12, 8, 0.4) 100%), url(assets/img/home2/paragliding-01.jpg)",
                          }}
                        />
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div
                          className="slide-img"
                          style={{
                            backgroundImage:
                              "linear-gradient(180deg, rgba(16, 12, 8, 0.4) 0%, rgba(16, 12, 8, 0.4) 100%), url(assets/img/home2/paragliding-02.jpg)",
                          }}
                        />
                      </SwiperSlide>
                    </div>
                  </Swiper>
                  <div className="swiper-pagination5 pagination1" />
                </div>
              </li>
              <li>
                <div className="slider-area">
                  <Swiper
                    {...settings}
                    className="swiper activities-img-slider"
                  >
                    <div className="swiper-wrapper">
                      <SwiperSlide className="swiper-slide">
                        <div
                          className="slide-img"
                          style={{
                            backgroundImage:
                              "linear-gradient(180deg, rgba(16, 12, 8, 0.4) 0%, rgba(16, 12, 8, 0.4) 100%), url(assets/img/home2/ski-touring-01.jpg)",
                          }}
                        />
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div
                          className="slide-img"
                          style={{
                            backgroundImage:
                              "linear-gradient(180deg, rgba(16, 12, 8, 0.4) 0%, rgba(16, 12, 8, 0.4) 100%), url(assets/img/home2/ski-touring-02.jpg)",
                          }}
                        />
                      </SwiperSlide>
                    </div>
                  </Swiper>
                  <div className="swiper-pagination5 pagination1" />
                </div>
              </li>
            </ul>
          </div>
          <div className="col-lg-7">
            <div className="tab-area">
              <div className="section-title2 text-center mb-50">
                <div className="eg-section-tag">
                  <span>What We Do</span>
                </div>
                <h2>Our Particular Activities</h2>
              </div>
              <div className="tab-content-area">
                <div className="row g-xl-4 gy-5 ">
                  <div className="col-xl-5">
                    <div className="tab-sidebar">
                      <ul
                        className="nav nav-pills"
                        id="pills-tab3"
                        role="tablist"
                      >
                        <li className="nav-item" role="presentation">
                          <div
                            className="nav-link active"
                            id="outdoor-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#outdoor"
                            role="tab"
                            aria-controls="outdoor"
                            aria-selected="true"
                          >
                            <div className="icon">
                              <Icon name="zipLining" width={33} height={33} viewBox="0 0 54 54"></Icon>
                            </div>
                            <h6>Zip lining</h6>
                          </div>
                        </li>
                        <li className="nav-item" role="presentation">
                          <div
                            className="nav-link"
                            id="cultural-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#cultural"
                            role="tab"
                            aria-controls="cultural"
                            aria-selected="false"
                          >
                            <div className="icon">
                            <Icon name="bungeeJumping" width={33} height={33} viewBox="0 0 54 54"></Icon>  
                            </div>
                            <h6>Bungee Jumping</h6>
                          </div>
                        </li>
                        <li className="nav-item" role="presentation">
                          <div
                            className="nav-link"
                            id="cuisine-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#cuisine"
                            role="tab"
                            aria-controls="cuisine"
                            aria-selected="false"
                          >
                            <div className="icon">
                            <Icon name="rafting" width={33} height={33} viewBox="0 0 54 54"></Icon>
                            </div>
                            <h6>Rafting</h6>
                          </div>
                        </li>
                        <li className="nav-item" role="presentation">
                          <div
                            className="nav-link"
                            id="wildlife-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#wildlife"
                            role="tab"
                            aria-controls="wildlife"
                            aria-selected="false"
                          >
                            <div className="icon">
                            <Icon name="paragliding" width={33} height={33} viewBox="0 0 54 54"></Icon>
                            </div>
                            <h6>Paragliding</h6>
                          </div>
                        </li>
                        <li className="nav-item" role="presentation">
                          <div
                            className="nav-link"
                            id="event-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#event"
                            role="tab"
                            aria-controls="event"
                            aria-selected="false"
                          >
                            <div className="icon">
                            <Icon name="Ski" width={33} height={33} viewBox="0 0 50 49"></Icon>
                            </div>
                            <h6>Ski touring</h6>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-7 d-flex justify-content-xl-start justify-content-center">
                    <div className="tab-content" id="pills-tab3Content">
                      <div
                        className="tab-pane fade show active"
                        id="outdoor"
                        role="tabpanel"
                        aria-labelledby="outdoor-tab"
                      >
                        <div className="tab-content-wrap">
                          <h2>Thrill Above Ground: The Zip Line Adventure</h2>
                          <p>
                            Embark on an adrenaline-fueled journey, zipping
                            through lush landscapes, feeling the wind rush past,
                            and experiencing nature from breathtaking heights.
                            Unleash your inner adventurer today.
                          </p>
                          <ul>
                            <li>
                              Treetop Views
                            </li>
                            <li>
                              Adrenaline Rush
                            </li>
                            <li>
                              Nature Immersion
                            </li>
                          </ul>
                          <div className="content-bottom-area">
                            <Link href="/activities/activities-details" className="primary-btn3">
                              Check Availability
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="cultural"
                        role="tabpanel"
                        aria-labelledby="cultural-tab"
                      >
                        <div className=" tab-content-wrap">
                          <h2>
                            Plunge: Bungee Jumping's Gravity-Defying Thrill
                          </h2>
                          <p>
                            Plunge into pure adrenaline. Free fall, then
                            rebound, suspended mid-air. Experience the ultimate
                            rush, a heart-pounding leap into the unknown.
                          </p>
                          <ul>
                            <li>
                              Secure Harnesses
                            </li>
                            <li>
                              Adrenaline Rush
                            </li>
                            <li>
                              Scenic Locations
                            </li>
                          </ul>
                          <div className="content-bottom-area">
                            <Link
                              href="/activities/activities-details"
                              className="primary-btn3"
                            >
                              Check Availability
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="cuisine"
                        role="tabpanel"
                        aria-labelledby="cuisine-tab"
                      >
                        <div className=" tab-content-wrap">
                          <h2>Whitewater Rush: Thrilling Rafting Adventure</h2>
                          <p>
                            Ride through rapids, paddle through currents, and
                            enjoy thrilling adventures with expert guides amidst
                            stunning natural landscapes and excitement.
                          </p>
                          <ul>
                            <li>
                              Professional Guides
                            </li>
                            <li>
                              Adventurous Rapids
                            </li>
                            <li>
                              Scenic Landscapes
                            </li>
                          </ul>
                          <div className="content-bottom-area">
                            <Link
                              href="/activities/activities-details"
                              className="primary-btn3"
                            >
                              Check Availability
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="wildlife"
                        role="tabpanel"
                        aria-labelledby="wildlife-tab"
                      >
                        <div className=" tab-content-wrap">
                          <h2>
                            Horizon Dance: Unique Paragliding Perspectives.
                          </h2>
                          <p>
                            Experience freedom in flight, soaring gracefully
                            over landscapes, feeling the wind's embrace on an
                            exhilarating paragliding escapade. Adventure awaits
                            above!
                          </p>
                          <ul>
                            <li>
                              Glide Experience
                            </li>
                            <li>
                              Scenic Views
                            </li>
                            <li>
                              Safety Measures
                            </li>
                          </ul>
                          <div className="content-bottom-area">
                            <Link href="/activities/activities-details" className="primary-btn3">
                              Check Availability
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="event"
                        role="tabpanel"
                        aria-labelledby="event-tab"
                      >
                        <div className=" tab-content-wrap">
                          <h2>
                            Powder Quest: Exploring Snow-Covered Landscapes on
                            Skis
                          </h2>
                          <p>
                            Ski tour through pristine snowscapes, ascend peaks,
                            and savor thrilling descents, immersing in nature's
                            beauty on an exhilarating adventure.
                          </p>
                          <ul>
                            <li>
                              Ascend and Descend
                            </li>
                            <li>
                              Specialized Equipment
                            </li>
                            <li>
                              Remote Exploration
                            </li>
                          </ul>
                          <div className="content-bottom-area">
                            <Link href="/activities/activities-details" className="primary-btn3">
                              Check Availability
                            </Link>
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
      
      </div>
    </>
  );
};

export default Home2Activities;
