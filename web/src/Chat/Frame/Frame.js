import React from "react";
import styled from "styled-components";

const isSamePosition = (a, b) =>
  a.horizontal === b.horizontal && a.vertical === b.vertical;

const getHiddenEdge = ({ boundingClientRect: bcr, intersectionRect: ir }) => {
  if (bcr.top < 0) return "top";
  if (bcr.bottom > ir.bottom) return "bottom";
  if (bcr.left < 0) return "left";
  if (bcr.right > ir.right) return "right";
};

const REPOSITION = {
  bottom: { vertical: "top" },
  left: { horizontal: "right" },
  right: { horizontal: "left" },
  top: { vertical: "bottom" },
};

const defaultPosition = { vertical: "bottom", horizontal: "right" };

const Frame = ({ children }) => {
  const frameRef = React.useRef();
  const [position, setPosition] = React.useState(defaultPosition);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) return;

        const edge = getHiddenEdge(entry);
        const repositioned = { ...position, ...REPOSITION[edge] };

        if (isSamePosition(position, repositioned)) return;

        setPosition(repositioned);
      },
      { threshold: 0.75 }
    );

    observer.observe(frameRef.current);

    return () => observer.disconnect();
  }, [position]);

  const style = {
    ...POSITION_STYLES[position.horizontal],
    ...POSITION_STYLES[position.vertical],
  };

  return (
    <Styled style={style} ref={frameRef}>
      {children}
    </Styled>
  );
};

const POSITION_STYLES = {
  bottom: { "--top": 0 },
  left: { "--right": "calc(100% + 8px)" },
  right: { "--left": "calc(100% + 8px)" },
  top: { "--bottom": 0 },
};

const Styled = styled.div`
  background: hsl(0 0% 25%);
  border-radius: 8px;
  bottom: var(--bottom, unset);
  color: white; // TODO not the right place
  filter: drop-shadow(2px 4px 8px hsl(0deg 0% 0% / 0.6));
  height: 250px;
  left: var(--left, unset);
  pointer-events: initial;
  position: absolute;
  right: var(--right, unset);
  top: var(--top, unset);
  width: 200px;
`;

export default Frame;
