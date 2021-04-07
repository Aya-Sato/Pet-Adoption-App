import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { themeVars } from "../../GlobalStyles";
import { TiArrowBack } from "react-icons/ti";
import { PetContext } from "../PetContext";
import { HeaderContext } from "../../header/HeaderContext";

const StyledBtn = styled.button`
  border-radius: 50%;
  border: none;
  outline: none;
  background-color: ${themeVars.white};
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.15);

  &.big {
    height: 55px;
    width: 55px;
  }

  &:active {
    transform: scale(1.1);
  }

  &:focus-visible {
    outline: 2px solid ${themeVars.yellow};
  }
`;

const Back = () => {
  const history = useHistory();
  const { setActionBtnsEnabled, selectedPet } = useContext(PetContext);
  const { setActive } = useContext(HeaderContext);
  const organizationId = useSelector(
    (state) => state.organization.organizationId
  );

  return (
    <StyledBtn
      className="big"
      onClick={() => {
        if (document.location.pathname === `/pet/${selectedPet.id}`) {
          setActionBtnsEnabled(true);
          setActive("main");
          history.push("/main");
        } else if (
          document.location.pathname === `/organization/${organizationId}`
        ) {
          history.push(`/pet/${selectedPet.id}`);
        }
      }}
    >
      <TiArrowBack
        style={{
          height: "35px",
          width: "35px",
          position: "relative",
          top: "2px",
          fill: `${themeVars.purple}`,
        }}
      />
    </StyledBtn>
  );
};

export default Back;
