"use client";
import Breadcrumb from "@/components/common/Breadcrumb";
import Newslatter from "@/components/common/Newslatter";
import Footer from "@/components/footer/Footer";
import Header2 from "@/components/header/Header2";
import Icon from "@/uitils/Icon";
import SelectComponent from "@/uitils/SelectComponent";
import QuantityCounter from "@/uitils/QuantityCounter";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <Header2 />
      <Breadcrumb pagename="Itinerary Grid" pagetitle="Itinerary grid" />
      <div className="package-grid-with-sidebar-section pt-120 mb-120">
        <div className="container">
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-8">
              <div className="package-inner-title-section mb-40">
                <p>Showing 1–12 of 101 results</p>
                <div className="selector-and-grid">
                  <div className="selector">
                    <SelectComponent
                      options={["Price Low to Hig", "Price High to Low"]}
                      placeholder="Default Sorting"
                    />
                  </div>
                </div>
              </div>
              <div className="list-grid-product-wrap mb-70">
                <div className="row gy-4">
                  <div className="col-md-6 item">
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
                          <span className="date">3 Days / 4 Night</span>
                        </div>
                      </div>
                      <div className="package-card-content">
                        <div className="card-content-top">
                          <h5>
                            <Link href="/package/package-details">
                              the Allure Italy's Rich Culture, History, and
                              Cuisine.
                            </Link>
                          </h5>
                          <div className="location-area">
                            <ul className="location-list scrollTextAni">
                              <li>
                                <Link href="/package">Alexandria</Link>
                              </li>
                              <li>
                                <Link href="/package">Sharm El Sheikh</Link>
                              </li>
                              <li>
                                <Link href="/package">Mansoura</Link>
                              </li>
                              <li>
                                <Link href="/package">Karachi</Link>
                              </li>
                              <li>
                                <Link href="/package">Lahore</Link>
                              </li>
                              <li>
                                <Link href="/package">Islamabad</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="card-content-bottom">
                          <Link
                            href="/package/package-details"
                            className="primary-btn2"
                          >
                            Join this Itinerary
                            <Icon name="plane" width={18}  height={18}  viewBox="0 0 18 18"></Icon>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 item">
                    <div className="package-card">
                      <div className="package-card-img-wrap">
                        <Link
                          href="/package/package-details"
                          className="card-img"
                        >
                          <img
                            src="/assets/img/home1/package-card-img2.png"
                            alt=""
                          />
                        </Link>
                        <div className="batch">
                          <span className="date">7 Days / 8 Night</span>
                        </div>
                      </div>
                      <div className="package-card-content">
                        <div className="card-content-top">
                          <h5>
                            <Link href="/package/package-details">
                              Explore Travel NYC's Museums, Diversity, and
                              Energy.
                            </Link>
                          </h5>
                          <div className="location-area">
                            <ul className="location-list scrollTextAni">
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
                          <Link
                            href="/package/package-details"
                            className="primary-btn2"
                          >
                            Join this Itinerary
                            <Icon name="plane" width={18}  height={18}  viewBox="0 0 18 18"></Icon>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 item">
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
                          <span className="date">5 Days / 6 Night</span>
                        </div>
                      </div>
                      <div className="package-card-content">
                        <div className="card-content-top">
                          <h5>
                            <Link href="/package/package-details">
                              Embark Tranquility, Adventure, and Spiritual.
                            </Link>
                          </h5>
                          <div className="location-area">
                            <ul className="location-list scrollTextAni">
                              <li>
                                <Link href="/package">Alexandria</Link>
                              </li>
                              <li>
                                <Link href="/package">Sharm El Sheikh</Link>
                              </li>
                              <li>
                                <Link href="/package">Mansoura</Link>
                              </li>
                              <li>
                                <Link href="/package">Karachi</Link>
                              </li>
                              <li>
                                <Link href="/package">Lahore</Link>
                              </li>
                              <li>
                                <Link href="/package">Islamabad</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="card-content-bottom">
                          <Link
                            href="/package/package-details"
                            className="primary-btn2"
                          >
                            Join this Itinerary
                            <Icon name="plane" width={18}  height={18}  viewBox="0 0 18 18"></Icon>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 item">
                    <div className="package-card">
                      <div className="package-card-img-wrap">
                        <Link
                          href="/package/package-details"
                          className="card-img"
                        >
                          <img
                            src="/assets/img/home1/package-card-img4.png"
                            alt=""
                          />
                        </Link>
                        <div className="batch">
                          <span className="date">8 Days / 9 Night</span>
                        </div>
                      </div>
                      <div className="package-card-content">
                        <div className="card-content-top">
                          <h5>
                            <Link href="/package/package-details">
                              Embracing City Lights, Landm, and Iconic Culture.
                            </Link>
                          </h5>
                          <div className="location-area">
                            <ul className="location-list">
                              <li>
                                <Link href="/package">Bangalore</Link>
                              </li>
                              <li>
                                <Link href="/package">Chennai</Link>
                              </li>
                              <li>
                                <Link href="/package">New Delhi</Link>
                              </li>
                              <li>
                                <Link href="/package">Dhaka</Link>
                              </li>
                              <li>
                                <Link href="/package">Rangpur</Link>
                              </li>
                              <li>
                                <Link href="/package">Sylhet</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="card-content-bottom">
                          <Link
                            href="/package/package-details"
                            className="primary-btn2"
                          >
                            Join this Itinerary
                            <Icon name="plane" width={18}  height={18}  viewBox="0 0 18 18"></Icon>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 item">
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
                          <span className="date">6 Days / 7 Night</span>
                        </div>
                      </div>
                      <div className="package-card-content">
                        <div className="card-content-top">
                          <h5>
                            <Link href="/package/package-details">
                              A Journey of Tour Beauty and Inspiration.
                            </Link>
                          </h5>
                          <div className="location-area">
                            <ul className="location-list scrollTextAni">
                              <li>
                                <Link href="/package">Paris</Link>
                              </li>
                              <li>
                                <Link href="/package">Marseille</Link>
                              </li>
                              <li>
                                <Link href="/package">Bordeaux</Link>
                              </li>
                              <li>
                                <Link href="/package">Madrid</Link>
                              </li>
                              <li>
                                <Link href="/package">Barcelona</Link>
                              </li>
                              <li>
                                <Link href="/package">Valencia</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="card-content-bottom">
                          <Link
                            href="/package/package-details"
                            className="primary-btn2"
                          >
                            Join this Itinerary
                            <Icon name="plane" width={18}  height={18}  viewBox="0 0 18 18"></Icon>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <nav className="inner-pagination-area">
                    <ul className="pagination-list">
                      <li>
                        <a href="#" className="shop-pagi-btn">
                          <i className="bi bi-chevron-left" />
                        </a>
                      </li>
                      <li>
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#" className="active">
                          2
                        </a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="bi bi-three-dots" />
                        </a>
                      </li>
                      <li>
                        <a href="#">6</a>
                      </li>
                      <li>
                        <a href="#" className="shop-pagi-btn">
                          <i className="bi bi-chevron-right" />
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
            <div className="booking-form-wrap mb-40">
                <h4>Create your own Itinerary</h4>
                <p>
                  Design your dream tarvel itinerary and let other travelers enikoy it with you!
                </p>
                <div className="nav nav-pills mb-40" role="tablist">
                  <button
                    className="nav-link show active"
                    id="v-pills-booking-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-booking"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-booking"
                    aria-selected="true" >
                    Start now
                  </button>
                </div>
                <div className="sidebar-booking-form">
                    <form>
                      <div className="form-inner mb-20">
                        <label>Title <span>*</span></label>
                        <input type="text" placeholder="Enter the itinerary title" />
                      </div>
                      <div className="form-inner mb-20">
                        <label>Destination <span>*</span></label>
                        <input type="text" placeholder="change this to Location Integration"/>
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
                      <div className="form-inner mb-20">
                        <label>Activity <span>*</span></label>
                        <input type="text" placeholder="add activity "/>
                      </div>
                      <div className="form-inner mb-20">
                        <label>Participants <span>*</span></label>
                        <input type="text" placeholder="change this to add participants with username"/>
                      </div>
                      <div className="number-input-item adults">
                          <label className="number-input-lable">Group Size:<span>
                            </span></label>
                          <QuantityCounter incIcon="bx bx-plus" dcrIcon="bx bx-minus" />
                        </div>
                      <div className="form-inner mb-30">
                        <label>Description <span>*</span></label>
                        <textarea placeholder="Write the itinerary description" defaultValue={""} />
                      </div>
                      <div className="form-inner">
                        <button type="submit" className="primary-btn1 two">Create itinerary</button>
                      </div>
                    </form>
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
