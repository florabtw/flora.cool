import React from "react";
import styled from "styled-components";

import { BREAKPOINTS } from "constants.js";

const clampX = (x) => Math.min(Math.max(8, x), document.body.offsetWidth - 8);
const clampY = (y) => Math.min(Math.max(8, y), document.body.offsetHeight - 8);

const reducer = (state, action) => {
  switch (action.type) {
    case "start":
      return { ...state, dragging: true, dragged: false };
    case "dragged":
      return { ...state, dragged: true, position: action.payload };
    case "end":
      return { ...state, dragging: false };
    case "step":
      return { ...state, position: { ...state.position, ...action.payload } };
    default:
      throw new Error("Unknown action type in Draggable");
  }
};

const toPercent = ({ x, y }) => ({
  x: ((x / window.innerWidth) * 100).toFixed(2),
  y: ((y / window.innerHeight) * 100).toFixed(2),
});

const Draggable = ({ children, defaultPosition, position: forcePosition }) => {
  const [state, dispatch] = React.useReducer(reducer, {
    dragging: false,
    dragged: false,
    position: defaultPosition ? toPercent(defaultPosition) : { x: 0, y: 0 },
  });

  const targetRef = React.useRef();

  React.useEffect(() => {
    const handleDrag = (event) => {
      if (!state.dragging) return;
      if (forcePosition) return;

      const targetEvent = event.targetTouches?.[0] || event;

      const x = clampX(targetEvent.pageX);
      const y = clampY(targetEvent.pageY);
      const payload = toPercent({ x, y });

      dispatch({ type: "dragged", payload });
    };

    window.addEventListener("mousemove", handleDrag);
    window.addEventListener("touchmove", handleDrag);

    return () => {
      window.removeEventListener("mousemove", handleDrag);
      window.removeEventListener("touchmove", handleDrag);
    };
  }, [state.dragging, forcePosition]);

  React.useEffect(() => {
    const handleMouseLeave = () => dispatch({ type: "end" });

    document.body.addEventListener("mouseleave", handleMouseLeave);
    return () =>
      document.body.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  const handleDragStart = (event) => {
    const handle =
      targetRef.current.querySelector("[data-draghandle]") || targetRef.current;

    if (!handle) throw new Error("Could not find a drag handle");
    if (!handle.contains(event.target)) return;

    dispatch({ type: "start" });
  };

  const handleDragEnd = () => dispatch({ type: "end" });

  const handleKeyUp = (event) => {
    const payload = {};

    switch (event.key) {
      case "ArrowLeft":
        payload.x = Math.max(state.position.x - 10, 1);
        break;
      case "ArrowRight":
        payload.x = Math.min(state.position.x + 10, 99);
        break;
      case "ArrowDown":
        payload.y = Math.min(state.position.y + 10, 99);
        break;
      case "ArrowUp":
        payload.y = Math.max(state.position.y - 10, 1);
        break;
      default:
    }

    dispatch({ type: "step", payload });
  };

  const style = {
    "--transition": state.dragging && "none",
    "--x": forcePosition.x ?? state.position.x + "%",
    "--y": forcePosition.y ?? state.position.y + "%",
  };

  return (
    <DragArea
      onKeyUp={handleKeyUp}
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchEnd={handleDragEnd}
      ref={targetRef}
      style={style}
    >
      {React.Children.map(children, (child) =>
        React.cloneElement(child, state)
      )}
    </DragArea>
  );
};

const DragArea = styled.div`
  left: var(--x, 0px);
  position: fixed;
  top: var(--y, 0px);
  transition: var(--transition, left ease 200ms, top ease 200ms);

  @media (min-width: ${BREAKPOINTS.chat.stretch}px) {
    & {
      transition: none;
    }
  }
`;

export default Draggable;
