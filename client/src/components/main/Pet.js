import React, { useContext } from "react";
import styled from "styled-components";

import PetInfo from "./PetInfo";
import Dislike from "./buttons/Dislike";
import Back from "./buttons/Back";
import Like from "./buttons/Like";

import { PetContext } from "./PetContext";

const BtnContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;

  &.action {
    height: 100px;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    backdrop-filter: blur(10px);
    background-color: rgba(244, 249, 249, 0.3);
  }
`;

const Pet = () => {
  const { actionBtnsEnabled } = useContext(PetContext);
  return (
    <>
      <PetInfo />
      <BtnContainer className="action">
        {actionBtnsEnabled && <Dislike />}
        <Back />
        {actionBtnsEnabled && <Like />}
      </BtnContainer>
    </>
  );
};

export default Pet;
