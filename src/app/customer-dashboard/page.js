import Header2 from '@/components/header/Header2';
import Icon from '@/uitils/Icon';
import Link from 'next/link';
import React from 'react';
const page = () => {
  return (
    <>
     <Header2/>
     <div className="dashboard-wrapper">
  <div className="dashboard-sidebar-wrapper">
    <div className="dashboard-sidebar-menu">
      <ul>
        <li className="active">
          <Link href="/customer-dashboard">
            <Icon name="dashboard" width={18} height={18} viewBox="0 0 18 18"></Icon>
            <h6>Dashboard</h6>
          </Link>
        </li>
        <li>
          <Link href="/customer-dashboard/customer-booking-list">
          <Icon name="itinerariesBook" width={18} height={18} viewBox="0 0 18 18"></Icon>
            <h6>Itineraries</h6>
          </Link>
        </li>
        <li>
          <Link href="/customer-dashboard/customer-profile
          ">
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
                <Icon name="itinerary" width={55} height={55} viewBox="0 0 23 23"></Icon>
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
            <div className="col">
              <div className="counter-single five">
                <div className="counter-icon">
                  <Icon name="activities" width={50} height={55} viewBox="0 0 23 23"></Icon>                                
                </div>
                <div className="counter-content">
                  <p>Total Activities</p>
                  <div className="number">
                    <h3 className="counter">17</h3>
                    <span>+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="recent-listing-area">
          <h6>Your Itinerary Info</h6>
          <div className="recent-listing-table">
            <table className="eg-table2">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Status</th>
                  <th>Timeline</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Name">
                    <div className="product-name">
                      <div className="img">
                        <img src="/assets/img/home1/package-card-img1.png" alt="" />
                      </div>
                      <div className="product-content">
                        <h6><a href="#">Explore Travel NYC's Museums, Diversity,</a></h6>
                        <p>
                           <span>New york</span>
                        </p>
                      </div>
                    </div>
                  </td>
                  <td data-label="Category">
                    itinerary
                  </td>
                  <td data-label="Status">
                    <span className="confirmed">Confirmed</span>
                  </td>
                  <td data-label="Timeline">
                    July 10, 2023 - July 14, 2023
                  </td>
                </tr>
                <tr>
                  <td data-label="Name">
                    <div className="product-name">
                      <div className="img">
                        <img src="/assets/img/home1/package-card-img1.png" alt="" />
                      </div>
                      <div className="product-content">
                        <h6><a href="#"> Adult traveleing  With Fan With Insurance.</a></h6>
                        <p>
                         <span>New York</span>
                        </p>
                      </div>
                    </div>
                  </td>
                  <td data-label="Category">
                    Itinerary
                  </td>
                  <td data-label="Status">
                    <span className="pending">Pending</span>
                  </td>
                  <td data-label="Timeline">
                    60 Days
                  </td>
                </tr>
                <tr>
                  <td data-label="Name">
                    <div className="product-name">
                      <div className="img">
                        <img src="/assets/img/home1/package-card-img1.png" alt="" />
                      </div>
                      <div className="product-content">
                        <h6><a href="#">Golden Tulip The Grandmark Dhaka</a></h6>
                        <p>
                         <span>Dhaka, Bangladesh</span>
                        </p>
                      </div>
                    </div>
                  </td>
                  <td data-label="Category">
                    itinerary
                  </td>
                  <td data-label="Status">
                    <span className="rejected">Cancel</span>
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
                  <a href="#">
                  <Icon name="littleArrow" width={7} height={14} viewBox="0 0 7 14"></Icon>
                    Prev
                  </a>
                </li>
                <li>
                  <a href="#">
                    Next
                   <Icon name="littleArrow" width={7} height={14} viewBox="0 0 7 14"></Icon>
                  </a>
                </li>
              </ul>
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
