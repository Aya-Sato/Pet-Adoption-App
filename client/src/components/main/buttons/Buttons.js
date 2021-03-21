import React from "react";
import styled from "styled-components";

import Repeat from "./Repeat";
import Dislike from "./Dislike";
import SuperLike from "./SuperLike";
import Like from "./Like";
import Info from "./Info";

const Wrapper = styled.div`
  width: 100vw;
  height: 100px;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Buttons = ({ swipe }) => {
  return (
    <Wrapper>
      <Repeat />
      <Dislike swipe={swipe} />
      <SuperLike swipe={swipe} />
      <Like swipe={swipe} />
      <Info />
    </Wrapper>
  );
};

export default Buttons;
