import React from "react";
import styled from "styled-components";

import Avatar from "components/Avatar";
import Draggable from "components/Draggable";
import { COLORS } from "../../constants";

const Bubble = ({ onClick }) => {
  return (
    <Draggable onClick={onClick}>
      <FloatingButton>
        <Avatar />
      </FloatingButton>
    </Draggable>
  );
};

const FloatingButton = styled.button`
  background: none;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  filter: drop-shadow(2px 4px 8px hsl(0deg 0% 0% / 0.6));
  left: calc(100% - 8px);
  margin: 0;
  padding: 0;
  pointer-events: initial;
  position: absolute;
  top: 60px;
  transform: translate(-50%, -50%);

  &:focus-visible {
    outline: 2px solid ${COLORS.primary};
  }
`;

export default Bubble;
