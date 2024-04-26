import Icon from "@/uitils/Icon";
import Link from "next/link";
import React from "react";

const Footer = ({style}) => {
  return (
    <footer className={`footer-section ${style}`}>
      <div className="container">
        <div className="footer-top">
          <div className="row g-lg-4 gy-5 justify-content-center">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-widget">
                <div className="footer-logo">
                  <Link href="/">
                    <img src="/assets/img/logoAdv.svg" alt="" />
                  </Link>
                  <span className="app-name" style={{
                     fontFamily: 'Montserrat, sans-serif',
                     fontSize: '1rem',
                     fontWeight: '600',
                     color: 'white',
                     marginLeft: '10px',
                     textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)'
                }}> Adventurist's Link</span>
                </div>
                <h3>
                  Want to enhance your solo 
                  
                  Traveler experience<span>?</span>
                </h3>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 d-flex justify-content-lg-center justify-content-sm-start">
              <div className="footer-widget">
                <div className="widget-title">
                  <h5>Quick Link</h5>
                </div>
                <ul className="widget-list">
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/destination">Destinations</Link>
                  </li>
                  <li>
                    <Link href="/package">Itineraries</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 d-flex justify-content-lg-center justify-content-md-start">
              <div className="footer-widget">
                <div className="single-contact mb-30">
                  <div className="widget-title">
                     <Icon name="phone" width={22} height={22} viewBox="0 0 22 22"></Icon>
                    <h5>More Inquiry</h5>
                  </div>
                  <a href="tel:36732195438">+36 73 219 5438</a>
                </div>
                <div className="single-contact mb-35">
                  <div className="widget-title">
                  <Icon name="email" width={25} height={24} viewBox="0 0 25 24"></Icon>
                    <h5>Send Mail</h5>
                  </div>
                  <a href="mailto:adventuristLinkTeam@gmail.com">adventuristLinkTeam@gmail.com</a>
                </div>
                <div className="single-contact">
                  <div className="widget-title">
                    <Icon name="destSearch" width={25} height={24} viewBox="0 0 25 24"></Icon>
                    <h5>Address</h5>
                  </div>
                  <a href="https://www.google.com/maps/place/Egens+Lab/@23.8340712,90.3631117,17z/data=!3m1!4b1!4m6!3m5!1s0x3755c14c8682a473:0xa6c74743d52adb88!8m2!3d23.8340663!4d90.3656866!16s%2Fg%2F11rs9vlwsk?entry=ttu">
                    Műegyetem rkp. 3, 1111  <br />Budapest 
                    Hungary
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 d-flex justify-content-lg-end justify-content-sm-end">
              <div className="footer-widget">
                <div className="widget-title">
                  <h5>Our goal</h5>
                </div>
                <p>
                  We aim to connect solo travelers with similiar interests together.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="row">
            <div className="col-lg-12 d-flex flex-md-row flex-column align-items-center justify-content-md-between justify-content-center flex-wrap gap-3">
              <ul className="social-list">
                <li>
                  <a href="https://www.facebook.com/">
                    <i className="bx bxl-facebook" />
                  </a>
                </li>
                <li>
                  <a href="https://www.pinterest.com/">
                    <i className="bx bxl-pinterest-alt" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/">
                    <i className="bx bxl-instagram" />
                  </a>
                </li>
              </ul>
              <p>
                Designed By{" "}
                <a >Adventurist Link Team</a>
              </p>
              <div className="footer-right">
                <ul>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms &amp; Condition</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
