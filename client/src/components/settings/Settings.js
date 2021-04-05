import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { themeVars } from "../GlobalStyles";
import { auth } from "../sign-in/Authentication";
import { removeCurrentUser } from "../../actions";
import { PreferenceContext } from "../preference/PreferenceContext";

import DefaultProfilePhoto from "../../assets/default-profile.png";
import { IoMdSettings } from "react-icons/io";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { CgNotes } from "react-icons/cg";
import { ImCross } from "react-icons/im";
import Dialog from "@material-ui/core/Dialog";

const Wrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 100px);
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

  &.modal {
    position: absolute;
    top: 20px;
    right: 2px;
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

const CreditsContainer = styled.div`
  height: 100vh;
  overflow: scroll;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${themeVars.tintedWhite};
`;

const CreditsHeading = styled.h2`
  font-size: 22px;
  color: ${themeVars.green};
  text-decoration: underline;
`;

const SubHeading = styled.h3`
  font-size: 17px;
  color: ${themeVars.darkGray};
  width: 70%;
  text-align: left;
  margin-bottom: 0;
`;

const UL = styled.ul`
  width: 70%;
  margin-top: 8px;
  font-size: 15px;
`;

const LI = styled.li`
  color: ${themeVars.darkGray};
  font-size: 15px;
`;

const Thanks = styled.p`
  color: ${themeVars.darkGray};
  width: 80%;
  font-size: 15px;
`;

const Copyright = styled.div`
  color: ${themeVars.darkGray};
  margin: 20px 0 100px 0;
  width: 80%;
  text-align: center;
  font-size: 15px;
`;

const Settings = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const currentUser = useSelector((state) => state.currentUser.currentUser);
  const { setPreference } = useContext(PreferenceContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Wrapper>
      <UserPhoto
        src={
          currentUser.userPhoto ? currentUser.userPhoto : DefaultProfilePhoto
        }
      />
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
          <StyledBtn className="small" onClick={handleClickOpen}>
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
      <Dialog fullScreen open={open} onClose={handleClose}>
        <StyledBtn className="small modal" onClick={handleClose}>
          <ImCross
            style={{
              height: "23px",
              width: "23px",
              position: "relative",
              top: "2px",
              color: `${themeVars.coralOrange}`,
            }}
          />
        </StyledBtn>
        <CreditsContainer>
          <CreditsHeading>Credits</CreditsHeading>
          <SubHeading>APIs:</SubHeading>
          <UL>
            <LI>PetFinder API</LI>
            <LI>Abstract IP Geolocation API</LI>
            <LI>Google Maps JavaScript API</LI>
            <LI>OpenCage Data API</LI>
            <LI>Stripe API</LI>
          </UL>
          <SubHeading>{`Authentication & Database:`}</SubHeading>
          <UL>
            <LI>Firebase</LI>
          </UL>
          <CreditsHeading>Special Thanks</CreditsHeading>
          <Thanks>
            First and foremost, I'd like to thank my instructor and the TCs from
            the Concordia Bootcamp. Without their guidance and continuous
            support throughout the Bootcamp, this project would not have been
            possible. Thank you, Tiffany, Diana, Richard, and Bryce! You are the
            best!!
          </Thanks>
          <Thanks>
            {`I'd also like to thank my classmates Chris and Zayd. The friendship
            we have built over the past 8 months has been invaluable to me. I
            will certainly miss all the chats and video calls :)`}
          </Thanks>
          <Thanks>
            Lastly, a big thank you to my mom, who has provided me with
            tremendous support in my new journey to become a web developer.
          </Thanks>
          <CreditsHeading>Copyright</CreditsHeading>
          <Copyright>
            Copyright © 2021 Aya Sato, <br />
            All Rights Reserved
          </Copyright>
        </CreditsContainer>
      </Dialog>
    </Wrapper>
  );
};

export default Settings;
