import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { themeVars } from "../GlobalStyles";
import { FaPaw } from "react-icons/fa";

import Location from "./Location";
import Distance from "./Distance";
import Type from "./Type";
import Age from "./Age";
import Photo from "./Photo";
import { ip } from "../../constants";

import { createPreference } from "../../helpers/db-helpers";

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
  padding: 25px 15px;
  margin-bottom: 0;
  text-align: center;
  background: ${themeVars.white};
  border-bottom: 1px solid ${themeVars.gray};

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
  const [url, setUrl] = useState();
  const [distance, setDistance] = useState("300");
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  const userId = useSelector((state) => state.currentUser.currentUserId);

  const ipLookUp = () => {
    fetch(`${ip}/current_location`)
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
  };

  const getCoordinates = () => {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  const getAddress = async () => {
    const position = await getCoordinates();
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    setUrl(`${ip}/current_city/${latitude}/${longitude}`);
    setLocation({
      ...location,
      latLong: `${latitude}, ${longitude}`,
    });
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      getAddress();
    }
  }, []);

  useEffect(() => {
    if (url) {
      fetch(url)
        .then((data) => data.json())
        .then((json) => {
          setLocation({
            ...location,
            city: json.data,
          });
        });
    } else {
      ipLookUp();
    }
  }, [url]);

  const onSubmit = (data) => {
    const dataWithLocation = {
      ...data,
      location: location.latLong,
    };
    createPreference(userId, dataWithLocation);
    history.push("/main");
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
        <Type register={register} errors={errors} />
        <Age register={register} errors={errors} />
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
