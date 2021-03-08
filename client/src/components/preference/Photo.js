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

const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 52px;
  height: 28px;
  right: 15px;
`;

const SliderInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + .slider {
    background-color: ${themeVars.coralOrange};
  }

  &:focus + .slider {
    background-color: ${themeVars.coralOrange};
  }

  &:checked + .slider:before {
    -webkit-transform: translateX(22px);
    -ms-transform: translateX(22px);
    transform: translateX(22px);
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 5px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const Photo = () => {
  return (
    <Wrapper>
      <Heading>Show pets without photos</Heading>
      <Label>
        <SliderInput type="checkbox" />
        <Slider className="slider"></Slider>
      </Label>
    </Wrapper>
  );
};

export default Photo;
