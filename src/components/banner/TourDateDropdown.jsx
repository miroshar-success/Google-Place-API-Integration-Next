import React, { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TourDateDropdown = ({ data, labelType, style, noScroll }) => {
  const [isActive, setIsActive] = useState(false);
  const [selectedDate, setSelectedDate] = useState(
    data.length > 0 ? data[0] : ""
  );
  const dropdownRef = useRef(null);

  const handleToggleActive = () => {
    setIsActive(!isActive);
  };

  const handleSelectDate = (date) => {
    setSelectedDate(date);
    setIsActive(false);
  };

  return (
    <div className={`searchbox-input`}>
      <label>{labelType}</label>
      <div className={`${style} custom-select-dropdown`} ref={dropdownRef}>
        <div className="select-input" onClick={handleToggleActive}>
          <input type="text" readOnly value={selectedDate} />
          <i className="bi bi-chevron-down" />
        </div>
        <div
          className={`${isActive ? "active" : ""} custom-select-wrap `}
        >
          <DatePicker
            selected={new Date()}
            onChange={(date) => handleSelectDate(date)}
            calendarClassName="custom-calendar"
            inline
          />
        </div>
      </div>
    </div>
  );
};

export default TourDateDropdown;
