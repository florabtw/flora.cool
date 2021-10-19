import React from "react";
import styled from "styled-components";

import Avatar from "components/Avatar";
import { COLORS } from "../../constants";

const clampX = (x) => Math.min(Math.max(8, x), document.body.offsetWidth - 8);
const clampY = (y) => Math.min(Math.max(8, y), document.body.offsetHeight - 8);

const Bubble = () => {
  const buttonRef = React.useRef();

  const handleDrag = (event) => {
    if (!buttonRef) throw new Error("Could not find Chat Bubble element!");

    const x = clampX(event.pageX);
    const y = clampY(event.pageY);

    buttonRef.current.style.left = x + "px";
    buttonRef.current.style.top = y + "px";
  };

  const handleDragStart = () => {
    window.addEventListener("mousemove", handleDrag);
    document.body.addEventListener("mouseleave", handleDragEnd);
  };

  const handleDragEnd = () => {
    window.removeEventListener("mousemove", handleDrag);
    document.body.removeEventListener("mouseleave", handleDragEnd);
  };

  return (
    <FloatingButton
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
      ref={buttonRef}
    >
      <Avatar />
    </FloatingButton>
  );
};

const FloatingButton = styled.button`
  background: none;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  filter: drop-shadow(2px 4px 8px hsl(0deg 0% 0% / 0.6));
  margin: 0;
  padding: 0;
  pointer-events: initial;
  position: absolute;
  transform: translate(-50%, -50%);
  left: calc(100% - 8px);
  top: 60px;

  &:focus-visible {
    outline: 2px solid ${COLORS.primary};
  }
`;

export default Bubble;
