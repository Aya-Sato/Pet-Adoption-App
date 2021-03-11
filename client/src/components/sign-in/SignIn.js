import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { themeVars } from "../GlobalStyles";

import { FaPaw } from "react-icons/fa";
import { BsFillChatFill } from "react-icons/bs";

import firebase from "./Authentication";
import { auth, googleAuthProvider } from "./Authentication";

import GoogleLogo from "../../assets/google-icon.svg";
import FacebookLogo from "../../assets/facebook-logo.svg";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    to top,
    ${themeVars.coralOrange} 0%,
    ${themeVars.yellow} 60%,
    ${themeVars.teaGreen} 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  position: absolute;
  top: 35%;
  background: none;
  align-items: center;
`;

const AppName = styled.div`
  color: ${themeVars.white};
  font-size: 35px;
  background: none;
  margin-left: 12px;
  font-weight: bold;
  font-family: "Delius Swash Caps", cursive;
  position: relative;
  top: 5px;
`;

const Policy = styled.p`
  width: 85%;
  color: ${themeVars.white};
  font-size: 15px;
  text-align: center;

  span {
    text-decoration: underline;
    background: none;
  }
`;

const BtnContainer = styled.div`
  width: 100%;
  background: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 20px;
`;

const LoginBtn = styled.button`
  width: 85%;
  color: ${themeVars.darkGray};
  font-size: 14px;
  font-weight: bold;
  background: ${themeVars.white};
  padding: 10px 0;
  margin: 6px 0;
  border: none;
  border-radius: 20px;
  outline: none;

  &:active {
    transform: scale(1.1);
  }

  &:focus-visible {
    outline: 2px solid ${themeVars.yellow};
  }

  .google {
    position: relative;
    left: -48px;
    top: 2px;
  }

  .facebook {
    position: relative;
    left: -42px;
    top: 2px;
  }
`;

const logoStyle = {
  fontSize: "50px",
  color: `${themeVars.white}`,
  transform: "rotate(-30deg)",
};

const SignIn = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log("User logged in", user);
        setCurrentUser(user.displayName);
      } else {
        console.log("User logged out");
      }
    });
  }, []);

  return (
    <>
      {currentUser === null && (
        <Wrapper>
          <LogoContainer>
            <FaPaw style={logoStyle} />
            <AppName>Adopet</AppName>
          </LogoContainer>
          <BtnContainer>
            <Policy>
              By clicking "Log in", you agree with our <span>Terms</span>. Learn
              how we process your data in our <span>Privacy Policy</span> and{" "}
              <span>Cookies Policy</span>.
            </Policy>
            <LoginBtn
              onClick={() => auth.signInWithRedirect(googleAuthProvider)}
            >
              <img className="google" src={GoogleLogo} alt="Google logo" />
              LOG IN WITH GOOGLE
            </LoginBtn>
            <LoginBtn onClick={() => console.log("")}>
              <BsFillChatFill
                style={{
                  fontSize: "16px",
                  fill: `${themeVars.darkGray}`,
                  position: "relative",
                  left: "-23px",
                  top: "2px",
                }}
              />
              LOG IN WITH PHONE NUMBER
            </LoginBtn>
            <LoginBtn onClick={() => console.log("")}>
              <img
                className="facebook"
                src={FacebookLogo}
                alt="Facebook logo"
              />
              LOG IN WITH FACEBOOK
            </LoginBtn>
          </BtnContainer>
        </Wrapper>
      )}
      {currentUser !== null && (
        <>
          <div>{`Welcome, ${currentUser}`}</div>
          <button
            onClick={() => {
              auth.signOut();
              setCurrentUser(null);
            }}
          >
            SIGN OUT
          </button>
        </>
      )}
    </>
  );
};

export default SignIn;
