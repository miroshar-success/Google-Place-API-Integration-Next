"use client"
import React, { useRef, useState, useEffect } from "react";
import { useLoadScript, Autocomplete } from "@react-google-maps/api";

const scriptOptions = {
  googleMapsApiKey: "AIzaSyCMTO6uC2oPpuii98yZi68pKaoIpq2YT_k",
  libraries: ["places"],
};

export default function MultiSelectAutocomplete({ label }) {
  const { isLoaded, loadError } = useLoadScript(scriptOptions);
  const [autocomplete, setAutocomplete] = useState(null);
  const [selectedPlaces, setSelectedPlaces] = useState([]);
  const autocompleteRef = useRef(null);
  const inputEl = useRef(null);

  useEffect(() => {
    if (isLoaded) {
      setAutocomplete(autocompleteRef.current);
    }
  }, [isLoaded]);

  const onPlaceChanged = () => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      if (place && place.geometry && place.geometry.location) {
        const selectedPlace = {
          name: place.name,
          location: {
            type: "Point",
            coordinates: [place.geometry.location.lng(), place.geometry.location.lat()],
          },
          placeId: place.place_id,
          address: place.formatted_address,
        };
        setSelectedPlaces([...selectedPlaces, selectedPlace]);
        inputEl.current.value = ""; // Clear input after selection
      }
    }
  };

  const removePlace = (placeId) => {
    const updatedPlaces = selectedPlaces.filter((place) => place.placeId !== placeId);
    setSelectedPlaces(updatedPlaces);
  };

  return (
    <>
      {loadError && (
        <div>Google Map script can't be loaded, please reload the page</div>
      )}

      {isLoaded && (
        <React.Fragment>
          <label>
            {label} <span>*</span>
          </label>
          <Autocomplete
            onLoad={(autocomplete) => {
              setAutocomplete(autocomplete);
              autocompleteRef.current = autocomplete;
            }}
            fields={["place_id", "name", "geometry", "formatted_address"]}
            onPlaceChanged={onPlaceChanged}
          >
            <input
              ref={inputEl}
              type="text"
              className="form-input"
              placeholder="Search for places"
            />
          </Autocomplete>
          <div className="selected-places">
            Selected Places:
            <ul>
              {selectedPlaces.map((place) => (
                <li key={place.placeId} className="select-places-li">
                  {place.name} ({place.address}){" "}
                  <button onClick={() => removePlace(place.placeId)} className="selected-place-remove">X</button>
                </li>
              ))}
            </ul>
          </div>
        </React.Fragment>
      )}
    </>
  );
}
