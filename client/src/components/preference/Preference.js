import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { themeVars } from "../GlobalStyles";
import { FaPaw } from "react-icons/fa";

import Location from "./Location";
import Distance from "./Distance";
import Type from "./Type";
import Age from "./Age";
import Photo from "./Photo";

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

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SubmitBtn = styled.button`
  width: 150px;
  background: ${themeVars.coralOrange};
  color: ${themeVars.white};
  font-size: 15px;
  font-weight: bold;
  border: 2px solid ${themeVars.yellow};
  border-radius: 8px;
  padding: 10px 0;
  margin: 15px 0 30px 0;
`;

const Preference = () => {
  const [location, setLocation] = useState();
  const [distance, setDistance] = useState("300");

  useEffect(() => {
    fetch("/current_location")
      .then((res) => res.json())
      .then((json) => {
        setLocation(`${json.data.city}, ${json.data.region_iso_code}`);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <Wrapper>
      <FormContainer>
        <Para>
          Welcome Name! <FaPaw style={{ transform: "rotate(-30deg)" }} />
        </Para>
        <Heading>Discovery Settings</Heading>
        <Form>
          <Location location={location} />
          <Distance distance={distance} />
          <Type />
          <Age />
          <Photo />
          <BtnContainer>
            <SubmitBtn>Find my pet</SubmitBtn>
          </BtnContainer>
        </Form>
      </FormContainer>
    </Wrapper>
  );
};

export default Preference;
