import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { themeVars } from "../GlobalStyles";
import { FaPaw } from "react-icons/fa";

import Location from "./Location";
import Distance from "./Distance";
import Type from "./Type";
import Age from "./Age";
import Photo from "./Photo";

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Para = styled.p`
  font-size: 22px;
  font-weight: bold;
  color: ${themeVars.coralOrange};
  text-align: center;
  margin-top: 40px;
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
  border: none;
  border-radius: 8px;
  outline: none;
  padding: 10px 0;
  margin: 15px 0 50px 0;

  &:active {
    transform: scale(1.1);
  }

  &:focus-visible {
    outline: 2px solid ${themeVars.yellow};
  }
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
    <FormContainer>
      <Para>
        Welcome Name! <FaPaw style={{ transform: "rotate(-30deg)" }} />
      </Para>
      <Heading>Discovery Settings</Heading>
      <Form>
        <Location location={location} />
        <Distance distance={distance} setDistance={setDistance} />
        <Type />
        <Age />
        <Photo />
        <BtnContainer>
          <SubmitBtn>Find my pet</SubmitBtn>
        </BtnContainer>
      </Form>
    </FormContainer>
  );
};

export default Preference;
