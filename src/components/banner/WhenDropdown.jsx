import React, { useState, useEffect, useRef } from "react";

const WhenDropdown = () => {
  const [isActive, setIsActive] = useState(false);
  const [selectedWhen, setSelectedWhen] = useState("Monday");
  const dropdownRef = useRef(null);

  const handleToggleActive = () => {
    setIsActive(!isActive);
  };

  const handleSelectWhen = (when) => {
    setSelectedWhen(when);
    setIsActive(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <div className={`searchbox-input`}>
      <label>When</label>
      <div className="custom-select-dropdown" ref={dropdownRef}>
        <div className="select-input" onClick={handleToggleActive}>
          <input type="text" readOnly value={selectedWhen} />
          <i className="bi bi-chevron-down" />
        </div>
        <div className={`${isActive ? "active" : ""} custom-select-wrap two`}>
          <ul className="option-list">
            {daysOfWeek.map((day, index) => (
              <li
                key={index}
                className="single-item"
                onClick={() => handleSelectWhen(day)}
              >
                <h6>{day}</h6>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhenDropdown;
