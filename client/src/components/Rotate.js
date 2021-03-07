import React from "react";
import styled, { keyframes } from "styled-components";

const Rotate = ({ children }) => {
  const rotate360Deg = keyframes`
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
    `;

  const RotationAnimation = styled.div`
    animation: ${rotate360Deg} 1s linear infinite;
  `;

  return <RotationAnimation>{children}</RotationAnimation>;
};

export default Rotate;
