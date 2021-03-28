import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { themeVars } from "./GlobalStyles";
import { auth } from "../components/sign-in/Authentication";
import { removeCurrentUser } from "../actions";
import { PreferenceContext } from "./preference/PreferenceContext";

import { IoMdSettings } from "react-icons/io";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { CgNotes } from "react-icons/cg";

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const UserPhoto = styled.img`
  height: 110px;
  width: 110px;
  border-radius: 50%;
  margin-top: 50px;
`;

const UserName = styled.div`
  margin-top: 20px;
  font-size: 25px;
`;

const BtnsContainer = styled.div`
  margin-top: 25px;
  display: flex;
  align-items: flex-start;
`;

const StyledBtn = styled.button`
  border-radius: 50%;
  border: none;
  outline: none;
  background-color: ${themeVars.white};
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.15);
  margin: 0 25px;

  &.small {
    height: 48px;
    width: 48px;
  }

  &.big {
    height: 60px;
    width: 60px;
    background: linear-gradient(
      to top right,
      ${themeVars.coralOrange} 0%,
      ${themeVars.yellow} 60%,
      ${themeVars.teaGreen} 100%
    );
  }

  &:active {
    transform: scale(1.1);
  }

  &:focus-visible {
    outline: 2px solid ${themeVars.yellow};
  }
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const BtnLabel = styled.div`
  color: ${themeVars.darkGray};
  font-size: 12px;
  text-align: center;
  margin-top: 10px;
`;

const ProTip = styled.div`
  margin: 50px 0 100px 0;
  height: 60px;
  width: 90%;
  font-size: 15px;
  text-align: center;
  background: linear-gradient(
    to top right,
    ${themeVars.coralOrange} 0%,
    ${themeVars.yellow} 60%,
    ${themeVars.teaGreen} 100%
  );
  opacity: 60%;
  padding-top: 20px;
  border-radius: 15px;

  @media (max-width: 320px) {
    padding-top: 12px;
  }
`;

const Settings = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser.currentUser);
  const { setPreference } = useContext(PreferenceContext);

  return (
    <Wrapper>
      <UserPhoto src={currentUser.userPhoto} />
      <UserName>{currentUser.name}</UserName>
      <BtnsContainer>
        <BtnContainer>
          <StyledBtn
            className="small"
            onClick={() => {
              setPreference({});
              auth.signOut();
              history.push("/");
              dispatch(removeCurrentUser());
              sessionStorage.clear();
            }}
          >
            <RiLogoutCircleRLine
              style={{
                height: "25px",
                width: "25px",
                position: "relative",
                top: "2px",
                color: `${themeVars.darkGray}`,
              }}
            />
          </StyledBtn>
          <BtnLabel>LOG OUT</BtnLabel>
        </BtnContainer>
        <BtnContainer>
          <StyledBtn
            className="big"
            onClick={() => {
              history.push("/preference");
            }}
          >
            <IoMdSettings
              style={{
                height: "35px",
                width: "35px",
                position: "relative",
                top: "2px",
                color: `${themeVars.white}`,
              }}
            />
          </StyledBtn>
          <BtnLabel>SETTINGS</BtnLabel>
        </BtnContainer>
        <BtnContainer>
          <StyledBtn
            className="small"
            onClick={() => {
              history.push("/credits");
            }}
          >
            <CgNotes
              style={{
                height: "23px",
                width: "23px",
                position: "relative",
                top: "2px",
                color: `${themeVars.darkGray}`,
              }}
            />
          </StyledBtn>
          <BtnLabel>CREDITS</BtnLabel>
        </BtnContainer>
      </BtnsContainer>
      <ProTip>Pro tip: Swiping Right is the key to happiness!</ProTip>
    </Wrapper>
  );
};

export default Settings;
