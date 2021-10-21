import React from "react";
import styled from "styled-components";

import Avatar from "components/Avatar";
import { COLORS } from "../../constants";

const Bubble = ({ dragged, onClick }) => {
  const handleClick = () => !dragged && onClick();

  return (
    <FloatingButton data-draghandle onClick={handleClick}>
      <Avatar />
    </FloatingButton>
  );
};

const FloatingButton = styled.button`
  background: none;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  filter: drop-shadow(2px 4px 8px hsl(0deg 0% 0% / 0.6));
  margin: 0;
  padding: 0;
  pointer-events: initial;

  &:focus-visible {
    outline: 2px solid ${COLORS.primary};
  }
`;

export default Bubble;
