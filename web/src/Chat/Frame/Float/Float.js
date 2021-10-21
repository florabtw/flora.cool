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
  const timer = React.useRef();
  const frameRef = React.useRef();
  const [position, setPosition] = React.useState(defaultPosition);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) return;

        const repositioned = { ...position, ...reposition(entry) };

        if (isSamePosition(position, repositioned)) return;

        if (timer.current) clearTimeout(timer.current);

        timer.current = setTimeout(() => {
          setPosition(repositioned);
        }, 300);
      },
      { threshold: 0.85 }
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
  bottom: { "--top": "-30px" },
  left: { "--right": "calc(100% + 30px + 12px)" },
  right: { "--left": "calc(100% - 30px + 12px)" },
  top: { "--bottom": "30px" },
};

const Styled = styled(Base)`
  bottom: var(--bottom, unset);
  display: var(--display);
  height: 350px;
  left: var(--left, unset);
  position: absolute;
  right: var(--right, unset);
  top: var(--top, unset);
  width: 300px;
`;

export default Float;
