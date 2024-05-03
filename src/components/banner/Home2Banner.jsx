"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import QuantityCounter from "@/uitils/QuantityCounter";
import DestinationSearch from "./DestinationSearch";
import TourCategoryDropdown from "./TourCategoryDropdown";
import TourDateDropdown from "./TourDateDropdown";
import DateRange from "./DateRange";
import Icon from "@/uitils/Icon";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const Home2Banner = () => {
  const [index, setIndex] = useState(0);
  const animateTextContainerRef = useRef(null);

  useEffect(() => {
    const animateText = () => {
      const animateTextContainer = animateTextContainerRef.current;
      if (!animateTextContainer) return;

      const txts = animateTextContainer.children;
      const txtslen = txts.length;

      for (let i = 0; i < txtslen; i++) {
        txts[i].classList.remove("text-in");
      }
      txts[index].classList.add("text-in");

      if (index === txtslen - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    };

    const timeoutId = setTimeout(animateText, 3000);

    return () => clearTimeout(timeoutId); // Cleanup the timeout on component unmount
  }, [index]);
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 2500,
      spaceBetween: 25,
      effect: "fade", // Use the fade effect
      fadeEffect: {
        crossFade: true, // Enable cross-fade transition
      },
      autoplay: {
        delay: 3000, // Autoplay duration in milliseconds
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".home1-banner-next",
        prevEl: ".home1-banner-prev",
      },
    };
  });
  return (
    <>
      <div className="home2-banner-area">
        <Swiper {...settings} className="swiper home1-banner-slider">
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div
                className="home2-banner-wrapper"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(16, 12, 8, 0.4) 0%, rgba(16, 12, 8, 0.4) 100%), url(assets/img/home2/home2-banner-img1.jpg)",
                }}
              ></div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="home2-banner-wrapper"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(16, 12, 8, 0.4) 0%, rgba(16, 12, 8, 0.4) 100%), url(assets/img/home2/home2-banner-img2.jpg)",
                }}
              ></div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="home2-banner-wrapper"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(16, 12, 8, 0.4) 0%, rgba(16, 12, 8, 0.4) 100%), url(assets/img/home2/home2-banner-img3.jpg)",
                }}
              ></div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="home2-banner-wrapper"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(16, 12, 8, 0.4) 0%, rgba(16, 12, 8, 0.4) 100%), url(assets/img/home2/home2-banner-img4.jpg)",
                }}
              ></div>
            </SwiperSlide>
          </div>
        </Swiper>
        <div className="home2-banner-content-wrap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="home2-banner-content">
                  <div className="eg-tag">
                    <span>Our Vision</span>
                  </div>
                  <h1 className="animate-text" ref={animateTextContainerRef}>
                    Let’s Explore The
                    <span>World</span>
                    <span>Culture</span>
                    <span>Nature</span>
                    Together.
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="home1-banner-bottom style-2">
            <div className="container-md container-fluid">
              <div className="filter-wrapper">
                <div className="nav-buttons">
                  <ul className="nav nav-pills" id="pills-tab2" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="tour-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#tour"
                        type="button"
                        role="tab"
                        aria-controls="tour"
                        aria-selected="true"
                      >
                        <Icon
                          name="itinerary"
                          width={23}
                          height={23}
                          viewBox="0 0 23 23"
                        ></Icon>
                        Itinerary
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="activities-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#activities"
                        type="button"
                        role="tab"
                        aria-controls="activities"
                        aria-selected="false"
                      >
                        <Icon
                          name="activities"
                          width={23}
                          height={23}
                          viewBox="0 0 23 23"
                        ></Icon>
                        Activities
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="filter-group">
                  <div className="tab-content" id="pills-tab2Content">
                    <div
                      className="tab-pane fade show active"
                      id="tour"
                      role="tabpanel"
                    >
                      <form>
                        <div className="filter-area">
                          <div className="row g-xl-4 gy-4">
                            <div className="col-xl-3 col-sm-6 d-flex justify-content-center divider">
                              <div className="single-search-box">
                                <div className="icon">
                                  <Icon
                                    name="destSearch"
                                    width={27}
                                    height={27}
                                    viewBox="0 0 27 27"
                                  ></Icon>
                                </div>
                                <DestinationSearch
                                  destination="Destination"
                                  style="style-2"
                                />
                              </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 d-flex justify-content-center divider">
                              <div className="single-search-box">
                                <div className="icon">
                                  <Icon
                                    name="itinType"
                                    width={27}
                                    height={27}
                                    viewBox="0 0 27 27"
                                  ></Icon>
                                </div>
                                <TourCategoryDropdown
                                  style="style-2"
                                  noScroll="two"
                                  labelType="Itinerary Type"
                                  data={[
                                    "Family Tour",
                                    "Honeymoon Tou",
                                    "Group Tour",
                                    "Adventure Tour",
                                    "Solo Tour",
                                  ]}
                                />
                              </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 d-flex justify-content-center divider">
                              <div className="single-search-box">
                                <div className="icon">
                                  <Icon
                                    name="dateIcon"
                                    width={27}
                                    height={27}
                                    viewBox="0 0 27 27"
                                  ></Icon>
                                </div>
                                <TourDateDropdown
                                  style="style-2"
                                  noScroll="two"
                                  labelType="When"
                                  data={[
                                    "January",
                                    "February",
                                    "March",
                                    "April",
                                    "May",
                                    "June",
                                    "July",
                                    "August",
                                    "September",
                                    "October",
                                    "November",
                                    "December",
                                  ]}
                                />
                              </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 d-flex justify-content-center">
                              <div className="single-search-box">
                                <div className="icon">
                                  <Icon
                                    name="peopleIcon"
                                    width={27}
                                    height={27}
                                    viewBox="0 0 27 27"
                                  ></Icon>
                                </div>
                                <div className="searchbox-input">
                                  <label>Group Size</label>
                                  <QuantityCounter />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button type="submit">Search</button>
                      </form>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="activities"
                      role="tabpanel"
                    >
                      <form>
                        <div className="filter-area">
                          <div className="row g-xl-4 gy-4">
                            <div className="col-xl-3 col-md-6 d-flex justify-content-center divider">
                              <div className="single-search-box">
                                <div className="icon">
                                  <Icon
                                    name="destSearch"
                                    width={27}
                                    height={27}
                                    viewBox="0 0 27 27"
                                  ></Icon>
                                </div>
                                <DestinationSearch
                                  destination="Location"
                                  style="style-2"
                                />
                              </div>
                            </div>
                            <div className="col-xl-3 col-md-6 d-flex justify-content-center divider">
                              <div className="single-search-box">
                                <div className="icon">
                                  <Icon
                                    name="itinType"
                                    width={27}
                                    height={27}
                                    viewBox="0 0 27 27"
                                  ></Icon>
                                </div>
                                <TourCategoryDropdown
                                  style="style-2"
                                  noScroll="two"
                                  labelType="Activities Type"
                                  data={["Adventure", "Cultural", "Historical"]}
                                />
                              </div>
                            </div>
                            <div className="col-xl-3 col-md-6 d-flex justify-content-center divider">
                              <div className="single-search-box">
                                <div className="icon">
                                  <Icon
                                    name="dateIcon"
                                    width={27}
                                    height={27}
                                    viewBox="0 0 27 27"
                                  ></Icon>
                                </div>
                                <DateRange
                                  label="Activite Day"
                                  style="style-2"
                                />
                              </div>
                            </div>
                            <div className="col-xl-3 col-md-6 d-flex justify-content-center">
                              <div className="single-search-box">
                                <div className="icon">
                                  <Icon
                                    name="peopleIcon"
                                    width={27}
                                    height={27}
                                    viewBox="0 0 27 27"
                                  ></Icon>
                                </div>
                                <div className="searchbox-input">
                                  <label>Traveler</label>
                                  <QuantityCounter />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button type="submit">Search</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slider-btn-grp">
          <div className="slider-btn home1-banner-prev">
            <i className="bi bi-arrow-left" />
          </div>
          <div className="slider-btn home1-banner-next">
            <i className="bi bi-arrow-right" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home2Banner;
