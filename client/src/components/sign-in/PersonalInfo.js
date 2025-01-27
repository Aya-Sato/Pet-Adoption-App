import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { themeVars } from "../GlobalStyles";
import { FaPaw } from "react-icons/fa";

import { updateCurrentUser } from "../../actions";
import { addUserNameAndEmail } from "../../helpers/db-helpers";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 10%;
`;

const Heading = styled.h2`
  font-size: 25px;
  color: ${themeVars.darkGray};
`;

const Input = styled.input`
  width: 70%;
  font-size: 20px;
  border: none;
  background: ${themeVars.tintedWhite};
  margin-top: 20px;

  &:focus {
    outline: none !important;
  }

  &:focus-visible {
    outline: 2px solid ${themeVars.yellow};
  }
`;

const LogoContainer = styled.div`
  margin: 32px 0 10px 0;
`;

const ContinueBtn = styled.button`
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

const PersonalInfo = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const history = useHistory();
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.currentUser.currentUserId);

  const updateName = (ev) => {
    setName(ev.target.value);
  };

  const updateEmail = (ev) => {
    setEmail(ev.target.value);
  };

  return (
    <Wrapper>
      <TopSection />
      <Form>
        <Heading>My name is</Heading>
        <div style={{ borderBottom: `2px solid ${themeVars.coralOrange}` }}>
          <Input type="text" id="name" onChange={updateName} />
        </div>
        <LogoContainer>
          <svg width="0" height="0">
            <linearGradient id="gradient" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop stopColor={`${themeVars.coralOrange}`} offset="0%" />
              <stop stopColor={`${themeVars.yellow}`} offset="40%" />
              <stop stopColor={`${themeVars.teaGreen}`} offset="100%" />
            </linearGradient>
          </svg>
          <FaPaw
            style={{
              fontSize: "35px",
              transform: "rotate(-30deg)",
              fill: "url(#gradient)",
            }}
          />
        </LogoContainer>
        <Heading>My email is</Heading>
        <div style={{ borderBottom: `2px solid ${themeVars.coralOrange}` }}>
          <Input type="email" id="email" onChange={updateEmail} />
        </div>
        <ContinueBtn
          type="button"
          onClick={() => {
            dispatch(updateCurrentUser(name, email));
            addUserNameAndEmail(userId, name, email);
            history.push("/welcome");
          }}
        >
          Continue
        </ContinueBtn>
      </Form>
      <BottomSection />
    </Wrapper>
  );
};

export default PersonalInfo;
