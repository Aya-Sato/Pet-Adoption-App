import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { fetchToken, fetchAnimals } from "../helpers/api-helpers";
import { isExpired } from "../reducers/auth-reducer";

import Buttons from "./Buttons";
import PetCards from "./PetCards";

const Wrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 100px);
`;

const Main = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.auth.token);
  const preference = {
    location: "Montreal, Quebec",
    distance: 500,
    type: "cat",
    age: "young",
  };

  const isTokenExpired = useSelector((state) =>
    isExpired(state.auth.expiresAt)
  );

  useEffect(() => {
    if (!accessToken || isTokenExpired) {
      fetchToken(dispatch);
    } else {
      fetchAnimals(dispatch, accessToken, preference);
    }
  }, [accessToken, preference]);

  return (
    <Wrapper>
      <PetCards />
      <Buttons />
    </Wrapper>
  );
};

export default Main;
