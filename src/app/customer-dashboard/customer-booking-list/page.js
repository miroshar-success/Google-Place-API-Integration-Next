import Header2 from '@/components/header/Header2'
import Icon from '@/uitils/Icon'
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
        <li className="active">
          <Link href="//customer-dashboard/customer-booking-list">
           <Icon name="itinerariesBook" width={18} height={18} viewBox="0 0 20 20"></Icon>
            <h6>Itineraries</h6>
          </Link>
        </li>
        <li>
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
      <div className="col-xl-12 mb-30">
        <div className="page-title">
          <h4>Your History:</h4>
          <div className="booking-options">
            <ul className="nav nav-pills" id="pills-tab2" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="tour-tab" data-bs-toggle="pill" data-bs-target="#tour" type="button" role="tab" aria-controls="tour" aria-selected="true">
                 <Icon name="itinerary" width={23} height={23} viewBox="0 0 23 23"></Icon>
                  Itinerary
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-12">
        <div className="tab-content" id="pills-tab2Content">
          <div className="tab-pane fade show active" id="tour" role="tabpanel" aria-labelledby="tour-tab">
            <div className="recent-listing-area">
              <div className="title-and-tab">
                <h6>Your Itineraries Info</h6>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="all-tab" data-bs-toggle="tab" data-bs-target="#all" type="button" role="tab" aria-controls="all" aria-selected="true">All</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="cancell-tab" data-bs-toggle="tab" data-bs-target="#cancell" type="button" role="tab" aria-controls="cancell" aria-selected="false">Cancelled</button>
                  </li>
                </ul>
              </div>
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
                  <div className="recent-listing-table">
                    <table className="eg-table2">
                      <thead>
                        <tr>
                          <th>Tour Package</th>
                          <th>Type</th>
                          <th>Participants</th>
                          <th>Status</th>
                          <th>Timeline</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td data-label="Tour Package">
                            <div className="product-name">
                              <div className="img">
                                <img src="/assets/img/home1/package-card-img1.png" alt="" />
                              </div>
                              <div className="product-content">
                                <h6><Link href="/package/package-details">Explore Travel NYC's Museums, Diversity,</Link></h6>
                                <p> <span>Nepal + Indea</span></p>
                              </div>
                            </div>
                          </td>
                          <td data-label="Type">
                            Group
                          </td>
                          <td data-label="Tourist">
                            3 person
                          </td>
                          <td data-label="Status">
                            <span className="confirmed">Confirmed</span>
                          </td>
                          <td data-label="Timeline">
                            July 10, 2023 - July 14, 2023
                          </td>
                        </tr>
                        <tr>
                          <td data-label="Tour Package">
                            <div className="product-name">
                              <div className="img">
                                <img src="/assets/img/home1/package-card-img2.png" alt="" />
                              </div>
                              <div className="product-content">
                                <h6><Link href="/package/package-details">Embark Tranquility, Adventure, And Spiritual.</Link></h6>
                                <p> <span>Italy</span></p>
                              </div>
                            </div>
                          </td>
                          <td data-label="Type">
                            Couple 
                          </td>
                          <td data-label="Tourist">
                            2 person
                          </td>
                          <td data-label="Status">
                            <span className="pending">Processing</span>
                          </td>
                          <td data-label="Timeline">
                            July 14, 2023 - July 17, 2023
                          </td>
                        </tr>
                        <tr>
                          <td data-label="Tour Package">
                            <div className="product-name">
                              <div className="img">
                                <img src="/assets/img/home1/package-card-img3.png" alt="" />
                              </div>
                              <div className="product-content">
                                <h6><Link href="/package/package-details">A Journey Of Tour Beauty And Inspiration.</Link></h6>
                                <p> <span>EGYPT + Turkey</span></p>
                              </div>
                            </div>
                          </td>
                          <td data-label="Type">
                            Honeymoon 
                          </td>
                          <td data-label="Tourist">
                            14 person
                          </td>
                          <td data-label="Status">
                            <span className="rejected">Cancelled</span>
                          </td>
                          <td data-label="Timeline">
                            July 10, 2023 - July 14, 2023
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="pagination-area">
                      <ul className="paginations">
                        <li className="page-item active">
                          <a href="#">1</a>
                        </li>
                        <li className="page-item">
                          <a href="#">2</a>
                        </li>
                        <li className="page-item">
                          <a href="#">3</a>
                        </li>
                      </ul>
                      <ul className="paginations-buttons">
                        <li>
                          <a href="#"> Prev</a>
                        </li>
                        <li>
                         <a href="#">Next</a>
                        </li>
                      </ul>
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
