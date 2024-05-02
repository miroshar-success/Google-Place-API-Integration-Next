"use client"
import React, { useRef, useState, useEffect } from "react";
import { useLoadScript, Autocomplete } from "@react-google-maps/api";

const scriptOptions = {
  googleMapsApiKey: "AIzaSyCMTO6uC2oPpuii98yZi68pKaoIpq2YT_k",
  libraries: ["places"],
};

export default function SearchForm({ action }) {
  const { isLoaded, loadError } = useLoadScript(scriptOptions);
  const [autocomplete, setAutocomplete] = useState(null);
  const autocompleteRef = useRef(null);
  const inputEl = useRef(null);

  useEffect(() => {
    if (isLoaded) {
      setAutocomplete(autocompleteRef.current);
    }
  }, [isLoaded]);

  // Handle the keypress for input
  const onKeypress = (e) => {
    // On enter pressed
    if (e.key === "Enter") {
      e.preventDefault();
      return false;
    }
  };

  const onPlaceChanged = (e) => {
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
        console.log(selectedPlace);
      }
    }
  };

  return (
    <>
      {loadError && (
        <div>Google Map script can't be loaded, please reload the page</div>
      )}

      {isLoaded && (
        <React.Fragment>
          <label>
            Destination <span>*</span>
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
              onKeyPress={onKeypress}
              placeholder="Change this to Location Integration"
            />
          </Autocomplete>
        </React.Fragment>
      )}
    </>
  );
}
