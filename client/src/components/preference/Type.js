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
  width: 100px;
  font-size: 16px;
  position: relative;
  top: -15px;
  left: 15px;
  font-weight: normal;
  margin-bottom: 10px;

  span {
    color: ${themeVars.purple};
    font-size: 18px;
    background: ${themeVars.white};
  }
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

const RequiredMessage = styled.p`
  color: ${themeVars.purple};
  font-size: 16px;
  text-align: center;
`;

const Type = ({ register, errors }) => {
  return (
    <Wrapper>
      <Heading>
        Animal Type <span> *</span>
      </Heading>
      <TypeDetails>
        <InputContainer>
          <Label htmlFor="dog" className="container">
            Dogs
            <input
              type="radio"
              id="dog"
              name="type"
              value="dog"
              ref={register({ required: true })}
            />
            <span className="checkmark"></span>
          </Label>
        </InputContainer>
        <InputContainer>
          <Label htmlFor="cat" className="container">
            Cats
            <input
              type="radio"
              id="cat"
              name="type"
              value="cat"
              ref={register({ required: true })}
            />
            <span className="checkmark"></span>
          </Label>
        </InputContainer>
      </TypeDetails>
      {errors.type && (
        <RequiredMessage>This field is required.</RequiredMessage>
      )}
    </Wrapper>
  );
};

export default Type;
