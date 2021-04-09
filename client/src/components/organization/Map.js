import React, { useState, useEffect, useRef } from "react";
import { ip } from "../../constants";

const Map = ({ address }) => {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const googleMapRef = useRef(null);
  let googleMap = null;
  const city = `${address.city}, ${address.state}, ${address.country}`;

  useEffect(() => {
    fetch(`${ip}/organization/${city}`)
      .then((res) => res.json())
      .then((json) => {
        setLatitude(json.data.lat);
        setLongitude(json.data.lng);
      });
  }, []);

  useEffect(() => {
    if (latitude && longitude) {
      googleMap = initGoogleMap();
      createMarker();
    }
  }, [latitude, longitude]);

  const initGoogleMap = () => {
    return new window.google.maps.Map(googleMapRef.current, {
      center: {
        lat: parseFloat(latitude),
        lng: parseFloat(longitude),
      },
      zoom: 8,
      backgroundColor: "transparent !important",
    });
  };

  const createMarker = () =>
    new window.google.maps.Marker({
      position: {
        lat: parseFloat(latitude),
        lng: parseFloat(longitude),
      },
      map: googleMap,
    });

  return <div ref={googleMapRef} style={{ width: "100vw", height: "300px" }} />;
};

export default Map;
