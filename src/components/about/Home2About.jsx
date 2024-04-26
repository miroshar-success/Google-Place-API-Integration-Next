"use client";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import CountUp from "react-countup";
import Link from "next/link";
import Icon from "@/uitils/Icon";
const Home2About = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="home2-about-section pt-120 mb-120">
        <div className="container">
          <div className="row mb-90">
            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-title2 mb-30">
                  <div className="eg-section-tag">
                    <span>About Us</span>
                  </div>
                  <h2>We aim to connect solo travelers with similiar interests together.</h2>
                  <p>
                    Our platform aims to help you find the perfect companion to make your journeys
                    more enjoyable and memorable.Whether you're an adventure seeker, a food enthusiast,
                    a history buff, or a nature lover, you'll find someone who shares your passions and interests.
                    Join us today and discover the benefits of traveling with a companion who shares your love for adventure and exploration.
                    Start your journey with us and create unforgettable memories along the way.
                  </p>
                </div>
                
                <div className="row g-4 mb-50">
                  <div className="col-md-6">
                    <div className="facility-card two">
                      <div className="icon">
                        <img
                          src="/assets/img/home2/icon/facility-card-icon2.svg"
                          alt=""
                        />
                      </div>
                      <div className="content">
                        <h6>
                          Trusted fellow <br />
                          travelers
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <div className="about-img-wrap">
                <div className="about-img">
                  <img
                    src="/assets/img/home2/home2-about-img1.png"
                    alt=""
                    className="about-img"
                  />
                </div>
                <img
                  src="/assets/img/home2/vector/plane-vector.svg"
                  alt=""
                  className="vector"
                />
              </div>
            </div>
          </div>
          <div className="activities-counter">
            <div className="row justify-content-center g-lg-4 gy-5">
              <div className="col-lg-3 col-sm-6 divider d-flex justify-content-lg-start justify-content-sm-center">
                <div className="single-activity">
                  <div className="icon">
                  <Icon name="traveler" width={50}  height={50} viewBox="0 0 50 50"></Icon>
                  </div>
                  <div className="content">
                    <div className="number">
                      <h5 className="counter">
                        <CountUp delay={2} end={60} />
                      </h5>
                    </div>
                    <p>Travelers Network</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 divider d-flex justify-content-sm-center">
                <div className="single-activity">
                  <div className="icon">
                    <Icon name="reviewIcon" width={50}  height={50} viewBox="0 0 50 50"></Icon>
                  </div>
                  <div className="content">
                    <div className="number">
                      <h5 className="counter">
                        <CountUp delay={2} end={85} />
                      </h5>
                      <span>%</span>
                    </div>
                    <p>Positive Reviews</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 d-flex justify-content-lg-end justify-content-sm-center">
                <div className="single-activity">
                  <div className="icon">
                  <Icon name="guide" width={50}  height={50} viewBox="0 0 50 50"></Icon>
                  </div>
                  <div className="content">
                    <div className="number">
                      <h5 className="counter">
                        <CountUp delay={2} end={15} />
                      </h5>
                      <span>+</span>
                    </div>
                    <p>Local Guides</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <React.Fragment>
          <ModalVideo
            channel="youtube"
            onClick={() => setOpen(true)}
            isOpen={isOpen}
            animationSpeed="350"
            videoId="r4KpWiK08vM"
            ratio="16:9"
            onClose={() => setOpen(false)}
          />
        </React.Fragment>
      </div>
    </>
  );
};

export default Home2About;
