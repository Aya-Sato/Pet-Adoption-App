import React from "react";
import styled from "styled-components";
import { themeVars } from "../GlobalStyles";

const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${themeVars.gray};
  border-bottom: 1px solid ${themeVars.gray};
  margin-top: 8px;
  background: ${themeVars.white};
`;

const Heading = styled.h3`
  font-size: 16px;
  font-weight: normal;
  margin-left: 15px;
  padding: 10px 0;
  background: ${themeVars.white};
`;

const Label = styled.label``;
const SliderInput = styled.input``;
const Slider = styled.span``;

const Photo = () => {
  return (
    <Wrapper>
      <Heading>Show pets without photos</Heading>
      <Label>
        <SliderInput type="checkbox" />
        <Slider></Slider>
      </Label>
    </Wrapper>
  );
};

export default Photo;
