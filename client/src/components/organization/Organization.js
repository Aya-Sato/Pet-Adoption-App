import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { themeVars } from "../GlobalStyles";
import { ImLocation } from "react-icons/im";

import Map from "./Map";
const { REACT_APP_map_apiKey } = process.env;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  z-index: 1;
  position: relative;
  top: 75px;
`;

const Name = styled.div`
  position: relative;
  top: 100px;
  color: ${themeVars.darkGray};
  font-size: 22px;
  text-align: center;
`;

const City = styled.div`
  position: relative;
  top: 100px;
  margin-top: 15px;
  color: ${themeVars.darkGray};
`;

const Address = styled.div`
  position: relative;
  top: 100px;
`;

const TopSection = styled.section`
  width: 100%;
  height: 150px;
  position: absolute;
  top: 0;
  background: linear-gradient(
    to top left,
    ${themeVars.coralOrange} 0%,
    ${themeVars.yellow} 60%,
    ${themeVars.teaGreen} 100%
  );
`;

const MapContainer = styled.div`
  position: relative;
  top: 120px;
`;

const loadGoogleMapScript = (callback) => {
  if (
    typeof window.google === "object" &&
    typeof window.google.maps === "object"
  ) {
    callback();
  } else {
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${REACT_APP_map_apiKey}`;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener("load", callback);
  }
};

const Organization = () => {
  const [loadMap, setLoadMap] = useState(false);
  const org = useSelector((state) => state.organization.organization);

  useEffect(() => {
    loadGoogleMapScript(() => {
      setLoadMap(true);
    });
  }, []);

  return (
    <>
      {org && (
        <Wrapper>
          <TopSection />
          <Image src={org.photos[0].large} alt="company logo" />
          <Name>{org.name}</Name>
          <City>
            <ImLocation
              style={{
                fontSize: "17px",
                position: "relative",
                top: "2px",
              }}
            />
            {org.address.city}, {org.address.state}
          </City>
          <MapContainer>
            {!loadMap ? <div>Loading...</div> : <Map />}
          </MapContainer>
          <Address>{org.address.address1}</Address>
          {org.address.address2 && <Address>{org.address.address2}</Address>}
          <Address>{org.address.city}</Address>
          <Address>
            {org.address.state}, {org.address.postcode}
          </Address>
          <Address>{org.address.country}</Address>
        </Wrapper>
      )}
    </>
  );
};

export default Organization;
