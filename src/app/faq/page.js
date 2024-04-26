import Breadcrumb from "@/components/common/Breadcrumb";
import Newslatter from "@/components/common/Newslatter";
import Footer from "@/components/footer/Footer";
import Header2 from "@/components/header/Header2";
import Icon from "@/uitils/Icon";
import Link from "next/link";
import React from "react";
export const metadata = {
  title: "Adventurist's Link ",
  description:
    "Adventurist's Link is a MERN full stack application to meet fellow travelers",
  icons: {
    icon: "/assets/img/logoAdv.svg",
  },
};
const page = () => {
  return (
    <>
      <Header2 />
      <Breadcrumb pagename="FAQ" pagetitle="FAQ" />
      <div className="faq-section pt-120 mb-120">
        <div className="container">
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-4">
              <div className="banner-and-inquiry-form">
                <div className="banner2-card four">
                  <img src="/assets/img/home1/banner2-card-img2.png" alt="" />
                  <div className="banner2-content-wrap">
                    <div className="banner2-content">
                      <span>Travel worldwide </span>
                      <p>Is easier with like minded people</p>
                    </div>
                    <Link href="/package" className="primary-btn1">
                       Join Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="faq-content-wrap">
                <div className="faq-content-title mb-50">
                  <h3>
                    Our User Tips
                    <Icon name="faq" width={23} height={23} viewBox="0 0 23 23"></Icon>
                  </h3>
                </div>
                <div className="faq-content">
                  <div className="accordion" id="accordionTravel2">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="tripheadingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#tripcollapseOne"
                          aria-expanded="true"
                          aria-controls="tripcollapseOne"
                        >
                          01. How can I leave reviews and ratings for other users?
                        </button>
                      </h2>
                      <div
                        id="tripcollapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="tripheadingOne"
                        data-bs-parent="#accordionTravel2"
                      >
                        <div className="accordion-body">
                           After your trip, you can leave reviews and ratings for your travel companions
                           and other users, helping to build a trustworthy community and make informed decisions
                           for future journeys.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="tripheadingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#tripcollapseTwo"
                          aria-expanded="false"
                          aria-controls="tripcollapseTwo"
                        >
                          02.How can I use the secure messaging platfor?
                        </button>
                      </h2>
                      <div
                        id="tripcollapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="tripheadingTwo"
                        data-bs-parent="#accordionTravel2"
                      >
                        <div className="accordion-body">
                        You can use the secure messaging platform to communicate
                        with potential travel buddies and locals in real time, 
                        making planning the trip and coordination effortless. 
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="tripheadingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#tripcollapseThree"
                          aria-expanded="false"
                          aria-controls="tripcollapseThree"
                        >
                          03. How can I make the most of my travel experience with a companion?
                        </button>
                      </h2>
                      <div
                        id="tripcollapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="tripheadingThree"
                        data-bs-parent="#accordionTravel2">
                        <div className="accordion-body">
                           Be open-minded, communicate your expectations and preferences,
                           and be willing to compromise and try new things to create unforgettable
                            memories with your travel companion.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="tripheadingFour">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#tripcollapseFour"
                          aria-expanded="false"
                          aria-controls="tripcollapseFour"
                        >
                          04. Can I change my travel dates or destination after creating a profile ?
                        </button>
                      </h2>
                      <div
                        id="tripcollapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="tripheadingFour"
                        data-bs-parent="#accordionTravel2"
                      >
                        <div className="accordion-body">
                        Yes, our flexible date feature allows you to discover
                        and plan the adventure that fit your schedule and your chosen companion(s)
                        to the wanted destination effortlessly.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="tripheadingFive">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#tripcollapseFive"
                          aria-expanded="false"
                          aria-controls="tripcollapseFive"
                        >
                          05. How can I leave reviews and ratings for other users?
                        </button>
                      </h2>
                      <div
                        id="tripcollapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="tripheadingFive"
                        data-bs-parent="#accordionTravel2"
                      >
                        <div className="accordion-body">
                           After your trip, you can leave reviews and ratings for your travel companions
                           and other users, helping to build a trustworthy community and make informed decisions
                           for future journeys.
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
      <Footer />
    </>
  );
};

export default page;
