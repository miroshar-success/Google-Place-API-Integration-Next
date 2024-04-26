import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

const DropdownCard = ({ img, title, tourCount }) => {
  const [isActive, setIsActive] = useState(false);
  const dropdownRef = useRef(null);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const handleClickOutside = (event) => {
    // Check if the clicked element is not the button that toggles the dropdown
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      isActive
    ) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    // Attach the click outside event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isActive]);

  return (
    <>
      <div className="destination-dropdown-card" ref={dropdownRef}>
        <div className="destination-dropdown-card-img">
          <img src={img} alt="" />
        </div>
        <div className="eg-batch">
          <span>{tourCount} Tour</span>
        </div>
        <div className="destination-dropdown-content">
          <div className="title">
            <h4>
              <Link href="/destination/destination-details">{title}</Link>
            </h4>
          </div>
          <Link href="/destination/destination-details" className="details-btn">
            View Details
          </Link>
        </div>
        <div className="destination-dropdown-icon " onClick={handleClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={8}
            viewBox="0 0 16 8"
          >
            <path d="M0.1104 2.08367e-06L0 1.39876e-06L8 8L16 0L15.8896 1.44772e-08L12.5714 9.94292e-07L8 4.57143L3.42857 1.09903e-06L0.1104 2.08367e-06Z" />
          </svg>
        </div>
        <div className={`${isActive ? "active" : ""} destination-wrap`}>
          <ul className="destination-list">
            {[
              "Jakarta",
              "Bali",
              "Yogyakarta",
              "Bali",
              "Yogyakarta",
              "Bandung",
              "Makassar",
              "Semarang",
              "Lombok",
            ].map((destination, index) => (
              <li key={index}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={9}
                  height={13}
                  viewBox="0 0 9 13"
                >
                  <path d="M4.5 0C3.30653 0 2.16193 0.50213 1.31802 1.39593C0.474106 2.28973 0 3.50198 0 4.766C0 7.28331 4.00909 12.6082 4.18091 12.8379C4.21924 12.8885 4.26781 12.9293 4.32304 12.9574C4.37827 12.9854 4.43874 13 4.5 13C4.56126 13 4.62173 12.9854 4.67696 12.9574C4.73219 12.9293 4.78076 12.8885 4.81909 12.8379C4.99091 12.6082 9 7.28331 9 4.766C9 3.50198 8.52589 2.28973 7.68198 1.39593C6.83807 0.50213 5.69347 0 4.5 0ZM4.5 6.06581C4.17636 6.06581 3.85998 5.96417 3.59089 5.77373C3.32179 5.5833 3.11205 5.31263 2.9882 4.99595C2.86434 4.67927 2.83194 4.3308 2.89508 3.99461C2.95822 3.65843 3.11407 3.34962 3.34292 3.10724C3.57177 2.86487 3.86334 2.69981 4.18076 2.63294C4.49818 2.56606 4.8272 2.60038 5.12621 2.73156C5.42522 2.86273 5.68078 3.08487 5.86059 3.36987C6.04039 3.65488 6.13636 3.98995 6.13636 4.33272C6.13636 4.79237 5.96396 5.23319 5.65708 5.5582C5.35021 5.88322 4.93399 6.06581 4.5 6.06581Z" />
                </svg>
                <Link href="/destination/destination-details">
                  {destination}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default DropdownCard;
