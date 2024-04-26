import React, { useState, useEffect, useRef } from "react";
import destinations from "../../data/destinationData";
const DestinationSearch = ({ destination, style, }) => {
  const [isActive, setIsActive] = useState(false);
  const [filteredDestination, setFilteredDestination] = useState("");
  const [selectedDestination, setSelectedDestination] = useState(
    destinations.length > 0 ? destinations[0].name : ""
  );
  const searchboxRef = useRef(null);

  const handleToggleActive = () => {
    setIsActive(!isActive);
  };

  const handleFilterDestination = (event) => {
    const query = event.target.value;
    setFilteredDestination(query);
  };

  const handleSelectDestination = (destination) => {
    setSelectedDestination(destination);
    setFilteredDestination("");
    setIsActive(false);
  };

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  const handleClickOutside = (event) => {
    if (searchboxRef.current && !searchboxRef.current.contains(event.target)) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const filteredDestinations = destinations.filter((destination) =>
    destination.name.toLowerCase().includes(filteredDestination.toLowerCase())
  );

  return (
    <div
      ref={searchboxRef}
      className={`searchbox-input ${isActive ? "active" : ""}`}
      onClick={handleToggleActive}
    >
      <label>{destination}</label>
      <div className={`${style} custom-select-dropdown`}>
        <div className="select-input">
          <input
            type="text"
            readOnly
            value={selectedDestination}
            onClick={handleToggleActive}
          />
          <i className="bi bi-chevron-down" />
        </div>
        <div className={`${isActive ? "active" : ""} custom-select-wrap `}>
          <div className="custom-select-search-area">
            <i className="bx bx-search" />
            <input
              type="text"
              placeholder="Type Your Destination"
              value={filteredDestination}
              onChange={handleFilterDestination}
              onClick={stopPropagation}
            />
          </div>
          <ul className="option-list">
            {filteredDestinations.length > 0 ? (
              filteredDestinations.map((destination, index) => (
                <li
                  key={index}
                  onClick={() => handleSelectDestination(destination.name)}
                >
                  <div className="destination">
                    <h6>{destination.name}</h6>
                    <p>{destination.locations}</p>
                  </div>
                  <div className="tour">
                    <span>
                      {destination.tourCount} <br /> Tour
                    </span>
                  </div>
                </li>
              ))
            ) : (
              <li>
                <div className="destination">
                  <h6>Not Found</h6>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DestinationSearch;
