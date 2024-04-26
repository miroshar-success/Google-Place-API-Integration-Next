"use client";
import React from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import Link from "next/link";
import TourCategoryDropdown from "@/components/banner/TourCategoryDropdown";
import DestinationSearch from "@/components/banner/DestinationSearch";
import Newslatter from "@/components/common/Newslatter";
import Footer from "@/components/footer/Footer";
import Header2 from "@/components/header/Header2";
import Icon from "@/uitils/Icon";

const page = () => {
  return (
    <>
      <Header2 />
      <Breadcrumb
        pagename="Itinerary Top Search"
        pagetitle="Itinerary Top Search"
      />
      <div className="package-search-filter-wrapper">
        <div className="container">
          <div className="filter-group">
            <form>
              <div className="filter-area">
                <div className="row g-xl-4 gy-4">
                  <div className="col-xl-3 col-sm-6 d-flex justify-content-center">
                    <div className="single-search-box">
                      <div className="icon">
                       <Icon name="destSearch" width={27}  height={27}  viewBox="0 0 27 27"></Icon>
                      </div>
                      <DestinationSearch />
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 d-flex justify-content-center">
                    <div className="single-search-box">
                      <div className="icon">
                      <Icon name="itinerary" width={27}  height={27}  viewBox="0 0 27 27"></Icon>
                      </div>
                      <TourCategoryDropdown
                        labelType="Iyinerary Type"
                        data={[
                          "Family Tour",
                          "Honeymoon Tour",
                          "Group Tour",
                          "Adventure Tour",
                          "Solo Tour",
                        ]}
                      />
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 d-flex justify-content-center">
                    <div className="single-search-box">
                      <div className="icon">
                      <Icon name="activities" width={27}  height={27}  viewBox="0 0 27 27"></Icon>
                      </div>
                      <TourCategoryDropdown
                        labelType="Destination"
                        data={["Economy", "Luxury", "Delux"]}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <button type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>

      <div className="package-top-search-section pt-120 mb-120">
        <div className="container">
          <div className="row gy-5 mb-70">
            <div className="col-lg-4 col-md-6">
              <div className="package-card">
                <div className="package-card-img-wrap">
                  <Link href="/package/package-details" className="card-img">
                    <img src="/assets/img/home1/package-card-img1.png" alt="" />
                  </Link>
                  <div className="batch">
                    <span className="date">3 Days / 4 Night</span>
                  </div>
                </div>
                <div className="package-card-content">
                  <div className="card-content-top">
                    <h5>
                      <Link href="/package/package-details">
                        the Allure Italy's Rich Culture, History, and Cuisine.
                      </Link>
                    </h5>
                    <div className="location-area">
                      <ul className="location-list scrollTextAni">
                        <li>
                          <Link href="/package/package">Alexandria</Link>
                        </li>
                        <li>
                          <Link href="/package/package">Sharm El Sheikh</Link>
                        </li>
                        <li>
                          <Link href="/package/package">Mansoura</Link>
                        </li>
                        <li>
                          <Link href="/package/package">Karachi</Link>
                        </li>
                        <li>
                          <Link href="/package/package">Lahore</Link>
                        </li>
                        <li>
                          <Link href="/package/package">Islamabad</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-content-bottom">
                    <Link
                      href="/package/package-details"
                      className="primary-btn2"
                    >
                     Join Itinerary
                     <Icon name="plane" width={18}  height={18}  viewBox="0 0 18 18"></Icon>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="package-card">
                <div className="package-card-img-wrap">
                  <Link href="/package/package-details" className="card-img">
                    <img src="/assets/img/home1/package-card-img2.png" alt="" />
                  </Link>
                  <div className="batch">
                    <span className="date">7 Days / 8 Night</span>
                  </div>
                </div>
                <div className="package-card-content">
                  <div className="card-content-top">
                    <h5>
                      <Link href="/package/package-details">
                        Explore Travel NYC's Museums, Diversity, and Energy.
                      </Link>
                    </h5>
                    <div className="location-area">
                      <ul className="location-list scrollTextAni">
                        <li>
                          <Link href="/package/package">Mecca</Link>
                        </li>
                        <li>
                          <Link href="/package/package">Medina</Link>
                        </li>
                        <li>
                          <Link href="/package/package">Riyadh</Link>
                        </li>
                        <li>
                          <Link href="/package/package">Doha</Link>
                        </li>
                        <li>
                          <Link href="/package/package">Al Wakrah</Link>
                        </li>
                        <li>
                          <Link href="/package/package">Al Rayyan</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-content-bottom">
                    <Link
                      href="/package/package-details"
                      className="primary-btn2"
                    >
                     Join Itinerary
                     <Icon name="plane" width={18}  height={18}  viewBox="0 0 18 18"></Icon>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="package-card">
                <div className="package-card-img-wrap">
                  <Link href="/package/package-details" className="card-img">
                    <img src="/assets/img/home1/package-card-img3.png" alt="" />
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
                          <Link href="/package/package">Alexandria</Link>
                        </li>
                        <li>
                          <Link href="/package/package">Sharm El Sheikh</Link>
                        </li>
                        <li>
                          <Link href="/package/package">Mansoura</Link>
                        </li>
                        <li>
                          <Link href="/package/package">Karachi</Link>
                        </li>
                        <li>
                          <Link href="/package/package">Lahore</Link>
                        </li>
                        <li>
                          <Link href="/package/package">Islamabad</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-content-bottom">
                    <Link
                      href="/package/package-details"
                      className="primary-btn2"
                    >
                      Join Itinerary
                     <Icon name="plane" width={18}  height={18}  viewBox="0 0 18 18"></Icon>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="package-card">
                <div className="package-card-img-wrap">
                  <Link href="/package/package-details" className="card-img">
                    <img src="/assets/img/home1/package-card-img4.png" alt="" />
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
                          <Link href="/package/package">Bangalore</Link>
                        </li>
                        <li>
                          <Link href="/package/package">Chennai</Link>
                        </li>
                        <li>
                          <Link href="/package/package">New Delhi</Link>
                        </li>
                        <li>
                          <Link href="/package/package">Dhaka</Link>
                        </li>
                        <li>
                          <Link href="/package/package">Rangpur</Link>
                        </li>
                        <li>
                          <Link href="/package/package">Sylhet</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-content-bottom">
                  
                    <Link
                      href="/package/package-details"
                      className="primary-btn2"
                    >
                      Join Itinerary
                     <Icon name="plane" width={18}  height={18}  viewBox="0 0 18 18"></Icon>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="package-card">
                <div className="package-card-img-wrap">
                  <Link href="/package/package-details" className="card-img">
                    <img src="/assets/img/home1/package-card-img5.png" alt="" />
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
                          <Link href="/package/package">Paris</Link>
                        </li>
                        <li>
                          <Link href="/package/package">Marseille</Link>
                        </li>
                        <li>
                          <Link href="/package/package">Bordeaux</Link>
                        </li>
                        <li>
                          <Link href="/package/package">Madrid</Link>
                        </li>
                        <li>
                          <Link href="/package/package">Barcelona</Link>
                        </li>
                        <li>
                          <Link href="/package/package">Valencia</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-content-bottom">
                    <Link
                      href="/package/package-details"
                      className="primary-btn2"
                    >
                    Join Itinerary
                     <Icon name="plane" width={18}  height={18}  viewBox="0 0 18 18"></Icon>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="package-card">
                <div className="package-card-img-wrap">
                  <Link href="/package/package-details" className="card-img">
                    <img src="/assets/img/home1/package-card-img6.png" alt="" />
                  </Link>
                  <div className="batch">
                    <span className="date">4 Days / 5 Night</span>
                  </div>
                </div>
                <div className="package-card-content">
                  <div className="card-content-top">
                    <h5>
                      <Link href="/package/package-details">
                        Adventure Art, Architecture, and Mediterranean.
                      </Link>
                    </h5>
                    <div className="location-area">
                      <ul className="location-list scrollTextAni">
                        <li>
                          <Link href="/package/package">Kathmandu</Link>
                        </li>
                        <li>
                          <Link href="/package/package">Pokhara</Link>
                        </li>
                        <li>
                          <Link href="/package/package">Lalitpur</Link>
                        </li>
                        <li>
                          <Link href="/package/package">Jakarta</Link>
                        </li>
                        <li>
                          <Link href="/package/package">Surabaya</Link>
                        </li>
                        <li>
                          <Link href="/package/package">Bandung</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-content-bottom">
                    <Link
                      href="/package/package-details"
                      className="primary-btn2"
                    >
                     Join Itinerary
                     <Icon name="plane" width={18}  height={18}  viewBox="0 0 18 18"></Icon>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="package-card">
                <div className="package-card-img-wrap">
                  <Link href="/package/package-details" className="card-img">
                    <img src="/assets/img/home1/package-card-img7.png" alt="" />
                  </Link>
                  <div className="batch">
                    <span className="date">2 Days / 3 Night</span>
                  </div>
                </div>
                <div className="package-card-content">
                  <div className="card-content-top">
                    <h5>
                      <Link href="/package/package-details">
                        Exploring ancient ruins, histor landmarks, and cultural.
                      </Link>
                    </h5>
                    <div className="location-area">
                      <ul className="location-list scrollTextAni">
                        <li>
                          <Link href="/package/package">Kathmandu</Link>
                        </li>
                        <li>
                          <Link href="/package/package">Pokhara</Link>
                        </li>
                        <li>
                          <Link href="/package/package">Lalitpur</Link>
                        </li>
                        <li>
                          <Link href="/package/package">Jakarta</Link>
                        </li>
                        <li>
                          <Link href="/package/package">Surabaya</Link>
                        </li>
                        <li>
                          <Link href="/package/package">Bandung</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-content-bottom">
                    <Link
                      href="/package/package-details"
                      className="primary-btn2"
                    >
                    Join Itinerary
                     <Icon name="plane" width={18}  height={18}  viewBox="0 0 18 18"></Icon>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="package-card">
                <div className="package-card-img-wrap">
                  <Link href="/package/package-details" className="card-img">
                    <img src="/assets/img/home1/package-card-img9.png" alt="" />
                  </Link>
                  <div className="batch">
                    <span className="date">3 Days / 4 Night</span>
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
                      <ul className="location-list scrollTextAni">
                        <li>
                          <Link href="/package/package">Kathmandu</Link>
                        </li>
                        <li>
                          <Link href="/package/package">Pokhara</Link>
                        </li>
                        <li>
                          <Link href="/package/package">Lalitpur</Link>
                        </li>
                        <li>
                          <Link href="/package/package">Jakarta</Link>
                        </li>
                        <li>
                          <Link href="/package/package">Surabaya</Link>
                        </li>
                        <li>
                          <Link href="/package/package">Bandung</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-content-bottom">
                    <Link
                      href="/package/package-details"
                      className="primary-btn2"
                    >
                      Join Itinerary
                     <Icon name="plane" width={18}  height={18}  viewBox="0 0 18 18"></Icon>
                    </Link>
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
      </div>
      <Footer />
    </>
  );
};

export default page;
