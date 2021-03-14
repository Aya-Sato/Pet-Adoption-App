import React from "react";
import styled from "styled-components";
import { themeVars } from "../GlobalStyles";
import { IoIosArrowForward } from "react-icons/io";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  background: ${themeVars.white};
`;

const Heading = styled.h3`
  font-size: 16px;
  position: relative;
  top: -15px;
  left: 15px;
  font-weight: normal;
  margin-bottom: 10px;
`;

const LocationDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${themeVars.white};
`;

const CurrentLocation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  right: 25px;
  background: ${themeVars.white};
`;

const City = styled.div`
  font-size: 16px;
  color: ${themeVars.darkGray};
  background: ${themeVars.white};
`;

const Location = ({ location }) => {
  return (
    <Wrapper>
      <Heading>Location</Heading>
      <LocationDetails>
        <CurrentLocation>
          <City>My Current Location</City>
          <City>{location.city}</City>
        </CurrentLocation>
        <IoIosArrowForward
          style={{
            color: `${themeVars.darkGray}`,
            background: `${themeVars.white}`,
            position: "relative",
            right: "15px",
          }}
        />
      </LocationDetails>
    </Wrapper>
  );
};

export default Location;
