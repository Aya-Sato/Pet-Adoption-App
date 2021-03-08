import React, { useState } from "react";
import styled, { css } from "styled-components";
import { themeVars } from "./GlobalStyles";
import { FaPaw } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const commonCSS = css`
  width: 100%;
  display: flex;
  border-top: 1px solid ${themeVars.gray};
  background: ${themeVars.white};
`;

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
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.div`
  width: 92%;
  height: 95%;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

const Para = styled.p`
  font-size: 22px;
  font-weight: bold;
  color: ${themeVars.coralOrange};
  text-align: center;
  font-family: "Delius Swash Caps", cursive;
`;

const Heading = styled.h2`
  font-size: 18px;
  color: ${themeVars.darkGray};
  margin: 10px 15px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const LocationContainer = styled.div`
  ${commonCSS};
  justify-content: space-between;
  padding: 10px 0;
`;

const DistanceContainer = styled.div`
  ${commonCSS};
  flex-direction: column;
  padding: 10px 0;
`;

const TypeContainer = styled.div`
  ${commonCSS};
  flex-direction: column;
  padding: 10px 0;
`;

const AgeContainer = styled.div`
  ${commonCSS};
  flex-direction: column;
  border-bottom: 1px solid ${themeVars.gray};
  padding: 10px 0;
`;

const PhotoContainer = styled.div`
  ${commonCSS};
  height: 80px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${themeVars.gray};
  margin-top: 8px;
`;

const Label = styled.label`
  font-size: 16px;
  color: ${themeVars.darkGray};
`;

const LabelForDistance = styled.label`
  font-size: 16px;
  margin-left: 15px;
  color: black;
`;

const LabelForSwitch = styled.label``;

const SubHeading = styled.h3`
  font-size: 16px;
  position: relative;
  top: -15px;
  left: 15px;
  font-weight: normal;
  margin-bottom: 10px;
`;

const Distance = styled.div`
  font-size: 16px;
  margin-right: 15px;
  color: ${themeVars.darkGray};
  background: ${themeVars.white};
`;

const Location = styled.div`
  font-size: 16px;
  color: ${themeVars.darkGray};
  background: ${themeVars.white};
`;

const City = styled.div`
  font-size: 16px;
  color: ${themeVars.darkGray};
  background: ${themeVars.white};
`;

const RangeInput = styled.input`
  margin-top: 20px;
  width: 70%;
`;

const SliderInput = styled.input``;
const Slider = styled.span``;

const SubmitBtn = styled.button`
  width: 150px;
  background: ${themeVars.coralOrange};
  color: ${themeVars.white};
  font-size: 15px;
  font-weight: bold;
  border: 2px solid ${themeVars.yellow};
  border-radius: 8px;
  padding: 10px 0;
  margin-top: 15px;
`;

const Preference = () => {
  const [distance, setDistance] = useState(300);

  return (
    <Wrapper>
      <FormContainer>
        <Para>
          Welcome Name! <FaPaw style={{ transform: "rotate(-30deg)" }} />
        </Para>
        <Heading>Discovery Settings</Heading>
        <Form>
          <LocationContainer>
            <SubHeading>Location</SubHeading>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: `${themeVars.white}`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  position: "relative",
                  right: "20px",
                  background: `${themeVars.white}`,
                }}
              >
                <Location>My Current Location</Location>
                <City>City, States</City>
              </div>
              <IoIosArrowForward
                style={{
                  color: `${themeVars.darkGray}`,
                  background: `${themeVars.white}`,
                  position: "relative",
                  right: "15px",
                }}
              />
            </div>
          </LocationContainer>
          <DistanceContainer>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                background: `${themeVars.white}`,
              }}
            >
              <LabelForDistance htmlFor="distance">
                Maximum Distance
              </LabelForDistance>
              <Distance>{`${distance} mi.`}</Distance>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                background: `${themeVars.white}`,
              }}
            >
              <RangeInput
                type="range"
                min="100"
                max="500"
                value={distance}
                id="distance"
              ></RangeInput>
            </div>
          </DistanceContainer>
          <TypeContainer>
            <SubHeading>Animal Type</SubHeading>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                background: `${themeVars.white}`,
              }}
            >
              <div
                style={{
                  marginRight: "10px",
                  background: `${themeVars.white}`,
                }}
              >
                <Label htmlFor="dog">Dogs</Label>
                <input type="checkbox" id="dog" name="type" value="dog" />
              </div>
              <div
                style={{
                  marginLeft: "10px",
                  background: `${themeVars.white}`,
                }}
              >
                <Label htmlFor="cat">Cats</Label>
                <input type="checkbox" id="cat" name="type" value="cat" />
              </div>
            </div>
          </TypeContainer>
          <AgeContainer>
            <SubHeading>Age</SubHeading>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                background: `${themeVars.white}`,
              }}
            >
              <div style={{ background: `${themeVars.white}` }}>
                <Label htmlFor="baby">Baby</Label>
                <input type="checkbox" id="baby" name="age" value="baby" />
              </div>
              <div style={{ background: `${themeVars.white}` }}>
                <Label htmlFor="young">Young</Label>
                <input type="checkbox" id="young" name="age" value="young" />
              </div>
              <div style={{ background: `${themeVars.white}` }}>
                <Label htmlFor="adult">Adult</Label>
                <input type="checkbox" id="adult" name="age" value="adult" />
              </div>
              <div style={{ background: `${themeVars.white}` }}>
                <Label htmlFor="senior">Senior</Label>
                <input type="checkbox" id="senior" name="age" value="senior" />
              </div>
            </div>
          </AgeContainer>
          <PhotoContainer>
            <div
              style={{
                marginLeft: "15px",
                padding: "10px 0",
                background: `${themeVars.white}`,
              }}
            >
              Show pets without photos
            </div>
            <LabelForSwitch>
              <SliderInput type="checkbox" />
              <Slider></Slider>
            </LabelForSwitch>
          </PhotoContainer>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <SubmitBtn>Find my pet</SubmitBtn>
          </div>
        </Form>
      </FormContainer>
    </Wrapper>
  );
};

export default Preference;
