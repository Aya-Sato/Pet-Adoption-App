import React from "react";
import styled from "styled-components";
import { themeVars } from "../GlobalStyles";

const Wrapper = styled.div`
  width: 100%;
  height: 60px;
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
  position: relative;
  width: 41px;
  height: 24px;
  -webkit-appearance: none;
  background: ${themeVars.gray};
  outline: none;
  border-radius: 15px;
  transition: 0.5s;

  &:checked {
    background: ${themeVars.coralOrange};
  }

  &:before {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 15px;
    top: 2px;
    left: 2px;
    background: ${themeVars.white};
    transition: 0.5s;
  }

  &:checked:before {
    left: 19px;
  }
`;

const Photo = () => {
  return (
    <Wrapper>
      <Heading>Show pets without photos</Heading>
      <Label>
        <SliderInput type="checkbox" />
      </Label>
    </Wrapper>
  );
};

export default Photo;
