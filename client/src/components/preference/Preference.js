import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { themeVars } from "../GlobalStyles";
import { FaPaw } from "react-icons/fa";

import Location from "./Location";
import Distance from "./Distance";
import Type from "./Type";
import Age from "./Age";
import Photo from "./Photo";

import { addPreference } from "../../helpers/db-helpers";

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
  font-size: 18px;
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
  const [location, setLocation] = useState({});
  const [distance, setDistance] = useState("300");
  const { register, handleSubmit } = useForm();
  const userId = useSelector((state) => state.currentUser.currentUserId);

  useEffect(() => {
    fetch("/current_location")
      .then((res) => res.json())
      .then((json) => {
        setLocation({
          ...location,
          city: `${json.data.city}, ${json.data.region_iso_code}`,
          latLong: `${json.data.latitude}, ${json.data.longitude}`,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const onSubmit = (data) => {
    const dataWithLocation = {
      ...data,
      location: location.latLong,
    };
    addPreference(userId, dataWithLocation);
  };

  return (
    <FormContainer>
      <Heading>Discovery Settings</Heading>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Location location={location} />
        <Distance
          distance={distance}
          setDistance={setDistance}
          register={register}
        />
        <Type register={register} />
        <Age register={register} />
        <Photo register={register} />
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
