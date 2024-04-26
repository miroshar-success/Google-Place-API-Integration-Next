"use client"
import Header2 from '@/components/header/Header2'
import Icon from '@/uitils/Icon'
import SelectComponent from '@/uitils/SelectComponent'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
     <Header2/>
     <div className="dashboard-wrapper">
  <div className="dashboard-sidebar-wrapper">
    <div className="dashboard-sidebar-menu">
      <ul>
        <li>
          <Link href="/customer-dashboard">
           <Icon name="dashboard" width={18} height={18} viewBox="0 0 18 18"></Icon>
            <h6>Dashboard</h6>
          </Link>
        </li>
        <li>
          <Link href="/customer-dashboard/customer-booking-list">
            <Icon name="itinerariesBook" width={18} height={18} viewBox="0 0 20 20"></Icon>
            <h6>Itineraries</h6>
          </Link>
        </li>
        <li className="active">
          <Link href="/customer-dashboard/customer-profile">
          <Icon name="settings" width={18} height={18} viewBox="0 0 30 30"></Icon>
            <h6>Settings</h6>
          </Link>
        </li>
        <li>
          <a href="#">
            <Icon name="logout" width={18} height={18} viewBox="0 0 18 18"></Icon>
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
          <div className="main-content-title">
            <h3>Personal Information</h3>
          </div>
        </div>
        <div className="dashboard-profile-wrapper">
          <div className="dashboard-profile-nav">
            <ul className="nav flex-column nav-pills" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="profile-tab" data-bs-toggle="pill" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="true">
                <Icon name="littleProfile" width={14} height={14} viewBox="0 0 14 14"></Icon>
                  Profile
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="preference-tab" data-bs-toggle="pill" data-bs-target="#preference" type="button" role="tab" aria-controls="preference" aria-selected="false" tabIndex={-1}>
                <Icon name="littleSettings" width={14} height={14} viewBox="0 0 14 14"></Icon>
                  Preference
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="change-pass-tab" data-bs-toggle="pill" data-bs-target="#change-pass" type="button" role="tab" aria-controls="change-pass" aria-selected="false" tabIndex={-1}>
                <Icon name="security" width={14} height={14} viewBox="0 0 14 14"></Icon>
                  Change Password
                </button>
              </li>
            </ul>
          </div>
          <div className="tab-content w-100" id="pills-tabContent">
            <div className="tab-pane fade active show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
              <div className="dashboard-profile-tab-content">
                <div className="profile-tab-content-title">
                  <h6>You Details</h6>
                </div>
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-inner mb-30">
                        <label>First Name*</label>
                        <input type="text" placeholder="Ex- Rocky " />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-inner mb-30">
                        <label>Last Name*</label>
                        <input type="text" placeholder="Jhon" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-inner mb-30">
                        <label>Email Address*</label>
                        <input type="email" placeholder="example@gmail.com" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-inner mb-30">
                        <label>Phone Number*</label>
                        <input type="text" placeholder="01245302....." />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-inner mb-30">
                        <label>Your Address*</label>
                        <input type="text" placeholder="Mirpur DOHS, Dhaka" />
                      </div>
                    </div>
                    <div className="col-md-6 mb-30">
                      <div className="form-inner">
                      <label>Country*</label>
                        <SelectComponent options={['United Kingdom','Bangladesh','United State']} placeholder="Country" />
                      </div>
                    </div>
                  </div>
                  <div className="upload-img-area">
                    <div className="upload-img-wrapper">
                      <div className="drag-area">
                        <button type="button" className="upload-btn"><i className="bi bi-plus-lg" /></button>
                        <input type="file" hidden />
                      </div>
                    </div>
                    <div className="upload-img-area-content">
                      <h6>Upload Your Image</h6>
                      <p>Image required size 300*300, JPGE or PNG format.</p>
                    </div>
                  </div>
                  <div className="form-inner mb-50">
                    <label className="containerss">
                      <input type="checkbox" />
                      <span className="checkmark" />
                      <span className="text">Update details in all properties included in this site.</span>
                    </label>
                  </div>
                  <div className="form-inner">
                    <button type="submit" className="primary-btn3">Update Profile</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="tab-pane fade" id="preference" role="tabpanel" aria-labelledby="preference-tab">
              <div className="dashboard-profile-tab-content">
                <ul className="preference-list">
                  <li>
                    <div className="preference-list-content">
                      <h6>Email Notification</h6>
                      <p>To set up email notifications, you typically need two components: a server-side application or script to generate and send the emails.</p>
                    </div>
                    <div className="form-check form-switch">
                      <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                    </div>
                  </li>
                  <li>
                    <div className="preference-list-content">
                      <h6>Newsletter</h6>
                      <p>Choose an email service provider that supports sending newsletters. Popular choices include Mailchimp, Sendinblue, Campaign Monitor, and others.</p>
                    </div>
                    <div className="form-check form-switch">
                      <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault2" />
                    </div>
                  </li>
                  <li>
                    <div className="preference-list-content">
                      <h6>Automated Reports</h6>
                      <p>To set up email notifications, you typically need two components: a server-side application or script to generate and send the emails.</p>
                    </div>
                    <div className="form-check form-switch">
                      <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault3" />
                    </div>
                  </li>
                </ul>
                <div className="currency-and-unit">
                  <div className="row g-lg-4 gy-3">
                    <div className="col-md-6">
                      <div className="form-inner">
                       <SelectComponent options={['Sq.ft','Cm']} placeholder="Area Unit" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="change-pass" role="tabpanel" aria-labelledby="change-pass-tab">
              <div className="dashboard-profile-tab-content">
                <div className="profile-tab-content-title">
                  <h6>Change Your Password</h6>
                </div>
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-inner mb-30">
                        <label>Old Password*</label>
                        <input id="password4" type="password" placeholder="*** ***" />
                        <i className="bi bi-eye-slash" id="togglePassword4" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-inner mb-30">
                        <label>New Password*</label>
                        <input id="password5" type="password" placeholder="*** ***" />
                        <i className="bi bi-eye-slash" id="togglePassword5" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-inner mb-50">
                        <label>Confirm Password*</label>
                        <input id="password6" type="password" placeholder="*** ***" />
                        <i className="bi bi-eye-slash" id="togglePassword6" />
                      </div>
                    </div>
                  </div>
                </form>
                <div className="change-password-form-btns">
                  <button type="submit" className="primary-btn3">Save Change</button>
                  <button type="submit" className="primary-btn3 cancel">Cancel</button>
                </div>
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
  )
}

export default page
