import React, { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PetContext } from "./PetContext";

import { isExpired } from "../../reducers/auth-reducer";
import { fetchToken, fetchAnimals } from "../../helpers/api-helpers";
import { getPreference } from "../../helpers/db-helpers";

import PetCards from "./PetCards";

const Main = () => {
  const [preference, setPreference] = useState({});
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.auth.token);
  const petsArr = useSelector((state) => state.pets.pets);
  const { setSelectedPetId, setSelectedPetIndex } = useContext(PetContext);

  const currentUserId = useSelector((state) => state.currentUser.currentUserId);

  const isTokenExpired = useSelector((state) =>
    isExpired(state.auth.expiresAt)
  );

  useEffect(() => {
    getPreference(currentUserId, preference, setPreference);
  }, []);

  useEffect(() => {
    if (petsArr) {
      setSelectedPetId(petsArr[petsArr.length - 1].id);
      setSelectedPetIndex(petsArr[petsArr.length - 1]);
    }
  }, [petsArr]);

  useEffect(() => {
    if (!accessToken || isTokenExpired) {
      fetchToken(dispatch);
    } else {
      if (preference) {
        fetchAnimals(dispatch, accessToken, preference);
      }
    }
  }, [accessToken]);

  return (
    <>
      <PetCards petsArr={petsArr} />
    </>
  );
};

export default Main;
