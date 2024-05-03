"use client"
import SearchForm from "@/components/GoogleSearchForm/searchForm";
import Header2 from "@/components/header/Header2";
import Icon from "@/uitils/Icon";
import QuantityCounter from "@/uitils/QuantityCounter";
import Link from "next/link";
import React, { useContext, useState } from "react";
import ActivityModal from "@/components/common/ActivityModal";
import { AuthContext } from "@/hooks/AuthContext";
const page = () => {
  const { showActivityModal, toggleActivityModal } = useContext(AuthContext);
  const [ activityModalData, setActivityModalData] = useState({});
  const handleSaveModalData = (data) => {
    console.log(data);
    setActivityModalData(data);
    // You can perform any other actions you need with the saved data here
  };
  return (
    <>
      <Header2 />
      <div className="dashboard-wrapper">
        <div className="dashboard-sidebar-wrapper">
          <div className="dashboard-sidebar-menu">
            <ul>
              <li className="active">
                <Link href="/customer-dashboard">
                  <Icon
                    name="dashboard"
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                  ></Icon>
                  <h6>Dashboard</h6>
                </Link>
              </li>
              <li>
                <Link href="/customer-dashboard/customer-booking-list">
                  <Icon
                    name="itinerariesBook"
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                  ></Icon>
                  <h6>Itineraries</h6>
                </Link>
              </li>
              <li>
                <Link
                  href="/customer-dashboard/customer-profile
          "
                >
                  <Icon
                    name="settings"
                    width={18}
                    height={18}
                    viewBox="0 0 30 30"
                  ></Icon>
                  <h6>Settings</h6>
                </Link>
              </li>
              <li>
                <a href="#">
                  <Icon
                    name="logout"
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                  ></Icon>
                  <h6>Log Out</h6>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="main-content">
          <div className="row">
            <div className="col-xl-12">
              <div className="main-content-title-profile mb-50">
                <div className="author-area">
                  <div className="author-img">
                    <img src="/assets/img/innerpage/profile-img.png" alt="" />
                  </div>
                  <div className="author-content">
                    <span>Hello, I’m</span>
                    <h4>username</h4>
                  </div>
                </div>
              </div>
              <div className="counter-area">
                <div className="row row-cols-lg-5 g-3">
                  <div className="col">
                    <div className="counter-single">
                      <div className="counter-icon">
                        <Icon
                          name="itinerary"
                          width={55}
                          height={55}
                          viewBox="0 0 23 23"
                        ></Icon>
                      </div>
                      <div className="counter-content">
                        <p>Total Itineraries</p>
                        <div className="number">
                          <h3 className="counter">12</h3>
                          <span>+</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="recent-listing-area">
                <h6>Where next ?</h6>
                <div className="recent-listing-table">
                  <div className="booking-form-wrap mb-40">
                    <h4>Create your own Itinerary</h4>
                    <p>
                      Design your dream tarvel itinerary and let other travelers
                      enikoy it with you!
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
                        aria-selected="true"
                      >
                        Start now
                      </button>
                    </div>
                    <div className="sidebar-booking-form">
                      <form>
                        <div className="form-inner mb-20">
                          <label>
                            Title <span>*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Enter the itinerary title"
                          />
                        </div>
                        <div className="form-inner mb-20">
                          <SearchForm label={"destination"} />
                        </div>
                        <div className="tour-date-wrap mb-50">
                          <h6>Select Your start date:</h6>
                          <div className="form-inner mb-20">
                            <div className="form-group">
                              <input
                                type="date"
                                name="inOut"
                                placeholder="5 Jan, 2024"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="tour-date-wrap mb-50">
                          <h6>Select Your end date:</h6>
                          <div className="form-inner mb-20">
                            <div className="form-group">
                              <input
                                type="date"
                                name="inOut"
                                placeholder="5 Jan, 2024"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-inner mb-20">
                          <a
                            className="add-activity-button"
                            onClick={toggleActivityModal}
                          >
                            Add Activity
                          </a>
                        </div>
                        <div className="form-inner mb-20">
                          <label>
                            Participants <span>*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="change this to add participants with username"
                          />
                        </div>
                        <div className="number-input-item adults">
                          <label className="number-input-lable">
                            Group Size:<span></span>
                          </label>
                          <QuantityCounter
                            incIcon="bx bx-plus"
                            dcrIcon="bx bx-minus"
                          />
                        </div>
                        <div className="form-inner mb-30">
                          <label>
                            Description <span>*</span>
                          </label>
                          <textarea
                            placeholder="Write the itinerary description"
                            defaultValue={""}
                          />
                        </div>
                        <div className="form-inner">
                          <button type="submit" className="primary-btn1 two">
                            Create itinerary
                          </button>
                        </div>
                      </form>
                      {showActivityModal && (
                          <ActivityModal
                            onSave={handleSaveModalData}
                            onClose={toggleActivityModal}
                          />
                        )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard-footer">
          <ul className="footer-menu-list">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Terms &amp; Conditions</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default page;
