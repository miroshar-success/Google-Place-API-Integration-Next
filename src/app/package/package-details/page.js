"use client";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import Breadcrumb from "@/components/common/Breadcrumb";
import QuantityCounter from "@/uitils/QuantityCounter";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Newslatter from "@/components/common/Newslatter";
import Footer from "@/components/footer/Footer";
import Header2 from "@/components/header/Header2";
import Icon from "@/uitils/Icon";
const Page = () => {
  const [isOpen, setOpen] = useState(false);
  const [isOpenimg, setOpenimg] = useState({
    openingState: false,
    openingIndex: 0,
  });
  const images = [
    {
      id: 1,
      imageBig: "/assets/img/innerpage/package-01.jpg",
    },
    {
      id: 2,
      imageBig: "/assets/img/innerpage/package-02.jpg",
    },
    {
      id: 3,
      imageBig: "/assets/img/innerpage/package-03.jpg",
    },
    {
      id: 4,
      imageBig: "/assets/img/innerpage/package-04.jpg",
    },
    {
      id: 5,
      imageBig: "/assets/img/innerpage/package-05.jpg",
    },
    {
      id: 6,
      imageBig: "/assets/img/innerpage/package-06.jpg",
    },
  ];
  return (
    <>
      <Header2 />
      <Breadcrumb pagename="Itinerary Details" pagetitle="  Itinerary Details" />
      <div className="package-details-area pt-120 mb-120 position-relative">
        <div className="container">
          <div className="row">
            <div className="co-lg-12">
              <div className="package-img-group mb-50">
                <div className="row align-items-center g-3">
                  <div className="col-lg-6">
                    <div className="gallery-img-wrap">
                      <img src="/assets/img/innerpage/package-01.jpg" alt="" />
                      <a>
                        <i
                          className="bi bi-eye"
                          onClick={() =>
                            setOpenimg({ openingState: true, openingIndex: 0 })
                          }
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="others-image-wrap d-none">
            <a
              href="assets/img/innerpage/package-01.jpg"
              data-fancybox="images"
            >
              <img src="/assets/img/innerpage/blog-grid-img3.jpg" alt="" />
            </a>
          </div>
          <div className="row g-xl-4 gy-5">
            <div className="col-xl-8">
              <h2>
                Experience the tour of excitement with the most adventurous
                activities.
              </h2>
              <ul className="tour-info-metalist">
                <li>
                   <Icon name="littleDate" width={14}  height={14}  viewBox="0 0 14 14"></Icon> 
                  4 Days / 5 Night
                </li>
                <li>
                <Icon name="peopleFace" width={14}  height={14}  viewBox="0 0 14 14"></Icon>
                  Max People : 40
                </li>
                <li>
                <Icon name="activit" width={14}  height={14}  viewBox="0 0 14 14"></Icon>
                  Italy &amp; France.
                </li>
              </ul>
              <p>
                Tour and travel refer to the activities related to planning,
                organizing, and experiencing trips to various destinations for
                leisure, exploration, adventure, or relaxation.Choose your
                destination based on your interests and preferences, whether
                it's a cultural experience, a natural adventure, historical
                exploration, or a beach vacation.
              </p>
              <p>
                Book suitable accommodation, which can range from hotels,
                resorts, hostels, vacation rentals, or even camping depending on
                your travel style and destination.Arrange transportation to and
                within your destination. This can include flights, trains,
                buses, rental cars, or even cruises.
              </p>
              <h4>Itinerary</h4>
              <div className="accordion tour-plan" id="tourPlan">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <span>Day 01 :</span> Departure
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#tourPlan"
                  >
                    <div className="accordion-body">
                      <p>
                        Arrive Cairo airport, welcome greeting by our
                        representative who will assist you and provide tra
                        nsfers to your Hotel in Cairo. (the clients will inform
                        us about their arrival time minimum 7 days before)
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-check-lg" /> Admire Big Ben,
                          Buckingham Palace and St Paul’s Cathedral
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Chance to spot
                          prominent landmarks of the city
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <span>Day 02 :</span> Adventure Beggins
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#tourPlan"
                  >
                    <div className="accordion-body">
                      <p>
                        Arrive Cairo airport, welcome greeting by our
                        representative who will assist you and provide tra
                        nsfers to your Hotel in Cairo. (the clients will inform
                        us about their arrival time minimum 7 days before)
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-check-lg" /> Admire Big Ben,
                          Buckingham Palace and St Paul’s Cathedral
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Chance to spot
                          prominent landmarks of the city
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      <span>Day 03 :</span> Rest &amp; Return
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#tourPlan"
                  >
                    <div className="accordion-body">
                      <p> return</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tour-location">
                <h4>Location Map</h4>
                <div className="map-area mb-30">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193325.0481540361!2d-74.06757856146028!3d40.79052383652264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1660366711448!5m2!1sen!2sbd"
                    width={600}
                    height={450}
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
              <div className="review-wrapper">
                <h4>Customer Review</h4>
                <div className="review-box">
                  <div className="total-review">
                    <h2>9.5</h2>
                    <div className="review-wrap">
                      <ul className="star-list">
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
                          <i className="bi bi-star-half" />
                        </li>
                      </ul>
                      <span>2590 Reviews</span>
                    </div>
                  </div>
                  {/* modal for review */}
                  <div
                    className="modal fade"
                    id="exampleModalToggle"
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-body">
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          >
                            <i className="bi bi-x-lg" />
                          </button>
                          <div className="row g-2">
                            <div className="col-lg-8">
                              <div className="review-from-wrapper">
                                <h4>Write Your Review</h4>
                                <form>
                                  <div className="row">
                                    <div className="col-md-6 mb-20">
                                      <div className="form-inner">
                                        <label>Name</label>
                                        <input
                                          type="text"
                                          placeholder="Enter Your Name:"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6 mb-20">
                                      <div className="form-inner">
                                        <label>Email</label>
                                        <input
                                          type="email"
                                          placeholder="Enter Your Email:"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-12 mb-20">
                                      <div className="form-inner">
                                        <label>Review*</label>
                                        <textarea
                                          name="message"
                                          placeholder="Enter Your Review..."
                                          defaultValue={""}/>
                                      </div>
                                    </div>
                                    <div className="col-lg-12 mb-40">
                                      <div className="star-rating-wrapper">
                                        <ul className="star-rating-list">
                                          <li>
                                            <div
                                              className="rating-container"
                                              data-rating={0}
                                            >
                                              <i className="bi bi-star-fill star-icon" />
                                              <i className="bi bi-star-fill star-icon" />
                                              <i className="bi bi-star-fill star-icon" />
                                              <i className="bi bi-star-fill star-icon" />
                                              <i className="bi bi-star-fill star-icon" />
                                            </div>
                                            <span>Overall</span>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <button
                                        type="submit"
                                        className="primary-btn1">
                                        Submit Now
                                      </button>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                            <div className="col-lg-4 d-lg-flex d-none">
                              <div className="modal-form-image">
                                <img
                                  src="/assets/img/innerpage/form-image.jpg"
                                  alt="image"
                                  className="img-fluid"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    className="primary-btn1"
                    data-bs-toggle="modal"
                    href="#exampleModalToggle"
                    role="button"
                  >
                    GIVE A RATING
                  </a>
                </div>
                <div className="review-area">
                  <ul className="comment">
                    <li>
                      <div className="single-comment-area">
                        <div className="author-img">
                          <img
                            src="/assets/img/innerpage/comment-author-01.jpg"
                            alt=""
                          />
                        </div>
                        <div className="comment-content">
                          <div className="author-name-deg">
                            <h6>Mr. Bowmik Haldar,</h6>
                            <span>05 June, 2023</span>
                          </div>
                          <ul className="review-item-list">
                            <li>
                              <span>Overall</span>
                              <ul className="star-list">
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
                                  <i className="bi bi-star-half" />
                                </li>
                              </ul>
                            </li>
                          </ul>
                          <p>
                            A solution that we came up with is to think of
                            sanitary pads packaging as you would tea. Tea comes
                            individually packaged{" "}
                          </p>
                          <div className="replay-btn">
                            <Icon name="reply" width={14}  height={11}  viewBox="0 0 14 11"></Icon>
                            Reply (01)
                          </div>
                        </div>
                      </div>
                      <ul className="comment-replay">
                        <li>
                          <div className="single-comment-area">
                            <div className="author-img">
                              <img
                                src="/assets/img/innerpage/comment-author-02.jpg"
                                alt=""
                              />
                            </div>
                            <div className="comment-content">
                              <div className="author-name-deg">
                                <h6>Author Response,</h6>
                                <span>05 June, 2023</span>
                              </div>
                              <p>Thanks for your review.</p>
                              <div className="replay-btn">
                              <Icon name="reply" width={14}  height={11}  viewBox="0 0 14 11"></Icon>
                                Reply
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Lightbox
          className="img-fluid"
          open={isOpenimg.openingState}
          plugins={[Fullscreen]}
          index={isOpenimg.openingIndex}
          close={() => setOpenimg(false)}
          styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
          slides={images.map(function (elem) {
            return { src: elem.imageBig };
          })}
        />
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
      <Footer />
    </>
  );
};

export default Page;
