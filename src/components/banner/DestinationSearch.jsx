import React, { useState, useEffect, useRef } from "react";
import { useLoadScript, Autocomplete } from "@react-google-maps/api";

const scriptOptions = {
  googleMapsApiKey: "AIzaSyCMTO6uC2oPpuii98yZi68pKaoIpq2YT_k",
  libraries: ["places"],
};

const DestinationSearch = ({ destination, style }) => {
  const { isLoaded, loadError } = useLoadScript(scriptOptions);
  const [autocomplete, setAutocomplete] = useState(null);
  const inputEl = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState("");
  const searchboxRef = useRef(null);

  const onPlaceChanged = () => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      if (place && place.geometry && place.geometry.location) {
        setSelectedDestination(place.name);
        const selectedPlace = {
          name: place.name,
          location: {
            type: "Point",
            coordinates: [
              place.geometry.location.lng(),
              place.geometry.location.lat(),
            ],
          },
          placeId: place.place_id,
          address: place.formatted_address,
        };
      }
    }
  };

  const handleToggleActive = () => {
    setIsActive(!isActive);
  };

  const handleClickOutside = (event) => {
    if (searchboxRef.current && !searchboxRef.current.contains(event.target)) {
      setIsActive(false);
    }
  };
  const stopPropagation = (event) => {
    event.stopPropagation();
  };

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
            {loadError && (
              <div>
                Google Map script can't be loaded, please reload the page
              </div>
            )}
            {isLoaded && (
              <React.Fragment>
                <Autocomplete
                  onLoad={(autocomplete) => {
                    setAutocomplete(autocomplete);
                  }}
                  fields={["place_id", "name", "geometry", "formatted_address"]}
                  onPlaceChanged={onPlaceChanged}
                >
                    <input
                      ref={inputEl}
                      type="text"
                      className="form-input"
                      placeholder="Search for places"
                      onClick={stopPropagation}
                    />
                </Autocomplete>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationSearch;
