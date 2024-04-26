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
      <Breadcrumb pagename="Activities" pagetitle="Activities" />
      <div className="activites-pages pt-120 mb-120">
        <div className="container">
          <div className="row g-4">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="activity-card">
                <img src="/assets/img/home5/zip-lining-01.jpg" alt="" />
                <Link href="/activities" className="country-name">
                  <img src="/assets/img/innerpage/bangladesh.png" alt="" />
                  Bangladesh
                </Link>
                <div className="activity-card-content-wrapper">
                  <div className="activity-card-content">
                    <div className="icon">
                   <Icon name="zipLining" width={40} height={40} viewBox="0 0 54 54"></Icon>
                    </div>
                    <div className="content">
                      <h6>
                        <Link href="/activities-details">Zip lining</Link>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="activity-card">
                <a href="/activities" className="country-name">
                  <img src="/assets/img/innerpage/nepal.png" alt="" />
                  Nepal
                </a>
                <img src="/assets/img/home5/bungee-jumping-01.jpg" alt="" />
                <div className="activity-card-content-wrapper">
                  <div className="activity-card-content">
                    <div className="icon">
                    <Icon name="bungeeJumping" width={40} height={40} viewBox="0 0 54 54"></Icon>
                    </div>
                    <div className="content">
                      <h6>
                        <Link href="/activities-details">Bungee Jumping</Link>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="activity-card">
                <a href="/activities" className="country-name">
                  <img src="/assets/img/innerpage/italy.png" alt="" />
                  italy
                </a>
                <img src="/assets/img/home5/rafting-01.jpg" alt="" />
                <div className="activity-card-content-wrapper">
                  <div className="activity-card-content">
                    <div className="icon">
                    <Icon name="rafting" width={40} height={40} viewBox="0 0 54 54"></Icon>
                    </div>
                    <div className="content">
                      <h6>
                        <Link href="/activities-details">Rafting</Link>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="activity-card">
                <a href="/activities" className="country-name">
                  <img src="/assets/img/innerpage/Germany.png" alt="" />
                  Germany
                </a>
                <img src="/assets/img/home5/paragliding-01.jpg" alt="" />
                <div className="activity-card-content-wrapper">
                  <div className="activity-card-content">
                    <div className="icon">
                    <Icon name="paragliding" width={40} height={40} viewBox="0 0 54 54"></Icon>
                    </div>
                    <div className="content">
                      <h6>
                        <Link href="/activities-details">Paragliding</Link>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="activity-card">
                <a href="/activities" className="country-name">
                  <img src="/assets/img/innerpage/Thailand.png" alt="" />
                  Thailand
                </a>
                <img src="/assets/img/home5/ski-touring-01.jpg" alt="" />
                <div className="activity-card-content-wrapper">
                  <div className="activity-card-content">
                    <div className="icon">
                    <Icon name="Ski" width={40} height={40} viewBox="0 0 54 54"></Icon>
                    </div>
                    <div className="content">
                      <h6>
                        <Link href="/activities-details">Ski touring</Link>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="activity-card">
                <a href="/activities" className="country-name">
                  <img src="/assets/img/innerpage/Argentina.png" alt="" />
                  Argentina
                </a>
                <img src="/assets/img/home5/serfing-01.jpg" alt="" />
                <div className="activity-card-content-wrapper">
                  <div className="activity-card-content">
                    <div className="icon">
                    <Icon name="Surfing" width={40} height={40} viewBox="0 0 54 54"></Icon> 
                    </div>
                    <div className="content">
                      <h6>
                        <Link href="/activities-details">Surfing</Link>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="activity-card">
                <a href="/activities" className="country-name">
                  <img src="/assets/img/innerpage/france.png" alt="" />
                  France
                </a>
                <img src="/assets/img/innerpage/jungle-hiking1.jpg" alt="" />
                <div className="activity-card-content-wrapper">
                  <div className="activity-card-content">
                    <div className="icon">
                    <Icon name="Hiking" width={40} height={40} viewBox="0 0 54 54"></Icon> 
                    </div>
                    <div className="content">
                      <h6>
                        <Link href="/activities-details">Jungle Hiking</Link>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="activity-card">
                <a href="/activities" className="country-name">
                  <img src="/assets/img/innerpage/italy.png" alt="" />
                  Italy
                </a>
                <img src="/assets/img/innerpage/via-ferrate-01.jpg" alt="" />
                <div className="activity-card-content-wrapper">
                  <div className="activity-card-content">
                    <div className="icon">
                    <Icon name="Hiking" width={40} height={40} viewBox="0 0 40 40"></Icon>
                    </div>
                    <div className="content">
                      <h6>
                        <Link href="/activities-details">Climbing</Link>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="activity-card">
                <a href="/activities" className="country-name">
                  <img src="/assets/img/innerpage/nepal.png" alt="" />
                  Nepal
                </a>
                <img src="/assets/img/innerpage/mountain-01.jpg" alt="" />
                <div className="activity-card-content-wrapper">
                  <div className="activity-card-content">
                    <div className="icon">
                    <Icon name="Trekking" width={40} height={40} viewBox="0 0 40 40"></Icon>
                    </div>
                    <div className="content">
                      <h6>
                        <Link href="/activities-details">Trekking</Link>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="activity-card">
                <a href="/activities" className="country-name">
                  <img src="/assets/img/innerpage/India.png" alt="" />
                  India
                </a>
                <img src="/assets/img/innerpage/caving.jpg" alt="" />
                <div className="activity-card-content-wrapper">
                  <div className="activity-card-content">
                    <div className="icon">
                    <Icon name="Caving" width={40} height={40} viewBox="0 0 40 40"></Icon>
                    </div>
                    <div className="content">
                      <h6>
                        <Link href="/activities-details">Caving</Link>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="activity-card">
                <a href="/activities" className="country-name">
                  <img src="/assets/img/innerpage/Germany.png" alt="" />
                  Germany
                </a>
                <img src="/assets/img/innerpage/scuba-diving-01.jpg" alt="" />
                <div className="activity-card-content-wrapper">
                  <div className="activity-card-content">
                    <div className="icon">
                    <Icon name="Scuba" width={40} height={40} viewBox="0 0 40 40"></Icon>
                    </div>
                    <div className="content">
                      <h6>
                        <Link href="/activities-details">Scuba Diving</Link>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="activity-card">
                <a href="/activities" className="country-name">
                  <img src="/assets/img/innerpage/bangladesh.png" alt="" />
                  Bangladesh
                </a>
                <img src="/assets/img/innerpage/sky-diving-01.jpg" alt="" />
                <div className="activity-card-content-wrapper">
                  <div className="activity-card-content">
                    <div className="icon">
                    <Icon name="Skydiving" width={40} height={40} viewBox="0 0 40 40"></Icon> 
                    </div>
                    <div className="content">
                      <h6>
                        <Link href="/activities-details">Skydiving</Link>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Newslatter/>
      <Footer />
    </>
  );
};

export default page;
