import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const Map = () => {
  const googleMapRef = useRef(null);
  let googleMap = null;

  useEffect(() => {
    googleMap = initGoogleMap();
    createMarker();
  }, []);

  const initGoogleMap = () => {
    return new window.google.maps.Map(googleMapRef.current, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
      backgroundColor: "transparent !important",
    });
  };

  const createMarker = () =>
    new window.google.maps.Marker({
      position: { lat: -34.397, lng: 150.644 },
      map: googleMap,
    });

  return (
    <Wrapper>
      <div ref={googleMapRef} style={{ width: "100vw", height: "300px" }} />
    </Wrapper>
  );
};

export default Map;
