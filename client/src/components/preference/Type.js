import React from "react";
import styled from "styled-components";
import { themeVars } from "../GlobalStyles";
import "./Checkbox.css";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  border-top: 1px solid ${themeVars.gray};
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

const TypeDetails = styled.div`
  display: flex;
  justify-content: space-around;
  background: ${themeVars.white};
`;

const InputContainer = styled.div`
  background: ${themeVars.white};
  width: 80px;
`;

const Label = styled.label`
  font-size: 16px;
  color: ${themeVars.darkGray};
`;

const Type = () => {
  return (
    <Wrapper>
      <Heading>Animal Type</Heading>
      <TypeDetails>
        <InputContainer>
          <Label htmlFor="dog" className="container">
            Dogs
            <input type="checkbox" id="dog" name="type" value="dog" />
            <span className="checkmark"></span>
          </Label>
        </InputContainer>
        <InputContainer>
          <Label htmlFor="cat" className="container">
            Cats
            <input type="checkbox" id="cat" name="type" value="cat" />
            <span className="checkmark"></span>
          </Label>
        </InputContainer>
      </TypeDetails>
    </Wrapper>
  );
};

export default Type;
