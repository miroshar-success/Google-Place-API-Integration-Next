import React, { useState, useEffect, useRef } from "react";

const LocationDropdown = () => {
  const [isActive, setIsActive] = useState(false);
  const [filteredLocation, setFilteredLocation] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("Dubai");
  const dropdownRef = useRef(null);

  const handleToggleActive = () => {
    setIsActive(!isActive);
  };

  const handleFilterLocation = (event) => {
    const query = event.target.value;
    setFilteredLocation(query);
  };

  const handleSelectLocation = (location) => {
    setSelectedLocation(location);
    setFilteredLocation("");
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

  const locations = [
    { name: "Dubai", country: "United Arab Emirates", code: "AE" },
    { name: "Cox's Bazar", country: "Bangladesh", code: "BD" },
    { name: "KATHMANDU", country: "Nepal", code: "NP" },
    { name: "Delhi", country: "India", code: "IN" },
    { name: "Sao Paulo", country: "Brazil", code: "BR" },
    { name: "Bangkok", country: "Thailand", code: "TH" },
    { name: "Barcelona", country: "Spain", code: "ES" },
    { name: "Abu Dhabi", country: "United Arab Emirates", code: "AE" },
    { name: "New York", country: "United States", code: "US" },
  ];

  return (
    <div className={`searchbox-input`}>
      <label>Location</label>
      <div className="custom-select-dropdown" ref={dropdownRef}>
        <div className="select-input" onClick={handleToggleActive}>
          <input type="text" readOnly value={selectedLocation} />
          <i className="bi bi-chevron-down" />
        </div>
        <div className="custom-select-wrap">
          <div className="custom-select-search-area">
            <i className="bx bx-search" />
            <input
              type="text"
              placeholder="Type Your Destination"
              value={filteredLocation}
              onChange={handleFilterLocation}
            />
          </div>
          <ul className="option-list">
            {locations
              .filter((location) =>
                location.name
                  .toLowerCase()
                  .includes(filteredLocation.toLowerCase())
              )
              .map((location, index) => (
                <li
                  key={index}
                  onClick={() => handleSelectLocation(location.name)}
                >
                  <div className="destination">
                    <h6>{location.name}</h6>
                    <p>{location.country}</p>
                  </div>
                  <div className="tour">
                    <span>{location.code}</span>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LocationDropdown;
