import Icon from "@/uitils/Icon";
import React from "react";

const Newslatter = () => {
  return (
    <>
      <div className="banner3-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner3-content">
                <h2>Join The Newsletter</h2>
                <p>To receive other travelers opinion and experiences</p>
                <form>
                  <div className="from-inner">
                    <input type="email" placeholder="Enter Your Gmail..." />
                    <button type="submit" className="from-arrow">
                        <Icon name="arrow"  width={18} height={17} viewBox="0 0 18 17"></Icon>
                    </button>
                  </div>
                </form>
                <img
                  src="/assets/img/home1/banner3-vector1.png"
                  alt=""
                  className="vector1"
                />
                <img
                  src="/assets/img/home1/banner3-vector2.png"
                  alt=""
                  className="vector2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newslatter;
