import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { themeVars } from "../GlobalStyles";
import { FaPaw } from "react-icons/fa";
import { PreferenceContext } from "../preference/PreferenceContext";
import { getPreference, getSwipedPets } from "../../helpers/db-helpers";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoContainer = styled.div`
  margin: 50px 0 10px 0;
`;

const WelcomeUser = styled.h2`
  color: ${themeVars.darkGray};
  font-size: 22px;
  text-align: center;
  margin: 0;
`;

const Heading = styled.h3`
  color: ${themeVars.darkGray};
  font-size: 18px;
  font-weight: normal;
  margin: 30px 0 0 0;
`;

const SubHeading = styled.h4`
  color: ${themeVars.darkGray};
  font-size: 17px;
  margin: 35px 0 5px 0;
`;

const Rules = styled.p`
  width: 80%;
  color: ${themeVars.mediumGray};
  font-size: 15px;
  margin: 0;

  span {
    color: ${themeVars.green};
  }
`;

const Catchline = styled.div`
  font-size: 18px;
  color: ${themeVars.coralOrange};
  font-weight: bold;
  margin: 35px 0 30px 0;
`;

const Button = styled.button`
  color: ${themeVars.white};
  font-size: 18px;
  background: ${themeVars.coralOrange};
  border: none;
  border-radius: 15px;
  padding: 10px 20px;
  margin: 10px 0 80px 0;
  outline: none;

  &:active {
    transform: scale(1.1);
  }

  &:focus-visible {
    outline: 2px solid ${themeVars.yellow};
  }
`;

const Welcome = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const currentUserId = useSelector((state) => state.currentUser.currentUserId);
  const { preference, setPreference } = useContext(PreferenceContext);

  useEffect(() => {
    getPreference(currentUserId, preference, setPreference);
    getSwipedPets(dispatch, currentUserId);
  }, [currentUserId]);

  useEffect(() => {
    if (Object.keys(preference).length > 0) {
      history.push("/main");
    }
  }, [preference]);

  return (
    <Wrapper>
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
      <WelcomeUser>Welcome to Adopet</WelcomeUser>
      <Heading>House rules and tips to help you:</Heading>
      <SubHeading>Application</SubHeading>
      <Rules>
        Most shelters and rescues take applications on a first-come basis.{" "}
        <span>Liking animals does not guarantee their availability.</span> If
        you see a dog or a cat you're interested in, make sure you're ready to
        fill out and submit the application quickly by Super Liking.
      </Rules>
      <SubHeading>Age and Valid Identification</SubHeading>
      <Rules>
        Most shelters and rescues will require you to be at least{" "}
        <span>18 years old</span> to adopt a pet. To verify your age, you'll
        need to provide valid identification to shelter or rescue staff prior to
        adoption.
      </Rules>
      <SubHeading>Adoption Fee</SubHeading>
      <Rules>
        The adoption fee will vary in costs depending on the shelters and
        rescues. Super Liking an animal will prompt you to make{" "}
        <span>a deposit of $50</span> along with your application. The deposit
        is non-refundable, but it will count towards the adoption fee.
      </Rules>
      <Catchline>Be kind. Be respectful. Be loving.</Catchline>
      <Button
        onClick={() => {
          history.push("/preference");
          window.scrollTo(0, 0);
        }}
      >
        I understand
      </Button>
    </Wrapper>
  );
};

export default Welcome;
