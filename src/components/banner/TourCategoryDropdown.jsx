import React, { useState, useEffect, useRef } from "react";

const TourCategoryDropdown = ({ data, labelType, style,noScroll }) => {
  const [isActive, setIsActive] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(
    data.length > 0 ? data[0] : ""
  );
  const dropdownRef = useRef(null);

  const handleToggleActive = () => {
    setIsActive(!isActive);
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
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

  return (
    <div className={`searchbox-input`}>
      <label>{labelType}</label>
      <div className={`${style} custom-select-dropdown`} ref={dropdownRef}>
        <div className="select-input" onClick={handleToggleActive}>
          <input type="text" readOnly value={selectedCategory} />
          <i className="bi bi-chevron-down" />
        </div>
        <div
          className={`${isActive ? "active" : ""} custom-select-wrap ${noScroll} `}
        >
          <ul className="option-list">
            {data.map((category, index) => (
              <li
                key={index}
                className="single-item"
                onClick={() => handleSelectCategory(category)}
              >
                <h6>{category}</h6>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TourCategoryDropdown;
