import React from "react";

const Home2Banner2 = () => {
  return (
    <>
      <div className="banner6-section">
        <img
          src="/assets/img/home2/home2-newsletter-vector1.png"
          alt=""
          className="vector1"
        />
        <img
          src="/assets/img/home2/home2-newsletter-vector2.png"
          alt=""
          className="vector2"
        />
        <div className="container-fluid">
          <div className="row g-lg-0 gy-5">
            <div className="col-lg-3 col-sm-6 d-flex align-items-center justify-content-lg-start justify-content-center order-lg-1 order-2">
              <div className="single-contact">
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={36}
                    height={36}
                    viewBox="0 0 36 36"
                  >
                    <g clipPath="url(#clip0_1381_27)">
                      <path d="M34.5478 26.1865L29.6634 21.3021C27.919 19.5577 24.9535 20.2555 24.2557 22.5232C23.7324 24.0932 21.988 24.9655 20.418 24.6165C16.9292 23.7443 12.2193 19.2088 11.3471 15.5456C10.8237 13.9755 11.8704 12.2311 13.4404 11.7078C15.7081 11.0101 16.4059 8.04458 14.6615 6.30017L9.7771 1.41582C8.38157 0.194728 6.28828 0.194728 5.06719 1.41582L1.7528 4.7302C-1.56158 8.21902 2.10169 17.4644 10.3004 25.6631C18.4992 33.8619 27.7445 37.6997 31.2334 34.2108L34.5478 30.8964C35.7689 29.5009 35.7689 27.4076 34.5478 26.1865Z" />
                    </g>
                  </svg>
                </div>
                <div className="content">
                  <span>More Inquiry</span>
                  <a href="tel:+999858624984">+999-858 624 984</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-lg-2 order-1">
              <div className="banner6-content">
                <h2>Join The Newsletter</h2>
                <p>To receive our best monthly deals</p>
                <form>
                  <div className="from-inner">
                    <input type="email" placeholder="Enter Your Gmail..." />
                    <button type="submit" className="from-arrow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={17}
                        viewBox="0 0 18 17"
                      >
                        <path
                          d="M7 1L16 8.5M16 8.5L7 16M16 8.5H0.5"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 d-flex align-items-center justify-content-lg-end justify-content-center order-3">
              <div className="single-contact green">
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={35}
                    height={36}
                    viewBox="0 0 35 36"
                  >
                    <g clipPath="url(#clip0_1381_80)">
                      <path d="M12.7608 25.8093V32.573C12.762 32.8029 12.8354 33.0266 12.9707 33.2124C13.106 33.3982 13.2964 33.5368 13.5148 33.6084C13.7332 33.68 13.9686 33.6811 14.1877 33.6115C14.4068 33.5419 14.5984 33.4051 14.7354 33.2205L18.6919 27.8364L12.7608 25.8093ZM34.541 0.327817C34.3767 0.210791 34.1832 0.141497 33.982 0.127599C33.7807 0.113701 33.5795 0.15574 33.4006 0.249067L0.588138 17.3845C0.399345 17.4843 0.24379 17.637 0.140562 17.8239C0.0373342 18.0108 -0.00907488 18.2238 0.00703036 18.4368C0.0231356 18.6497 0.101054 18.8533 0.231224 19.0226C0.361394 19.1919 0.538152 19.3194 0.739805 19.3897L9.86168 22.5076L29.2881 5.89719L14.2556 24.0082L29.5433 29.2334C29.695 29.2844 29.856 29.3016 30.0151 29.2838C30.1741 29.266 30.3274 29.2137 30.4641 29.1305C30.6007 29.0473 30.7176 28.9352 30.8064 28.8021C30.8953 28.669 30.9539 28.5181 30.9783 28.3599L34.9888 1.38073C35.0184 1.18101 34.9923 0.976977 34.9133 0.791164C34.8343 0.605351 34.7055 0.444996 34.541 0.327817Z" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1381_80">
                        <rect
                          width={35}
                          height={35}
                          fill="white"
                          transform="translate(0 0.125)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="content">
                  <span>Send Mail</span>
                  <a href="mailto:info@example.com">info@example.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home2Banner2;
