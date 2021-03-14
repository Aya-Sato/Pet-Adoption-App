import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { themeVars } from "../GlobalStyles";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 20%;
`;

const Heading = styled.h2`
  font-size: 30px;
  color: ${themeVars.darkGray};
`;

const Input = styled.input`
  width: 50%;
  font-size: 20px;
  border: none;
  border-bottom: 2px solid ${themeVars.coralOrange};
  background: ${themeVars.tintedWhite};
  margin-top: 20px;

  &:focus {
    outline: none !important;
  }

  &:focus-visible {
    outline: 2px solid ${themeVars.yellow};
  }
`;

const VerifyBtn = styled.button`
  color: ${themeVars.white};
  font-size: 18px;
  background: ${themeVars.coralOrange};
  border: none;
  border-radius: 15px;
  padding: 10px 20px;
  margin-top: 30px;
  outline: none;

  &:active {
    transform: scale(1.1);
  }

  &:focus-visible {
    outline: 2px solid ${themeVars.yellow};
  }
`;

const TopSection = styled.section`
  width: 100%;
  height: 10%;
  position: absolute;
  top: 0;
  background: linear-gradient(
    to top left,
    ${themeVars.coralOrange} 0%,
    ${themeVars.yellow} 60%,
    ${themeVars.teaGreen} 100%
  );
`;

const BottomSection = styled.section`
  width: 100%;
  height: 10%;
  position: absolute;
  bottom: 0;
  background: linear-gradient(
    to bottom right,
    ${themeVars.coralOrange} 0%,
    ${themeVars.yellow} 60%,
    ${themeVars.teaGreen} 100%
  );
`;

const VerificationCode = ({ codeResult }) => {
  const [verificationCode, setVerificationCode] = useState();
  const history = useHistory();

  const UpdateVerificationCode = (ev) => {
    setVerificationCode(ev.target.value);
  };

  const codeVerify = () => {
    const code = `${verificationCode}`;
    codeResult
      .confirm(code)
      .then(function (result) {
        history.push("./personal-info");
        // const user = result.user;
      })
      .catch(function (error) {
        alert(error.message);
      });
  };

  return (
    <Wrapper>
      <TopSection />
      <Form>
        <Heading>My code is</Heading>
        <Input
          type="text"
          id="verificationCode"
          onChange={UpdateVerificationCode}
        />
        <VerifyBtn type="button" onClick={() => codeVerify()}>
          Verify code
        </VerifyBtn>
      </Form>
      <BottomSection />
    </Wrapper>
  );
};

export default VerificationCode;
