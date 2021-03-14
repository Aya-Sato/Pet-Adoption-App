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
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 52px;
  background: linear-gradient(
    to top left,
    ${themeVars.coralOrange} 0%,
    ${themeVars.yellow} 60%,
    ${themeVars.teaGreen} 100%
  );
`;

const Heading = styled.h2`
  font-size: 20px;
  font-weight: normal;
  color: black;
  margin: 10px 15px;
  padding-bottom: 5px;
  text-align: center;

  span {
    font-size: 25px;
    background: transparent;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  background: transparent;
`;

const SubmitBtn = styled.button`
  width: 150px;
  background: ${themeVars.white};
  color: ${themeVars.coralOrange};
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  outline: none;
  padding: 10px 0;
  margin: 30px 0 50px 0;
  line-height: 18px;

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
      <Heading>Discovery Settings</Heading>
      <Form>
        <Location location={location} />
        <Distance distance={distance} setDistance={setDistance} />
        <Type />
        <Age />
        <Photo />
        <BtnContainer>
          <SubmitBtn>
            Find my pet{" "}
            <FaPaw
              style={{
                fontSize: "18px",
                transform: "rotate(-30deg)",
                position: "relative",
                top: "3px",
              }}
            />
          </SubmitBtn>
        </BtnContainer>
      </Form>
    </FormContainer>
  );
};

export default Preference;
