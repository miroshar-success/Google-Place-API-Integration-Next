import React, { useState, useEffect, useRef } from "react";

const TourTypeDropdown = () => {
  const [isActive, setIsActive] = useState(false);
  const [selectedTourType, setSelectedTourType] = useState("Family Tour");
  const dropdownRef = useRef(null);

  const handleToggleActive = () => {
    setIsActive(!isActive);
  };

  const handleSelectTourType = (tourType) => {
    setSelectedTourType(tourType);
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

  const tourTypes = [
    "Family Tour",
    "Honeymoon Tour",
    "Group Tour",
    "Adventure Tour",
    "Solo Tour",
  ];

  return (
    <div className={`searchbox-input`}>
      <label>Tour Type</label>
      <div className="custom-select-dropdown" ref={dropdownRef}>
        <div className="select-input" onClick={handleToggleActive}>
          <input type="text" readOnly value={selectedTourType} />
          <i className="bi bi-chevron-down" />
        </div>
        <div className={`${isActive ? "active" : ""} custom-select-wrap two`}>
          <ul className="option-list">
            {tourTypes.map((tourType, index) => (
              <li
                key={index}
                className="single-item"
                onClick={() => handleSelectTourType(tourType)}
              >
                <h6>{tourType}</h6>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TourTypeDropdown;
