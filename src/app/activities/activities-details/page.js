

"use client"
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import Breadcrumb from '@/components/common/Breadcrumb'
import QuantityCounter from "@/uitils/QuantityCounter";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Footer from "@/components/footer/Footer";
import Newslatter from "@/components/common/Newslatter";
import Header2 from "@/components/header/Header2";
import Icon from "@/uitils/Icon";
const Page = () => {
  const [isOpenModalVideo, setOpenModalVideo] = useState(false);
  const [isOpenimg, setOpenimg] = useState({
    openingState: false,
    openingIndex: 0,
  });
  const images = [
    {
      id: 1,
      imageBig: "/assets/img/innerpage/ski-touring-01.jpg",
    },
    {
      id: 2,
      imageBig: "/assets/img/innerpage/ski-touring-02.jpg",
    },
    {
      id: 3,
      imageBig: "/assets/img/innerpage/ski-touring-03.jpg",
    },
    {
      id: 4,
      imageBig: "/assets/img/innerpage/ski-touring-04.jpg",
    },
    {
      id: 5,
      imageBig: "/assets/img/innerpage/ski-touring-05.jpg",
    },
    {
      id: 6,
      imageBig: "/assets/img/innerpage/ski-touring-06.jpg",
    },
  ];
  return (
    <>
    <Header2/>
    <Breadcrumb pagename="Activities Details" pagetitle="Activities Details"/>
     <div className="package-details-area pt-120 mb-120">
      <div className="container">
        <div className="row">
          <div className="co-lg-12">
            <div className="package-img-group mb-50">
              <div className="row align-items-center g-3">
                <div className="col-lg-6">
                  <div className="gallery-img-wrap">
                    <img src="/assets/img/innerpage/ski-touring-01.jpg" alt="" />
                    <a ><i className="bi bi-eye"  onClick={() =>setOpenimg({ openingState: true, openingIndex: 0 }) }/></a>
                  </div>
                </div>
                <div className="col-lg-6 h-100">
                  <div className="row g-3 h-100">
                  /* Form te3 data in*/
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-xl-4 gy-5">
          <div className="col-xl-8">
            <div className="eg-tag2">
              <span>Ski touring</span>
            </div>
            <h2>Powder Quest: Exploring Snow-Covered Landscapes on Skis</h2>
            <ul className="tour-info-metalist">
              <li>
               <Icon name="itinDate" width={14} height={14} viewBox="0 0 14 14"></Icon>
                5 hours
              </li>
              <li>
                <Icon name="peopleFace" width={14} height={14} viewBox="0 0 14 14"></Icon>
                Max People : 10
              </li>
              <li>
              <Icon name="activit" width={14} height={14} viewBox="0 0 14 14"></Icon>
                Italy &amp; France.
              </li>
            </ul>
            <p>Ski touring, also known as backcountry skiing, involves traveling across snow-covered terrain using skis. It's a blend of skiing and hiking,
               allowing access to remote areas not reachable by ski lifts. Skiers ascend slopes using climbing skins on their skis or specialized equipment like splitboards,
              then descend using skis. This activity offers a unique opportunity to explore untouched wilderness, experience serene landscapes,
              and challenge oneself physically and mentally while embracing the thrill of the mountains. Safety measures, including avalanche awareness and carrying appropriate gear, are paramount in ski touring due to the inherent risks of backcountry environments.</p>
            <h4>Itinerary Plan</h4>
            <div className="accordion tour-plan" id="tourPlan">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <span>Day 01 :</span>  Preparation and Departure
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#tourPlan">
                  <div className="accordion-body">
                    <ul>
                      <li><i className="bi bi-check-lg" /><strong>Morning:</strong> Final gear check and packing.</li>
                      <li><i className="bi bi-check-lg" /><strong>Midday:</strong> Travel to the destination, ensuring everyone has the necessary equipment and provisions.</li>
                      <li><i className="bi bi-check-lg" /><strong>Afternoon/Evening:</strong> Set up camp or accommodation, review safety protocols, and plan for the following days.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <span>Day 02 :</span>  Warm-up and Exploration
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#tourPlan">
                  <div className="accordion-body">
                    <ul>
                      <li><i className="bi bi-check-lg" /><strong>Morning:</strong> Start with a relatively easier route to warm up, familiarize with the terrain.</li>
                      <li><i className="bi bi-check-lg" /><strong>Midday:</strong>  Break for lunch and assess conditions.</li>
                      <li><i className="bi bi-check-lg" /><strong>Afternoon:</strong> Continue exploring, gradually increasing difficulty if the group is comfortable.</li>
                      <li><i className="bi bi-check-lg" /><strong>Evening:</strong> Return to the base, debrief, and plan for the next day.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    <span>Day 03 :</span> Summit Attempt and Departure
                  </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#tourPlan">
                  <div className="accordion-body">
                    <ul>
                      <li><i className="bi bi-check-lg" /><strong>Morning:</strong> Summit Attempt and Departure</li>
                      <li><i className="bi bi-check-lg" /><strong>Midday:</strong> Summit attempt or reach the day's touring goal.</li>
                      <li><i className="bi bi-check-lg" /><strong>Afternoon:</strong> Begin descent, ensuring safety and enjoyment.</li>
                      <li><i className="bi bi-check-lg" /><strong>Evening:</strong> Pack up, depart for home or the next destination, debrief on the overall experience, and celebrate the adventure</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="tour-location">
              <h4>Location Map</h4>
              <div className="map-area mb-30">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193325.0481540361!2d-74.06757856146028!3d40.79052383652264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1660366711448!5m2!1sen!2sbd" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </div>
            <div className="review-wrapper">
              <h4>Customer Review</h4>
              <div className="review-box">
                <div className="total-review">
                  <h2>9.5</h2>
                  <div className="review-wrap">
                    <ul className="star-list">
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-half" /></li>
                    </ul>
                    <span>2590 Reviews</span>
                  </div>
                </div>
                {/* model for review */}
                <div className="modal fade" id="exampleModalToggle" aria-hidden="true" tabIndex={-1}>
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-body">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i className="bi bi-x-lg" /></button>
                        <div className="row g-2">
                          <div className="col-lg-8">
                            <div className="review-from-wrapper">
                              <h4>Write Your Review</h4>
                              <form>
                                <div className="row">
                                  <div className="col-md-6 mb-20">
                                    <div className="form-inner">
                                      <label>Name</label>
                                      <input type="text" placeholder="Enter Your Name:" />
                                    </div>
                                  </div>
                                  <div className="col-md-6 mb-20">
                                    <div className="form-inner">
                                      <label>Email</label>
                                      <input type="email" placeholder="Enter Your Email:" />
                                    </div>
                                  </div>
                                  <div className="col-lg-12 mb-20">
                                    <div className="form-inner">
                                      <label>Review*</label>
                                      <textarea name="message" placeholder="Enter Your Review..." defaultValue={""} />
                                    </div>
                                  </div>
                                  <div className="col-lg-12 mb-40">
                                    <div className="star-rating-wrapper">
                                      <ul className="star-rating-list">
                                        <li>
                                          <div className="rating-container" data-rating={0}>
                                            <i className="bi bi-star-fill star-icon" />
                                            <i className="bi bi-star-fill star-icon" />
                                            <i className="bi bi-star-fill star-icon" />
                                            <i className="bi bi-star-fill star-icon" />
                                            <i className="bi bi-star-fill star-icon" />
                                          </div>
                                          <span>Overall</span>
                                        </li>
                                        <li>
                                          <div className="rating-container" data-rating={0}>
                                            <i className="bi bi-star-fill star-icon" />
                                            <i className="bi bi-star-fill star-icon" />
                                            <i className="bi bi-star-fill star-icon" />
                                            <i className="bi bi-star-fill star-icon" />
                                            <i className="bi bi-star-fill star-icon" />
                                          </div>
                                          <span>Destination</span>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="col-lg-12">
                                    <button type="submit" className="primary-btn1">Submit
                                      Now</button>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                          <div className="col-lg-4 d-lg-flex d-none">
                            <div className="modal-form-image">
                              <img src="/assets/img/innerpage/form-image.jpg" alt="image" className="img-fluid" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a className="primary-btn1" data-bs-toggle="modal" href="#exampleModalToggle" role="button">GIVE A
                  RATING</a>
              </div>
              <div className="review-area">
                <ul className="comment">
                  <li>
                    <div className="single-comment-area">
                      <div className="author-img">
                        <img src="/assets/img/innerpage/comment-author-01.jpg" alt="" />
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
                              <li><i className="bi bi-star-fill" /></li>
                              <li><i className="bi bi-star-fill" /></li>
                              <li><i className="bi bi-star-fill" /></li>
                              <li><i className="bi bi-star-fill" /></li>
                              <li><i className="bi bi-star-half" /></li>
                            </ul>
                          </li>
                          <li>
                            <span>Destination</span>
                            <ul className="star-list">
                              <li><i className="bi bi-star-fill" /></li>
                              <li><i className="bi bi-star-fill" /></li>
                              <li><i className="bi bi-star-fill" /></li>
                              <li><i className="bi bi-star-fill" /></li>
                              <li><i className="bi bi-star-half" /></li>
                            </ul>
                          </li>
                        </ul>
                        <p>A solution that we came up with is to think of sanitary pads packaging as you
                          would tea. Tea comes individually packaged </p>
                        <div className="replay-btn">
                        <Icon name="reply" width={14} height={11} viewBox="0 0 14 11"></Icon>
                          Reply (01)
                        </div>
                      </div>
                    </div>
                    <ul className="comment-replay">
                      <li>
                        <div className="single-comment-area">
                          <div className="author-img">
                            <img src="/assets/img/innerpage/comment-author-02.jpg" alt="" />
                          </div>
                          <div className="comment-content">
                            <div className="author-name-deg">
                              <h6>Author Response,</h6>
                              <span>05 June, 2023</span>
                            </div>
                            <p>Thanks for your review.</p>
                            <div className="replay-btn">
                              <Icon name="reply" width={14} height={11} viewBox="0 0 14 11"></Icon>
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
          <div className="col-xl-4">
            <div className="booking-form-wrap mb-30">
              <h4>Reserve Your Activity</h4>
              <p>Create your wanted Activity so other travelers can share it with you!</p>
              <div className="nav nav-pills mb-40" role="tablist">
                <button className="nav-link show active" id="v-pills-contact-tab" data-bs-toggle="pill" data-bs-target="#v-pills-contact" type="button" role="tab" aria-controls="v-pills-contact" aria-selected="true">New Activity</button>
              </div>
              <div className="tab-content" id="v-pills-tabContent">
                <div className="tab-pane fade show active" id="v-pills-contact" role="tabpanel" aria-labelledby="v-pills-contact-tab">
                  <div className="sidebar-booking-form">
                    <form>
                      <div className="form-inner mb-20">
                        <label>Name <span>*</span></label>
                        <input type="text" placeholder="Enter the activity name or title" />
                      </div>
                      <div className="form-inner mb-20">
                        <label>Location <span>*</span></label>
                        <input type="email" placeholder="change this to Location Integration"/>
                      </div>
                      <div className="tour-date-wrap mb-50">
                        <h6>Select Your start date:</h6>
                        <div className="form-inner mb-20">
                          <div className="form-group">
                            <input type="date" name="inOut" placeholder="5 Jan, 2024" />
                          </div>
                        </div>
                      </div>
                      <div className="tour-date-wrap mb-50">
                        <h6>Select Your end date:</h6>
                        <div className="form-inner mb-20">
                          <div className="form-group">
                            <input type="date" name="inOut" placeholder="5 Jan, 2024" />
                          </div>
                        </div>
                      </div>
                      <div className="number-input-item adults">
                          <label className="number-input-lable">Group Size:<span>
                            </span></label>
                          <QuantityCounter incIcon="bx bx-plus" dcrIcon="bx bx-minus" />
                        </div>
                      <div className="form-inner mb-30">
                        <label>Description <span>*</span></label>
                        <textarea placeholder="Write the activity description" defaultValue={""} />
                      </div>
                      <div className="form-inner">
                        <button type="submit" className="primary-btn1 two">Create activity</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <React.Fragment>
        <ModalVideo
          channel="youtube"
          onClick={() => setOpenModalVideo(true)}
          isOpen={isOpenModalVideo}
          animationSpeed="350"
          videoId="r4KpWiK08vM"
          ratio="16:9"
          onClose={() => setOpenModalVideo(false)}
        />
      </React.Fragment>
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
     </div>
     <Newslatter/>
    <Footer/>
    </>
  )
}

export default Page
