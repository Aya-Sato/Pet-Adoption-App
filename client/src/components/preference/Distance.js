import React from "react";
import styled from "styled-components";
import { themeVars } from "../GlobalStyles";
import "./Slider.css";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  border-top: 1px solid ${themeVars.gray};
  background: ${themeVars.white};
`;

const DistanceDetails = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${themeVars.white};
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  background: ${themeVars.white};
`;

const Label = styled.label`
  font-size: 16px;
  margin-left: 15px;
  color: black;
`;

const Mile = styled.div`
  font-size: 16px;
  margin-right: 15px;
  color: ${themeVars.darkGray};
  background: ${themeVars.white};
`;

const RangeInput = styled.input`
  margin: 30px 0 15px 0;
`;

const Distance = ({ distance, setDistance }) => {
  const updateDistance = (ev) => {
    setDistance(ev.target.value);
  };

  return (
    <Wrapper>
      <DistanceDetails>
        <Label htmlFor="distance">Maximum Distance</Label>
        <Mile>{`${distance} mi.`}</Mile>
      </DistanceDetails>
      <InputContainer>
        <RangeInput
          type="range"
          min="100"
          max="500"
          value={distance}
          id="distance"
          className="distance"
          onChange={updateDistance}
        ></RangeInput>
      </InputContainer>
    </Wrapper>
  );
};

export default Distance;
