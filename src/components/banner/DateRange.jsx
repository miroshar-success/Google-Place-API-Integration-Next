import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateRange = ({label="Check in - Check out",style=""}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div className="searchbox-input">
      <label>{label}</label>
      <div className={`custom-select-dropdown ${style}`}>
        <div className="select-input">
          <DatePicker
            selectsRange
            startDate={startDate}
            endDate={endDate}
            onChange={handleDateChange}
            dateFormat="MMM d"
            placeholderText="Select date range"
          />
          <i className="bi bi-chevron-down" />
        </div>
      </div>
    </div>
  );
};

export default DateRange;
