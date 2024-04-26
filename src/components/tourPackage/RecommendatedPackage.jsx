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

const RecommendatedPackage = () => {
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 25,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".package-card-tab-next",
        prevEl: ".package-card-tab-prev",
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
    <div className="recommendated-package-area mb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mb-30 d-flex align-items-center justify-content-between">
            <div className="desti-title">
              <h3>Recommended Package</h3>
            </div>
            <div className="slider-btn-grp2 width-100">
              <div className="slider-btn package-card-tab-prev">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={9}
                  height={17}
                  viewBox="0 0 9 17"
                >
                  <path d="M8.83399 0.281832L8.72217 0.16683L0.500652 8.50016L8.72217 16.8335L8.83398 16.7185L8.83398 13.0602L4.33681 8.50016L8.83399 3.94016L8.83399 0.281832Z" />
                </svg>
              </div>
              <div className="slider-btn package-card-tab-next">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={9}
                  height={17}
                  viewBox="0 0 9 17"
                  fill="none"
                >
                  <path d="M0.166016 16.7182L0.277828 16.8332L8.49935 8.49984L0.277828 0.166504L0.166016 0.281504V3.93984L4.66319 8.49984L0.166016 13.0598V16.7182Z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="col-lg-12  mb-50">
            <Swiper {...settings} className="swiper package-card-tab-slider">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="package-card">
                    <div className="package-card-img-wrap">
                      <Link
                        href="/package/package-details"
                        className="card-img"
                      >
                        <img
                          src="/assets/img/home1/package-card-img7.png"
                          alt=""
                        />
                      </Link>
                      <div className="batch">
                        <span className="date">3 Days / 4 Night</span>
                        <div className="location">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                          >
                            <path d="M8.99939 0C5.40484 0 2.48047 2.92437 2.48047 6.51888C2.48047 10.9798 8.31426 17.5287 8.56264 17.8053C8.79594 18.0651 9.20326 18.0646 9.43613 17.8053C9.68451 17.5287 15.5183 10.9798 15.5183 6.51888C15.5182 2.92437 12.5939 0 8.99939 0ZM8.99939 9.79871C7.19088 9.79871 5.71959 8.32739 5.71959 6.51888C5.71959 4.71037 7.19091 3.23909 8.99939 3.23909C10.8079 3.23909 12.2791 4.71041 12.2791 6.51892C12.2791 8.32743 10.8079 9.79871 8.99939 9.79871Z" />
                          </svg>
                          <ul className="location-list">
                            <li>
                              <Link href="/package">Nepal</Link>
                            </li>
                            <li>
                              <Link href="/package">Indonesia Tour</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="package-card-content">
                      <div className="card-content-top">
                        <h5>
                          <Link href="/package/package-details">
                            A Journey through Historical and Culture.
                          </Link>
                        </h5>
                        <div className="location-area">
                          <ul className="location-list">
                            <li>
                              <Link href="/package">Mecca</Link>
                            </li>
                            <li>
                              <Link href="/package">Medina</Link>
                            </li>
                            <li>
                              <Link href="/package">Riyadh</Link>
                            </li>
                            <li>
                              <Link href="/package">Doha</Link>
                            </li>
                            <li>
                              <Link href="/package">Al Wakrah</Link>
                            </li>
                            <li>
                              <Link href="/package">Al Rayyan</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-content-bottom">
                        <div className="price-area">
                          <h6>Starting Form:</h6>
                          <span>$8,629</span>
                          <p>TAXES INCL/PERS</p>
                        </div>
                        <Link
                          href="/package/package-details"
                          className="primary-btn2"
                        >
                          Book a Trip
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                            fill="none"
                          >
                            <path d="M8.15624 10.2261L7.70276 12.3534L5.60722 18L6.85097 17.7928L12.6612 10.1948C13.4812 10.1662 14.2764 10.1222 14.9674 10.054C18.1643 9.73783 17.9985 8.99997 17.9985 8.99997C17.9985 8.99997 18.1643 8.26211 14.9674 7.94594C14.2764 7.87745 13.4811 7.8335 12.6611 7.80518L6.851 0.206972L5.60722 -5.41705e-07L7.70276 5.64663L8.15624 7.77386C7.0917 7.78979 6.37132 7.81403 6.37132 7.81403C6.37132 7.81403 4.90278 7.84793 2.63059 8.35988L0.778036 5.79016L0.000253424 5.79016L0.554115 8.91458C0.454429 8.94514 0.454429 9.05483 0.554115 9.08539L0.000253144 12.2098L0.778036 12.2098L2.63059 9.64035C4.90278 10.1523 6.37132 10.1857 6.37132 10.1857C6.37132 10.1857 7.0917 10.2102 8.15624 10.2261Z" />
                            <path d="M12.0703 11.9318L12.0703 12.7706L8.97041 12.7706L8.97041 11.9318L12.0703 11.9318ZM12.0703 5.23292L12.0703 6.0714L8.97059 6.0714L8.97059 5.23292L12.0703 5.23292ZM9.97892 14.7465L9.97892 15.585L7.11389 15.585L7.11389 14.7465L9.97892 14.7465ZM9.97892 2.41846L9.97892 3.2572L7.11389 3.2572L7.11389 2.41846L9.97892 2.41846Z" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="package-card">
                    <div className="package-card-img-wrap">
                      <Link
                        href="/package/package-details"
                        className="card-img"
                      >
                        <img
                          src="/assets/img/home1/package-card-img8.png"
                          alt=""
                        />
                      </Link>
                      <div className="batch">
                        <span className="date">6 Days / 7 Night</span>
                        <div className="location">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                          >
                            <path d="M8.99939 0C5.40484 0 2.48047 2.92437 2.48047 6.51888C2.48047 10.9798 8.31426 17.5287 8.56264 17.8053C8.79594 18.0651 9.20326 18.0646 9.43613 17.8053C9.68451 17.5287 15.5183 10.9798 15.5183 6.51888C15.5182 2.92437 12.5939 0 8.99939 0ZM8.99939 9.79871C7.19088 9.79871 5.71959 8.32739 5.71959 6.51888C5.71959 4.71037 7.19091 3.23909 8.99939 3.23909C10.8079 3.23909 12.2791 4.71041 12.2791 6.51892C12.2791 8.32743 10.8079 9.79871 8.99939 9.79871Z" />
                          </svg>
                          <ul className="location-list">
                            <li>
                              <Link href="/package">Italy</Link>
                            </li>
                            <li>
                              <Link href="/package">France Tour</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="package-card-content">
                      <div className="card-content-top">
                        <h5>
                          <Link href="/package/package-details">
                            Exploring then Spiritual and Mystical Travel.
                          </Link>
                        </h5>
                        <div className="location-area">
                          <ul className="location-list">
                            <li>
                              <Link href="/package">Cairo</Link>
                            </li>
                            <li>
                              <Link href="/package">Medina</Link>
                            </li>
                            <li>
                              <Link href="/package">Riyadh</Link>
                            </li>
                            <li>
                              <Link href="/package">Cairo</Link>
                            </li>
                            <li>
                              <Link href="/package">Al Wakrah</Link>
                            </li>
                            <li>
                              <Link href="/package">Al Rayyan</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-content-bottom">
                        <div className="price-area">
                          <h6>Starting Form:</h6>
                          <span>
                            $2,872 <del>$3000</del>
                          </span>
                          <p>TAXES INCL/PERS</p>
                        </div>
                        <Link
                          href="/package/package-details"
                          className="primary-btn2"
                        >
                          Book a Trip
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                            fill="none"
                          >
                            <path d="M8.15624 10.2261L7.70276 12.3534L5.60722 18L6.85097 17.7928L12.6612 10.1948C13.4812 10.1662 14.2764 10.1222 14.9674 10.054C18.1643 9.73783 17.9985 8.99997 17.9985 8.99997C17.9985 8.99997 18.1643 8.26211 14.9674 7.94594C14.2764 7.87745 13.4811 7.8335 12.6611 7.80518L6.851 0.206972L5.60722 -5.41705e-07L7.70276 5.64663L8.15624 7.77386C7.0917 7.78979 6.37132 7.81403 6.37132 7.81403C6.37132 7.81403 4.90278 7.84793 2.63059 8.35988L0.778036 5.79016L0.000253424 5.79016L0.554115 8.91458C0.454429 8.94514 0.454429 9.05483 0.554115 9.08539L0.000253144 12.2098L0.778036 12.2098L2.63059 9.64035C4.90278 10.1523 6.37132 10.1857 6.37132 10.1857C6.37132 10.1857 7.0917 10.2102 8.15624 10.2261Z" />
                            <path d="M12.0703 11.9318L12.0703 12.7706L8.97041 12.7706L8.97041 11.9318L12.0703 11.9318ZM12.0703 5.23292L12.0703 6.0714L8.97059 6.0714L8.97059 5.23292L12.0703 5.23292ZM9.97892 14.7465L9.97892 15.585L7.11389 15.585L7.11389 14.7465L9.97892 14.7465ZM9.97892 2.41846L9.97892 3.2572L7.11389 3.2572L7.11389 2.41846L9.97892 2.41846Z" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="package-card">
                    <div className="package-card-img-wrap">
                      <Link
                        href="/package/package-details"
                        className="card-img"
                      >
                        <img
                          src="/assets/img/home1/package-card-img9.png"
                          alt=""
                        />
                      </Link>
                      <div className="batch">
                        <span className="date">5 Days / 6 Night</span>
                        <div className="location">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                          >
                            <path d="M8.99939 0C5.40484 0 2.48047 2.92437 2.48047 6.51888C2.48047 10.9798 8.31426 17.5287 8.56264 17.8053C8.79594 18.0651 9.20326 18.0646 9.43613 17.8053C9.68451 17.5287 15.5183 10.9798 15.5183 6.51888C15.5182 2.92437 12.5939 0 8.99939 0ZM8.99939 9.79871C7.19088 9.79871 5.71959 8.32739 5.71959 6.51888C5.71959 4.71037 7.19091 3.23909 8.99939 3.23909C10.8079 3.23909 12.2791 4.71041 12.2791 6.51892C12.2791 8.32743 10.8079 9.79871 8.99939 9.79871Z" />
                          </svg>
                          <ul className="location-list">
                            <li>
                              <Link href="/package">Thailand</Link>
                            </li>
                            <li>
                              <Link href="/package">Japan Tour</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="package-card-content">
                      <div className="card-content-top">
                        <h5>
                          <Link href="/package/package-details">
                            Hiking, Rafting, and Exploring Travels Outdoors.
                          </Link>
                        </h5>
                        <div className="location-area">
                          <ul className="location-list">
                            <li>
                              <Link href="/package">Cairo</Link>
                            </li>
                            <li>
                              <Link href="/package">Medina</Link>
                            </li>
                            <li>
                              <Link href="/package">Riyadh</Link>
                            </li>
                            <li>
                              <Link href="/package">Cairo</Link>
                            </li>
                            <li>
                              <Link href="/package">Al Wakrah</Link>
                            </li>
                            <li>
                              <Link href="/package">Al Rayyan</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-content-bottom">
                        <div className="price-area">
                          <h6>Starting Form:</h6>
                          <span>$4,573</span>
                          <p>TAXES INCL/PERS</p>
                        </div>
                        <Link
                          href="/package/package-details"
                          className="primary-btn2"
                        >
                          Book a Trip
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                            fill="none"
                          >
                            <path d="M8.15624 10.2261L7.70276 12.3534L5.60722 18L6.85097 17.7928L12.6612 10.1948C13.4812 10.1662 14.2764 10.1222 14.9674 10.054C18.1643 9.73783 17.9985 8.99997 17.9985 8.99997C17.9985 8.99997 18.1643 8.26211 14.9674 7.94594C14.2764 7.87745 13.4811 7.8335 12.6611 7.80518L6.851 0.206972L5.60722 -5.41705e-07L7.70276 5.64663L8.15624 7.77386C7.0917 7.78979 6.37132 7.81403 6.37132 7.81403C6.37132 7.81403 4.90278 7.84793 2.63059 8.35988L0.778036 5.79016L0.000253424 5.79016L0.554115 8.91458C0.454429 8.94514 0.454429 9.05483 0.554115 9.08539L0.000253144 12.2098L0.778036 12.2098L2.63059 9.64035C4.90278 10.1523 6.37132 10.1857 6.37132 10.1857C6.37132 10.1857 7.0917 10.2102 8.15624 10.2261Z" />
                            <path d="M12.0703 11.9318L12.0703 12.7706L8.97041 12.7706L8.97041 11.9318L12.0703 11.9318ZM12.0703 5.23292L12.0703 6.0714L8.97059 6.0714L8.97059 5.23292L12.0703 5.23292ZM9.97892 14.7465L9.97892 15.585L7.11389 15.585L7.11389 14.7465L9.97892 14.7465ZM9.97892 2.41846L9.97892 3.2572L7.11389 3.2572L7.11389 2.41846L9.97892 2.41846Z" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="package-card">
                    <div className="package-card-img-wrap">
                      <Link
                        href="/package/package-details"
                        className="card-img"
                      >
                        <img
                          src="/assets/img/home1/package-card-img1.png"
                          alt=""
                        />
                      </Link>
                      <div className="batch">
                        <span className="date">8 Days / 9 Night</span>
                        <div className="location">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                          >
                            <path d="M8.99939 0C5.40484 0 2.48047 2.92437 2.48047 6.51888C2.48047 10.9798 8.31426 17.5287 8.56264 17.8053C8.79594 18.0651 9.20326 18.0646 9.43613 17.8053C9.68451 17.5287 15.5183 10.9798 15.5183 6.51888C15.5182 2.92437 12.5939 0 8.99939 0ZM8.99939 9.79871C7.19088 9.79871 5.71959 8.32739 5.71959 6.51888C5.71959 4.71037 7.19091 3.23909 8.99939 3.23909C10.8079 3.23909 12.2791 4.71041 12.2791 6.51892C12.2791 8.32743 10.8079 9.79871 8.99939 9.79871Z" />
                          </svg>
                          <ul className="location-list">
                            <li>
                              <Link href="/package">Turkey</Link>
                            </li>
                            <li>
                              <Link href="/package">Hungary Tour</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="package-card-content">
                      <div className="card-content-top">
                        <h5>
                          <Link href="/package/package-details">
                            A Journey through Historical and Culture.
                          </Link>
                        </h5>
                        <div className="location-area">
                          <ul className="location-list">
                            <li>
                              <Link href="/package">Cairo</Link>
                            </li>
                            <li>
                              <Link href="/package">Medina</Link>
                            </li>
                            <li>
                              <Link href="/package">Riyadh</Link>
                            </li>
                            <li>
                              <Link href="/package">Cairo</Link>
                            </li>
                            <li>
                              <Link href="/package">Al Wakrah</Link>
                            </li>
                            <li>
                              <Link href="/package">Al Rayyan</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-content-bottom">
                        <div className="price-area">
                          <h6>Starting Form:</h6>
                          <span>$8,629</span>
                          <p>TAXES INCL/PERS</p>
                        </div>
                        <Link
                          href="/package/package-details"
                          className="primary-btn2"
                        >
                          Book a Trip
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                            fill="none"
                          >
                            <path d="M8.15624 10.2261L7.70276 12.3534L5.60722 18L6.85097 17.7928L12.6612 10.1948C13.4812 10.1662 14.2764 10.1222 14.9674 10.054C18.1643 9.73783 17.9985 8.99997 17.9985 8.99997C17.9985 8.99997 18.1643 8.26211 14.9674 7.94594C14.2764 7.87745 13.4811 7.8335 12.6611 7.80518L6.851 0.206972L5.60722 -5.41705e-07L7.70276 5.64663L8.15624 7.77386C7.0917 7.78979 6.37132 7.81403 6.37132 7.81403C6.37132 7.81403 4.90278 7.84793 2.63059 8.35988L0.778036 5.79016L0.000253424 5.79016L0.554115 8.91458C0.454429 8.94514 0.454429 9.05483 0.554115 9.08539L0.000253144 12.2098L0.778036 12.2098L2.63059 9.64035C4.90278 10.1523 6.37132 10.1857 6.37132 10.1857C6.37132 10.1857 7.0917 10.2102 8.15624 10.2261Z" />
                            <path d="M12.0703 11.9318L12.0703 12.7706L8.97041 12.7706L8.97041 11.9318L12.0703 11.9318ZM12.0703 5.23292L12.0703 6.0714L8.97059 6.0714L8.97059 5.23292L12.0703 5.23292ZM9.97892 14.7465L9.97892 15.585L7.11389 15.585L7.11389 14.7465L9.97892 14.7465ZM9.97892 2.41846L9.97892 3.2572L7.11389 3.2572L7.11389 2.41846L9.97892 2.41846Z" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="package-card">
                    <div className="package-card-img-wrap">
                      <Link
                        href="/package/package-details"
                        className="card-img"
                      >
                        <img
                          src="/assets/img/home1/package-card-img3.png"
                          alt=""
                        />
                      </Link>
                      <div className="batch">
                        <span className="date">6 Days / 7 Night</span>
                        <div className="location">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                          >
                            <path d="M8.99939 0C5.40484 0 2.48047 2.92437 2.48047 6.51888C2.48047 10.9798 8.31426 17.5287 8.56264 17.8053C8.79594 18.0651 9.20326 18.0646 9.43613 17.8053C9.68451 17.5287 15.5183 10.9798 15.5183 6.51888C15.5182 2.92437 12.5939 0 8.99939 0ZM8.99939 9.79871C7.19088 9.79871 5.71959 8.32739 5.71959 6.51888C5.71959 4.71037 7.19091 3.23909 8.99939 3.23909C10.8079 3.23909 12.2791 4.71041 12.2791 6.51892C12.2791 8.32743 10.8079 9.79871 8.99939 9.79871Z" />
                          </svg>
                          <ul className="location-list">
                            <li>
                              <Link href="/package">Italy</Link>
                            </li>
                            <li>
                              <Link href="/package">France Tour</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="package-card-content">
                      <div className="card-content-top">
                        <h5>
                          <Link href="/package/package-details">
                            Exploring then Spiritual and Mystical Travel.
                          </Link>
                        </h5>
                        <div className="location-area">
                          <ul className="location-list">
                            <li>
                              <Link href="/package">Cairo</Link>
                            </li>
                            <li>
                              <Link href="/package">Medina</Link>
                            </li>
                            <li>
                              <Link href="/package">Riyadh</Link>
                            </li>
                            <li>
                              <Link href="/package">Cairo</Link>
                            </li>
                            <li>
                              <Link href="/package">Al Wakrah</Link>
                            </li>
                            <li>
                              <Link href="/package">Al Rayyan</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-content-bottom">
                        <div className="price-area">
                          <h6>Starting Form:</h6>
                          <span>
                            $2,872 <del>$3000</del>
                          </span>
                          <p>TAXES INCL/PERS</p>
                        </div>
                        <Link
                          href="/package/package-details"
                          className="primary-btn2"
                        >
                          Book a Trip
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                            fill="none"
                          >
                            <path d="M8.15624 10.2261L7.70276 12.3534L5.60722 18L6.85097 17.7928L12.6612 10.1948C13.4812 10.1662 14.2764 10.1222 14.9674 10.054C18.1643 9.73783 17.9985 8.99997 17.9985 8.99997C17.9985 8.99997 18.1643 8.26211 14.9674 7.94594C14.2764 7.87745 13.4811 7.8335 12.6611 7.80518L6.851 0.206972L5.60722 -5.41705e-07L7.70276 5.64663L8.15624 7.77386C7.0917 7.78979 6.37132 7.81403 6.37132 7.81403C6.37132 7.81403 4.90278 7.84793 2.63059 8.35988L0.778036 5.79016L0.000253424 5.79016L0.554115 8.91458C0.454429 8.94514 0.454429 9.05483 0.554115 9.08539L0.000253144 12.2098L0.778036 12.2098L2.63059 9.64035C4.90278 10.1523 6.37132 10.1857 6.37132 10.1857C6.37132 10.1857 7.0917 10.2102 8.15624 10.2261Z" />
                            <path d="M12.0703 11.9318L12.0703 12.7706L8.97041 12.7706L8.97041 11.9318L12.0703 11.9318ZM12.0703 5.23292L12.0703 6.0714L8.97059 6.0714L8.97059 5.23292L12.0703 5.23292ZM9.97892 14.7465L9.97892 15.585L7.11389 15.585L7.11389 14.7465L9.97892 14.7465ZM9.97892 2.41846L9.97892 3.2572L7.11389 3.2572L7.11389 2.41846L9.97892 2.41846Z" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="package-card">
                    <div className="package-card-img-wrap">
                      <Link
                        href="/package/package-details"
                        className="card-img"
                      >
                        <img
                          src="/assets/img/home1/package-card-img5.png"
                          alt=""
                        />
                      </Link>
                      <div className="batch">
                        <span className="date">5 Days / 6 Night</span>
                        <div className="location">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                          >
                            <path d="M8.99939 0C5.40484 0 2.48047 2.92437 2.48047 6.51888C2.48047 10.9798 8.31426 17.5287 8.56264 17.8053C8.79594 18.0651 9.20326 18.0646 9.43613 17.8053C9.68451 17.5287 15.5183 10.9798 15.5183 6.51888C15.5182 2.92437 12.5939 0 8.99939 0ZM8.99939 9.79871C7.19088 9.79871 5.71959 8.32739 5.71959 6.51888C5.71959 4.71037 7.19091 3.23909 8.99939 3.23909C10.8079 3.23909 12.2791 4.71041 12.2791 6.51892C12.2791 8.32743 10.8079 9.79871 8.99939 9.79871Z" />
                          </svg>
                          <ul className="location-list">
                            <li>
                              <Link href="/package">Thailand</Link>
                            </li>
                            <li>
                              <Link href="/package">Japan Tour</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="package-card-content">
                      <div className="card-content-top">
                        <h5>
                          <Link href="/package/package-details">
                            Hiking, Rafting, and Exploring Travels Outdoors.
                          </Link>
                        </h5>
                        <div className="location-area">
                          <ul className="location-list">
                            <li>
                              <Link href="/package">Cairo</Link>
                            </li>
                            <li>
                              <Link href="/package">Medina</Link>
                            </li>
                            <li>
                              <Link href="/package">Riyadh</Link>
                            </li>
                            <li>
                              <Link href="/package">Cairo</Link>
                            </li>
                            <li>
                              <Link href="/package">Al Wakrah</Link>
                            </li>
                            <li>
                              <Link href="/package">Al Rayyan</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-content-bottom">
                        <div className="price-area">
                          <h6>Starting Form:</h6>
                          <span>$4,573</span>
                          <p>TAXES INCL/PERS</p>
                        </div>
                        <Link
                          href="/package/package-details"
                          className="primary-btn2"
                        >
                          Book a Trip
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                            fill="none"
                          >
                            <path d="M8.15624 10.2261L7.70276 12.3534L5.60722 18L6.85097 17.7928L12.6612 10.1948C13.4812 10.1662 14.2764 10.1222 14.9674 10.054C18.1643 9.73783 17.9985 8.99997 17.9985 8.99997C17.9985 8.99997 18.1643 8.26211 14.9674 7.94594C14.2764 7.87745 13.4811 7.8335 12.6611 7.80518L6.851 0.206972L5.60722 -5.41705e-07L7.70276 5.64663L8.15624 7.77386C7.0917 7.78979 6.37132 7.81403 6.37132 7.81403C6.37132 7.81403 4.90278 7.84793 2.63059 8.35988L0.778036 5.79016L0.000253424 5.79016L0.554115 8.91458C0.454429 8.94514 0.454429 9.05483 0.554115 9.08539L0.000253144 12.2098L0.778036 12.2098L2.63059 9.64035C4.90278 10.1523 6.37132 10.1857 6.37132 10.1857C6.37132 10.1857 7.0917 10.2102 8.15624 10.2261Z" />
                            <path d="M12.0703 11.9318L12.0703 12.7706L8.97041 12.7706L8.97041 11.9318L12.0703 11.9318ZM12.0703 5.23292L12.0703 6.0714L8.97059 6.0714L8.97059 5.23292L12.0703 5.23292ZM9.97892 14.7465L9.97892 15.585L7.11389 15.585L7.11389 14.7465L9.97892 14.7465ZM9.97892 2.41846L9.97892 3.2572L7.11389 3.2572L7.11389 2.41846L9.97892 2.41846Z" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
          <div className="col-lg-12 d-flex align-items-center justify-content-center">
            <Link href="/package" className="secondary-btn4">
              View All Package
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendatedPackage;
