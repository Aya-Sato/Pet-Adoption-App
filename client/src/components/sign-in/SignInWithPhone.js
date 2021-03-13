import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import firebase from "./Authentication";
import { themeVars } from "../GlobalStyles";
import CanadianFlag from "../../assets/flag-canada.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 110px;
`;

const Heading = styled.h2`
  font-size: 30px;
  color: ${themeVars.darkGray};
  margin-top: 0;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Flag = styled.img`
  position: relative;
  top: 8px;
  margin-right: 15px;
`;

const CountryCode = styled.span`
  font-size: 20px;
  border-bottom: 2px solid ${themeVars.coralOrange};
  margin-top: 20px;
`;

const Input = styled.input`
  width: 60%;
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

const Recaptcha = styled.div`
  margin-top: 20px;
`;

const Caution = styled.p`
  width: 80%;
  color: ${themeVars.darkGray};
  font-size: 15px;
`;

const SendVerificationBtn = styled.button`
  color: ${themeVars.white};
  font-size: 18px;
  background: ${themeVars.coralOrange};
  border: none;
  border-radius: 15px;
  padding: 10px 20px;
  margin-top: 20px;

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

const SignInWithPhone = ({ setCodeResult }) => {
  const [phone, setPhone] = useState();
  const [recaptchaVerifier, setRecaptchaVerifier] = useState();
  const history = useHistory();

  useEffect(() => {
    setRecaptchaVerifier(
      new firebase.auth.RecaptchaVerifier("recaptcha-container")
    );
  }, []);

  useEffect(() => {
    if (recaptchaVerifier) {
      recaptchaVerifier.render();
    }
  }, [recaptchaVerifier]);

  const UpdatePhoneNumber = (ev) => {
    setPhone(ev.target.value);
  };

  const phoneAuth = () => {
    const phoneNumber = `+1${phone}`;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, recaptchaVerifier)
      .then(function (confirmationResult) {
        window.confirmationResult = confirmationResult;
        setCodeResult(confirmationResult);
        alert("Message sent");
        history.push("/verification-code");
      })
      .catch(function (error) {
        alert(error.message);
      });
  };

  return (
    <Wrapper>
      <TopSection />
      <Form>
        <Heading>My number is</Heading>
        <InputContainer>
          <Flag src={CanadianFlag} alt="Canadian flag" />
          <CountryCode>+1</CountryCode>
          <Input type="text" id="number" onChange={UpdatePhoneNumber} />
        </InputContainer>
        <Recaptcha id="recaptcha-container"></Recaptcha>
        <Caution>
          When you tap "Send verification code", Adopet will send a text with
          verification code. Message and data rates may apply. The verified
          phone number can be used to log in.
        </Caution>
        <SendVerificationBtn type="button" onClick={() => phoneAuth()}>
          Send verification code
        </SendVerificationBtn>
      </Form>
      <BottomSection />
    </Wrapper>
  );
};

export default SignInWithPhone;
