import React from "react";
import styled from "styled-components";
import { themeVars } from "../GlobalStyles";

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
  justify-content: center;
  background: ${themeVars.white};
`;

const InputContainer = styled.div`
  margin: 0 30px;
  background: ${themeVars.white};
`;

const Label = styled.label`
  font-size: 16px;
  color: ${themeVars.darkGray};
`;

const Input = styled.input``;

const Type = () => {
  return (
    <Wrapper>
      <Heading>Animal Type</Heading>
      <TypeDetails>
        <InputContainer>
          <Label htmlFor="dog">Dogs</Label>
          <Input type="checkbox" id="dog" name="type" value="dog" />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="cat">Cats</Label>
          <Input type="checkbox" id="cat" name="type" value="cat" />
        </InputContainer>
      </TypeDetails>
    </Wrapper>
  );
};

export default Type;
