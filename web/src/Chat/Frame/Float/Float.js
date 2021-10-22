import React from "react";
import styled from "styled-components";

import Base from "../Base";

const isSamePosition = (a, b) =>
  a.horizontal === b.horizontal && a.vertical === b.vertical;

const reposition = ({ boundingClientRect: bcr, intersectionRect: ir }) => {
  const position = {};
  if (bcr.top < 0) position.vertical = "bottom";
  if (bcr.bottom > ir.bottom) position.vertical = "top";
  if (bcr.left < 0) position.horizontal = "right";
  if (bcr.right > ir.right) position.horizontal = "left";
  return position;
};

const defaultPosition = { vertical: "bottom", horizontal: "right" };

const Float = ({ children, open }) => {
  const frameRef = React.useRef();
  const [position, setPosition] = React.useState(defaultPosition);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) return;

        const repositioned = { ...position, ...reposition(entry) };

        if (isSamePosition(position, repositioned)) return;

        setPosition(repositioned);
      },
      { threshold: 0.9 }
    );

    observer.observe(frameRef.current);

    return () => observer.disconnect();
  }, [position, open]);

  const style = {
    "--display": open ? "block" : "none",
    ...POSITION_STYLES[position.horizontal],
    ...POSITION_STYLES[position.vertical],
  };

  return (
    <Styled style={style} ref={frameRef}>
      {children}
    </Styled>
  );
};

/* 30px adjustments are due to the transform on the <Bubble /> */
const POSITION_STYLES = {
  bottom: { "--vertical": "-30px" },
  left: { "--horizontal": "calc(-100% - 30px - 12px)" },
  right: { "--horizontal": "calc(30px + 12px)" },
  top: { "--vertical": "calc(-100% + 30px)" },
};

const Styled = styled(Base)`
  display: var(--display);
  height: 400px;
  left: 0;
  position: absolute;
  top: 0;
  transform: translate(var(--horizontal), var(--vertical));
  transition: transform ease 300ms;
  width: 300px;
`;

export default Float;
