import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { isExpired } from "../../reducers/auth-reducer";
import { fetchToken, fetchAnimals } from "../../helpers/api-helpers";
import { getPreference } from "../../helpers/db-helpers";

import Buttons from "./Buttons";
import PetCards from "./PetCards";

const Wrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 100px);
`;

const Main = () => {
  const [preference, setPreference] = useState({});
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.auth.token);
  const userId = useSelector((state) => state.currentUser.currentUserId);

  const isTokenExpired = useSelector((state) =>
    isExpired(state.auth.expiresAt)
  );

  useEffect(() => {
    if (!accessToken || isTokenExpired) {
      fetchToken(dispatch);
    } else {
      getPreference(userId, preference, setPreference);
      fetchAnimals(dispatch, accessToken, preference);
    }
  }, [accessToken]);

  return (
    <Wrapper>
      <PetCards />
      <Buttons />
    </Wrapper>
  );
};

export default Main;
