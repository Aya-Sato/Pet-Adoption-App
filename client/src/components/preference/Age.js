import React from "react";
import styled from "styled-components";
import { themeVars } from "../GlobalStyles";

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
  font-size: 16px;
  position: relative;
  top: -15px;
  left: 15px;
  font-weight: normal;
  margin-bottom: 10px;
`;

const AgeDetails = styled.div`
  display: flex;
  justify-content: space-around;
  background: ${themeVars.white};
`;

const InputContainer = styled.div`
  background: ${themeVars.white};
`;

const Label = styled.label`
  font-size: 16px;
  color: ${themeVars.darkGray};
`;

const Input = styled.input``;

const Age = () => {
  return (
    <Wrapper>
      <Heading>Age</Heading>
      <AgeDetails>
        <InputContainer>
          <Label htmlFor="baby">Baby</Label>
          <Input type="checkbox" id="baby" name="age" value="baby" />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="young">Young</Label>
          <Input type="checkbox" id="young" name="age" value="young" />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="adult">Adult</Label>
          <Input type="checkbox" id="adult" name="age" value="adult" />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="senior">Senior</Label>
          <Input type="checkbox" id="senior" name="age" value="senior" />
        </InputContainer>
      </AgeDetails>
    </Wrapper>
  );
};

export default Age;
