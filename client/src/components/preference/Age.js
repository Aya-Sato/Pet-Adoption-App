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
  border-bottom: 1px solid ${themeVars.gray};
  background: ${themeVars.white};
`;

const Heading = styled.h3`
  width: 100px;
  font-size: 16px;
  position: relative;
  top: -15px;
  left: 15px;
  font-weight: normal;
  margin-bottom: 10px;
`;

const AgeDetails = styled.div`
  display: flex;
  flex-direction: column;
  background: ${themeVars.white};
`;

const Row = styled.div`
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

const Age = () => {
  return (
    <Wrapper>
      <Heading>Age</Heading>
      <AgeDetails>
        <Row>
          <InputContainer>
            <Label htmlFor="baby" className="container">
              Baby
              <input type="checkbox" id="baby" name="age" value="baby" />
              <span className="checkmark"></span>
            </Label>
          </InputContainer>
          <InputContainer>
            <Label htmlFor="young" className="container">
              Young
              <input type="checkbox" id="young" name="age" value="young" />
              <span className="checkmark"></span>
            </Label>
          </InputContainer>
        </Row>
        <Row>
          <InputContainer>
            <Label htmlFor="adult" className="container">
              Adult
              <input type="checkbox" id="adult" name="age" value="adult" />
              <span className="checkmark"></span>
            </Label>
          </InputContainer>
          <InputContainer>
            <Label htmlFor="senior" className="container">
              Senior
              <input type="checkbox" id="senior" name="age" value="senior" />
              <span className="checkmark"></span>
            </Label>
          </InputContainer>
        </Row>
      </AgeDetails>
    </Wrapper>
  );
};

export default Age;
