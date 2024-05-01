"use client";
import Link from "next/link";
import navData from "../../data/nav.json";
import { useContext, useEffect, useMemo, useReducer, useRef , useState} from "react";
import LoginModal from "../common/LoginModal";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import Icon from "@/uitils/Icon";
import { AuthContext } from "@/hooks/AuthContext";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const initialState = {
  activeMenu: "",
  activeSubMenu: "",
  isSidebarOpen: false,
  isLeftSidebarOpen: false,
  isRightSidebar: false,
  isLang: false,
};
function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_MENU":
      return {
        ...state,

        activeMenu: state.activeMenu === action.menu ? "" : action.menu,
        activeSubMenu:
          state.activeMenu === action.menu ? state.activeSubMenu : "",
      };
    case "TOGGLE_SUB_MENU":
      return {
        ...state,
        activeSubMenu:
          state.activeSubMenu === action.subMenu ? "" : action.subMenu,
      };
    case "TOGGLE_SIDEBAR":
      return {
        ...state,
        isSidebarOpen: !state.isSidebarOpen,
      };
    case "setScrollY":
      return { ...state, scrollY: action.payload };
    case "TOGGLE_LEFT_SIDEBAR":
      return {
        ...state,
        isLeftSidebarOpen: !state.isLeftSidebarOpen,
      };
    case "TOGGLE_LANG":
      return {
        ...state,
        isLang: !state.isLang,
      };
    case "TOGGLE_RIGHTSIDEBAR":
      return {
        ...state,
        isRightSidebar: !state.isRightSidebar,
      };
    default:
      return state;
  }
}
const Header2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { showModal, toggleLoginModal } = useContext(AuthContext);
  const headerRef = useRef(null);
  const handleScroll = () => {
    const { scrollY } = window;
    dispatch({ type: "setScrollY", payload: scrollY });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleMenu = (menu) => {
    dispatch({ type: "TOGGLE_MENU", menu });
  };

  const toggleRightSidebar = () => {
    dispatch({ type: "TOGGLE_RIGHTSIDEBAR" });
  };
  const toggleSubMenu = (subMenu) => {
    dispatch({ type: "TOGGLE_SUB_MENU", subMenu });
  };
  const toggleSidebar = () => {
    dispatch({ type: "TOGGLE_MENU", menu: "" });
    dispatch({ type: "TOGGLE_SUB_MENU", subMenu: "" });
    dispatch({ type: "TOGGLE_SIDEBAR" });
  };
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 25,
      loop: true,
      autoplay: {
        delay: 2500, // Autoplay duration in milliseconds
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".destination-sidebar-next",
        prevEl: ".destination-sidebar-prev",
      },

      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        386: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1400: {
          slidesPerView: 2,
        },
      },
    };
  });

  return (
    <>
      <header
        ref={headerRef}
        className={`header-area style-2 ${state.scrollY > 10 ? "sticky" : ""}`}
      >
        <div className="header-logo">
          <Link href="/">
            <img
              alt="image"
              className="img-fluid"
              src="/assets/img/logoAdv.svg"
            />
          </Link>
          <span className="app-name" style={{
             fontFamily: 'Montserrat, sans-serif',
             fontSize: '1rem',
             fontWeight: '600',
              color: '#2a2a2a',
             marginLeft: '10px',
             textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)'
         }}>Adventurist's Link</span>

        </div>
        <div className={`main-menu ${state.isSidebarOpen ? "show-menu" : ""}`}>
          <div className="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
            <div className="mobile-logo-wrap">
              <Link href="">
                <img alt="image" src="/assets/img/logoAdv.svg" />
              </Link>
            </div>
            <div className="menu-close-btn" onClick={toggleSidebar}>
              <i className="bi bi-x" />
            </div>
          </div>
          <ul className="menu-list">
            {navData.map((data) => {

                return (
                  <li
                    key={data.id} className={`${data.subMenu && data.subMenu.length > 0 ? "menu-item-has-children" : ""}`}>

                    {
                      data.id === "11" ? (
                      <a href="#"
                          className="modal-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#user-login"
                      >
                          {data.label}
                      </a>
                  ) : (
                    <Link href={data.link} legacyBehavior>
                      <a>{data.label}</a>
                    </Link>
                )}

                    {data.icon && data.subMenu && data.subMenu.length > 0 && (
                   <>
                      <i onClick={() => toggleMenu(data.label)} className={`bi bi-${state.activeMenu === data.label ? "dash" : "plus"} dropdown-icon`} />
                      <ul className={`sub-menu ${state.activeMenu === data.label ? "d-block" : ""}`}>
                         {data.subMenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                        <Link href={subItem.link} legacyBehavior>
                          <a>{subItem.label}</a>
                        </Link>
                        </li>
                       ))}
                      </ul>
                   </>
                    )}
                  </li>
                );
            })}
          </ul>
          <div className="topbar-right d-lg-none d-block">
            <button
              type="button"
              className="modal-btn header-cart-btn"

            >
              REGISTER/ LOGIN
            </button>
          </div>

        </div>
        <div className="nav-right d-flex jsutify-content-end align-items-center">
          <ul className="icon-list">
            <li className="d-lg-flex d-none">
              <Link href="/customer-dashboard" >
                  <Icon name="profile" width={27} height={27} viewBox="0 0 27 27"></Icon>
              </Link>
            </li>
            <li className="right-sidebar-button" onClick={toggleRightSidebar}>
                <Icon name="sideBarToggle" width={25} height={25} viewBox="0 0 25 25"/>
            </li>
          </ul>
          <button className="primary-btn3 d-xl-flex d-none" data-bs-toggle="modal"
              data-bs-target="#user-login" onClick={toggleLoginModal}>
                SignIn / Register
          </button>
          <div
            className="sidebar-button mobile-menu-btn"
            onClick={toggleSidebar}>
           <Icon name = "sideBarToggle" width={25} height={25} viewBox="0 0 25 25"></Icon>
          </div>
        </div>
      </header>
      {showModal && <LoginModal />}
      <div
        className={`right-sidebar-menu ${
          state.isRightSidebar ? "show-right-menu" : ""
        }`}
      >
        <div className="sidebar-logo-area d-flex justify-content-between align-items-center">
          <div className="sidebar-logo-wrap">
            <Link href="/">
              <img alt="image" src="/assets/img/logoAdv.svg" />
            </Link>
            <span className="app-name">Adventurist's Link</span>
          </div>
          <div className="right-sidebar-close-btn" onClick={toggleRightSidebar}>
            <i className="bi bi-x" />
          </div>
        </div>
        <div className="sidebar-content-wrap">
          <div className="category-wrapper">
            <h4>Itinerary Type</h4>
            <ul className="category-list">
              <li>
                <Link href="/activities/activities-details" className="single-category">
                  <div className="icon">
                    <Icon name="adventure" width={45} height={45} viewBox="0 0 45 45"></Icon>
                  </div>
                  <h6>Adventure</h6>
                </Link>
              </li>
              <li>
                <Link
                  href="/activities/activities-details"
                  className="single-category">
                  <div className="icon">
                    <Icon name="historical" width={45} height={45} viewBox="0 0 45 45"></Icon>
                  </div>
                  <h6>Historical</h6>
                </Link>
              </li>
              <li>
                <Link href="/activities/activities-details" className="single-category">
                  <div className="icon">
                  <Icon name="cultural" width={45} height={45} viewBox="0 0 45 45"></Icon>
                  </div>
                  <h6>Cultural</h6>
                </Link>
              </li>
              <li>
                <Link href="/activities/activities-details" className="single-category">
                  <div className="icon">
                   <Icon name="wildlife" width={45} height={45} viewBox="0 0 45 45"></Icon>
                  </div>
                  <h6>Wildlife/Nature</h6>
                </Link>
              </li>
              <li>
                <Link href="/activities/activities-details" className="single-category">
                  <div className="icon">
                   <Icon name="city" width={45} height={45} viewBox="0 0 45 45"></Icon>
                  </div>
                  <h6>City/Urban</h6>
                </Link>
              </li>
            </ul>
          </div>
          <div className="destination-wrapper">
            <h4>Famous Destinations</h4>
            <div className="row">
              <div className="col-lg-12">
                <Swiper
                  {...settings}
                  className="swiper destination-sidebar-slider mb-35"
                >
                  <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <div className="destination-card2">
                        <Link
                          href="/destination/destination-details"
                          className="destination-card-img"
                        >
                          <img
                            src="/assets/img/home2/destination-card-sidebar-img1.png"
                            alt=""
                          />
                        </Link>
                        <div className="batch">
                          <span>5 Itineraries</span>
                        </div>
                        <div className="destination-card2-content">
                          <span>Travel To</span>
                          <h4>
                            <Link href="/destination/destination-details">
                              New York
                            </Link>
                          </h4>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="destination-card2">
                        <Link
                          href="/destination/destination-details"
                          className="destination-card-img"
                        >
                          <img
                            src="/assets/img/home2/destination-card-sidebar-img2.png"
                            alt=""
                          />
                        </Link>
                        <div className="batch">
                          <span>8 Itineraries</span>
                        </div>
                        <div className="destination-card2-content">
                          <span>Travel To</span>
                          <h4>
                            <Link href="/destination/destination-details">
                              Switzerland
                            </Link>
                          </h4>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="destination-card2">
                        <Link
                          href="/destination/destination-details"
                          className="destination-card-img"
                        >
                          <img
                            src="/assets/img/home2/destination-card-sidebar-img3.png"
                            alt=""
                          />
                        </Link>
                        <div className="batch">
                          <span>4 Itineraries</span>
                        </div>
                        <div className="destination-card2-content">
                          <span>Travel To</span>
                          <h4>
                            <Link href="/destination/destination-details">
                              Saudi Arab
                            </Link>
                          </h4>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="destination-card2">
                        <Link
                          href="/destination/destination-details"
                          className="destination-card-img"
                        >
                          <img
                            src="/assets/img/home2/destination-card-sidebar-img4.png"
                            alt=""
                          />
                        </Link>
                        <div className="batch">
                          <span>6 Itineraries</span>
                        </div>
                        <div className="destination-card2-content">
                          <span>Travel To</span>
                          <h4>
                            <Link href="/destination/destination-details">
                              Indonesia
                            </Link>
                          </h4>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                </Swiper>
                <div className="slide-and-view-btn-grp">
                  <div className="destination-sidebar-prev">
                  <Icon name="destPrev" width={53} height={13} viewBox="0 0 53 13"></Icon>
                  </div>
                  <Link href="destination/style2" className="secondary-btn2">
                    View All
                  </Link>
                  <div className="destination-sidebar-next">
                   <Icon name="destPrev" width={53} height={13} viewBox="0 0 53 13"></Icon>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar-bottom">
          <div className="email-area">
            <div className="icon">
             <Icon name="email" width={27} height={27} viewBox="0 0 27 27"></Icon>
            </div>
            <div className="content">
              <span>Email:</span>
              <h6>
                <a href="mailto:adventuritsinfo@gmail.com">adventuritsinfo@gmail.com</a>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header2;
