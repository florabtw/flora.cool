import React from "react";
import styled from "styled-components";

const clampX = (x) => Math.min(Math.max(8, x), document.body.offsetWidth - 8);
const clampY = (y) => Math.min(Math.max(8, y), document.body.offsetHeight - 8);

const Draggable = ({ children }) => {
  const targetRef = React.useRef();
  const [state, dispatch] = React.useReducer(
    (state, action) => {
      switch (action.type) {
        case "start":
          return { dragging: true, dragged: false };
        case "dragged":
          return { ...state, dragged: true };
        case "end":
          return { ...state, dragging: false };
        default:
          throw new Error("Unknown action type in Draggable");
      }
    },
    { dragging: false, dragged: false }
  );

  React.useEffect(() => {
    const handleDrag = (event) => {
      if (!state.dragging) return;

      dispatch({ type: "dragged" });

      const targetEvent = event.targetTouches?.[0] || event;

      const x = clampX(targetEvent.pageX);
      const y = clampY(targetEvent.pageY);

      targetRef.current.style.left = x + "px";
      targetRef.current.style.top = y + "px";
    };

    window.addEventListener("mousemove", handleDrag);
    window.addEventListener("touchmove", handleDrag);

    return () => {
      window.removeEventListener("mousemove", handleDrag);
      window.removeEventListener("touchmove", handleDrag);
    };
  }, [state.dragging]);

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

  return (
    <DragArea
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchEnd={handleDragEnd}
      ref={targetRef}
    >
      {React.Children.map(children, (child) =>
        React.cloneElement(child, state)
      )}
    </DragArea>
  );
};

const DragArea = styled.div`
  left: 8px;
  top: 60px;
  transform: translate(-50%, -50%);
  position: absolute;
`;

export default Draggable;
